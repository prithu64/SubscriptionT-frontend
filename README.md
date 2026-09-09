# Subscription Tracker - Frontend

A modern web application built with **React** and **Vite** that helps users track and manage their subscriptions. Monitor your subscription expenses, renewal dates, and keep everything organized in one place.

## 🚀 Features

- **User Authentication**: Secure signup, signin, and password recovery
- **Subscription Management**: Add, update, and delete subscriptions
- **Dashboard**: View all your subscriptions at a glance
- **Subscription Details**: Track cost, renewal dates, and subscription status
- **Dark Theme**: Toggle between light and dark modes
- **User Profile**: Manage profile information and password updates
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Date Tracking**: Keep track of renewal dates with integrated date management

## 🛠️ Tech Stack

- **React 19**: Modern UI library with hooks and concurrent features
- **Vite 7**: Lightning-fast build tool and dev server
- **React Router 7**: Client-side routing
- **Tailwind CSS 4**: Utility-first CSS framework
- **Axios**: HTTP client for API communication
- **React Icons**: Icon library for UI components
- **date-fns**: Date utility library
- **ESLint**: Code quality and consistency

## 📋 Project Structure

```
src/
├── pages/           # Page components (Landing, Dashboard, Auth, Profile)
├── components/      # Reusable UI components
├── contexts/        # React Context (Dark Theme)
├── assets/          # Static assets
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## 🔗 Project Links

- **Backend Repository**: [SubscriptionT Backend](https://github.com/prithu64/SubscriptionT_backend)
- **Live Demo**: [Subscription Tracker](https://subtrackit.netlify.app/)

## 🏃 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## 🔐 Authentication Flow

- **Landing Page** (`/`): Marketing/home page
- **Signup** (`/signup`): Create a new account
- **Signin** (`/signin`): Login to existing account
- **Forgot Password** (`/forgotpassword`): Initiate password recovery
- **Reset Password** (`/reset/:token`): Reset password with token

## 📊 Main Pages

- **Dashboard** (`/dashboard`): View and manage all subscriptions
- **Profile** (`/profile`): View and edit user profile
- **Update Password** (`/reset/:token`): Reset password after recovery

## 🎨 UI Components

Key components used throughout the application:
- `DisplaySubs` - Display all subscriptions
- `SubsCard` - Individual subscription card
- `SubsInfo` - Detailed subscription information
- `UpdateModal` - Modal for updating subscriptions
- `UserNav` - User navigation bar
- `Navbar` - Main navigation
- `FormInputCompo` - Reusable form input
- `FormBtnCompo` - Reusable form button
- `Hero` - Hero section for landing page
- `HowItWorks` - How it works section
- `Footer` - Footer component

## 🌓 Dark Mode

The application includes a dark theme context for managing light/dark mode states across the application. Users can toggle between themes for a comfortable viewing experience.

## 🔄 API Integration

The frontend communicates with the backend API for:
- User authentication and account management
- Fetching all user subscriptions
- Creating new subscriptions
- Updating existing subscriptions
- Deleting subscriptions
- Managing user profile information

API base URL: `https://subscriptiont-backend.onrender.com`

## 📱 Responsive Design

Built with Tailwind CSS to ensure the application is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

The frontend can be built and deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

Currently deployed on Netlify at: https://subtrackit.netlify.app/


