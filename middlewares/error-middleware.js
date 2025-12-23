
const notFound = (req, res, next) => {
  res.status(404);
  res.json({
    status: "error",
    message: `Not Found - ${req.originalUrl}`,
  });
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = { notFound, errorHandler };
