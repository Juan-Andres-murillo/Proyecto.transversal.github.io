//Api del clima
async function getWeather() {
    const apiKey = '089ee7c3b08157d9ccc044a0fe6b7787';  // Reemplaza con tu clave API
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=es&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Ciudad no encontrada');
        
        const data = await response.json();
        const weatherDiv = document.getElementById('weather');
        
        weatherDiv.innerHTML = `
            <h2>Clima en ${data.name}</h2>
            <p><strong>Descripción:</strong> ${data.weather[0].description}</p>
            <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
            <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
            <p><strong>Viento:</strong> ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
    }
}
// Mensaje de usuario
function enviarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    // Validar que los campos no estén vacíos
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor completa todos los campos.');
        return false;
    }

    // Validar el formato del correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return false;
    }

    // Enviar el formulario
    alert('Mensaje enviado correctamente:\n\nNombre: ' + nombre + '\nEmail: ' + email + '\nMensaje: ' + mensaje);
    return true;
}
//Slide automatico

// JavaScript para el slider automático
const slider = document.querySelector('.slider-inner');
let counter = 1;

setInterval(() => {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${counter * 100}%)`;

    counter++;
    if (counter === 12) {
        counter = 0;
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
        }, 500);
    }
}, 5000); // Cambiar la imagen cada 3 segundos
//calculo diferencial
//grafia de calculo
// Datos
const labels = ['Energía Solar', 'Energía Eólica', 'Energía Hidroeléctrica', 'Energía Biomasa', 'Energía Geotérmica'];
const data = [5470, 7800, 6670, 8000, 7500];

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
