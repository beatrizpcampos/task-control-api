import User from '../models/User'
import { v4 } from 'uuid'
import * as Yup from 'yup'

class UserController {
    async store(request, response){
        const schema = Yup.object({
            name: Yup.string().required(),
            password: Yup.string().required(),
        })
        
        try {
            schema.validateSync(request.body, { abortEarly: false })
        } catch(err){
            return response.status(400).json({ error: err.errors })
        }
        
        const { name, password} = request.body
        
        const userExists = await User.findOne({
            where: {
                name,
            }
        })

        if (userExists) {
            return response.status(400).json({ error: 'User already exists' })
        }

        const user = await User.create({
            id: v4(),
            name,
            password,
        })
        
        return response.status(201).json(user)
    }
}

export default new UserController()