let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function dibujarSuelo() {
    ctx.fillStyle="blue";
    ctx.fillRect(0,0,canvas.Width,20)
}