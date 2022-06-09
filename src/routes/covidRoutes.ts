import express from 'express'
import {storeData} from '../controllers/covidController'

const router: any = express.Router()

router.get('/', async (req: any, res: any) => {
    const data: any = await storeData()
    const msg: string = 'Fetch data success!'
    res.json({ msg, data })
})

router.post('/', storeData)

export default router