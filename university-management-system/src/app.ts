import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoutes from '../src/modules/users/user.route'

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

export default app
