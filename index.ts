import express from 'express';
import CronJob from 'node-cron'
import { checkUpdate } from './src/controllers/covidController'
import connectDB from './src/configs/db'
import router from './src/routes/covidRoutes'

const app: any = express();
const port = 3000;

connectDB()

app.use(router)

CronJob.schedule("59 23 * * *", () => {
  checkUpdate()
});


app.listen(port, () => {
  console.log(`⚡️ Server is running at https://localhost:${port}`);
});