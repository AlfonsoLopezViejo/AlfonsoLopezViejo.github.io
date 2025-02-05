export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  startDate?: string;
  endDate?: string;
  githubUrl?: string;
  gitlabUrl?: string;
  projectUrl?: string;
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
      'projects.metal-tales-overkill.technologies.tech1',
      'projects.metal-tales-overkill.technologies.tech2',
      'projects.metal-tales-overkill.technologies.tech3',
      'projects.metal-tales-overkill.technologies.tech4'
    ],
    imageUrl: '../../assets/imgs/projects/Metal-Tales/metal-tales-splash.jpg',
    // startDate?: string;
    // endDate?: string;
    // githubUrl?: string;
    // gitlabUrl?: string;
    // projectUrl?: string;
    startDate: '2021-01-21',
    endDate: '2022-03-14',
    features: [
      'projects.metal-tales-overkill.features.feature1',
      'projects.metal-tales-overkill.features.feature2',
      'projects.metal-tales-overkill.features.feature3',
      'projects.metal-tales-overkill.features.feature4',
      'projects.metal-tales-overkill.features.feature5'
    ],
    challenges: [
      'projects.metal-tales-overkill.challenges.challenge1',
      'projects.metal-tales-overkill.challenges.challenge2',
      'projects.metal-tales-overkill.challenges.challenge3'
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
  },

  {
    id: 'sonar-beat',
    name: 'projects.sonar-beat.name',
    shortDescription: 'projects.sonar-beat.shortDescription',
    fullDescription: 'projects.sonar-beat.fullDescription',
    technologies: 
    [

    ],
    imageUrl: '../../assets/imgs/projects/Sonar-Beat/sonar-beat-splash.jpg',
     startDate: '2022-04-14',
    endDate: '2024-05-24',
    // githubUrl?: string;
    // gitlabUrl?: string;
    // projectUrl?: string;
    features: 
    [
      'projects.sonar-beat.features.feature1',
      'projects.sonar-beat.features.feature2',
      'projects.sonar-beat.features.feature3',
      'projects.sonar-beat.features.feature4',
    ],
    challenges: 
    [
      'projects.sonar-beat.challenges.challenge1',
      'projects.sonar-beat.challenges.challenge2',
      'projects.sonar-beat.challenges.challenge3'
    ],
    screenshots:
    [
      '../../assets/imgs/projects/Sonar-Beat/sonar-beat-screenshot1.avif',
      '../../assets/imgs/projects/Sonar-Beat/sonar-beat-screenshot2.jpg'
    ],
    videos: [
      {
        url: 'https://www.youtube.com/embed/fjjEnQlarcU?si=x4qqOwYqrBzKlMua',
        poster: '../../assets/imgs/projects/Sonar-Beat/sonar-beat-splash.jpg',
        title: 'Sonar Beat Trailer (PS4 Asia)'
      }
    ]
    // itchIoUrl?: string;
  }
];