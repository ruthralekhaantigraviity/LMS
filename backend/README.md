# SecureVision CCTV - Backend (Render)

This repository contains the standalone Express API for the SecureVision CCTV project.

## 🚀 Deployment (Render)
1. Set up a Web Service on Render.
2. Connect your repository.
3. Configure the following environment variables:
   - `MONGO_URI`: Your MongoDB connection string.
   - `JWT_SECRET`: Secret for token signing.
   - `EMAIL_USER / EMAIL_PASS`: For automated notifications.
4. Set the build command to `npm install` and the start command to `node index.js`.

## 🛠 Local Setup
```bash
npm install
npm run dev
```
