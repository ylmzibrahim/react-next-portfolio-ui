import { CommonLevels } from 'store/modals/Common'
import { ProgrammingLanguages } from 'store/modals/Cv'
import { ProjectModal, ProjectTypes } from 'store/modals/ProjectModal'

export const projects: ProjectModal[] = [
  {
    id: '0',
    content: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus incidunt rem est magnam consectetur sapiente voluptatum fuga. Qui
        neque similique recusandae sit in facilis aspernatur vitae nemo! Dolores adipisci quae enim aperiam eos incidunt eaque quia
        repudiandae quisquam, in quos quis doloremque. Et, eius asperiores? Enim architecto aspernatur, ipsum odio, qui suscipit provident
        iure ex ratione possimus quos voluptatum, ipsa maxime! Perferendis, eos nobis numquam totam ipsam autem deleniti id est aliquid
        assumenda reiciendis esse nemo omnis ipsum enim quae repellendus eligendi magnam eum itaque! Obcaecati incidunt voluptatem
        praesentium, ducimus dolores suscipit nihil facere veritatis porro voluptatibus earum voluptate.
      </div>
    ),
    description: 'Description',
    name: 'Spy Otonom Robot',
    image: '/images/project_example_1.png',
    programmingLanguages: [ProgrammingLanguages.JAVASCRIPT],
    projectPriority: CommonLevels.HIGH,
    projectTypes: [ProjectTypes.WEB_FRONTEND, ProjectTypes.WEB_BACKEND],
    thumbnail: '/images/project_example_1.png'
  },
  {
    id: '1',
    content: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, numquam libero ipsa ipsum, laudantium quasi ab cupiditate
        asperiores ad quam tempora vitae voluptatibus exercitationem vero dolore sit, eos explicabo minus!
      </div>
    ),
    description: 'Description',
    name: 'Web Blog Website',
    image: '/images/project_example_2.png',
    programmingLanguages: [ProgrammingLanguages.JAVASCRIPT, ProgrammingLanguages.C_SHARP],
    projectPriority: CommonLevels.MEDIUM_HIGH,
    projectTypes: [ProjectTypes.WEB_FRONTEND],
    thumbnail: '/images/project_example_2.png'
  },
  {
    id: '2',
    content: <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quisquam libero tenetur!</div>,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, suscipit! Dolore, quidem molestias maiores repellat unde nobis doloribus harum dolorum ipsam nemo odio eius quae ad aliquid repellendus atque eveniet.',
    name: 'Academi Sitesi',
    image: '/images/project_example_1.png',
    programmingLanguages: [ProgrammingLanguages.C],
    projectPriority: CommonLevels.LOW_MEDIUM,
    projectTypes: [ProjectTypes.WEB_BACKEND],
    thumbnail: '/images/project_example_1.png'
  }
]
