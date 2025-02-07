import { CommonModule } from '@angular/common';
import { Component, SecurityContext } from '@angular/core';
import { RouterModule } from '@angular/router';
import { projects } from './models/projects';
import { BackgroundComponent } from './background/background.component';
import { LanguageSwitcherSelectorComponent } from './language-switcher-selector/language-switcher-selector.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MarkdownModule } from 'ngx-markdown'

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, LanguageSwitcherSelectorComponent, BackgroundComponent, TranslateModule, MarkdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AlfonsoLopezViejo.Github.io';
  currentYear: number = new Date().getFullYear();
  projects = projects

  constructor(private translate: TranslateService)
  {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}
