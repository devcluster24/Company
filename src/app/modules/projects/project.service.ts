import httpStatus from 'http-status'
import QueryBuilder from '../../builder/QueryBuilder'
import AppError from '../../errors/AppError'
import { IProject } from './project.interface'
import { Project } from './project.model'

const createProject = async (payload: IProject) => {
  payload.position = Number(payload.position)
  if (!payload.position) {
    payload.position = await Project.countDocuments()
  }

  const result = await Project.create(payload)
  return result
}

const getAllProjects = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Project.find(), query)
    .search(['title'])
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await productQuery.modelQuery
  const meta = await productQuery.countTotal()
  return {
    meta,
    result,
  }
}

const getSingleProject = async (id: string) => {
  const result = await Project.findById(id)
  return result
}

const updateProject = async (id: string, payload: Partial<IProject>) => {
  const isProductExist = await Project.findById(id)
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Product is not found')
  }
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  return result
}

const deleteProject = async (id: string) => {
  const isProductExist = await Project.findById(id)
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Product is not found')
  }
  await Project.findByIdAndDelete(id)
  return null
}

export const ProjectServices = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
}
