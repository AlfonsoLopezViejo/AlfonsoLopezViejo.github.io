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
    id: 'battle-royale',
    name: 'Project Name 1',
    shortDescription: 'A multiplayer battle royale game built with Unreal Engine.',
    fullDescription: `A multiplayer battle royale game built with Unreal Engine. Features advanced networking, custom physics system, and procedural world generation. This project showcases advanced game development techniques and optimization strategies.

The game supports up to 100 players simultaneously, featuring a dynamic weather system and destructible environments. The custom physics system enables realistic vehicle dynamics and player movement.`,
    technologies: ['Unreal Engine', 'C++', 'Multiplayer'],
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    githubUrl: 'https://github.com/yourusername/project1',
    features: [
      'Advanced networking system',
      'Custom physics engine',
      'Procedural world generation',
      'Dynamic weather system',
      'Destructible environments',
      'Vehicle dynamics'
    ],
    challenges: [
      'Optimizing network performance for 100 players',
      'Implementing smooth physics calculations',
      'Balancing procedural generation with performance'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3'
    ],
    videos: [
      {
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
        title: 'Gameplay Overview'
      },
      {
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        poster: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
        title: 'Technical Features'
      }
    ],
    itchIoUrl: 'https://yourusername.itch.io/game1'
  },
  {
    id: 'mobile-puzzle',
    name: 'Project Name 2',
    shortDescription: 'Mobile puzzle game developed using Unity.',
    fullDescription: `Mobile puzzle game developed using Unity with focus on performance optimization and smooth animations. Features procedurally generated levels and advanced particle systems. The game includes innovative puzzle mechanics that combine traditional match-3 elements with physics-based challenges.

The project demonstrates mobile optimization techniques, including efficient memory management and battery usage optimization.`,
    technologies: ['Unity', 'C#', 'Mobile'],
    imageUrl: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    gitlabUrl: 'https://gitlab.com/yourusername/project2',
    features: [
      'Procedurally generated levels',
      'Advanced particle systems',
      'Smooth animations',
      'Physics-based puzzles',
      'Progressive difficulty system'
    ],
    challenges: [
      'Optimizing performance for low-end devices',
      'Creating engaging procedural puzzles',
      'Implementing smooth animations with minimal memory usage'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3'
    ],
    videos: [
      {
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
        title: 'Gameplay Demo'
      }
    ]
  }
];