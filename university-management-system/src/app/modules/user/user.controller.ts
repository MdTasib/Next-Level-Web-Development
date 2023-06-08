import { RequestHandler } from 'express'
import { UserService } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  try {
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
