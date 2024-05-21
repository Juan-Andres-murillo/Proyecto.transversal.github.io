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
// grafica Datos
        var energyData = {
            labels: ['Energía Solar', 'Energía Eólica', 'Energía Hidroeléctrica', 'Energía Biomasa', 'Energía Geotérmica'],
            datasets: [{
                label: 'Producción Anual',
                data: [547, 7800, 66.7, 8, 75], // Estos valores son solo para demostración, reemplázalos con los datos reales
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
        };

        // Configuración del gráfico
        var energyOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        // Crear gráfico
        var ctx = document.getElementById('energyChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: energyData,
            options: energyOptions
        });
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
