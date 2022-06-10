import express from 'express'
import {getData, storeData} from '../controllers/covidController'

const router: any = express.Router()

router.get('/', getData)
router.post('/', storeData)

export default router