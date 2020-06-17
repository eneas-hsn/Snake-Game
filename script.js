var stage = this.document.getElementById("stage")
var ctx = stage.getContext("2d")

const speed = 1
var speedX = speedY = 1
var positionX = positionY = 20
var tamanhoPeça = 40
var quantidadePeças = 40
var maçaX = maçaY = 15
var recorde
var rastro = []
var tail = 5

function gameInit() {
    game()
    começoAutomatico()
    hiden()
    this.document.addEventListener("keydown", keyPush)
    this.setInterval(game, 80)

    document
        .getElementById('black')
        .classList
        .add("hide")
}
function hiden() {
    document
        .getElementById('home')
        .classList
        .add("hide")
    document
        .getElementById('black')
        .classList
        .add("hide")
}
function hidenover() {
    document
        .getElementById('black')
        .classList
        .remove("hide")
}
function começoAutomatico() {
    speedX = speed
    speedY = 0
    tail = 5
}
function gameOver() {
    var speedX = speedY = 0
    var maçaX = maçaY = 10

    var pts = document.getElementById('points')
    pts.innerHTML = `${tail} POINTS`
    var records = document.getElementById("record")
    records.innerHTML = `RECORD ${recorde}`
}

function game() {
    positionX += speedX
    positionY += speedY
    if (positionX < 0) {
        positionX = quantidadePeças - 1
    }
    if (positionX > quantidadePeças - 1) {
        positionX = 0
    }
    if (positionY < 0) {
        positionY = quantidadePeças - 1
    }
    if (positionY > quantidadePeças - 1) {
        positionY = 0
    }
    ctx.fillStyle = "#222f3e"
    ctx.fillRect(0, 0, stage.width, stage.height)

    ctx.fillStyle = "red"
    ctx.fillRect(maçaX * tamanhoPeça, maçaY * tamanhoPeça, tamanhoPeça, tamanhoPeça)

    ctx.fillStyle = "#341f97"
    for (let i = 0; i < rastro.length; i++) {
        ctx.fillRect(rastro[i].x * tamanhoPeça, rastro[i].y * tamanhoPeça, tamanhoPeça, tamanhoPeça)
        if (rastro[i].x == positionX && rastro[i].y == positionY) {
            speedX = speedY = 0
            hidenover()
            gameOver()
            recorde = localStorage.getItem("recorde")
            if (recorde == null) {
                recorde = 0
            }
            if (this.tail > recorde) {
                localStorage.setItem("recorde", this.tail)
                recorde = this.tail
            }
        }
    }

    ctx.fillStyle = "white"
    ctx.font = "36px COURIER"
    ctx.fillText("SNAKE GAME", 270, 40)

    ctx.font = "23px courier"
    ctx.fillText("POINTS " + tail, 670, 779)
    rastro.push({ x: positionX, y: positionY })
    while (rastro.length > tail) {
        rastro.shift()
    }
    if (maçaX == positionX && maçaY == positionY) {
        tail++
        maçaX = Math.floor(Math.random() * quantidadePeças)
        maçaY = Math.floor(Math.random() * quantidadePeças)
    }
}

function gameStart() {
    game()
    começoAutomatico()
    hiden()
    this.document.addEventListener("keydown", keyPush)
    this.setInterval(game, 80)

    function keyPush(event) {
        switch (event.keyCode) {
            case 37://left
                speedX = -speed
                speedY = 0
                break;
            case 38://up
                speedX = 0
                speedY = -speed
                break;
            case 39://right
                speedX = speed
                speedY = 0
                break;
            case 40://down
                speedX = 0
                speedY = speed
                break;
            default:
                break;
        }
    }
}