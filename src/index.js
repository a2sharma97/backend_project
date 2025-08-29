import dotenv from "dotenv";

import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB() //this is an async mehthod so it  returns promise so we can handle promises by using .then();
  .then(() => {
    app.on("error", (error) => {
      console.log("App.ication is unable to connect with the database", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :  ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!!", error);
  });
//1st approach to connect db
/*import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("errror", (error) => {
      console.log("Application is not able to talk to the database", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
