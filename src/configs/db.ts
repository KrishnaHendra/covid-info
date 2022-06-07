import mongoose from 'mongoose'
import {dbConfig} from '../configs/config'

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB')
})

mongoose.connection.on('reconnected', () => {
  console.log('Reconnected to MongoDB')
})

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB')
})

mongoose.connection.on('close', () => {
  console.log('MongoDB Connection Closed')
})

mongoose.connection.on('error', (error: any) => {
  console.log('MongoDB ERROR: ' + error)

  process.exit(1)
})

const connectDB: any = async () => {
  let connectionuri: any = dbConfig.url
  const callback: any = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
  await mongoose.connect(connectionuri, callback)
}

export default connectDB
