function rand(){
var num = Math.random();
num = (num*6) + 1
num = Math.floor(num)
return num
}
var d1 = rand()
var d2 = rand()

if (d1=== 1){
document.querySelector(".img1").src = "images/dice1.png"
}else if (d1===2) {
document.querySelector(".img1").src = "images/dice2.png"
}else if (d1===3) {
document.querySelector(".img1").src = "images/dice3.png"
}else if (d1===4) {
document.querySelector(".img1").src = "images/dice4.png"
}else if (d1===5) {
document.querySelector(".img1").src = "images/dice5.png"
}else if (d1===6) {
document.querySelector(".img1").src = "images/dice6.png"
}

if (d2=== 1){
document.querySelector(".img2").src = "images/dice1.png"
}else if (d2===2) {
document.querySelector(".img2").src = "images/dice2.png"
}else if (d2===3) {
document.querySelector(".img2").src = "images/dice3.png"
}else if (d2===4) {
document.querySelector(".img2").src = "images/dice4.png"
}else if (d2===5) {
document.querySelector(".img2").src = "images/dice5.png"
}else if (d2===6) {
document.querySelector(".img2").src = "images/dice6.png"
}

if (d1>d2){
  document.querySelector("h1").textContent = "Player 1 Wins"
} else if (d2>d1) {
  document.querySelector("h1").textContent = "Player 2 Wins"
} else {
  document.querySelector("h1").textContent = "It's a tie"
}
