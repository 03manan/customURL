<!-- # Custom URL Shortener

# Description
This is a web application that allows users to create custom shortened URLs for any website. It is built using MongoDB, Express, and JavaScript.

# Features
1. Shorten long URLs to custom short URLs
2. Redirect short URLs to the original long URLs

# Project Structure
1. client: Contains the frontend code.
2. controllers: Handles the logic for URL creation and management.
3. db: Database configuration and connection details.
4. models: Defines the database schemas.
5. routes: API route definitions.
6. index.js: Main entry point of the application.

# API Routes
1. Create custom Short URL
Endpoint: /api/url
Method: POST
Description: Creates a custom shortened URL for the provided long URL. You can either create a custom one or a random one.
2. Redirect to Long URL
Endpoint: /:key
Method: GET
Description: Redirects to the original URL based on the shortened key.

# Installation and Setup
Clone the repository:


git clone https://github.com/03manan/customURL.git
cd customURL

# Install dependencies:
npm install

# Set up environment variables:
Create a .env file in the root directory and add the following:
1. MONGO_URI=your_mongodb_connection_string
2. BASE_URL=your_base_url
3. PORT=port_number

# Run the application:
npm run dev - server is listened on port 3000.
Open the index.html 

# Usage
1. Shorten a URL: Send a POST request to /api/url with a JSON body containing the longUrl.
2. Access a Shortened URL: Navigate to /:code where :code is the shortened URL code to be redirected to the original long URL.
Contributing
3. Feel free to submit issues or pull requests if you find any bugs or want to add new features. -->

Custom URL Shortener
Description
This is a web application that allows users to create custom shortened URLs for any website. Built using MongoDB, Express, and JavaScript, it provides a simple interface for generating short URLs and redirecting them to the original long URLs.

Features
Shorten URLs: Convert long URLs into custom short URLs.
Redirect URLs: Automatically redirect short URLs to the original long URLs.
Project Structure
client: Contains the frontend code (HTML, CSS).
controllers: Manages the logic for URL creation and redirection.
db: Database connection and configuration files.
models: Defines database schemas.
routes: API route definitions for URL operations.
index.js: The main entry point for the backend application.
API Routes
Create Custom Short URL

Endpoint: /api/url
Method: POST
Description: Creates a custom shortened URL or a random one based on the provided long URL.
Redirect to Long URL

Endpoint: /:key
Method: GET
Description: Redirects to the original URL using the shortened key.
Installation and Setup
Clone the Repository:
bash
Copy code
git clone https://github.com/03manan/customURL.git
cd customURL
Install Dependencies:
bash
Copy code
npm install
Set Up Environment Variables:
Create a .env file in the root directory and add the following:

env
Copy code
MONGO_URI=your_mongodb_connection_string
BASE_URL=your_base_url
PORT=3000
Run the Application:
You can run both the frontend and backend simultaneously using:

bash
Copy code
npm run dev
Backend: Runs on port 3000.
Frontend: Runs on port 8080 using http-server.
Navigate to http://localhost:8080 to access the frontend.

Usage
Shorten a URL: Send a POST request to /api/url with a JSON body containing longUrl.
Access a Shortened URL: Navigate to /:code, where :code is the shortened URL code. It will redirect to the original long URL.
Docker Setup
This project is Dockerized to simplify deployment and environment setup.

Dockerfile
The Dockerfile defines how to build the application into a Docker container:

dockerfile
Copy code
FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

# Environment variables
ENV PORT 3000
ENV MONGO_URI=your_mongodb_connection_string

EXPOSE 3000 8080
CMD ["node", "index.js"]
Docker Compose
The Docker Compose file sets up both the application and MongoDB services:

yaml
Copy code
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
Running with Docker Compose
To run the application using Docker Compose, use the following command:

bash
Copy code
docker-compose up --build
Backend: Accessible at http://localhost:3000.
Frontend: Accessible at http://localhost:8080.
This setup will automatically start both the application and the MongoDB service, exposing ports 3000 (for the backend) and 8080 (for the frontend).

Docker Hub and GitHub Actions
The Docker image for this project is published on Docker Hub. Additionally, a GitHub Actions workflow is configured to automatically build and push the Docker image to Docker Hub whenever changes are pushed to the repository.

This ensures that the Docker image on Docker Hub is always up-to-date with the latest code changes.

Contributing
Feel free to submit issues or pull requests if you find any bugs or want to add new features.

License
This project is licensed under the ISC License.

