//TODO: Projects are not translating when changing the language 

import { Injectable } from '@angular/core';
import { I18nService } from './i18n.service';
import { projects, Project } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectTranslationService {

  private translatedProjects: Array<Project> | undefined;  

  constructor(private i18nService:I18nService) 
  {

  }

  public TranslateProjects(): Array<Project>
  { 
    if(this.translatedProjects === undefined)
    {
      this.translatedProjects = projects.map(project => ({
        ...project,
        name: this.i18nService.translate(project.name),
        shortDescription: this.i18nService.translate(project.shortDescription),
        fullDescription: this.i18nService.translate(project.fullDescription),
        technologies: this.i18nService.translateArray(project.technologies[0]),
        features: this.i18nService.translateArray(project.features[0]),
        challenges: this.i18nService.translateArray(project.challenges[0])
      }));
    }  
    return this.translatedProjects; 
  }
}
