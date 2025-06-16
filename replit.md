# JSS Polytechnic for the Differently Abled Website

## Overview

This is a full-stack web application for JSS Polytechnic for the Differently Abled in Mysuru, Karnataka. The application serves as the institution's official website, providing information about courses, faculty, admissions, and other institutional services. It features comprehensive accessibility support and multilingual capabilities to serve differently-abled students effectively.

## System Architecture

The application follows a modern full-stack architecture with:

- **Frontend**: React-based SPA using TypeScript and Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for development and production builds
- **Deployment**: Configured for Replit with autoscale deployment

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for responsive styling with CSS custom properties
- **React Hook Form** with Zod validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** for type-safe database operations
- **Neon Database** (PostgreSQL) for data persistence
- **RESTful API** design with proper error handling
- **Session management** with connect-pg-simple

### Database Schema
The database includes tables for:
- **Users**: Authentication and user management
- **Courses**: Academic program information
- **Faculty**: Staff and faculty details
- **Events**: Institutional events and announcements
- **Contact Submissions**: User inquiries and applications
- **Chat Messages**: Chatbot conversation history
- **FAQs**: Frequently asked questions
- **Visitor Count**: Website analytics

### Accessibility Features
- **Multi-language support**: English, Hindi, Kannada, Tamil
- **Theme customization**: Multiple color themes for visual accessibility
- **Font size adjustment**: Small, medium, large text options
- **Screen reader compatibility**: Proper ARIA labels and semantic HTML
- **Keyboard navigation**: Full keyboard accessibility support

## Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack Query
2. **API Routes**: Express server handles requests with proper validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with proper error handling
5. **State Management**: TanStack Query caches and syncs server state
6. **UI Updates**: React components re-render based on state changes

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: react, react-dom, @types/react
- **Build tools**: vite, typescript, esbuild
- **Routing**: wouter for lightweight routing
- **State management**: @tanstack/react-query

### UI and Styling
- **Component library**: @radix-ui/* components for accessibility
- **Styling**: tailwindcss, @tailwindcss/vite
- **Icons**: lucide-react, remixicon
- **Utility**: class-variance-authority, clsx, tailwind-merge

### Backend Dependencies
- **Server**: express, @types/express
- **Database**: drizzle-orm, @neondatabase/serverless
- **Validation**: zod, drizzle-zod
- **Session**: express-session, connect-pg-simple

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESLint/Prettier**: Code quality and formatting
- **Replit integration**: Development environment optimizations

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Development**: `npm run dev` starts the Express server with Vite middleware
- **Production Build**: `npm run build` creates optimized bundles
- **Production Start**: `npm run start` runs the production server
- **Database Migration**: `npm run db:push` applies schema changes
- **Auto-scaling**: Configured for Replit autoscale deployment
- **Environment Variables**: DATABASE_URL for database connection

### Build Process
1. Vite builds the React frontend to `dist/public`
2. esbuild bundles the Express server to `dist/index.js`
3. Static assets are served from the public directory
4. API routes are handled by the Express server

### Environment Configuration
- **Development**: Vite dev server with HMR and debugging
- **Production**: Optimized bundles with static file serving
- **Database**: PostgreSQL connection via environment variables
- **Sessions**: Secure session management with database storage

## Recent Changes

✓ Updated contact information throughout the website with correct JSS Polytechnic details
✓ Modified contact form structure to include new fields: candidate name, father name, address, mobile, purpose of enquiry
✓ Updated database schema for contact submissions to handle new form structure
✓ Created separate dedicated pages for About JSSMVP and About JSSPDA with complete content
✓ Fixed navigation routing to eliminate 404 errors for About links
✓ Added comprehensive JSSPDA content with entrance image, course table, and organizational chart
✓ Updated backend API to process new contact form submissions
✓ Added Google Maps link for easy location access
✓ Implemented comprehensive four-color theme system across ALL pages (blue, green, purple, orange)
✓ Added complete multilingual support for Hindi, Kannada, and Tamil on ALL pages
✓ Fixed language switching functionality to work seamlessly across all sections
✓ Applied consistent color theming using primary/secondary classes throughout the site
✓ Added translation keys for all page content including About JSSMVP and About JSSPDA
✓ Created Messages submenu under Home navigation with Principal's message page
✓ Added Principal Sri. Elangovan B's profile with contact information and institutional message
✓ Implemented proper color theming and multilingual support for Messages page
✓ Created Governance submenu under Home navigation with comprehensive administrative structure
✓ Added complete Governing Council details with 13 members and their roles
✓ Implemented six major administrative committees (IQAC, Women's Security, Anti-Ragging, etc.)
✓ Added Academic Governance section with Academic and Examination committees
✓ Included Support Services section with four administrative departments
✓ Applied consistent four-color theming and full multilingual support for Governance page
✓ Created Administration submenu under Home navigation with complete staff directory
✓ Added Principal Sri. Elangovan B's detailed profile with contact information
✓ Implemented comprehensive ministerial staff tables (13 Grant-in-Aid + 4 Management employees)
✓ Added Key Functionaries section with 28 department heads and coordinators
✓ Included complete contact details and email addresses for all staff members
✓ Applied consistent color theming and full multilingual support for Administration page
✓ Created JSSPDA Green Initiatives submenu under Home navigation with sustainability content
✓ Added comprehensive Eco-Friendly Campus section with environmental features
✓ Implemented Solar Energy section highlighting 15,000 units annual generation
✓ Added Water Management and Waste Management sections with detailed initiatives
✓ Created Digital Campus section showcasing technology infrastructure
✓ Included Campus Gallery with six high-quality images of green campus and solar installations
✓ Added Environmental Impact section with key sustainability metrics
✓ Created Employee Benefits submenu under Home navigation with comprehensive welfare information
✓ Added detailed seven employee benefit schemes (Gratuity, EPF/EPS, Mediclaim, ESI, Maternity, Accident, EDLI)
✓ Implemented benefit calculations and eligibility criteria for each scheme
✓ Added separate coverage details for Management and Grant-in-Aid employees
✓ Created benefits summary section highlighting financial security, health coverage, and family support
✓ Applied consistent color theming throughout the Employee Benefits page
✓ Created Reports and Download submenu under Home navigation with document management system
✓ Added six official PDF documents with view online and download functionality
✓ Implemented document categorization (Application Forms, Audit Reports, Compliance Documents, Information Documents)
✓ Added comprehensive document details including JSSPDA Application Form, Audit Reports (2017-2020), Mandatory Disclosure, and RTI documents
✓ Created document cards with proper metadata display and dual action buttons for viewing and downloading
✓ Applied consistent theming and responsive design for document accessibility

## Changelog

- June 16, 2025: Initial setup and comprehensive contact information updates
- June 16, 2025: Added JSS Mahavidyapeetha section with institutional history and managing committee details

## User Preferences

Preferred communication style: Simple, everyday language.

### Critical Requirements
- **Color themes and language translation are essential for ALL pages** - must be consistently implemented across the entire website
- Four-color theme system (blue, green, purple, orange) using primary/secondary CSS classes
- Complete multilingual support for English, Hindi, Kannada, and Tamil
- Language switching must work seamlessly on every page without exceptions