import express, { Request, Response } from 'express';
import cors from "cors";
import { StudentRoutes } from './app/modules/student/student.router';
const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/v1/students", StudentRoutes)

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send('Hello World!');
});

export default app;
