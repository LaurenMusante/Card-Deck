//BUSINESS LOGIC
function createCardDeck() {
  var suits = [" of Hearts", " of Spades", " of Diamonds", " of Clubs"];
  var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  var deck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      deck.push(values[j] + suits[i]);
    }
  }
  return deck;
}

// FRONT END LOGIC (UI)
$(document).ready(function(){
  $("#result").click(function(){
    $(".output").text(createCardDeck().join(", "));
  });
});
