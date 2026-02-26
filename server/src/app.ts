import dotenv from "dotenv"
import express from "express";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("API is working");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});