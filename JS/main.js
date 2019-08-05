// Canvas Functions

// Adding new cards

function newCard(colorIn) {
  var color = colorIn
  // Creates a new div
  var card = document.createElement("div");
  // Sets the class
  card.setAttribute("class","card _"+color);
  // Appends the card to the designed column
  document.getElementById(color+"Cards").appendChild(card);

}
