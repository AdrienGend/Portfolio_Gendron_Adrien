document.addEventListener("DOMContentLoaded", function() {
    const sectionCards = document.querySelectorAll(".section-card");

    sectionCards.forEach(card => {
        const target = card.getAttribute("data-target");
        card.addEventListener("click", function() {
            window.location.href = target;
        });
    });
});

const sectionData = {
    administration: {
        title: 'administration',
        content: 'Contenu spécifique à la section Administration Poste Client...'
    },
    challenge48h: {
        title: 'challenge 48H',
        content: 'Contenu spécifique à la section Challenge 48H...'
    },
    java: {
        title: 'java',
        content: 'Contenu spécifique à la section Java...'
    },
    linux: {
        title: 'linux',
        content: 'Contenu spécifique à la section Linux...'
    },
    poo: {
        title: 'poo',
        content: 'Contenu spécifique à la section POO...'
    },
    infra: {
        title: 'infra',
        content: 'Contenu spécifique à la section Infra...'
    },
    hangman: {
        title: 'hangman',
        content: 'Contenu spécifique à la section Hangman...'
    },
    hangmanweb: {
        title: 'hangmanweb',
        content: 'Contenu spécifique à la section Hangman Web...'
    },
    groupietracker: {
        title: 'groupietracker',
        content: 'Contenu spécifique à la section Groupie Tracker...'
    },
    forum: {
        title: 'forum',
        content: 'Contenu spécifique à la section Forum...'
    },
    challengejs: {
        title: 'challengejs',
        content: 'Contenu spécifique à la section Challenge JS...'
    },
    reseau: {
        title: 'reseau',
        content: 'Contenu spécifique à la section Réseau...'
    },
    yboost: {
        title: 'yboost',
        content: 'Contenu spécifique à la section YBoost...'
    },
    ymersion: {
        title: 'ymersion',
        content: 'Contenu spécifique à la section Ymersion...'
    },

};

function showPopup(sectionId) {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    
    const section = sectionData[sectionId];
    
    popupContent.innerHTML = `<h2>${section.title}</h2><p>${section.content}</p>`;
    popupOverlay.style.display = 'block';
    popup.style.display = 'block';
}

function hidePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');

    popupOverlay.style.display = 'none';
    popup.style.display = 'none';
}
