
function turnLeft() {
    const cards = document.querySelectorAll(".homepage-team-card");
    const cardNode = cards[0];
    cards[0].className = "homepage-team-card homepage-team-move-out-left";

    setTimeout(function() {
        if (cards.length > 3) {
            cardNode.classList.add("homepage-team-card--hide");
            cards[3].className = "homepage-team-card move-to-position2-from-left";
        }
        cards[0].remove();
        cards[1].className = "homepage-team-card move-to-position1-from-left";
        cards[2].className = "homepage-team-card move-to-position2-from-left";

        document.querySelector(".homepage-team-cards").appendChild(cardNode);

    }, 500);

}

function turnRight() {
    const cards = document.querySelectorAll(".homepage-team-card");
    cards[2].className = "homepage-team-card homepage-team-move-out-right";
    setTimeout(function() {
        const noOfCards = cards.length;
        if (noOfCards > 2) {
            cards[2].className = "homepage-team-card homepage-team-card--hide";
        }

        const tempCard = cards[noOfCards - 1];
        tempCard.classList.remove("homepage-team-card--hide");
        cards[noOfCards - 1].remove();
        let parentObj = document.querySelector(".homepage-team-cards");
        parentObj.insertBefore(tempCard, parentObj.firstChild);
        tempCard.className = "homepage-team-card move-to-position1-from-right";
        cards[0].className = "homepage-team-card move-to-position2-from-right";
        cards[1].className = "homepage-team-card move-to-position3-from-right";
    }, 500);

}