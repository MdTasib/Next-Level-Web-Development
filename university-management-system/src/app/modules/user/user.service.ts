import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (payload: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  payload.id = id

  // check password
  if (!payload.password) {
    payload.password = config.default_user_pass as string
  }

  const user = await User.create(payload)
  if (!user) {
    throw new ApiError(400, 'Failed to create user')
  }

  return user
}

export const UserService = {
  createUser,
}
