import express, {Request, Response, Router} from 'express'
import {dataCovid, storeData} from '../controllers/covidController.js'

const router: Router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    const data: any = await storeData()
    res.json({
        msg: 'Fetch data Success!',
        data
    })
})

// router.post('/', storeData)

export default router