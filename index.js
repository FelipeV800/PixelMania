document.addEventListener("mousedown", initDibujo);
document.addEventListener("mouseup", stopDibujo)
document.addEventListener("mousemove", dibujar)
document.addEventListener("wheel", cambiarGrosor)

var workbench = document.getElementById("espacioDibujo");
var papel = workbench.getContext("2d");
var activation = false;
var x = 250;
var y = 250;
var grosor = 3;

dibujarLinea("red", 3, x - 1, y - 1, x + 1, y + 1, papel);
dibujarLinea("grey", 3, 0, 0, 500, 0, papel)
dibujarLinea("grey", 3, 500, 0, 500, 500, papel)
dibujarLinea("grey", 3, 500, 500, 0, 500, papel)
dibujarLinea("grey", 3, 0, 500, 0, 0, papel)

function dibujarLinea(color, grosor, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujar(properties){
    if (activation == true) {
        var colorDibujo = "blue";
        dibujarLinea(colorDibujo, grosor, x, y, properties.layerX, properties.layerY, papel);
    }
    y = properties.layerY;
    x = properties.layerX;
}

function initDibujo(properties) {
    if(properties.button == 0) {
        activation = true;
        y = properties.layerY;
        x = properties.layerX;
    }
}

function stopDibujo(properties) {
    activation = false;
    y = properties.layerY;
    x = properties.layerX;
}

function cambiarGrosor(properties) {
    console.log(properties.deltaY);
}