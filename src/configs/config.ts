import * as dotenv from 'dotenv'

dotenv.config()

const url = process.env.MONGO_URL || "mongodb://mongo:27017/mini-project"
const dbConfig: any = { url }
export {dbConfig}
