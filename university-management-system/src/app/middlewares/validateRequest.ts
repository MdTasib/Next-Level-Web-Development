import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      })
      return next()
    } catch (error) {
      next(error)
    }
  }

// const validateRequest: RequestHandler = async (req, res, next) => {
//   try {
//     const { user } = req.body
//     const result = await UserService.createUser(user)

//     res
//       .status(200)
//       .json({ success: true, data: result, status: 'create user successfully' })
//   } catch (err) {
//     // res.json({ status: 'faield to create user', success: false })
//     next(err)
//   }
// }

export default validateRequest
