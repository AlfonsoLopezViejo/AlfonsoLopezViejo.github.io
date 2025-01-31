import { Injectable, OnInit } from '@angular/core';
import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18nService{
  private isReadySubject = new BehaviorSubject<boolean>(false);
  isReady$ = this.isReadySubject.asObservable();

  constructor() 
  {
    this.initializeI18next();  
  }

  private initializeI18next(): void {
    i18next
      .use(Backend)
      .use(LanguageDetector)
      .init({
        fallbackLng: 'es',
        debug: true,
        backend: {
          loadPath: '/assets/i18n/{{lng}}.json',
        },
      })
      .then(() => {
        this.isReadySubject.next(true); // Notificar que i18next está listo
      })
      .catch((err) => {
        console.error('Error al inicializar i18next:', err);
      });
      
  }

  // Cambiar idioma
  changeLanguage(lang: string) {
    i18next.changeLanguage(lang);
  }

  // Obtener traducción
  translate(key: string): string {
    return i18next.t(key);
  }

  // Obtener idioma actual
  getCurrentLanguage(): string {
    return i18next.language;
  }
}