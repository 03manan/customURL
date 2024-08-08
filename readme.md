# Custom URL Shortener

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
3. Feel free to submit issues or pull requests if you find any bugs or want to add new features.