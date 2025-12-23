const express = require("express");
const corsMiddleware = require("./middlewares/cors-middleware.js");
const routes = require("./routes");
const { errorHandler, notFound } = require("./middlewares/error-middleware.js");
const apiRateLimiter = require("./middlewares/rate-limit-middleware.js");
const helmetMiddleware = require("./middlewares/helmet-middleware.js");
const morgan = require("morgan");

const app = express();

/* ---------- Security ---------- */
app.use(helmetMiddleware);
app.use(apiRateLimiter);

/* ---------- For Logging ---------- */
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

/* ---------- Middlewares ---------- */
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- Routes ---------- */
app.use("/api", routes);

/* ---------- Error Handling ---------- */
app.use(notFound);
app.use(errorHandler);

module.exports = app;
