import { Request,Response } from "express"

const users = [
    {name: 'Giovani', email:'giakomogcs@gmail.com'}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    }
}