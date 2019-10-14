require("dotenv").config();
const createServer = require("./createServer");
const db = require("./db");
const server = createServer();

// TODO: Use Express.js middleware to handle cookies
// TODO: Use Express.js middleware to populate user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  sv => {
    console.log(`Server is running on port: http://localhost:${sv.port}`);
  }
);
