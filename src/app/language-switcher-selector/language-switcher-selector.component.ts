import { Component } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-language-switcher-selector',
  imports: [],
  templateUrl: './language-switcher-selector.component.html',
  styleUrl: './language-switcher-selector.component.css'
})
export class LanguageSwitcherSelectorComponent {
  currentLang: string | undefined;

  constructor(private i18nService: I18nService ) {

    this.i18nService.isReady$.subscribe((ready) => 
    {
      this.currentLang = i18nService.getCurrentLanguage();
    })
  }

  switchLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.i18nService.changeLanguage(lang);
    this.currentLang = lang;
  }

}
