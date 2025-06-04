# 📝 Blogger

A full-stack blogging platform inspired by Medium. Fully dockerized for easy setup and deployment. Create, read, and share blogs effortlessly. Follow your favorite authors and stay updated with the latest content.

🔗 [Check it out live!](https://blog-website-two-chi.vercel.app/)

---

## 🚀 Features

- ✅ **User Authentication**  
  Secure login and registration system

- ✍️ **Create Blogs**  
  Start writing and publishing your own blogs

- 📖 **Read Blogs**  
  Explore a variety of blogs posted by users

- 🔄 **Update Blogs**  
  Edit your published blogs any time

- ❌ **Delete Blogs**  
  Remove blogs with a single click

- 🤝 **Follow Users**  
  Stay connected with other writers and get updates on their content

- 🔢 **Pagination**  
  Smooth navigation through multiple pages of blog posts

---

## 🛠️ Tech Stack

- **Frontend**  
  - React  
  - TypeScript  
  - Tailwind CSS  

- **Backend**  
  - Hono (Edge-ready web framework)
  - Prisma (ORM)  
  - PostgreSQL
  - Cloudflare Workers (Edge runtime)
  - JWT (Authentication)
  - Zod (Validation)

- **Containerization & Deployment**
  - Docker (Containerizing backend and frontend)
  - Docker Hub (Image registry)


---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/pks2906/medium-web
   cd the blog-website
   
2. **Install Dependencies**
   ```bash
   npm install
   
3. **Set Up Your .env File**
   Create a .env file in the root directory and add the following environment variables:
   ```env
   DATABASE_URL=your_postgresql_database_url
   JWT_SECRET=your_jwt_secret

  Replace the values with your actual credentials.

4. **Run Prisma Migrations**
   ```bash
   npx prisma migrate dev

  This will apply the schema to your PostgreSQL database.

5. **Start the Development Server**
   ```bash
   npm run dev
  Open your browser and visit http://localhost:3000 to start using the app.

## 🐳 Running with Docker
You can also run the backend and frontend using Docker images hosted on Docker Hub.

### Prerequisites
Docker installed on your machine
Install Docker if not already installed.

### Step 1: Pull the Docker Images
Pull the backend image:
```bash
docker pull pks2906/medium-backend:latest
```
Pull the frontend image:
```bash
docker pull pks2906/medium-frontend:latest
```
### Step 2: Run the Backend Container
Run the backend container and expose port 8080 (adjust port if needed):
```bash
docker run -d -p 8080:8080 --name medium-backend pks2906/medium-backend:latest
```
### Step 3: Run the Frontend Container
Run the frontend container and expose port 3000 (adjust port if needed):
```bash
docker run -d -p 3000:3000 --name medium-frontend pks2906/medium-frontend:latest
```
### Step 4: Verify the Containers are Running
Check running containers:
```bash
docker ps
```
You should see `` medium-backend `` and ``medium-frontend`` containers running.

### Step 5: Access the Application
Backend API is accessible at: ``http://localhost:8080``

Frontend app is accessible at: ``http://localhost:3000``

**If you want a ``docker-compose.yml`` file or need any further help, feel free to ask!**

Would you like me to help you create that `docker-compose.yml` too?


## 🧱 System Architecture Overview

---

                        +-------------------+
                        |   Web Browser     |
                        |  (User Frontend)  |
                        +--------+----------+
                                 |
                                 | HTTP (port 3000)
                                 ↓
                 +---------------+----------------+
                 |        Frontend (React)        |
                 |     TypeScript + Tailwind CSS  |
                 | Containerized via Docker       |
                 +---------------+----------------+
                                 |
                                 | API Requests (REST)
                                 ↓
                 +---------------+----------------+
                 |        Backend (Hono)          |
                 |   Edge-ready, TypeScript/JS    |
                 |   REST API + Auth (JWT)        |
                 |   Input Validation (Zod)       |
                 | Containerized via Docker       |
                 +---------------+----------------+
                                 |
                                 | Prisma ORM
                                 ↓
         +-----------------------+------------------------+
         |          PostgreSQL Database (Cloud / Local)   |
         |  Stores users, blogs, followers, tokens, etc.  |
         +------------------------------------------------+

  [Deployment Environment: Docker + Docker Hub + Cloudflare Workers]





