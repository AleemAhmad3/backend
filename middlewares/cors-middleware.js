const cors = require("cors");

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",")
  : [];

const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (Postman, mobile apps)
    if (!origin) return callback(null, true);

    if (
      process.env.NODE_ENV !== "production" ||
      allowedOrigins.includes(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

module.exports = cors(corsOptions);
