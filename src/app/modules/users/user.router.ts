import express from 'express'
import { UserControllers } from './user.controller'
import { USER_ROLE } from './user.constant'
import auth from '../../middlewares/auth'

const router = express.Router()

router.get(
  '/me',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  UserControllers.getMe,
)

export const userRoutes = router
