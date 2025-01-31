import { Injectable } from '@angular/core';
import { I18nService } from './i18n.service';
import { SkillCategory, skillCategories } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillTranslationService {

  constructor(private i18nService:I18nService) 
  {

  }

  public TranslateSkillCategories(): Array<SkillCategory>
  {
    return skillCategories.map(category => ({
      ...category,
      name: this.i18nService.translate(category.name),
      skills: category.skills.map(skill => ({
        ...skill,
        name: this.i18nService.translate(skill.name),
        description: skill.description ? 
        this.i18nService.translate(skill.description) : undefined
      }))
    }));
  }

}
