import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoutes from './app/modules/users/user.route'
import globalErrorHanlder from './app/middlewares/globalErrorHandler'

const app: Application = express()

// using cors
app.use(cors())

// parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// APPLICATION ROUTE
app.use('/api/v1/users', userRoutes)

// TESTING ROUTE
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello, World!')
})

// GLOBAL ERROR HANDLER
app.use(globalErrorHanlder)

export default app
