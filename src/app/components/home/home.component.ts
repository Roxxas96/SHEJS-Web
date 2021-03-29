import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carousselInfo: Array<{
    imageUrl: string;
    title: string;
    desc: string;
    button: string;
    link: string;
  }> = [
    {
      imageUrl: 'assets/Illustration-Resaux.jpg',
      title: 'La censure sur les réseaux sociaux',
      desc:
        'Nous allons nous intéresser à une polémique majeure, mise récemment sur le devant de la scène par le bannissement du compte Twitter de Donald Trump, ancien président des Etats-unis. ',
      button: '',
      link: '',
    },
    {
      imageUrl: 'assets/Carte-Mentale.png',
      title: 'Le sujet',
      desc: '',
      button: 'En savoir plus',
      link: '/acteurs',
    },
    {
      imageUrl: 'assets/Frise.png',
      title: 'La controverse',
      desc: '',
      button: 'En savoir plus',
      link: '/histoire',
    },
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
