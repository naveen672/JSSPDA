import { users, type User, type InsertUser, courses, type Course, type InsertCourse, faculty, type Faculty, type InsertFaculty, events, type Event, type InsertEvent, contactSubmissions, type ContactSubmission, type InsertContactSubmission, chatMessages, type ChatMessage, type InsertChatMessage, faqs, type Faq, type InsertFaq } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { log } from "./vite";

// Comprehensive storage interface for all tables
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Course methods
  getCourse(id: number): Promise<Course | undefined>;
  getAllCourses(): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // Faculty methods
  getFaculty(id: number): Promise<Faculty | undefined>;
  getAllFaculty(): Promise<Faculty[]>;
  createFaculty(faculty: InsertFaculty): Promise<Faculty>;
  
  // Event methods
  getEvent(id: number): Promise<Event | undefined>;
  getActiveEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Contact submission methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Chat message methods
  saveChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatHistoryByUserId(userId: number): Promise<ChatMessage[]>;
  
  // FAQ methods
  getFaqs(): Promise<Faq[]>;
  createFaq(faq: InsertFaq): Promise<Faq>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    try {
      const [user] = await db.select().from(users).where(eq(users.id, id));
      return user;
    } catch (error) {
      log(`Error getting user: ${(error as Error).message}`, "storage");
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const [user] = await db.select().from(users).where(eq(users.username, username));
      return user;
    } catch (error) {
      log(`Error getting user by username: ${(error as Error).message}`, "storage");
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const [user] = await db.insert(users).values(insertUser).returning();
      return user;
    } catch (error) {
      log(`Error creating user: ${(error as Error).message}`, "storage");
      throw error;
    }
  }
  
  // Course methods
  async getCourse(id: number): Promise<Course | undefined> {
    try {
      const [course] = await db.select().from(courses).where(eq(courses.id, id));
      return course;
    } catch (error) {
      log(`Error getting course: ${(error as Error).message}`, "storage");
      return undefined;
    }
  }
  
  async getAllCourses(): Promise<Course[]> {
    try {
      return await db.select().from(courses);
    } catch (error) {
      log(`Error getting all courses: ${(error as Error).message}`, "storage");
      return [];
    }
  }
  
  async createCourse(course: InsertCourse): Promise<Course> {
    try {
      const [newCourse] = await db.insert(courses).values(course).returning();
      return newCourse;
    } catch (error) {
      log(`Error creating course: ${(error as Error).message}`, "storage");
      throw error;
    }
  }
  
  // Faculty methods
  async getFaculty(id: number): Promise<Faculty | undefined> {
    try {
      const [facultyMember] = await db.select().from(faculty).where(eq(faculty.id, id));
      return facultyMember;
    } catch (error) {
      log(`Error getting faculty: ${(error as Error).message}`, "storage");
      return undefined;
    }
  }
  
  async getAllFaculty(): Promise<Faculty[]> {
    try {
      return await db.select().from(faculty);
    } catch (error) {
      log(`Error getting all faculty: ${(error as Error).message}`, "storage");
      return [];
    }
  }
  
  async createFaculty(facultyData: InsertFaculty): Promise<Faculty> {
    try {
      const [newFaculty] = await db.insert(faculty).values(facultyData).returning();
      return newFaculty;
    } catch (error) {
      log(`Error creating faculty: ${(error as Error).message}`, "storage");
      throw error;
    }
  }
  
  // Event methods
  async getEvent(id: number): Promise<Event | undefined> {
    try {
      const [event] = await db.select().from(events).where(eq(events.id, id));
      return event;
    } catch (error) {
      log(`Error getting event: ${(error as Error).message}`, "storage");
      return undefined;
    }
  }
  
  async getActiveEvents(): Promise<Event[]> {
    try {
      return await db.select().from(events).where(eq(events.isActive, true));
    } catch (error) {
      log(`Error getting active events: ${(error as Error).message}`, "storage");
      return [];
    }
  }
  
  async createEvent(event: InsertEvent): Promise<Event> {
    try {
      const [newEvent] = await db.insert(events).values(event).returning();
      return newEvent;
    } catch (error) {
      log(`Error creating event: ${(error as Error).message}`, "storage");
      throw error;
    }
  }
  
  // Contact submission methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    try {
      const [newSubmission] = await db.insert(contactSubmissions).values(submission).returning();
      return newSubmission;
    } catch (error) {
      log(`Error creating contact submission: ${(error as Error).message}`, "storage");
      throw error;
    }
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    try {
      return await db.select().from(contactSubmissions);
    } catch (error) {
      log(`Error getting contact submissions: ${(error as Error).message}`, "storage");
      return [];
    }
  }
  
  // Chat message methods
  async saveChatMessage(message: InsertChatMessage): Promise<ChatMessage> {
    try {
      const [newMessage] = await db.insert(chatMessages).values(message).returning();
      return newMessage;
    } catch (error) {
      log(`Error saving chat message: ${(error as Error).message}`, "storage");
      throw error;
    }
  }
  
  async getChatHistoryByUserId(userId: number): Promise<ChatMessage[]> {
    try {
      return await db.select().from(chatMessages).where(eq(chatMessages.userId, userId));
    } catch (error) {
      log(`Error getting chat history: ${(error as Error).message}`, "storage");
      return [];
    }
  }
  
  // FAQ methods
  async getFaqs(): Promise<Faq[]> {
    try {
      return await db.select().from(faqs).orderBy(faqs.order);
    } catch (error) {
      log(`Error getting FAQs: ${(error as Error).message}`, "storage");
      return [];
    }
  }
  
  async createFaq(faq: InsertFaq): Promise<Faq> {
    try {
      const [newFaq] = await db.insert(faqs).values(faq).returning();
      return newFaq;
    } catch (error) {
      log(`Error creating FAQ: ${(error as Error).message}`, "storage");
      throw error;
    }
  }
}

// Use the DatabaseStorage implementation
export const storage = new DatabaseStorage();
