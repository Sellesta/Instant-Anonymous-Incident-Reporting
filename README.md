
# 🚨 ReportNow: Instant & Anonymous Incident Reporting

![EchoForms](public/HomePage.png)

![Stars](https://img.shields.io/github/stars/Sellesta/Instant-Anonymous-Incident-Reporting?style=social) ![Forks](https://img.shields.io/github/forks/Sellesta/Instant-Anonymous-Incident-Reporting?style=social) ![Issues](https://img.shields.io/github/issues/Sellesta/Instant-Anonymous-Incident-Reporting)

**ReportNow** is an advanced, AI-powered web application that allows users to **anonymously and instantly report incidents**—emergency or non-emergency—with ease. Users can upload an image, which is analyzed by **Gemini LLM** to automatically generate a **structured report**, including a **title, description, and category**. The system provides full user control to review and edit before final submission.

In addition to reporting, ReportNow strengthens public safety with **real-time incident tracking**, **live location sharing**, and **access to nearby emergency services** (hospitals, police, fire stations, pharmacies). The platform is fully **Dockerized** for seamless, scalable deployment across any environment.

---

## 🌟 Features

- 📸 **AI Image Analysis** – Extracts relevant data from uploaded images to generate detailed incident reports.
- 📝 **Automated Report Generation** – Pre-fills report forms with Gemini-generated content; users can edit before submission.
- 📍 **Live Location** – Shares accurate real-time location for prompt assistance.
- 🔎 **Tracking ID** – Each report includes a unique tracking ID for live progress updates.
- ✉️ **Email Updates** – Optional notifications via Resend keep users informed.
- 🏥 **Nearby Support** – Automatically finds nearby hospitals, police, fire stations, and pharmacies.
- 🔐 **Admin Panel** – Authenticated via **NextAuth** to manage reports securely.
- ☁️ **Image Hosting** – Cloud-based upload and management with **Cloudinary**.
- 🐳 **Docker-Ready** – Entire app packaged for instant container-based deployment.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** | Frontend and API |
| **Prisma & PostgreSQL (NeonDB)** | ORM and database |
| **Gemini LLM** | AI image analysis |
| **NextAuth** | Admin authentication |
| **Cloudinary** | Image storage |
| **Resend** | Email notifications |
| **React Hook Form & Zod** | Form management & validation |
| **Docker** | Deployment & scaling |

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/Sellesta/Instant-Anonymous-Incident-Reporting.git
   cd Instant-Anonymous-Incident-Reporting
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Duplicate `.env.example` as `.env`
   - Fill in the required keys

4. Initialize the database:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. Start development server:
   ```bash
   npm run dev
   ```
---

## 🛡 License

This project is licensed under the MIT License.
