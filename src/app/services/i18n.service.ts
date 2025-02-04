import { Injectable, OnInit } from '@angular/core';
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

  //Obtener traducción de array
  translateArray(key: string): string[] {
    const result = i18next.t(key, { returnObjects: true }) as string[]
    return result;
  }

  // Obtener idioma actual
  getCurrentLanguage(): string {
    return i18next.language;
  }
}