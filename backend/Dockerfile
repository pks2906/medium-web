# Backend Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

RUN npm install
RUN npm install -g prisma
RUN npx prisma generate



EXPOSE 3000
CMD ["npm", "run", "start"]
