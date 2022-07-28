const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");
const productRoute = require("./Routes/product");
const cartRoute = require("./Routes/cart");
const orderRoute = require("./Routes/order");
const stripeRoute = require("./Routes/stripe");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((error) => {
    console.log(`ERROR: \"${error}\"`);
  });

// app.get("/api/test", () => {
//   console.log("Test is successful");
// });

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/stripe", stripeRoute);

app.listen(4509, () => {
  console.log("BACKEND SERVER");
});
