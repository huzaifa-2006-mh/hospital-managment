# MediCare HMS — Next.js

A Hospital Management System built with **Next.js 15**, **TiDB Cloud (MySQL)**, and **Tailwind CSS**.

## Features
- 🏥 Role-based access: Admin, Doctor, Patient
- 📅 Appointment booking & management
- 📊 Live statistics dashboard
- 🔒 Client-side route protection

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Create a `.env.local` file:
```env
DB_HOST=gateway01.ap-southeast-1.prod.alicloud.tidbcloud.com
DB_PORT=4000
DB_USER=aUVPCwMUgP1rDx1.root
DB_PASSWORD=your_password_here
DB_NAME=sys
```

### 3. Set up database
Run the SQL schema on your TiDB Cloud cluster using the SQL Editor.

### 4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Demo Accounts
| Role    | Email             | Password   |
|---------|-------------------|------------|
| Admin   | admin@hms.com     | admin123   |
| Doctor  | ramesh@hms.com    | doc123     |
| Patient | rahul@hms.com     | pat123     |

## Tech Stack
- **Frontend**: Next.js 15 (App Router), React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: TiDB Cloud (MySQL compatible)
