document.addEventListener("DOMContentLoaded", function() {
    const sectionCards = document.querySelectorAll(".section-card");

    sectionCards.forEach(card => {
        const target = card.getAttribute("data-target");
        card.addEventListener("click", function() {
            window.location.href = target;
        });
    });
});
