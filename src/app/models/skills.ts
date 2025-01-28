export interface Skill {
    name: string;
    proficiency: number; // 0-100
    description?: string;
  }
  
  export interface SkillCategory {
    name: string;
    skills: Skill[];
  }
  
  export const skillCategories: SkillCategory[] = [
    {
      name: 'Game Engines',
      skills: [
        {
          name: 'Unity',
          proficiency: 90,
          description: 'Expert in C# development, shader programming, and performance optimization'
        },
        {
          name: 'Unreal Engine',
          proficiency: 85,
          description: 'Proficient in Blueprint system and C++ gameplay programming'
        },
        {
          name: 'Godot',
          proficiency: 70,
          description: 'Experienced with GDScript and 2D game development'
        }
      ]
    },
    {
      name: 'Programming',
      skills: [
        {
          name: 'C++',
          proficiency: 95,
          description: 'Advanced systems programming and optimization'
        },
        {
          name: 'C#',
          proficiency: 90,
          description: 'Game development and enterprise applications'
        },
        {
          name: 'Python',
          proficiency: 80,
          description: 'Tools development and automation'
        }
      ]
    },
    {
      name: 'Tools',
      skills: [
        {
          name: 'Git',
          proficiency: 85,
          description: 'Version control and team collaboration'
        },
        {
          name: 'Visual Studio',
          proficiency: 90,
          description: 'Advanced debugging and profiling'
        },
        {
          name: 'Jira',
          proficiency: 75,
          description: 'Project management and issue tracking'
        }
      ]
    }
  ];