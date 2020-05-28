 const speed=1
 var speedX= speedY= 0
 var px=py=10
 var tamanhoPeça=20
 var quantidadePeças=20
 var maçaX= maçaY=15
 var rastro=[]
 tail=5
 function hiden() {
        document
        .getElementById('home')
        .classList
        .toggle("hide")
    }
function gameOver() {
    speedX=speedY=0
    tail=5
}
function gameStart() {
   hiden()
 var stage=this.document.getElementById("stage")   
 var ctx=stage.getContext("2d")
 this.document.addEventListener("keydown",keyPush)
 this.setInterval(game,60)
 
 
 
 function game() {
     px+=speedX
     py+=speedY
     if (px<0) {
         px=quantidadePeças-1
     }
     if (px>quantidadePeças-1) {
         px=0
     }
     if (py<0) {
         py=quantidadePeças-1
     }
     if (py>quantidadePeças-1) {
         py=0
     }
 ctx.fillStyle="#222f3e"
 ctx.fillRect(0,0,stage.width,stage.height)

 ctx.fillStyle="red"
 ctx.fillRect(maçaX*tamanhoPeça, maçaY*tamanhoPeça,tamanhoPeça,tamanhoPeça)

 ctx.fillStyle="gray"
 for (let i = 0; i < rastro.length; i++) {
    ctx.fillRect(rastro[i].x*tamanhoPeça,rastro[i].y*tamanhoPeça,tamanhoPeça,tamanhoPeça)
    if (rastro[i].x==px && rastro[i].y==py) {
        gameOver()
    } 
}
 ctx.fillStyle="white"
 ctx.font="16px COURIER"
 ctx.fillText("SNAKE GAME",157,20)
 
 ctx.font="13px courier"
 ctx.fillText("POINTS "+tail,324,389)
rastro.push({x:px,y:py})
while (rastro.length>tail) {
    rastro.shift()
}
if (maçaX==px&&maçaY==py) {
    tail++
    maçaX=Math.floor(Math.random()*quantidadePeças)
    maçaY=Math.floor(Math.random()*quantidadePeças)
}
}
 function keyPush(event) {
     switch (event.keyCode) {
         case 37://left
             speedX=-speed
             speedY=0
             break;
             case 38://up
             speedX=0
             speedY=-speed
             break;
             case 39://right
             speedX=speed
             speedY=0
             break;
             case 40://down
             speedX=0
             speedY=speed
             break;
     
         default:
             break;}}}