import { z } from 'zod'

export const createProjectValidationSchema = z.object({
  title: z.string(),
  logo: z.string(),
  liveLink: z.string(),
  position: z.number(),
  banner: z.string().optional(),
  description: z.string().optional(),
  technologies: z.array(z.string()).optional(),
})

export const updateProjectValidationSchema = z.object({
  title: z.string().optional(),
  logo: z.string().optional(),
  liveLink: z.string().optional(),
  position: z.number().optional(),
  banner: z.string().optional(),
  description: z.string().optional(),
  technologies: z.array(z.string()).optional(),
})
