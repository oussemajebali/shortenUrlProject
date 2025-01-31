# Shorten URL Project

## Overview
This is a simple URL shortener application built using **Node.js, Express, MongoDB, and React**. The backend provides RESTful API endpoints for shortening URLs and retrieving original URLs. The frontend (if included) allows users to interact with the service through a user-friendly interface.

## Project Structure
```
shortenUrlProject/
├── backend/              # Node.js + Express API
│   ├── config/         # db configuration
    ├── controllers/  # Mongoose models        
│   ├── models/       # Business logic 
│   ├── routes/      # API route handlers
    ├── tests/          # unit & e2e tests
    ├── utils/       
│   ├── server.js        # Main server entry point
│   ├── .env    # Environment variables
    ├── package.json             
│
├── frontend/             # React application (if applicable)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── .env
│              
├── README.md             # Documentation

```

## Setup Instructions

### Prerequisites
- **Node.js** (>= 14.x)
- **MongoDB Atlas** (or a local MongoDB instance)
- **Git** (for cloning the repository)

### Installation

#### Clone the Repository
```sh
git clone https://github.com/oussemajebali/shortenUrlProject.git
cd shortenUrlProject
```

#### Backend Setup
```sh
cd backend
npm install
```

Create a `.env` file inside the `backend` directory and add the following:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:
```sh
npm start
```

#### Frontend Setup (if applicable)
```sh
cd frontend
npm install
```

Start the frontend development server:
```sh
npm start
```

## API Documentation

### Base URL
```
http://localhost:3000
```
_Replace with the deployed backend URL when in production._

### **1. Shorten a URL**
**Endpoint:** `POST /api/shorten`
- **Description:** Shortens a given URL.
- **Request Body:**
```json
{
  "originalUrl": "https://example.com"
}
```
- **Response:**
```json
{
  "shortUrl": "abcd1234"
}
```

### **2. Redirect to Original URL**
**Endpoint:** `GET /:shortUrl`
- **Description:** Redirects to the original URL associated with a short URL.
- **Example Request:**
```
GET /abcd1234
```
- **Response:**
  - **302 Redirect** to `https://example.com` (if found)
  - **404 Error** if the short URL does not exist:
    ```json
    { "error": "URL not found" }
    ```

## Running Tests
To run unit and end-to-end tests:
```sh
npm test
```

## Deployment
### Backend
- Deploy the backend on **Render, Vercel, or Heroku**.
- Set environment variables in the deployment settings.

### Frontend
- Deploy the frontend using **Vercel or Netlify**.
- Ensure the API URL in `.env` matches the deployed backend URL.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is open-source and available under the **MIT License**.

