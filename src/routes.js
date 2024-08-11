import { Router } from 'express'
import User from './app/models/User'
import { v4 } from 'uuid'

const routes  = new Router

routes.get('/', async (request, response) => {
   const user = await User.create({
    id: v4(),
    name: 'bia',
    password_hash: 'bgbgfrbb'
   })

   return response.status(201).json(user)
})

export default routes