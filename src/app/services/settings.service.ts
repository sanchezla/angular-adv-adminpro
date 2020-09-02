import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeSelected = document.querySelector('#theme');
  private links:NodeListOf<Element>;

  set setLinks(links) {
    this.links = links;
  }

  constructor() { 
   this.currentTheme();
  }

  checkCurrentTheme() {
    // TODO: ver posibilidad de hacerlo realizar esto de otra forma.
    this.links.forEach(link => {
      link.classList.remove('working');
      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.themeSelected.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        link.classList.add('working');
      }
    });
  }

  currentTheme() {
    localStorage.getItem('theme');
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.themeSelected.setAttribute('href', url);
  }

  onChangeTheme(theme:string) {

    const url = `./assets/css/colors/${theme}.css`;
    this.themeSelected.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }
  
}
