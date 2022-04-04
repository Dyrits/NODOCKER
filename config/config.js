module.exports = {
  MONGO: {
    IP: process.env.MONGO_IP || "mongo",
    PORT: process.env.MONGO_PORT || "27017",
    USER: process.env.MONGO_USER,
    PASSWORD: process.env.MONGO_PASSWORD,
    AUTH_SOURCE: process.env.MONGO_AUTH_SOURCE || "admin",
  }
}