import { Request, Response } from 'express'
import { createUserService } from './user.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await createUserService(user)

    res
      .status(200)
      .json({ success: true, data: result, status: 'create user successfully' })
  } catch (error) {
    res.json({ status: 'faield to create user', success: false })
  }
}
