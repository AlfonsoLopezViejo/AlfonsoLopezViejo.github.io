import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project, projects } from '../models/projects';
import { SkillCategory, skillCategories } from '../models/skills';
import { I18nService } from '../services/i18n.service';
import { SkillTranslationService } from '../services/skill-translation.service';
import { ProjectTranslationService } from '../services/project-translation.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isReady = false;
  title = 'AlfonsoLopezViejo.Github.io';
  currentYear: number = new Date().getFullYear();
  projects: Array<Project> = new Array<Project>();
  skillCategories: Array<SkillCategory> | undefined = undefined;

  constructor(public i18n: I18nService, public skillTranslationService: SkillTranslationService, public projectTranslationService: ProjectTranslationService)
  {

  }

  ngOnInit(): void {
    this.i18n.isReady$.subscribe((ready) => {
      this.isReady = ready;
      if(ready)
      {
        this.changeLanguage('es');
        this.skillCategories = this.skillTranslationService.TranslateSkillCategories();
        this.projects = this.projectTranslationService.TranslateProjects();
      }
    });

  }

  changeLanguage(lang: string) {
    this.i18n.changeLanguage(lang);
  }
}
