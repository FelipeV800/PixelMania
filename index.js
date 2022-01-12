document.addEventListener("mousemove", dibujar);
document.addEventListener("wheel", cambiarGrosor);

var workbench = document.getElementById("espacioDibujo");
var papel = workbench.getContext("2d");
var x = 250;
var y = 250;
var grosor = 1;
var colorDibujo = "black";

dibujarLinea("red", 3, 249, 249, 251, 251, papel);
dibujarLinea("grey", 3, 0, 0, 500, 0, papel)
dibujarLinea("grey", 3, 500, 0, 500, 500, papel)
dibujarLinea("grey", 3, 500, 500, 0, 500, papel)
dibujarLinea("grey", 3, 0, 500, 0, 0, papel)

document.addEventListener("keyup", keyboardControl);

function dibujarLinea(color, grosor, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujar(properties) {
    if (properties.buttons == 1) {
        dibujarLinea(colorDibujo, grosor, x, y, properties.layerX, properties.layerY, papel);
    }
    y = properties.layerY;
    x = properties.layerX;
}

function cambiarGrosor(properties) {
    if (properties.deltaY < 0) {
        grosor++;
        document.getElementById("grosorActual").innerHTML = "Grosor: " + grosor;
    } else {
        if (grosor > 1) {
            grosor--;
            document.getElementById("grosorActual").innerHTML = "Grosor: " + grosor;
        }
    }
}

function keyboardControl(properties) {
    if ((properties.keyCode == 48) || (properties.keyCode == 96)) {
        colorDibujo = "black";
        document.getElementById("colorActual").innerHTML = "Color: Negro";
    } else if ((properties.keyCode == 49) || (properties.keyCode == 97)) {
        colorDibujo = "red";
        document.getElementById("colorActual").innerHTML = "Color: Rojo";
    } else if ((properties.keyCode == 50) || (properties.keyCode == 98)) {
        colorDibujo = "blue";
        document.getElementById("colorActual").innerHTML = "Color: Azul";
    } else if ((properties.keyCode == 51) || (properties.keyCode == 99)) {
        colorDibujo = "yellow";
        document.getElementById("colorActual").innerHTML = "Color: Amarillo";
    } else if ((properties.keyCode == 52) || (properties.keyCode == 100)) {
        colorDibujo = "orange";
        document.getElementById("colorActual").innerHTML = "Color: Naranja";
    } else if ((properties.keyCode == 53) || (properties.keyCode == 101)) {
        colorDibujo = "purple";
        document.getElementById("colorActual").innerHTML = "Color: Morado";
    } else if ((properties.keyCode == 54) || (properties.keyCode == 102)) {
        colorDibujo = "Green";
        document.getElementById("colorActual").innerHTML = "Color: Verde";
    } else if (properties.keyCode == 8) {
        clearCanvas();
        dibujarLinea("red", 3, 249, 249, 251, 251, papel);
        dibujarLinea("grey", 3, 0, 0, 500, 0, papel)
        dibujarLinea("grey", 3, 500, 0, 500, 500, papel)
        dibujarLinea("grey", 3, 500, 500, 0, 500, papel)
        dibujarLinea("grey", 3, 0, 500, 0, 0, papel)
    }
}

function clearCanvas() {
    papel.beginPath();
    papel.fillStyle = '#fff';
    papel.fillRect(0, 0, workbench.width, workbench.height);
}
