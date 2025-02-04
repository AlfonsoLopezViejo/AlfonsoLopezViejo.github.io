import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher-selector',
  imports: [],
  templateUrl: './language-switcher-selector.component.html',
  styleUrl: './language-switcher-selector.component.css'
})
export class LanguageSwitcherSelectorComponent {
  currentLang: string | undefined;

  constructor(private translation: TranslateService) {

    this.currentLang = translation.currentLang;
  }

  switchLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translation.use(lang);
    this.currentLang = lang;
  }

}
