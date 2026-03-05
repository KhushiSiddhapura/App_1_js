let score = parseInt(document.querySelector("#score").innerText)
let res
let randomNum

function generate() {
    randomNum = Math.floor(Math.random() * 5) + 1;
    document.getElementById("ranNum").value = randomNum;
}

let start = document.querySelector("#ranNum").addEventListener("start", generate())

let click_1 = document.getElementById("one").addEventListener("click", ()=>{
    res = document.getElementById("one").innerText
    console.log(res)
    if( randomNum == res) {
    score = score + 10;
    document.querySelector("#score").innerText = score
    generate();
}
})
let click_2 = document.getElementById("two").addEventListener("click", ()=>{
    res = document.getElementById("two").innerText
    console.log(res)
    if( randomNum == res) {
    score = score + 10;
    document.querySelector("#score").innerText = score
    generate();
}
})
let click_3 = document.getElementById("three").addEventListener("click", ()=>{
    res = document.getElementById("three").innerText
    console.log(res)
    if( randomNum == res) {
    score = score + 10;
    document.querySelector("#score").innerText = score
    generate();
}
})
let click_4 = document.getElementById("four").addEventListener("click", ()=>{
    res = document.getElementById("four").innerText
    console.log(res)
    if( randomNum == res) {
    score = score + 10;
    document.querySelector("#score").innerText = score
    generate();
}
})
let click_5 = document.getElementById("five").addEventListener("click", ()=>{
    res = document.getElementById("five").innerText
    console.log(res)
    if( randomNum == res) {
    score = score + 10;
    document.querySelector("#score").innerText = score
    generate();
}
})