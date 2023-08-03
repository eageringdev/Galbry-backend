require("dotenv").config();

module.exports = {
  url:
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}${process.env.MONGODB_CLUSTER_URL}` ||
    "mongodb+srv://Admin:seven@cluster0.il6l0yo.mongodb.net/galbry",
  // url: "mongodb://localhost:27017/test",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
