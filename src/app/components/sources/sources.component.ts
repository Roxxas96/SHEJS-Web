import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss'],
})
export class SourcesComponent implements OnInit {
  sources: Array<{
    titre: string;
    contenu: string;
    img: string;
    link: string;
  }> = [
    {
      titre: 'Définition de la censure',
      contenu: "L'internaute",
      img: 'assets/Source 1.png',
      link: 'https://www.linternaute.fr/dictionnaire/fr/definition/censure/',
    },
    {
      titre: 'La quadrature du net',
      contenu: 'Cartographie des acteurs',
      img: 'assets/Source 2.png',
      link: 'https://www.laquadrature.net/',
    },
    {
      titre: 'Internet without borders',
      contenu: 'Cartographie des acteurs',
      img: 'assets/Source 3.png',
      link: 'https://internetwithoutborders.org/organisation/',
    },
    {
      titre: 'Le Monde',
      contenu: 'Cartographie des acteurs',
      img: 'assets/Source 4.png',
      link:
        'https://www.lemonde.fr/pixels/article/2020/02/19/malgre-les-lois-l-etat-a-abandonne-aux-reseaux-sociaux-l-arbitrage-de-la-liberte-d-expression_6030122_4408996.html',
    },
    {
      titre: 'Agence 90',
      contenu: 'Historique des réseaux sociaux',
      img: 'assets/Source 5.png',
      link: 'https://www.agence90.fr/chronologie-innovations-reseaux-sociaux/',
    },
    {
      titre: 'Le Monde',
      contenu: 'Polémique sur la censure',
      img: 'assets/Source 6.png',
      link: '',
    },
    {
      titre: 'BFM TV',
      contenu: 'Polémique sur la censure',
      img: 'assets/Source 7.png',
      link: '',
    },
    {
      titre: 'La Croix',
      contenu: 'Journée mondiale contre la cyber-censure',
      img: 'assets/Source 8.png',
      link:
        'https://www.la-croix.com/Semaine-en-images/Journee-mondiale-contre-la-cyber-censure-_NG_-2010-03-12-548153',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
