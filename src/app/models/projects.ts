export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  gitlabUrl?: string;
  demoUrl?: string;
  features: string[];
  challenges: string[];
  screenshots: string[];
  videos?: {
    url: string;
    poster?: string;
    title: string;
  }[];
  itchIoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'metal-tales-overkill',
    name: 'projects.metal-tales-overkill.name',
    shortDescription: 'projects.metal-tales-overkill.shortDescription',
    fullDescription: 'projects.metal-tales-overkill.fullDescription',
    technologies: 
    [
      'projects.metal-tales-overkill.technologies.PS4 Port English',
      'projects.metal-tales-overkill.technologies.Switch Port',
      'projects.metal-tales-overkill.technologies.Unity',
      'projects.metal-tales-overkill.technologies.C#'
    ],
    imageUrl: '../../assets/imgs/projects/Metal-Tales/metal-tales-splash.jpg',
    features: [
      'projects.metal-tales-overkill.features'
    ],
    challenges: [
      'projects.metal-tales-overkill.challenges'
    ],
    screenshots: [
      '../../assets/imgs/projects/Metal-Tales/metal-tales-screenshot1.jpg',
      '../../assets/imgs/projects/Metal-Tales/metal-tales-screenshot2.jpg',
      '../../assets/imgs/projects/Metal-Tales/metal-tales-screenshot3.webp',
      '../../assets/imgs/projects/Metal-Tales/metal-tales-screenshot4.webp'
    ],
    videos: [
      {
        url: 'https://www.youtube.com/embed/a12fO7KuPgA?si=Lie3X1eb94_kj-Jl',
        poster: '../../assets/imgs/projects/Metal-Tales/metal-tales-splash.jpg',
        title: 'Metal Tales: Overkill - Gameplay PS4'
      }
    ]
  }
];