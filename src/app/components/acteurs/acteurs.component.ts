import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.scss'],
})
export class ActeursComponent implements OnInit {
  acteurs: Array<{ titre: string; contenu1: string; contenu2: string }> = [
    {
      titre: 'États',
      contenu1:
        "- États-Unis : La liberté d’expression est défendue par le premier amendement (« le Congrès ne pourra faire aucune loi ayant pour objet (…) de limiter la liberté de parole ou de presse ») mais cela n'est pas appliqué en pratique, surtout face aux grandes entreprise de réseaux sociaux, qui sont des entreprises privées et internationales, et qui ont d'autres intérêts que la liberté d'expression. Cependant, les lois encadrent les principes de non-discrimination et non-incitation à la haine. L'État a souvent des difficultés à appliquer les lois face à ces grandes entreprises. Ce sont en général des programmes informatiques qui s'occupent de censurer la majeure partie des contenus qui ne respectent pas les règles en utilisant par exemple des mots clé. Ce n’est que pour des personnalités influente qu’il y a systématiquement une censure faite manuellement.",
      contenu2:
        "- France : La surpuissance des grandes entreprises de réseaux sociaux et le flou qu'il existe autour de la limite de la liberté d'expression (une valeur importante française) rendent difficile l'application d'une censure sur des sujets controversés. Néanmoins, les contenus racistes, haineux, terroristes, etc. sont encadrés par la loi et sont en général assez bien réprimé par les réseaux sociaux, même si des progrès devraient certainement être fait",
    },
    {
      titre: 'Utilisateurs',
      contenu1:
        "La plupart des utilisateurs sont d'accord avec la politique de censure des contenus violents, des fausses informations, des mouvements conspirationnistes, des ventes illégales, du contenus haineux, etc. D'autant plus qu'ils ont la possibilité de signaler les contenus qui leurs semblent inadaptés pour qu'ils soient analysés à la main par des modérateurs. Mais, peu de personnes seraient d'accord avec la censure d'une personnalité politique qu'ils apprécient. Par exemple, les partisans de Donald Trump ou de Dieudonné ont été révoltés par leur censure sur les réseaux sociaux.",
      contenu2:
        'La grande majorité des utilisateurs ne se rendent pas compte qu\'ils sont dans ce qui est appelé une "filter bubble" dans leur réseaux sociaux. Cela signifie que la majorité des informations qui leurs sont présentées sont des informations qui vont dans le sens de leur conviction politiques, religieuses, éthiques, etc. Cela pourrait être considéré comme une certaine forme de censure douce. Comme les utilisateurs n\'aiment pas la plupart du temps se confronter à des opinions différentes des leurs, ils s\'enferment volontairement dans une "bulle" d\'information restreintes à leurs idées',
    },
    {
      titre: 'Réseaux sociaux',
      contenu1:
        "« Nous pensons que permettre au président de continuer à utiliser nos services pendant cette période pose des risques trop grands » Mark Zuckerberg par rapport à la censure du compte Twitter de TrumpDu moment où cela respecte les lois qui leurs sont imposées, les réseaux sociaux ont le champ libre en ce qui concerne la censure. Par exemple, Facebook est un réseau social tout public, c'est pourquoi la nudité est censurée, mais ce n'est pas le cas de Twitter qui se contente d'avertir leur utilisateur au préalable",
      contenu2:
        "Youtube a fait polémique il y a quelques années car elle mettait en avant des contenus conspirationnistes et des fake news. C'est alors que Google a réagi et a commencé à censurer activement ce type d'information. Le revenu publicitaire est très important pour Google (propriétaire de YouTube), c’est pourquoi la censure, qu’elle soit moralement juste ou non, ne vient pas au premier plan en termes de priorité.",
    },
    {
      titre: 'Personnalités politiques',
      contenu1:
        "- Aurore Bergé, présidente déléguée des députés LREM : « On peut combattre Trump et le chaos qu'il a entraîné, mais refuser de se réjouir de voir les GAFA décider seuls, sans contrôle du juge, sans recours possible, quel président en exercice a le droit d'avoir un compte ou non sur Twitter » - Aurore Bergé, présidente déléguée des députés LREM",
      contenu2:
        "- Denis Ramond, docteur en sciences politiques et spécialiste des questions de liberté d'expression « Les plateformes évoluent dans un cadre juridique ambigu : la section 230 de la Communication Decency Act américain les exonère de toute responsabilité quant au contenu publié en ligne, mais les laisse libres de se réguler comme elles le souhaitent. Rien n'empêche donc ces plateformes de se doter d'outils de censure de plus en plus contraignants, et c'est ce qu'elles ont fait pour deux raisons. D'une part, la dépendance aux revenus publicitaires les incite presque mécaniquement à lisser leur image pour ne pas perdre d'utilisateur ; d'autre part, le laxisme supposé des réseaux sociaux en matière d'appel au terrorisme, de « complotisme » et de fausses nouvelles a été pointé du doigt par les autorités politiques, qui à défaut de réussir à réguler, ils misent sur l'action des réseaux sociaux pour appliquer la loi.",
    },
    {
      titre: 'QAnon (mouvement conspirationniste des États-Unis)',
      contenu1:
        "La censure de ce mouvement conspirationniste QAnon a semblé pour ses partisans une atteinte grave à la liberté d'expression et une tentative des grandes entreprises et des États-Unis d'imposer leur contrôle sur l'opinion de la société",
      contenu2: '',
    },
    {
      titre: 'Organisations',
      contenu1:
        "- Institute for Strategic Dialogue : « Dans le cas de Donald Trump et des comptes QAnon (mouvance conspirationniste née aux Etats-Unis) après l'incident au Capitole, les entreprises du web ont agi en prenant en compte le risque de nouvelles violences. Sur des sujets comme le terrorisme ou la pédopornographie, elles prennent des initiatives similaires de manière expéditive pour éviter le pire. [...] La question essentielle n'est pas de savoir si elles ont bien fait ou pas de censurer X à un moment T. Ce qui compte c'est de réaliser l'influence que ces réseaux sociaux ont sur la formation de nos opinions et la coordination de nos actions. Ce qui compte, c'est de refuser l'opacité de leurs processus de décisions, et de réfléchir collectivement à des moyens pour pallier ce déséquilibre qui a des effets néfastes sur nos démocraties.",
      contenu2:
        '- Union européenne: Limite législative favorisant garantissant une certaine liberté d’expression et à la réduction des contenus à caractères illégaux, haineux, etc. mais son influence est limitée face aux grandes entreprises des réseaux sociaux',
    },
    {
      titre: 'Associations',
      contenu1:
        '- Internet Sans Frontières ISF (Internet Sans Frontière) mènent des actions pour la protection des blogueurs et des lanceurs d’alerte : "Grâce à une mobilisation internationale menée par Internet Sans Frontières, Hossein Derakshan, le père de la blogosphère iranienne, a été libéré en 2014, après 3 années de détention", Ils ont menés des actions pour demander l\'asile pour Edward Snowden. Ils dénoncent les coupures et perturbations du réseau Internet, et combattent notamment la censure sur les réseaux sociaux par les États (Guinée, Tchad, Algérie, Bénin, Cameroun, Togo, etc.). Ils prônent l’accès de tous à un Internet libre. "Internet Sans Frontières a dénoncé l’impact négatif de la suppression de la neutralité du net aux USA pour les pays émergents',
      contenu2:
        '- La Quadrature du Net La Quadrature du Net lutte pour la décentralisation du Web et contre l’influence des géants du Web sur le débat public. À ce titre, elle cherche à imposer des obligations aux grands réseaux sociaux, notamment celle de devenir interopérables : permettre à leurs utilisateurs de communiquer avec les utilisateurs d’autres plateformes équivalentes.” Ils cherchent à réduire les violation de nos données personnelles, par exemple : “La loi française permet à la police d’exiger aux hébergeurs, moteurs de recherche et fournisseurs d’accès à Internet de censurer les contenus qu’elle considère relever du terrorisme ou de la pédopornographie, et ceci sans l’autorisation d’un juge. La Quadrature s’y est opposée au Parlement puis devant les juges" “La Quadrature du Net a bataillé ferme contre la loi HADOPI, présentée sous la présidence Sarkozy pour réprimer le partage d’œuvres culturelles sur les réseaux peer-to-peer. Pendant plus de deux ans, nous avons témoigné de la corruption de la décision politique, avec l’influence indue des industries culturelles sur cette loi qui confiait à une autorité administrative la possibilité de couper l’accès Internet d’un foyer. Nous avons réussi à tenir en échec la version la plus répressif du dispositif”',
    },
  ];

  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
