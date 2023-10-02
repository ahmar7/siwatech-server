const app = require("./app");
// Environment file set
const dotnet = require("dotenv");
dotnet.config({ path: "./config/config.env" });
const { errorMiddleware } = require("./middlewares/errorMiddleware");
// Database connect
const cloudinary = require("cloudinary");
const database = require("./config/database");
database();
let PORT = process.env.PORT || 4000;
cloudinary.v2.config({
  cloud_name: "dzkk7ubqq",
  api_key: "889131577884438",
  api_secret: "AVh8qLZkL5EFPlkHdmc78YqGNmI",
});
app.use(errorMiddleware);

let server = app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

// Unhandled promise rejection like if the db server error, it will shutdown the server

// process.on("unhandledRejection", (err) => {
//   console.log("Error: ", err.message);
//   console.log("Shutting down the server due to Unhandled Promise Rejection");
//   server.close(() => {
//     process.exit();
//   });
// });
