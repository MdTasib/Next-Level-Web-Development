import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHanlder from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

// using cors
app.use(cors())

// parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// APPLICATION ROUTE
app.use('/api/v1/users', UserRoutes)

// TESTING ROUTE
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello, World!')
})

// GLOBAL ERROR HANDLER
app.use(globalErrorHanlder)

export default app
