const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json()); // To recognise incoming request objects as JSON - https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded#:~:text=a.,application%20using%20the%20code%3A%20app.

app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP header - https://helmetjs.github.io/

app.use(morgan("common")); // Logger - https://expressjs.com/en/resources/middleware/morgan.html
// Logger of form - :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});