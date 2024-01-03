export enum PlatformTypes {
  LINKEDIN = 'LINKEDIN',
  GITHUB = 'GITHUB',
  INSTAGRAM = 'INSTAGRAM'
}

export interface Platform {
  platformType: PlatformTypes
  link: string
  icon: string
}

export interface Contact {
  name: string
  surname: string
  telNo: string
  emailAddress: string
  city: string
  address: string
  country: string
  platforms: Platform[]
}
