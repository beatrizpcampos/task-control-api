import { Router } from 'express'
import UserController from './app/controllers/UserController'
import sessionController from './app/controllers/sessionController'

const routes  = new Router()

routes.post('/users', UserController.store)
routes.post('/session', sessionController.store)

export default routes