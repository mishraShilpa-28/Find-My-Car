# Find My Car

![Find My Car Logo](public/logo.png)

Welcome to **Find My Car**, a full-stack AI-powered car marketplace built with Next.js, designed to provide an intuitive and modern platform for browsing, searching, and purchasing cars. This project showcases advanced features like AI-driven car search, real-time test drive booking, and a robust admin dashboard for managing inventory and analytics. It is a perfect addition to your portfolio to demonstrate expertise in modern web development practices.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

Find My Car is packed with features that enhance the user experience and streamline car marketplace operations:

### User Features

- **AI-Powered Car Search**: Upload a car image to find similar Find My Cars in the marketplace using advanced AI image recognition.
- **Advanced Filtering**: Filter cars by make, model, price range, body type, fuel type, transmission, and more.
- **Detailed Car Pages**:
  - High-quality image galleries.
  - Comprehensive specifications and features.
  - Interactive EMI (Equated Monthly Installment) calculator for financial planning.
  - Share functionality to share car details via URL.
- **Test Drive Booking**:
  - Real-time availability slots for scheduling test drives.
  - Automated booking confirmations.
  - Ability to add notes for specific requests.
- **Saved Cars**: Save favorite cars for quick access.
- **Reservations Management**: View, manage, and cancel test drive reservations.
- **Responsive UI**: Fully responsive design for seamless use on desktops, tablets, and mobiles.

### Admin Features

- **Admin Dashboard**:
  - Analytics for car sales, test drive bookings, and conversion rates.
  - Real-time data updates for inventory and bookings.
- **Car Inventory Management**:
  - Add, edit, or remove cars.
  - Mark cars as featured or sold.
  - AI-powered car detail extractor to auto-populate car details from images.
- **Test Drive Management**:
  - View and update test drive statuses (Pending, Confirmed, Completed, Cancelled, No Show).
  - Manage time slots and dealership working hours.
- **User Management**: Assign or revoke admin access for users.
- **Settings**: Configure dealership working hours and other operational settings.

### Additional Features

- **Modern Landing Page**: Professional design with featured cars, quick filters, FAQs, and a call-to-action.
- **Pagination and Sorting**: Efficient browsing with pagination and sorting options (e.g., by price).
- **Waitlist Integration**: Embeddable waitlist form for collecting user emails using Create AI templates.
- **SEO-Friendly URLs**: Shareable URLs with pre-applied filters for car listings.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 19, Tailwind CSS, ShadCN UI
- **Backend**: Next.js API Routes, Supabase (PostgreSQL)
- **Database**: Supabase for data storage, Prisma ORM
- **Authentication**: Clerk for user management and authentication
- **Storage**: Supabase Storage for car images
- **Security**: Arcjet for bot protection, rate limiting, and shield mode
- **AI Features**: Custom AI for image-based car search and detail extraction
- **Other Libraries**:
  - React Hook Form and Zod for form validation
  - Lucide React for icons
  - Sonner for toast notifications
  - Date-fns for date handling

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mishraShilpa-28/Find-My-Car.git
   cd Find-My-Car
   ```

2. **Install Dependencies**:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set Up Prisma**:

   ```bash
   npx prisma generate
   ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Supabase Database and Storage
DATABASE_URL=your_supabase_database_url
DIRECT_URL=your_supabase_direct_url
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

#  Gemini setuo
GEMINI_API_KEY=your_gemini_api_key

# Arcjet Security
ARCJET_KEY=your_arcjet_key
```

Obtain these keys from:

- [Clerk Dashboard](https://dashboard.clerk.dev/)
- [Supabase Dashboard](https://supabase.com/dashboard)
- [Arcjet Dashboard](https://app.arcjet.com/)

## Usage

1. **User Flow**:
   - Browse cars using AI image search or advanced filters.
   - View car details, calculate EMI, or save cars to favorites.
   - Book a test drive by selecting a date and time slot.
   - Manage reservations in the `/reservations` page.

2. **Admin Flow**:
   - Log in as an admin and access the `/admin` portal.
   - Use the dashboard to monitor analytics and manage inventory.
   - Update test drive statuses or add new cars using AI detail extraction.

3. **Waitlist**:
   - Visit `/waitlist` to join the waitlist (embedded via Create AI).
   - Emails are stored in a Neon DB managed by Create.

## Project Structure

```bash
ai-car-marketplace/
├── app/                    # Next.js app router
│   ├── (auth)/             # Authentication routes (sign-in, sign-up)
│   ├── admin/              # Admin portal routes
│   ├── cars/               # Car listing and detail pages
│   ├── reservations/       # User reservations page
│   ├── waitlist/          # Waitlist page
│   ├── page.jsx            # Landing page
│   ├── layout.jsx          # Root layout
├── components/             # Reusable React components
│   ├── ui/                # ShadCN UI components
├── lib/                   # Utility functions and Supabase client
├── prisma/                # Prisma schema and migrations
├── public/                # Static assets (logos, placeholder images)
├── styles/                # Global CSS and Tailwind config
├── .env                   # Environment variables
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── README.md              # This file
```

## Deployment

Deploy the app to Vercel for a production-ready environment:

1. **Push to GitHub**:
   - Initialize a Git repository and push to GitHub:

     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/your-username/ai-car-marketplace.git
     git push -u origin main
     ```

2. **Deploy to Vercel**:
   - Log in to [Vercel](https://vercel.com/) and import the GitHub repository.
   - Add environment variables in the Vercel dashboard.
   - Set the install command to `npm install --legacy-peer-deps`.
   - Deploy the project.

3. **Post-Deployment**:
   - Ensure Arcjet is configured to allow Vercel bots if necessary.
   - Verify all routes and functionalities work as expected.

## Security

The project incorporates robust security measures using Arcjet:

- **Shield Mode**: Protects against content and security threats.
- **Bot Protection**: Allows legitimate bots (e.g., search engines) while blocking malicious ones.
- **Rate Limiting**: Prevents abuse by limiting request rates.

To configure Arcjet:

- Add the `ARCJET_KEY` to your `.env` file.
- Update `middleware.js` to include Arcjet rules.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [ShadCN UI](https://ui.shadcn.com/) for beautiful, customizable components.
- [Clerk](https://clerk.dev/) for seamless authentication.
- [Supabase](https://supabase.com/) for database and storage solutions.
- [Arcjet](https://arcjet.com/) for robust security features.
- [Create AI](https://create.ai/) for waitlist integration.

---
