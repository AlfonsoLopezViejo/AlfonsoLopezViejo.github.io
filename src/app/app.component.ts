import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { projects } from './models/projects';
import { BackgroundComponent } from './background/background.component';
import { LanguageSwitcherSelectorComponent } from './language-switcher-selector/language-switcher-selector.component';
import { I18nService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, LanguageSwitcherSelectorComponent, BackgroundComponent],
  providers: [I18nService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AlfonsoLopezViejo.Github.io';
  currentYear: number = new Date().getFullYear();
  projects = projects
}
