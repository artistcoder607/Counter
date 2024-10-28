let count = 0;

function increase() {
    count++
    document.querySelector(".number").innerHTML = count
}

function reset() {
    count = 0
    document.querySelector(".number").innerHTML = 0
}

function decrease() {
    count--
    document.querySelector(".number").innerHTML = count
}