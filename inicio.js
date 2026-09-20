// Datos para el widget interactivo del Hero Banner (Fútbol, NFL, F1)
const destacadostriple = [
    {
        deporte: 'Fútbol - Champions League',
        partido: 'Real Madrid vs Man. City',
        score: '2 - 1',
        color: '#00ffaa'
    },
    {
        deporte: 'NFL - Conferencia Nacional',
        partido: '49ers vs Chiefs',
        score: '24 - 21',
        color: '#00bfff'
    },
    {
        deporte: 'Fórmula 1 - GP de Mónaco',
        partido: 'Verstappen vs Leclerc',
        score: '+1.245s',
        color: '#ff3366'
    }
];

function cambiarWidget(indice) {
    const item = destacadostriple[indice];
    const elDeporte = document.getElementById('widgetDeporte');
    const elPartido = document.getElementById('widgetPartido');
    const elScore = document.getElementById('widgetScore');

    if (elDeporte && elPartido && elScore) {
        elDeporte.textContent = item.deporte;
        elDeporte.style.color = item.color;
        elPartido.textContent = item.partido;
        elScore.textContent = item.score;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('ZportSone V3 - Inicializado con enfoque en Fútbol, NFL y F1.');
});
