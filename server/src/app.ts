import dotenv from "dotenv"
import express from "express";
import routes from "./routes/index.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.get("/", async (req, res) => {
  res.send("API is working");
});

routes(app)

app.use(errorMiddleware)
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});