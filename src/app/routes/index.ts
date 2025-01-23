import { Router } from 'express'
import { userRoutes } from '../modules/users/user.router'
import { AuthRoutes } from '../modules/auth/auth.route'
import { ProjectRoutes } from '../modules/projects/project.routes'
import { TestimonialRoutes } from '../modules/testimonial/testimonial.routes'
import { ContactRoutes } from '../modules/contact/contact.routes'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: ProjectRoutes,
  },
  {
    path: '/testimonials',
    route: TestimonialRoutes,
  },
  {
    path: '/contact',
    route: ContactRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
