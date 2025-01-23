import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { ITestimonial } from './testimonial.interface'
import { Testimonial } from './testimonial.model'
import QueryBuilder from '../../builder/QueryBuilder'

const createTestimonial = async (payload: ITestimonial) => {
  const result = await Testimonial.create(payload)
  return result
}

const getAllTestimonials = async (query: Record<string, unknown>) => {
  const testimonialQuery = new QueryBuilder(Testimonial.find(), query)
    .search(['authorName, company'])
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await testimonialQuery.modelQuery
  const meta = await testimonialQuery.countTotal()
  return {
    meta,
    result,
  }
}

const updateTestimonial = async (
  id: string,
  payload: Partial<ITestimonial>,
) => {
  const isTestimonialExist = await Testimonial.findById(id)
  if (!isTestimonialExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Testimonial is not found')
  }
  const result = await Testimonial.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteTestimonial = async (id: string) => {
  const isTestimonialExist = await Testimonial.findById(id)
  if (!isTestimonialExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Testimonial is not found')
  }
  await Testimonial.findByIdAndDelete(id)
  return null
}

export const TestimonialServices = {
  createTestimonial,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
}
