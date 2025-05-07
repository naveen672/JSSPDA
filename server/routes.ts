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

  // Chatbot API endpoint - now with enhanced intelligence
  app.post('/api/chatbot', validateRequest(insertChatMessageSchema.omit({ userId: true, responseMessage: true })), async (req: Request, res: Response) => {
    const { message } = req.body;
    
    // More comprehensive response mapping with multiple keywords for better matching
    interface ResponsePattern {
      keywords: string[];
      response: string;
    }
    
    const responsePatterns: ResponsePattern[] = [
      {
        keywords: ['admission', 'apply', 'enroll', 'join', 'registration', 'when can i join'],
        response: 'Admissions for the academic year are currently open. You can apply online through our website or visit our admission office. The application process is fully accessible and we offer assistance throughout. Documents required include academic transcripts, ID proof, and disability certificate if applicable.'
      },
      {
        keywords: ['course', 'program', 'curriculum', 'diploma', 'degree', 'what courses', 'subjects'],
        response: 'We offer various diploma programs designed with accessibility at their core, including: 1) Computer Science & Engineering, 2) Electronics & Communication Engineering, 3) Mechanical Engineering, 4) Architecture & Interior Design. All programs include special assistive technology training.'
      },
      {
        keywords: ['facility', 'campus', 'infrastructure', 'amenities', 'equipment', 'technology'],
        response: 'Our campus is fully accessible with barrier-free design, including ramps, elevators, and signage in multiple formats. We provide assistive technologies like screen readers, specialized computer labs, Braille printers, hearing aid compatible systems, and accessible transportation services.'
      },
      {
        keywords: ['contact', 'reach', 'email', 'phone', 'call', 'address', 'location', 'how to reach'],
        response: 'You can reach us at admissions@jsspolytechnic.edu.in or call +91 821 2548235. Our campus is located at JSS Polytechnic for the Differently Abled, JSS Technical Education Campus, Mysuru - 570006, Karnataka, India. Our administrative office is open Monday to Friday, 9:00 AM to 5:00 PM.'
      },
      {
        keywords: ['hostel', 'accommodation', 'stay', 'housing', 'dormitory', 'living'],
        response: 'We provide fully accessible on-campus hostel facilities designed for students with different needs. Features include accessible rooms, emergency response systems, trained support staff, and specialized dining options. Applications for accommodation can be submitted along with your course application.'
      },
      {
        keywords: ['scholarship', 'financial', 'aid', 'fee', 'concession', 'discount', 'funding', 'how much'],
        response: 'We offer various scholarships and financial aid options for eligible students. These include government scholarships for differently-abled students, merit-based scholarships, need-based financial aid, and special grants for assistive technology. Our financial aid office can help identify the best options for your situation.'
      },
      {
        keywords: ['faculty', 'teacher', 'professor', 'staff', 'instructor', 'who teaches'],
        response: 'Our faculty members are experts in their fields with specialized training in inclusive education. Many have advanced degrees and research experience in accessible technology and inclusive design. They participate in regular professional development to stay current with the latest teaching methods for diverse learning needs.'
      },
      {
        keywords: ['job', 'placement', 'career', 'employment', 'industry', 'hiring', 'opportunity', 'after completion'],
        response: 'Our dedicated placement cell actively works with over 50 industry partners committed to inclusive hiring. We provide career counseling, resume building workshops, interview preparation, and job fairs specifically designed for differently-abled students. Our placement rate is consistently over 85%, with graduates working in various sectors including IT, manufacturing, and design.'
      },
      {
        keywords: ['sports', 'activity', 'extra', 'cultural', 'event', 'recreation'],
        response: 'We offer adaptive sports programs, cultural activities, and clubs designed to be inclusive for all abilities. Our annual cultural festival features performances showcasing diverse talents. We also organize special workshops on art, music, and other extracurricular interests.'
      },
      {
        keywords: ['transport', 'bus', 'commute', 'travel'],
        response: 'We provide specialized accessible transportation services including adapted buses with wheelchair access. Regular shuttle services connect the campus to major points in the city. For students with special transportation needs, we offer customized solutions.'
      },
      {
        keywords: ['accessibility', 'disable', 'special need', 'support', 'assist', 'help', 'aid'],
        response: 'Our institution is designed from the ground up for universal accessibility. We provide individualized accommodation plans, assistive technology, sign language interpreters, note-taking assistance, specialized exam formats, and continuous support from our Student Accessibility Services office.'
      }
    ];
    
    // Default response if no keywords match
    let responseMessage = 'Thank you for your question. Our team is here to help. For more specific information, please try asking about our courses, admission process, facilities, faculty, or support services. You can also contact our administration office for personalized assistance.';
    
    // Check if the message contains any keywords using more sophisticated matching
    const userMessageLower = message.toLowerCase();
    
    // Try to find the best matching pattern
    for (const pattern of responsePatterns) {
      for (const keyword of pattern.keywords) {
        if (userMessageLower.includes(keyword)) {
          responseMessage = pattern.response;
          break;
        }
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
  
  // Visitor count API endpoints
  app.get('/api/visitor-count', async (_req: Request, res: Response) => {
    try {
      const count = await storage.getVisitorCount();
      res.json({ count });
    } catch (error) {
      log(`Error getting visitor count: ${(error as Error).message}`, "routes");
      res.status(500).json({ 
        success: false, 
        message: 'Failed to retrieve visitor count' 
      });
    }
  });

  app.post('/api/visitor-count/increment', async (_req: Request, res: Response) => {
    try {
      const count = await storage.incrementVisitorCount();
      res.json({ count });
    } catch (error) {
      log(`Error incrementing visitor count: ${(error as Error).message}`, "routes");
      res.status(500).json({ 
        success: false, 
        message: 'Failed to increment visitor count' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
