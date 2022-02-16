import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello Brother");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
