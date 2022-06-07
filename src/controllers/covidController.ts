import axios from 'axios'
import {db} from '../models/index'

const Data: any = db.data

export const dataCovid: any = async () => {
    const res: any = await axios.get('https://datacovid19.krisnahendrawijaya.site')
    const data: object = res.data
    // console.log(data)
    return data
}

export const storeData: any = async (logHistory: object = {}) => {
    let getFromApi: any = await dataCovid()

    const newData: object = {
        penambahan: getFromApi.update.penambahan,
        total: getFromApi.update.total,
        logHistory
    }

    const model: any = new Data(newData); 
    model.save(function (err: any, doc: any) {
        if (err) return console.error(err);
        console.log("Document inserted successfully!");
    });

    return newData
}

const findLastData: any = async () => {
    const lastOne: any = await Data.find().sort({$natural: -1}).limit(1)
    if(lastOne.length != 0){
        return lastOne[0]
    }
    return {
        penambahan: {},
        total: {}
    }
} 

export const checkUpdate: any = async () => {
    const newData: any = await dataCovid()
    const lastData: any = await findLastData()

    const newAdditional: any = newData.update.penambahan
    const lastAdditional: any = lastData.penambahan
    const newTotal: any = newData.update.total
    const lastTotal: any = lastData.total
    let isDifferent: boolean = false

    for (const [key, value] of Object.entries(newAdditional)) {
        if(newAdditional[key] != lastAdditional[key]){
            isDifferent = true
        }
        if(newTotal[key] != lastTotal[key]){
            isDifferent = true
        }
    }     

    const logHistory: object = {penambahan: lastAdditional, total: lastTotal}

    if(isDifferent){
        // If there is a data change
        storeData(logHistory)
    }else{
        // If there is no data change 
        console.log('No data change!')
    }
}







