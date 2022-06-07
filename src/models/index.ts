import mongoose from 'mongoose'
import {dbConfig} from '../configs/config'
import {covid} from './covidModel'

mongoose.Promise = global.Promise
const db: any = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.data = covid(mongoose)

export {db}