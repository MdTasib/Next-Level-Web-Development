import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const user = await User.create(payload)

  if (!user) {
    throw new Error('Failed to create user')
  }

  return user
}

export default {
  createUser,
}
