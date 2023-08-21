document.addEventListener("DOMContentLoaded", function() {
    const sectionCards = document.querySelectorAll(".section-card");

    sectionCards.forEach(card => {
        card.addEventListener("click", function() {
            const target = card.getAttribute("data-target");
            showPopup(target);
        });
    });
});

const sectionData = {
    administration: {
        title: 'administration',
        content: 'J ai entrepris ce projet en autonomie dans le but d acquérir une compréhension approfondie du système d exploitation Windows ainsi que de ses fonctionnalités opérationnellesCe projet se démarque en tant que modèle classique intégrant un équilibre entre une composante théorique substantielle et une application pratique à travers divers exercices et travaux pratiques RÉSULTATS OBTENUS Maîtrise de l installation et de la configuration d un environnement WindowsAcquisition d une solide familiarité avec les commandes fondamentales de l environnement Windows'
                        },
    challenge48h: {
        title: 'challenge48h',
        content: 'L un des projets qui m a le plus enthousiasmé consistait en un défi initié par notre école L objectif était de concevoir un escape game virtuel et de le soumettre à l évaluation des autres participants après seulement 48 heures de développement intensif J ai eu le plaisir de collaborer avec d autres étudiants sur ce projet. Chaque équipe était constituée de 2 ou 3 étudiants en première année (B1) ainsi que de 2 étudiants en deuxième année (B2) À travers cette expérience j ai acquis les compétences suivantes : Collaboration au sein d une équipe multidisciplinaire Capacité à travailler efficacement sous contraintes de temps.Acquisition de connaissances relatives aux méthodes de dissimulation d informations en ligne'
    },
    java: {
        title: 'java',
        content: 'Un autre projet, plus conventionnel, mêlant théorie et application pratique au travers de travaux pratiquesTous les TP étaient réalisés en binôme avec la même personneIl sagissait en réalité d une opportunité pour assimiler le langage et en exercer l applicationRÉSULTATS ACQUISMaîtrise du langage JavaApprentissage de la programmation orientée objet.Collaboration en groupe.Création de schémas XML.'
    },
    linux: {
        title: 'linux',
        content: 'Un projet semblable à celui concernant Windows, impliquant une combinaison de théorie mise en pratique au moyen d exercices et de travaux pratiques.J ai travaillé en solo sur ce projet, dans le but d acquérir les fondements de Linux.RÉSULTATS ACQUISAcquisition de compétences relatives à Linux. Maîtrise des commandes essentielles Apprentissage de l installation et de la configuration de Linux.'
    },
    poo: {
        title: 'poo',
        content: 'Un autre projet d apprentissage axé sur la programmation orientée objet.Ce projet a été réalisé en solitaire, étant donné son caractère pédagogique.RÉSULTATS ACQUIS Maîtrise de la programmation orientée objet en utilisant plusieurs langages.Compétence dans la création de schémas UML.'
    },
    infra: {
        title: 'infra',
        content: 'Le projet le plus ambitieux de l année, étalé sur plusieurs mois, visait à fusionner les compétences acquises dans les projets "Linux AdminPostClient" et "Réseaux". L objectif était de concevoir un Système Informatique complet pour une petite entreprise à partir de zéro. Le projet impliquait également la création d une documentation exhaustive couvrant toutes les étapes du processus ainsi que des explications justifiant nos choix.Ce projet était réalisé en binôme.Les débuts du projet étaient relativement calmes, avec des tâches initiales plutôt simples à accomplir. Cependant, au fil du temps, des défis sont survenus, en particulier avec la gestion des Machines Virtuelles qui constituaient les éléments essentiels du système informatique. Malgré tout, nous avons réussi à relever ces défis avec succès.RÉSULTATS ACQUISCollaboration en binôme avec une organisation rigoureuse.Capacité à mener des recherches précises pour résoudre les problèmes rencontrés.Compétence dans la configuration et la gestion des machines virtuelles.Compréhension approfondie du fonctionnement des réseaux, de leur composition et de leurs besoins.Aptitude à paramétrer un pare-feu.Mise en place de stratégies de sauvegarde régulières. Lien GITHUB : https://github.com/AdrienGend/Projet_INFRA_SI_GENDRON_BOUTTE'
    },
    hangman: {
        title: 'hangman',
    content: 'L un de nos projets initiaux consistait à créer un jeu du pendu dans le terminal.Ce travail a été accompli en collaboration avec un partenaire.Ce projet nous a offert l opportunité d acquérir une maîtrise des fondements du langage de programmation Golang.RÉSULTATS ACQUISMaîtrise de la syntaxe et des concepts du langage Golang.Apprentissage de la programmation orientée objet Développement des compétences en travail d équipe. Lien GITHUB :https://github.com/M1txY/hangman-classic'
    },
    hangmanweb: {
        title: 'hangmanweb',
        content: 'La continuation du projet Hangman consistait à rendre le jeu du pendu jouable sur un site web.Tout comme le projet précédent, celui-ci a été réalisé en collaboration avec le même partenaire.Cette étape nous a permis de comprendre comment connecter le langage de programmation Golang avec le web en utilisant des modèles de pages (templates) pour la création de sites dynamiques.RÉSULTATS ACQUISDéveloppement des compétences de travail en binôme.Approfondissement de la connaissance du langage Golang.Acquisition de compétences dans l intégration du Golang avec le HTML.Continuation de l apprentissage de la programmation orientée objet.Expérience dans l utilisation de modèles pour la création de contenu web dynamique. Lien GITHUB :https://github.com/M1txY/HANGMAN_WEB_BOUTTE_GENDRON'
    },
    groupietracker: {
        title: 'groupietracker',
        content: 'Un projet qui a suscité moins d enthousiasme de ma part cette année consistait à collaborer avec une API pour récupérer des données et les afficher dans un site web.J ai travaillé seul sur ce projet, bien que je trouve dommage de ne pas avoir pu collaborer, car l expérience en groupe aurait pu être enrichissante, même si, d un point de vue pédagogique, l approche individuelle peut être bénéfique.Je dois admettre que le résultat de ce projet ne me satisfait pas pleinement, car le temps imparti n a pas été suffisant pour le mener à bien.RÉSULTATS ACQUISCompétence dans la manipulation d une API.Maîtrise de la liaison entre le web et les données fournies par une API.Expérience de travail en solitaire. Lien GITHUB :https://github.com/AdrienGend/GroupieTracker_Gendron_Adrien'
    },
    forum: {
        title: 'forum',
        content: 'L un des projets les plus imposants de l année, en termes de charge de travail, a consisté en la conception complète d un forum opérationnel. Ce forum avait pour but de permettre aux utilisateurs d initier des débats sur une variété de sujets.La particularité de ce projet résidait dans la constitution d équipes incontournables, composées de 2 à 4 membres.RÉSULTATS ACQUISDéveloppement de compétences avancées en organisation du travail.Maîtrise de l affichage dynamique de données.Création de comptes utilisateurs fonctionnels.Utilisation compétente de bases de données.Pratique de l intercommunication entre plusieurs langages de programmation. Lien GITHUB :https://github.com/valentinlamine/LAMINE_GAMBEY_VOCANSON_GENDRON_Forum'
    },
    challengejs: {
        title: 'challengejs',
        content: 'Un projet qui initialement m inspirait de l appréhension, mais qui au final m a apporté beaucoup de satisfaction ! Son objectif était de nous familiariser avec JavaScript afin d améliorer nos designs et animations web.Ce projet s est étalé sur plusieurs travaux pratiques (TP), qui contribuaient à notre note finale, dont le point culminant était une évaluation en direct (Live Coding). Lors de cette évaluation, nous devions recréer un site web précis sans accès à Internet et avec seulement deux heures pour le reproduire.La composition des groupes pour les TP variait en fonction de la complexité de chaque exercice, alternant entre des travaux individuels et collaboratifs.RÉSULTATS ACQUISAcquisitions de connaissances en JavaScript.Développement de compétences en HTML et CSS.Maîtrise de l animation web.Expérience dans la réalisation de projets collaboratifs et individuels.Apprentissage de la gestion du temps et de la pression lors du Live Coding.'
    },
    reseau: {
        title: 'reseau',
        content: 'Un projet réalisé en parallèle avec le projet "InfraSi", puisqu il nous fournissait les fondements nécessaires en matière de réseaux. Ce projet comprenait des phases de travail individuel ainsi que des périodes de collaboration en groupe.RÉSULTATS ACQUISAcquisition de compétences fondamentales en réseautage.Capacité à créer des schémas de réseau.Apprentissage de l utilisation de logiciels de simulation de réseaux.'
    },
    yboost: {
        title: 'yboost',
        content: 'Un projet entièrement consacré aux étudiants, dont l objectif était de créer ou de rejoindre des projets initiés par d autres étudiants, avec l ambition de mener à bien toutes les annonces liées à ces projets.Ce projet impliquait naturellement un travail en équipe, et j ai fait partie d un groupe composé de 8 personnes.Notre projet consistait à établir une équipe E-Sport dédiée au jeu Counter-Strike Global Offensive. Nous avons développé un site web spécifique, partagé des clips sur les réseaux sociaux, organisé des entraînements réguliers ainsi que des tournois.RÉSULTATS ACQUISDéveloppement de compétences en gestion de grands groupes et adaptation organisationnelle.Collaboration avec plusieurs langages de programmation et l intégration d API.Acquisition de compétences en gestion complète de projet, de sa conception à sa finalisation.Apprentissage de la gestion de projets impliquant des participants de diverses origines académiques.'
    },
    ymersion: {
        title: 'ymersion',
        content: 'Le tout premier projet de l année était une opportunité offerte par les Ymmersion, permettant un apprentissage accéléré du langage Golang.L objectif était de créer un jeu vidéo en utilisant exclusivement le terminal et le langage Golang.Pour ce projet, nous étions une équipe de trois personnes, et nous avons développé un jeu ancré dans l univers médiéval-fantastiqueRÉSULTATS ACQUISApprentissage approfondi du langage de programmation Golang.Maîtrise des concepts de programmation orientée objet.Capacité à respecter un cahier des charges incluant de nombreuses fonctionnalités. Lien GITHUB :https://github.com/matteoVcs/Vocanson_Monforte_Gendron_red'
    },

};

function showPopup(sectionId) {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    const popupTitle = document.getElementById('popupTitle');
    const popupText = document.getElementById('popupText');

    const section = sectionData[sectionId];

    popupTitle.textContent = section.title;
    popupText.textContent = section.content;

    popupOverlay.style.display = 'block';
    popup.style.display = 'block';
}

function hidePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');

    popupOverlay.style.display = 'none';
    popup.style.display = 'none';
}
