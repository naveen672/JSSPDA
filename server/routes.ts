import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chatbot API endpoint
  app.post('/api/chatbot', (req: Request, res: Response) => {
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
    let response = 'Thank you for your question. Our team is here to help. You can find more information on our website or contact our administration office for specific queries.';
    
    // Check if the message contains any keywords
    for (const [keyword, reply] of Object.entries(responses)) {
      if (message.toLowerCase().includes(keyword)) {
        response = reply;
        break;
      }
    }
    
    // Add delay to simulate processing
    setTimeout(() => {
      res.json({ message: response });
    }, 1000);
  });

  // Contact form submission endpoint
  app.post('/api/contact', (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;
    
    // In a real application, you would save this to a database and/or send an email
    // For now, just acknowledge receipt
    
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon.' 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
