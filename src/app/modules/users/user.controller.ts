import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'

const getStatistics = catchAsync(async (req, res) => {
  const result = await UserServices.getStatistics()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Statistics is retrieved succesfully',
    data: result,
  })
})

const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await UserServices.getSingleUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  })
})

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsers(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users are retrieved succesfully',
    meta: result.meta,
    data: result.result,
  })
})

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await UserServices.updateUser(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is updated succesfully',
    data: result,
  })
})

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await UserServices.deleteUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is deleted succesfully',
    data: result,
  })
})

const getMe = catchAsync(async (req, res) => {
  const { email, role } = req.user
  const result = await UserServices.getMe(email, role)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  })
})

const changeStatus = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserServices.changeStatus(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Status is updated succesfully',
    data: result,
  })
})

const changeRole = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserServices.changeRole(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Role is updated succesfully',
    data: result,
  })
})

export const UserControllers = {
  getStatistics,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  getMe,
  changeStatus,
  changeRole,
}
