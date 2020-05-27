window.onload=function () {
 var stage=this.document.getElementById("stage")   
 var ctx=stage.getContext("2d")

 this.setInterval(game,60)
 
 const speed=1
 var speedX= speedY= 0
 var px=py=10
 var tamanhoPeça=20
 var quantidadePeças=20
 var maçaX= maçaY=15
 var rastro=[]
 tail=5

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
 ctx.fillStyle="black"
 ctx.fillRect(0,0,stage.width,stage.height)

 ctx.fillStyle="red"
 ctx.fillRect(maçaX*tamanhoPeça, maçaY*tamanhoPeça,tamanhoPeça,tamanhoPeça)

 ctx.fillStyle="gray"
 for (let i = 0; i < rastro.length; i++) {
    ctx.fillRect(rastro[i].x*tamanhoPeça,rastro[i].y*tamanhoPeça,tamanhoPeça,tamanhoPeça)
 }
}
 
}