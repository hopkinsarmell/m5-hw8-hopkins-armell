// Create an Array of at least 3 losing messages
var messages = ['try again', 'better luck next time', 'not quite right...']
// Create variables to count wins and losses
var wins = 0
var losses = 0
// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageEl = document.getElementById('message')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')
// target all .box elements and attach a click event listener to each one using a loop
var boxElements = document.querySelectorAll('.box')
for (let i = 0; i < boxElements.length; i++) {
    var boxElement = boxElements[i];
    // console.log(boxElement)
    boxElement.onclick = function(event) {
// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
var numWasClicked = Number(event.target.textContent)
    //console.log(typeof boxNumWasClicked, 10))
    //console.log(Number(boxNumWasClicked))
    //console.log(+boxNumWasClicked)
// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
let winningBox = Math.floor(Math.random()*4)
// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
if (winningBox === Math.floor(Math.random()*4)) {
    messageEl.textContent = "YOU DID IT!"
    let w=wins+=1
    winsEl.textContent="wins : " + w
  } else {
// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
var randomIndex = Math.floor(Math.random()*3)
        messageEl.textContent = messages[randomIndex]
        let l=losses+=1
        lossesEl.textContent="losses : " + l
      }
      }
}