/* eslint-disable no-unused-vars */
import { Contact } from './Contact'
import { CommonLevels } from './Common'

export enum Lessons {
  ALGORITHMS = 'ALGORITHMS',
  MATHEMATICS = 'MATHEMATICS'
}

export enum LetterGrades {
  AA = 'AA',
  BA = 'BA',
  BB = 'BB',
  CB = 'CB',
  CC = 'CC',
  DC = 'DD',
  FF = 'FF'
}

export enum ForeignLanguages {
  TURKISH = 'TURKISH',
  ENGLISH = 'ENGLISH',
  ITALIAN = 'ITALIAN'
}

export enum ForeignLanguageLevels {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2'
}

export enum ProgrammingLanguages {
  JAVASCRIPT = 'JAVASCRIPT',
  C = 'C',
  C_SHARP = 'C_SHARP'
}

export enum JobType {
  INTERN = 'INTERN',
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  FREELANCE = 'FREELANCE'
}

export enum JobPosition {
  ON_SITE = 'ON_SITE',
  REMOTE = 'REMOTE',
  HYBRID = 'HYBRID'
}

export enum Skills {
  FRONTEND_DEVELOPMENT = 'FRONTEND_DEVELOPMENT',
  BACKEND_DEVELOPMENT = 'BACKEND_DEVELOPMENT',
  COMMUNICATION = 'COMMUNICATION'
}

export interface Lesson {
  lessonName: Lessons
  letterGrade: LetterGrades
  numberGrade: string
}

export interface ForeignLanguage {
  languageName: ForeignLanguages
  level: ForeignLanguageLevels
  certificateLink: string
}

export interface ProgrammingLanguage {
  languageName: ProgrammingLanguages
  level: CommonLevels
}

export interface Education {
  schoolName: string
  department: string
  startDate: Date
  endDate: Date | null
  lessons: Lesson[]
  grade?: string
}

export interface JobExperience {
  title: string
  componyName: string
  type: JobType
  position: JobPosition
  city: string
  country: string
  startDate: Date
  endDate: Date | null
  description: string[]
  note: string
}

export enum OperatingSystem {
  LINUX = 'LINUX',
  WINDOWS = 'WINDOWS',
  MACOS = 'MACOS'
}

export enum Interested {
  ADOBE_PHOTOSHOP = 'ADOBE_PHOTOSHOP',
  ADOBE_PREMIERE_PRO = 'ADOBE_PREMIERE_PRO',
  ARDUINO = 'ARDUINO',
  LATEX = 'LATEX'
}

export interface ComputerSkills {
  programmingLanguages: ProgrammingLanguage[]
  operatingSystems: OperatingSystem[]
  interesteds: Interested[]
}

export interface CV {
  contact: Contact
  about: string
  educations: Education[]
  foreignLanguages: ForeignLanguage[]
  computerSkills: ComputerSkills
  jobExperiences: JobExperience[]
}
