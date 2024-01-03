import Image from 'next/image'
import { ProjectComponentProps } from './Project.types'
import { ReactNode, useMemo } from 'react'

export const Project = ({ index, project }: ProjectComponentProps) => {
  const isLeftSideComponent = useMemo(() => index % 2 === 0, [index])
  const imageComponent: ReactNode = useMemo(
    () => (
      <div className='relative w-1/2 aspect-video overflow-hidden'>
        <Image src={project.thumbnail} layout='fill' className={isLeftSideComponent ? 'rounded-l-xl' : 'rounded-r-xl'} />
      </div>
    ),
    [isLeftSideComponent, project.image]
  )
  const description: string = useMemo(
    () => (project.description.length > 50 ? `${project.description.substring(0, 50)}...` : project.description),
    []
  )

  return (
    <div className={'flex flex-row w-5/6 rounded-xl bg-slate-100 ' + (isLeftSideComponent ? 'mr-auto' : 'ml-auto')}>
      {isLeftSideComponent && imageComponent}
      <div className='w-1/2 flex flex-col items-center justify-center p-5'>
        <h1>{project.name}</h1>
        <h4>{description}</h4>
      </div>
      {!isLeftSideComponent && imageComponent}
    </div>
  )
}
