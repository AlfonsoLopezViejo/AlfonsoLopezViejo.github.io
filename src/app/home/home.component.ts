import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project, projects } from '../models/projects';
import { SkillCategory, skillCategories } from '../models/skills';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isReady = false;
  title = 'AlfonsoLopezViejo.Github.io';
  currentYear: number = new Date().getFullYear();
  projects: Array<Project> = new Array<Project>();
  skillCategories: Array<SkillCategory> = new Array<SkillCategory>();

  constructor()
  {
    this.projects = projects;
    this.skillCategories = skillCategories;
  }

  ngOnInit(): void {
    this.isReady=true;

  }

  getArrayTranslations()
  {
    
  }

  changeLanguage(lang: string) {
    
  }
}
