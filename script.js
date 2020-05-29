var stage = this.document.getElementById("stage")
var ctx = stage.getContext("2d")

const speed = 1
var speedX = speedY = 1
var positionX = positionY = 10
var tamanhoPeça = 20
var quantidadePeças = 20
var maçaX = maçaY = 15
var rastro = []
tail = 5

function gameInit() {
    
    game()
    começoAutomatico()
    hiden()
    this.document.addEventListener("keydown", keyPush)
    this.y
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

    ctx.fillStyle = "gray"
    for (let i = 0; i < rastro.length; i++) {
        ctx.fillRect(rastro[i].x * tamanhoPeça, rastro[i].y * tamanhoPeça, tamanhoPeça, tamanhoPeça)
        if (rastro[i].x == positionX && rastro[i].y == positionY) {
            speedX = speedY = 0

            hidenover()
            gameOver()
        }
    }

    ctx.fillStyle = "white"
    ctx.font = "16px COURIER"
    ctx.fillText("SNAKE GAME", 157, 20)

    ctx.font = "13px courier"
    ctx.fillText("POINTS " + tail, 324, 389)
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
    this.y
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