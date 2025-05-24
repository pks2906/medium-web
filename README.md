# 📝 Blogger

A full-stack blogging platform inspired by Medium. Create, read, and share blogs effortlessly. Follow your favorite authors and stay updated with the latest content.

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







  
