import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserControllers } from './user.controller'
import { USER_ROLE } from './user.constant'
import auth from '../../middlewares/auth'
import { UserValidation } from './user.validation'

const router = express.Router()

router.get(
  '/',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  UserControllers.getAllUsers,
)

router.get(
  '/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  UserControllers.getSingleUser,
)

router.patch(
  '/:id',
  auth(USER_ROLE.super_admin),
  validateRequest(UserValidation.updateUserValidationSchema),
  UserControllers.updateUser,
)

router.delete('/:id', auth(USER_ROLE.super_admin), UserControllers.deleteUser)

router.post(
  '/change-status/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  validateRequest(UserValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
)

router.post(
  '/change-role/:id',
  auth(USER_ROLE.super_admin),
  validateRequest(UserValidation.changeRoleValidationSchema),
  UserControllers.changeRole,
)

router.get(
  '/me',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  UserControllers.getMe,
)

router.get(
  '/statistics',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  UserControllers.getStatistics,
)

export const userRoutes = router
