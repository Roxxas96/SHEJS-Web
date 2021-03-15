import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  carousselInfo: Array<{
    imageUrl: string;
    title: string;
    desc: string;
    button: string;
  }> = [
    {
      imageUrl: 'assets/Marketing_Expert_California.jpg',
      title: 'La censure sur les réseaux sociaux',
      desc: 'Introduction au sujet',
      button: '',
    },
    {
      imageUrl: 'assets/Photo-actualite.png',
      title: 'Le sujet',
      desc: '',
      button: 'En savoir plus',
    },
    {
      imageUrl: 'assets/Photo-actualite.png',
      title: 'La controverse',
      desc: '',
      button: 'En savoir plus',
    },
  ];

  eventsInfo: Array<{
    imageUrl: string;
    title: string;
    desc: string;
    button: string;
  }> = [
    {
      imageUrl: 'assets/Photo-actualite.png',
      title: 'Actualité n°1',
      desc: 'Notre superbe activité',
      button: 'En savoir plus',
    },
    {
      imageUrl: 'assets/Photo-actualite.png',
      title: 'Actualité n°2',
      desc: 'Notre superbe activité',
      button: '',
    },
    {
      imageUrl: 'assets/Photo-actualite.png',
      title: 'Actualité n°3',
      desc: 'Notre superbe activité',
      button: '',
    },
  ];

  menuInfo: Array<{ title: string; items: Array<string> }> = [
    {
      title: 'Boissons fraiches',
      items: ['fanta', 'coca', 'ice tea'],
    },
    {
      title: 'Boissons chaudes',
      items: ['café', 'chocolat chaud', 'thé'],
    },
    {
      title: 'Snacks',
      items: ['mars', 'princes', 'kinder bueno'],
    },
  ];

  ngOnInit() {
    window.addEventListener('scroll', () => {
      Array.from(document.querySelectorAll('.activable')).forEach(
        (val, key) => {
          const rect = val.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const top = rect.top + scrollTop + rect.height;
          const scroll = window.scrollY + window.screen.height;
          if (scroll >= top) {
            val.classList.add('active');
            val.classList.remove('activable');
          }
        }
      );
    });
  }

  scrollTo(element: Element) {
    var rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.pageYOffset || document.documentElement.scrollTop,
      behavior: 'smooth',
    });
  }

  getImage(index: number) {
    return 'url(' + this.eventsInfo[index].imageUrl + ')';
  }
}
