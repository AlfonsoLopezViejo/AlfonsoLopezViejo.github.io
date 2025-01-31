import { i18n } from "i18next";

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
    name: 'skillCategories.gameEngines',
    skills: [
      {
        name: 'skills.unity',
        proficiency: 90,
        description: 'description.unity'
      },
      {
        name: 'skills.unreal',
        proficiency: 80,
        description: 'description.unreal'
      },
      {
        name: 'skills.ionic',
        proficiency: 70,
        description: 'description.ionic'
      }
    ]
  },
  {
    name: 'skillCategories.programming',
    skills: [
      {
        name: 'skills.c#',
        proficiency: 90,
        description: 'description.c#'
      },
      {
        name: 'skills.typescript',
        proficiency: 80,
        description: 'description.typescript'
      },
      {
        name: 'skills.c++',
        proficiency: 60,
        description: 'description.c++'
      }
    ]
  },
  {
    name: 'skillCategories.tools',
    skills: [
      {
        name: 'skills.angular',
        proficiency: 90,
        description: 'description.angular'
      },
      {
        name: 'skills.git',
        proficiency: 85,
        description: 'description.git'
      },
      {
        name: 'skills.photo&utils',
        proficiency: 50,
        description: 'description.photo&utils'
      }
    ]
  }
];