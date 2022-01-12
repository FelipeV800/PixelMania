document.addEventListener("mousedown", dibujar);

var workbench = document.getElementById("espacioDibujo");
var papel = workbench.getContext("2d");
var x = 250;
var y = 250;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea (color, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujar (properties) {
    var colorDibujo = "red";
    var movimiento = 10;
    console.log(properties);
}