import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { initializeDatabase } from "./db";
import { log } from "./vite";
import { insertContactSubmissionSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from 'zod';

export async function registerRoutes(app: Express): Promise<Server> {
  try {
    // Initialize database connection
    await initializeDatabase();
    log("Database initialized successfully", "routes");
  } catch (error) {
    log(`Failed to initialize database: ${(error as Error).message}`, "routes");
  }

  // Middleware to handle validation errors
  const validateRequest = (schema: z.ZodType<any, any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse(req.body);
        next();
      } catch (error) {
        if (error instanceof z.ZodError) {
          res.status(400).json({
            success: false,
            errors: error.errors
          });
        } else {
          next(error);
        }
      }
    };
  };

  // Courses API endpoints
  app.get('/api/courses', async (_req: Request, res: Response) => {
    try {
      const courses = await storage.getAllCourses();
      res.json({ courses });
    } catch (error) {
      log(`Error fetching courses: ${(error as Error).message}`, "routes");
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch courses' 
      });
    }
  });

  app.get('/api/courses/:id', async (req: Request, res: Response) => {
    try {
      const courseId = parseInt(req.params.id);
      if (isNaN(courseId)) {
        return res.status(400).json({ success: false, message: 'Invalid course ID' });
      }
      
      const course = await storage.getCourse(courseId);
      if (!course) {
        return res.status(404).json({ success: false, message: 'Course not found' });
      }
      
      res.json({ course });
    } catch (error) {
      log(`Error fetching course: ${(error as Error).message}`, "routes");
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch course' 
      });
    }
  });

  // Faculty API endpoints
  app.get('/api/faculty', async (_req: Request, res: Response) => {
    try {
      const faculty = await storage.getAllFaculty();
      res.json({ faculty });
    } catch (error) {
      log(`Error fetching faculty: ${(error as Error).message}`, "routes");
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch faculty' 
      });
    }
  });

  app.get('/api/faculty/:id', async (req: Request, res: Response) => {
    try {
      const facultyId = parseInt(req.params.id);
      if (isNaN(facultyId)) {
        return res.status(400).json({ success: false, message: 'Invalid faculty ID' });
      }
      
      const facultyMember = await storage.getFaculty(facultyId);
      if (!facultyMember) {
        return res.status(404).json({ success: false, message: 'Faculty member not found' });
      }
      
      res.json({ faculty: facultyMember });
    } catch (error) {
      log(`Error fetching faculty member: ${(error as Error).message}`, "routes");
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch faculty member' 
      });
    }
  });

  // Events API endpoints
  app.get('/api/events', async (_req: Request, res: Response) => {
    try {
      const events = await storage.getActiveEvents();
      res.json({ events });
    } catch (error) {
      log(`Error fetching events: ${(error as Error).message}`, "routes");
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch events' 
      });
    }
  });

  // FAQ API endpoints
  app.get('/api/faqs', async (_req: Request, res: Response) => {
    try {
      const faqs = await storage.getFaqs();
      res.json({ faqs });
    } catch (error) {
      log(`Error fetching FAQs: ${(error as Error).message}`, "routes");
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch FAQs' 
      });
    }
  });

  // Chatbot API endpoint - now with database integration
  app.post('/api/chatbot', validateRequest(insertChatMessageSchema.omit({ userId: true, responseMessage: true })), async (req: Request, res: Response) => {
    const { message } = req.body;
    
    // Simple response mapping for common questions
    const responses: Record<string, string> = {
      'admission': 'Admissions for the academic year are currently open. You can apply online or visit our office for assistance.',
      'course': 'We offer various diploma programs in Computer Science, Mechanical Engineering, and Electronics & Communication Engineering. All our courses are designed with accessibility at their core.',
      'facility': 'Our campus features barrier-free design, assistive technologies, and comprehensive support services for all students.',
      'contact': 'You can reach us at admissions@jsspolytechnic.edu.in or call +91 821 2548235.',
      'accommodation': 'We provide on-campus accessible hostel facilities for students.',
      'scholarship': 'We offer various scholarships and financial aid options for eligible students.',
      'faculty': 'Our faculty members are experts in their fields and specially trained to support students with diverse learning needs.',
      'placement': 'Our placement cell actively assists students in finding suitable job opportunities.'
    };
    
    // Default response if no keywords match
    let responseMessage = 'Thank you for your question. Our team is here to help. You can find more information on our website or contact our administration office for specific queries.';
    
    // Check if the message contains any keywords
    for (const [keyword, reply] of Object.entries(responses)) {
      if (message.toLowerCase().includes(keyword)) {
        responseMessage = reply;
        break;
      }
    }

    try {
      // Store the chat message in the database (without userId for anonymous users)
      await storage.saveChatMessage({
        message,
        responseMessage,
        userId: null // For anonymous users
      });
      
      // Add delay to simulate processing
      setTimeout(() => {
        res.json({ message: responseMessage });
      }, 1000);
    } catch (error) {
      log(`Error saving chat message: ${(error as Error).message}`, "routes");
      // Still return a response even if database save fails
      res.json({ message: responseMessage });
    }
  });

  // Contact form submission endpoint - now with database integration
  app.post('/api/contact', validateRequest(insertContactSubmissionSchema.omit({ userId: true })), async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;
    
    try {
      // Save contact submission to database
      await storage.createContactSubmission({
        name,
        email,
        subject,
        message,
        userId: null // For anonymous submissions
      });
      
      res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon.' 
      });
    } catch (error) {
      log(`Error saving contact submission: ${(error as Error).message}`, "routes");
      res.status(500).json({ 
        success: false, 
        message: 'Failed to submit your message. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
