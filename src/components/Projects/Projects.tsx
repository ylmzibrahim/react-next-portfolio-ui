import { ReactNode } from 'react'
import { Project } from './Project'
import { projects } from 'store/defaults/ProjectsDefaults'

export const Projects = () => {
  const getProjects = (): ReactNode => {
    const projectsComponent = projects.map((project, index) => <Project key={project.id} index={index} project={project} />)
    return <>{projectsComponent}</>
  }

  return <div className='my-2 space-y-2'>{getProjects()}</div>
}
