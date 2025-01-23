import { z } from 'zod'

export const createProjectValidationSchema = z.object({
  title: z.string(),
  logo: z.string(),
  liveLink: z.string(),
  position: z.number(),
})

export const updateProjectValidationSchema = z.object({
  title: z.string().optional(),
  logo: z.string().optional(),
  liveLink: z.string().optional(),
  position: z.number().optional(),
})
