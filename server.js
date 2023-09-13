const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./Config/db");

dotenv.config();

//mongo connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", require("./Routes/testRoute"));
app.use("/api/v1/auth", require("./Routes/AuthRoute"));
app.use("/api/v1/inventory", require("./Routes/InventoryRoutes"));
app.use("/api/v1/analytics", require("./Routes/AnalyticsRoutes"));
app.use("/api/v1/admin", require("./Routes/AdminRoute"));

//port
//const PORT = 8080;
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Node server Running in ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
