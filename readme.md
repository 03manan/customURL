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

This project is Dockerized to simplify deployment and environment setup.

### Installation and Setup (with Docker)
#### 1. Clone the Repository:
```bash
$ git clone https://github.com/03manan/customURL.git
$ cd customURL
```

#### 2. Build and Run With Docker Compose:
```bash
docker-compose up --build -d
```
This command builds the Docker containers and starts the application in the background.

### Installation and Setup (with NPM)
#### 1. Clone the Repository:
```bash
$ git clone https://github.com/03manan/customURL.git
$ cd customURL
```

#### 2. Install Dependencies:
```bash
npm install
```

#### 3. Set Up Environment Variables:
Create a .env file in the root directory and add the following:
```env
MONGO_URI = your_mongodb_connection_string
PORT = 3000
``` 

#### 4. Run the Application:
You can run both the frontend and backend simultaneously using:
```bash
$ npm run dev
```
1. Backend: Runs on port 3000.
2. Frontend: Runs on port 8080 using http-server.

Navigate to http://localhost:8080 to access the frontend.

### Running the Application (with Docker)
#### 1. Access the Application: 
1. Backend: http://localhost:3000
2. Frontend: http://localhost:8080
3. 
This setup will automatically start both the application and the MongoDB service, exposing ports 3000 (for the backend) and 8080 (for the frontend)

### Usage
1. Shorten a URL: Send a POST request to '/api/url' with a JSON body containing longUrl.
2. Access a Shortened URL: Navigate to '/:customURL', where ':customURL' is the shortened URL code. It will redirect to the original long URL.

### Docker Hub and GitHub Actions
The Docker image for this project is published on Docker Hub. Additionally, a GitHub Actions workflow is configured to automatically build and push the Docker image to Docker Hub whenever changes are pushed to the repository.

This ensures that the Docker image on Docker Hub is always up-to-date with the latest code changes.

### License
This project is licensed under the ISC License.
