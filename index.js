document.addEventListener("mousedown", dibujar);

var workbench = document.getElementById("espacioDibujo");
var papel = workbench.getContext("2d");
var x = 250;
var y = 250;

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);
dibujarLinea("grey", 0, 0, 500, 0, papel)
dibujarLinea("grey", 500, 0, 500, 500, papel)
dibujarLinea("grey", 500, 500, 0, 500, papel)
dibujarLinea("grey", 0, 500, 0, 0, papel)

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujar(properties) {
    if (properties.button == 0) {
        var colorDibujo = "blue";
        dibujarLinea(colorDibujo, x, y, properties.layerX, properties.layerY, papel);
        y = properties.layerY;
        x = properties.layerX;
    } else if (properties.button == 1) {
        x = properties.layerX;
        y = properties.layerY;
        dibujarLinea("pink", x - 1, y - 1, x + 1, y + 1, papel);
    }
}