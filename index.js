// document.getElementById("count-el").innerText = 7
// let count = 0
// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45 
// console.log(bonusPoints)


/**
function increment() {
    console.log("The button was clicked")
}

function myLogger() {
    console.log(42)
}

let lap1 = 34
let lap2 = 33
let lap3 = 36

function myLap(){
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

myLap()

let lapsCompleted = 0

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)
}

incrementLap()

incrementLap()

incrementLap()
 */


/**
 * PSEUDOCODE
 * initialize the count as 0
 * listen for clicks on the increment button
 * increment the count variable when the button is clicked
 * change the count-el in the HTML to reflect the new count
 */


let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0 
function increment() {
    console.log("clicked")
    count = count + 1
    console.log(count)
}