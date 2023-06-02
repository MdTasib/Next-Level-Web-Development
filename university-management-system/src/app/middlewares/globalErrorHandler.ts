import { Request, Response, NextFunction } from 'express'
import config from '../../config'
const globalErrorHanlder = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({ errorta: err })

  res.status().json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env !== 'production' ? err?.stack : undefined,
  })

  next()
}

export default globalErrorHanlder

// test
