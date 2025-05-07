import { pgTable, text, serial, integer, boolean, timestamp, date, json, varchar, primaryKey, foreignKey } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  fullName: text("full_name"),
  role: text("role").default("user"), // admin, user, student, faculty
  createdAt: timestamp("created_at").defaultNow(),
});

// Courses table
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  duration: integer("duration").notNull(), // in years
  seats: integer("seats"),
  requirements: text("requirements"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Faculty table
export const faculty = pgTable("faculty", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  department: text("department"),
  qualification: text("qualification"),
  bio: text("bio"),
  imageUrl: text("image_url"),
  email: text("email"),
  phone: text("phone"),
  joinedDate: date("joined_date"),
});

// Relations will be defined after all table declarations to avoid circular dependencies

// Faculty to Courses mapping (many-to-many)
export const facultyCourses = pgTable("faculty_courses", {
  facultyId: integer("faculty_id").notNull().references(() => faculty.id),
  courseId: integer("course_id").notNull().references(() => courses.id),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.facultyId, table.courseId] })
  };
});

export const facultyCoursesRelations = relations(facultyCourses, ({ one }) => ({
  faculty: one(faculty, {
    fields: [facultyCourses.facultyId],
    references: [faculty.id]
  }),
  course: one(courses, {
    fields: [facultyCourses.courseId],
    references: [courses.id]
  })
}));

// Events table
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  location: text("location"),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  userId: integer("user_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  responded: boolean("responded").default(false),
});

export const contactSubmissionsRelations = relations(contactSubmissions, ({ one }) => ({
  user: one(users, {
    fields: [contactSubmissions.userId],
    references: [users.id]
  })
}));

// Chat messages for the chatbot
export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  message: text("message").notNull(),
  responseMessage: text("response_message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatMessagesRelations = relations(chatMessages, ({ one }) => ({
  user: one(users, {
    fields: [chatMessages.userId],
    references: [users.id]
  })
}));

// FAQ table
export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: text("category"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Visitor counter table
export const visitorStats = pgTable("visitor_stats", {
  id: serial("id").primaryKey(),
  count: integer("count").notNull().default(0),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

// Create insert schemas for each table
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
  role: true,
});

export const insertCourseSchema = createInsertSchema(courses).pick({
  name: true,
  description: true,
  duration: true,
  seats: true,
  requirements: true,
  imageUrl: true,
});

export const insertFacultySchema = createInsertSchema(faculty).pick({
  name: true,
  position: true,
  department: true,
  qualification: true,
  bio: true,
  imageUrl: true,
  email: true,
  phone: true,
  joinedDate: true,
});

export const insertFacultyCourseSchema = createInsertSchema(facultyCourses);

export const insertEventSchema = createInsertSchema(events).pick({
  title: true,
  description: true,
  date: true,
  location: true,
  imageUrl: true,
  isActive: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
  userId: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  userId: true,
  message: true,
  responseMessage: true,
});

export const insertFaqSchema = createInsertSchema(faqs).pick({
  question: true,
  answer: true,
  category: true,
  order: true,
});

export const insertVisitorStatsSchema = createInsertSchema(visitorStats).pick({
  count: true,
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Course = typeof courses.$inferSelect;

export type InsertFaculty = z.infer<typeof insertFacultySchema>;
export type Faculty = typeof faculty.$inferSelect;

export type InsertFacultyCourse = z.infer<typeof insertFacultyCourseSchema>;
export type FacultyCourse = typeof facultyCourses.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;

export type InsertFaq = z.infer<typeof insertFaqSchema>;
export type Faq = typeof faqs.$inferSelect;

export type InsertVisitorStats = z.infer<typeof insertVisitorStatsSchema>;
export type VisitorStats = typeof visitorStats.$inferSelect;

// Define all relations after all tables are declared to avoid circular dependencies
export const usersRelations = relations(users, ({ many }) => ({
  contactSubmissions: many(contactSubmissions),
  chatMessages: many(chatMessages)
}));

export const coursesRelations = relations(courses, ({ many }) => ({
  facultyMembers: many(facultyCourses)
}));

export const facultyRelations = relations(faculty, ({ many }) => ({
  courses: many(facultyCourses)
}));
