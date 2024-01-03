/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import { ProgrammingLanguages } from './Cv'
import { CommonLevels } from './Common'

export enum ProjectTypes {
  WEB_FRONTEND = 'WEB_FRONTEND',
  WEB_BACKEND = 'WEB_BACKEND',
  ROBOTIC = 'ROBOTIC'
}

export interface ProjectModal {
  id: string
  name: string
  description: string
  projectTypes: ProjectTypes[]
  thumbnail: string
  image: string
  content: ReactNode
  programmingLanguages: ProgrammingLanguages[]
  projectPriority: CommonLevels
}
