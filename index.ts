import express, { Express, Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(function (_, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("*", async (req: Request, res: Response) => {
  try {
    const data = await axios.get(req.path.slice(1));
    res.send(data.data);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
