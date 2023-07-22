import express, { Express, Request, Response } from "express";
import cors from "cors";
import { event } from "./routes/external/v1/event";
const dotenv = require("dotenv");

dotenv.config();

const external_server: Express = express();
const external_port = process.env.EXTERNAL_PORT;

external_server.use(express.json());
external_server.use(cors());

external_server.use("/v1/event", event);

external_server.get("/", (req: Request, res: Response) => {
  res.send("Successful sent a response.");
});

external_server.listen(external_port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${external_port}`
  );
});
