import { RequestHandler } from 'express'
import { UserService } from './user.service'
import { z } from 'zod'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    // zod validation
    const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'role is required',
        }),
        password: z.string().optional(),
      }),
    })
    await createUserZodSchema.parseAsync(req)

    const { user } = req.body
    const result = await UserService.createUser(user)

    res
      .status(200)
      .json({ success: true, data: result, status: 'create user successfully' })
  } catch (err) {
    // res.json({ status: 'faield to create user', success: false })
    next(err)
  }
}

export const UserController = {
  createUser,
}
