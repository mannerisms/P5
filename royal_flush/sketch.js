var numdraws;
var total;
var closest;
var cards;

function setup() {
    noCanvas();
    numdraws = 0;
    total = [[48,49,50,51,52],[43,44,45,46,47],[38,39,40,41,42],[33,34,35,36,37]]
}

function draw() {
    // Create fresh deck of cards
    cards = [];
    for (i=1; i<53; i++){
        cards.push(i)
    }
    // increase draw counter
    numdraws++;
    var match = getHand().sort((a, b) => a - b);
    for (i=0; i<total.length; i++){
        result = superbag(total[i], match);
        if (result == true) {
            console.log("ROYAL FLUSH IN " + numdraws + " DRAWS!!");
            stop();
        }
    }
}

function getHand() {
    // Draw four random cards and add sum values
    var result = [];
    for (i=0; i<7; i++){
        // Pick a random card
        var random_card = round(random(cards.length-1));
        // Add value of random card to total
        result.push(cards[random_card]);
        // Remove card from deck once selected
        cards.splice(random_card, 1);
    }
    return result;
}

function superbag(sup, sub) {
    sup.sort();
    sub.sort();
    var i, j;
    for (i=0,j=0; i<sup.length && j<sub.length;) {
        if (sup[i] < sub[j]) {
            ++i;
        } else if (sup[i] == sub[j]) {
            ++i; ++j;
        } else {
            // sub[j] not in sup, so sub not subbag
            return false;
        }
    }
    // make sure there are no elements left in sub
    return j == sub.length;
}