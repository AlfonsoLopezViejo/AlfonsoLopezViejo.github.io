import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { projects } from '../models/projects';
import { skillCategories } from '../models/skills';
import { I18nService } from '../services/i18n.service';

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
  projects = projects
  skillCategories = skillCategories;

  constructor(public i18n: I18nService)
  {

  }

  ngOnInit(): void {
    this.i18n.isReady$.subscribe((ready) => {
      this.isReady = ready;
    });

  }

  changeLanguage(lang: string) {
    this.i18n.changeLanguage(lang);
  }
}
