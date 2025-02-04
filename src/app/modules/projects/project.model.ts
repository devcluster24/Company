import { model, Schema } from 'mongoose'
import { IProject } from './project.interface'

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    logo: { type: String, required: true },
    liveLink: { type: String, required: true },
    position: { type: Number, required: true },
    description: { type: String },
    technologies: [{ type: String }],
    banner: { type: String },
  },
  { timestamps: true },
)

export const Project = model<IProject>('Project', projectSchema)
