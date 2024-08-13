# Custom URL Shortener

## 📝 Description
A web application that allows users to create custom shortened URLs for any website. Built using MongoDB, Express, and JavaScript, it provides an easy-to-use interface for generating short URLs and redirecting them to the original long URLs.

## 🚀 Features
- Shorten URLs to custom short URLs.
- Redirect short URLs to the original long URLs.

## 🗂 Project Structure
- `client`: Frontend code (HTML, CSS).
- `controllers`: Logic for URL creation and redirection.
- `db`: Database connection and configuration.
- `models`: Database schemas.
- `routes`: API route definitions for URL operations.
- `index.js`: Main entry point for the backend application.

## 📡 API Routes
1. **Create Custom Short URL**
   - **Endpoint:** `/api/url`
   - **Method:** `POST`
   - **Description:** Creates a custom or random shortened URL.

2. **Redirect to Long URL**
   - **Endpoint:** `/:customURL`
   - **Method:** `GET`
   - **Description:** Redirects to the original URL using the shortened key.

## ⚙️ Installation and Setup

### 1. Clone the Repository:
```bash
$ git clone https://github.com/03manan/customURL.git
$ cd customURL
```

### 2. Install Dependencies:
```bash
$ npm install
```

### 3. Set Up Environment Variables:
Create a .env file in the root directory and add the following:
```env
MONGO_URI = your_mongodb_connection_string
PORT = 3000
``` 

### 4. Run the Application:
You can run both the frontend and backend simultaneously using:
```bash
$ npm run dev
```
Backend: Runs on port 3000.

Frontend: Runs on port 8080 using http-server.

Navigate to http://localhost:8080 to access the frontend.


### 5. Usage
Shorten a URL: Send a POST request to /api/url with a JSON body containing longUrl.
Access a Shortened URL: Navigate to /:code, where :code is the shortened URL code. It will redirect to the original long URL.


### 6. Docker Setup
This project is Dockerized to simplify deployment and environment setup.

### 7. Dockerfile:
```dockerfile
$ FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

# Environment variables
ENV PORT 3000
ENV MONGO_URI=your_mongodb_connection_string

EXPOSE 3000 8080
CMD ["node", "index.js"]

```

### 7. Docker Compose:
The Docker Compose file sets up both the application and MongoDB services:
```
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      MONGO_URI: "mongodb://mongo:27017/customURL"
      PORT: 3000
      CORS_ORIGIN_DEV: "http://127.0.0.1:5500,http://localhost:5500"
      CORS_ORIGIN_DEP: "https://customurl-9d2h.onrender.com"
      API_BASE_URL: "http://localhost:3000"
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

### 8. Running with Docker Compose:
To run the application using Docker Compose, use the following command:
```
docker-compose up --build

```
Backend: Accessible at http://localhost:3000.

Frontend: Accessible at http://localhost:8080.

This setup will automatically start both the application and the MongoDB service, exposing ports 3000 (for the backend) and 8080 (for the frontend).

### 9. Docker Hub and GitHub Actions
The Docker image for this project is published on Docker Hub. Additionally, a GitHub Actions workflow is configured to automatically build and push the Docker image to Docker Hub whenever changes are pushed to the repository.

This ensures that the Docker image on Docker Hub is always up-to-date with the latest code changes.

### 10. License
This project is licensed under the ISC License.
