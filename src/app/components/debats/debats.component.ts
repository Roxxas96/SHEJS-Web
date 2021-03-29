import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debats',
  templateUrl: './debats.component.html',
  styleUrls: ['./debats.component.scss'],
})
export class DebatsComponent implements OnInit {
  debats: Array<{ titre: string; contenu: string }> = [
    {
      titre: '',
      contenu:
        "Durant nos recherches,il est apparu que cette controverse s’articule principalement autour d’un point : la surpuissance des GAFA par rapport aux états. “Le problème majeur est que les réseaux sociaux étant des organismes privés il est compliqué d'interagir avec leur contenu” (Analyse de Jean-Claude Beaujour, avocat international et vice-président du comité France-Amériques).",
    },
    {
      titre: '',
      contenu:
        'Mais il ne faut pas oublier qu’il s’ajoute à ça une troisième grande classe d’acteurs dont le poids n’est plus à négliger étant donné l’importance que ces dits réseaux ont pris: les particuliers (ou plus largement les utilisateurs particuliers des réseaux, à l’image de vous ou moi). Nous allons articuler cette étude autour du point majeur que nous avons cité plus haut, notamment en nous appuyant sur la récente affaire de la censure de Donald Trump, ex-président des états-unis.',
    },
    {
      titre: '',
      contenu:
        'En effet dans ce conflit nous avons d’une part les organismes officiels tel les états, les agrégations d’états (Union Européenne, etc.) qui doivent jouer sur deux tableaux : d’une part ils doivent respecter la liberté d’expression (notamment dans les pays prônant ces valeurs, en majorité des pays occidentaux, mais nous reviendrons aussi sur le cas de la Chine dans un autre article) qui est par exemple défendue aux états-unis par le premier amendement (« le Congrès ne pourra faire aucune loi ayant pour objet (…) de limiter la liberté de parole ou de presse »). Historiquement et lexicalement parlant on peut remarquer que, le fait que cet amendement soit le premier inscrit dans la loi américaine et que ce soit l’un des rares à ne pas avoir subi un impact au cours du temps, c’est d’une importance capitale de le respecter. Cependant ces mêmes états doivent encadrer les principes de non-discrimination et non-incitation à la haine.',
    },
    {
      titre: '',
      contenu:
        "Si les états sont souvent d’accord avec les décisions prisent par les réseaux sociaux qui ne font qu’appliquer les lois qu’ils proposent, ils critiquent cependant que ces derniers fassent la police eux-même (« On peut combattre Trump et le chaos qu'il a entraîné, mais refuser de se réjouir de voir les GAFA décider seuls, sans contrôle du juge, sans recours possible, quel président en exercice a le droit d'avoir un compte ou non sur Twitter » Aurore Bergé, présidente déléguée des députés LREM par rapport à la censure de Donald Trump). On peut également  rajouter l’interview de Iris Boyer, secrétaire générale de la branche française de l'ISD (institut supérieur du droit) dans le journal les echos soutenant cette idée.",
    },
    {
      titre: '',
      contenu:
        "Quant à eux les GAFA souhaitent censurer seulement ce qui porte atteinte à l’intégrité d’autrui (« Nous pensons que permettre au président de continuer à utiliser nos services pendant cette période pose des risques trop grands » Mark Zukenberg par rapport à la censure de Trump) et restent souvent muet quant à la question car dans le cas de l’utilisateur lambda ce sont des bots ou des groupements d’anonymes fonctionnant par signalement et mot-clé condamnant l’incitation à la haine, le racisme, la pornographie, la nudité et autres sujets portant atteinte à l’intégritée morale de chacun. Les cas de censure les plus connus restent ceux de personnalités (à l’instar de celui de Trump) car cette décision ne provient non pas d’un comité d’anonymes ou d’un bot mais des dirigeants de la firme. Cela leur donne un pouvoir immense car, s' ils sont en capacité de censurer un président, où s’arrête leur pouvoir par rapport à la liberté d’expression. Ils seraient alors théoriquement capables de censurer une opinion, faisant alors obstacle à différents courants de pensée.",
    },
    {
      titre: '',
      contenu:
        "Comme dit un peu plus haut, la majorité des réseaux offrent la possibilité de signaler un contenu pour différents motifs (racisme, nudité ect…). Offrant à un nombre d’utilisateur grandissant la capacité de “faire eux-même la police” ou plus clairement de censurer des contenus inappropriés. Cependant le sondage que nous avons réalisé auprès d’une tranche de population, majoritairement étudiante, nous montre que les avis diffèrent à propos de ce qui doit être censuré, en effet si la majorité s'accorde sur la censure des fake news, de la pornographie ou du racisme, ce n’est pas le cas des informations sujet à controverse ou de la nudité. On remarque aussi que ces deux sujet sont subjectifs car quelle est la limite entre nudité et pornographie? Opinion controversée et fake news? C’est ce qui nous permet de soulever un nouveau nœud de problème: chacun a une opinion différente sur ce qui doit être censuré et il est dur de créer une loi qui convient à tout le monde. D’autant plus quand chacun peut se permettre de signaler un compte qui ne lui plaît pas.",
    },
    {
      titre: '',
      contenu:
        'On peut déjà trouver des cas de censure abusifs sur des réseaux sociaux, nous avons par  exemple interviewé le youtubeur Valek, proposant un contenu portant à la réflexion et parfois à l’opposé de la bien pensance, par écrit pour en savoir plus quant aux nombreuses fois où il a pu être censuré.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
