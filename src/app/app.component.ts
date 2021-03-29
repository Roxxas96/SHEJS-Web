import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
      setTimeout(() => {
        Array.from(document.querySelectorAll('.activable')).forEach(
          (val, key) => {
            const rect = val.getBoundingClientRect();
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            const top = rect.top + scrollTop + rect.height / 2;
            const scroll = window.scrollY + window.screen.height;
            if (scroll >= top) {
              console.log('test');
              val.classList.add('active');
              val.classList.remove('activable');
            }
          }
        );
      }, 100);
    });
    window.addEventListener('scroll', () => {
      Array.from(document.querySelectorAll('.activable')).forEach(
        (val, key) => {
          const rect = val.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const top = rect.top + scrollTop + rect.height / 2;
          const scroll = window.scrollY + window.screen.height;
          if (scroll >= top) {
            val.classList.add('active');
            val.classList.remove('activable');
          }
        }
      );
    });
    window.addEventListener('load', () => {
      Array.from(document.querySelectorAll('.activable')).forEach(
        (val, key) => {
          const rect = val.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const top = rect.top + scrollTop + rect.height / 2;
          const scroll = window.scrollY + window.screen.height;
          if (scroll >= top) {
            val.classList.add('active');
            val.classList.remove('activable');
          }
        }
      );
    });
    window.addEventListener('resize', () => {
      Array.from(document.querySelectorAll('.activable')).forEach(
        (val, key) => {
          const rect = val.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const top = rect.top + scrollTop + rect.height / 2;
          const scroll = window.scrollY + window.screen.height;
          if (scroll >= top) {
            val.classList.add('active');
            val.classList.remove('activable');
          }
        }
      );
    });
  }
}
