//css
//Slide automatico
// JavaScript para el slider automático
const slider = document.querySelector('.slider-inner');
let counter = 1;

setInterval(() => {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${counter * 100}%)`;

    counter++;
    if (counter === 4) {
        counter = 0;
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
        }, 500);
    }
}, 3000); // Cambiar la imagen cada 3 segundos
//calculo diferencial
//Grafica de calculo
// Datos
const labels = ['Energía Solar', 'Energía Eólica', 'Energía Hidroeléctrica', 'Energía Biomasa', 'Energía Geotérmica'];
const data = [5470, 7800, 6670, 8000, 75];

// Configuración de la gráfica
const config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Producción Anual',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Crear la gráfica
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
document.addEventListener("DOMContentLoaded", function() {
    drawCartesianPlane();
    plotPoints([547, 0], [7800, 0], [0, 66.7], [0, 8], [70, 80]);
});

function drawCartesianPlane() {
    var svg = document.getElementById("svg-plane");
    var width = svg.getAttribute("width");
    var height = svg.getAttribute("height");

    // Draw x-axis
    svg.appendChild(createLine(0, height / 2, width, height / 2));
    // Draw y-axis
    svg.appendChild(createLine(width / 2, 0, width / 2, height));

    // Add ticks and labels
    for (var i = -10; i <= 10; i++) {
        if (i !== 0) {
            svg.appendChild(createLine(width / 2 + i * 20, height / 2 - 5, width / 2 + i * 20, height / 2 + 5)); // x-axis ticks
            svg.appendChild(createLine(width / 2 - 5, height / 2 - i * 20, width / 2 + 5, height / 2 - i * 20)); // y-axis ticks
            svg.appendChild(createText(width / 2 + i * 20 - 5, height / 2 + 20, i * 1000)); // x-axis labels
            svg.appendChild(createText(width / 2 - 20, height / 2 - i * 20 + 5, -i * 10)); // y-axis labels
        }
    }
}

function createLine(x1, y1, x2, y2) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    return line;
}

function createText(x, y, text) {
    var txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
    txt.setAttribute("x", x);
    txt.setAttribute("y", y);
    txt.textContent = text;
    return txt;
}

function plotPoints(...points) {
    var svg = document.getElementById("svg-plane");
    points.forEach(point => {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", (point[0] + 10) * 20); // Mapping x-coordinate to SVG coordinate
        circle.setAttribute("cy", (10 - point[1]) * 20); // Mapping y-coordinate to SVG coordinate
        circle.setAttribute("r", 3);
        circle.setAttribute("fill", "red");
        svg.appendChild(circle);
    });
}

// Obtener los elementos de las asignaturas
var asignaturaInfo = document.querySelectorAll('.asignatura-info');
var calculoLink = document.querySelector('.Calculo');
var fisicaLink = document.querySelector('.Fisica');
var ecoLink = document.querySelector('.Eco');
var inglesLink = document.querySelector('.Ingles');
var programacionLink = document.querySelector('.Programacion');
// Agregar eventos de clic a los enlaces de las asignaturas
calculoLink.addEventListener('click', function() {
    mostrarInfo('Calculo');
});
fisicaLink.addEventListener('click', function() {
    mostrarInfo('Fisica');
});
ecoLink.addEventListener('click', function() {
    mostrarInfo('Eco');
});
inglesLink.addEventListener('click', function() {
    mostrarInfo('Ingles');
});
programacionLink.addEventListener('click', function() {
    mostrarInfo('Programacion');
});
// Función para mostrar la información de la asignatura correspondiente y ocultar las demás
function mostrarInfo(asignatura) {
    for (var i = 0; i < asignaturaInfo.length; i++) {
        if (asignaturaInfo[i].id === asignatura) {
            asignaturaInfo[i].style.display = 'block';
        } else {
            asignaturaInfo[i].style.display = 'none';
        }
    }
}