import { Request, Response, NextFunction } from 'express'
import config from '../../config'
import { IGenericErrorMessage } from '../../interfaces/error'
const globalErrorHanlder = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500
  const message = 'Something went wrong!'
  const errorMessages: IGenericErrorMessage[] = []

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env !== 'production' ? err?.stack : undefined,
  })

  next()
}

export default globalErrorHanlder
