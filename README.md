# NFT Management API 🚀

This API provides endpoints for managing NFTs (Non-Fungible Tokens), allowing users to create, read, update, and delete their NFTs. It is built using Node.js, Express.js, bcrypt for password hashing, and JWT for authentication. 🎉

# Features ✨

- User registration and login with JWT authentication.
- Create, read, update, and delete NFTs.
- Fetch all NFTs of the authenticated user.
- Get a specific NFT by its ID.
- Secure password storage with bcrypt hashing.
- Error handling with custom error middleware.
- MongoDB for data storage and Mongoose for database connectivity.
- Token-based authentication and authorization.
    

# Technologies Used 🛠️

- Node.js
- Express.js
- bcrypt
- JWT (JSON Web Tokens)
- MongoDB
- Mongoose

# Installation ⚙️

    - Clone the repository: git clone :https://github.com/amaranand360/NftCrudBackendAssignment.git
    - Install the dependencies: npm install

# Configuration ⚙️

<h2>Open the .env file and configure the following variables:</h2>    

- PORT : The port number on which the server will run (default is 3030).
- MONGO_URI : The MongoDB connection URI.
- JWT_SECRET : A secret key used for JWT token generation and verification.
- JWT_EXPIRES_IN : Token expiration time (e.g., '10m', '20m', '30m').
- Other configuration variables as required.

# Usage 🚀

   - Start the server: npm start
   - The API will be accessible at http://localhost:3030, where <PORT> is the configured port number.

# API Endpoints 📝
  
  - POST /api/auth/register : Register a new user.
 - POST /api/auth/login : Log in a user and generate an authentication token.
 - POST /api/nfts : Create a new NFT (requires authentication).
 - GET /api/nfts : Get all NFTs of the authenticated user.
 - GET /api/nfts/:id : Get a specific NFT by its ID.
 - PUT /api/nfts/:id : Update a specific NFT by its ID (requires authentication).
 - DELETE /api/nfts/:id : Delete a specific NFT by its ID (requires authentication).

# Error Handling ⚠️

- The API handles errors using a custom error handler middleware. When an error occurs, it returns an appropriate error response with the corresponding status code.
Authentication and Authorization 🔒

- Authentication is implemented using JWT (JSON Web Tokens). Users can register and log in to obtain a token, which must be included in the Authorization header of authenticated requests. Unauthorized requests will receive a 401 Unauthorized response.

# Database 💾

The API uses MongoDB as the database to store user and NFT information. The Mongoose library is used for database connectivity and data modeling.

# Security 🔐

The API ensures security through password hashing using bcrypt and authentication token generation using JWT. User passwords are never stored in plain text.

# Contributing 👥

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.
 
  - If you have any questions or comments, please feel free to contact me at: amar.anand0030@gmail.com 👈
