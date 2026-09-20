// Base de datos enfocada exclusivamente en Fútbol, NFL y F1
const baseDatosV3 = [
    {
        deporte: 'futbol',
        liga: 'UEFA Champions League',
        local: 'Real Madrid',
        visitante: 'Manchester City',
        marcador: '3 - 2',
        estado: 'Finalizado',
        detalle: 'Santiago Bernabéu',
        borde: 'border-futbol'
    },
    {
        deporte: 'futbol',
        liga: 'LaLiga EA Sports',
        local: 'FC Barcelona',
        visitante: 'Atlético de Madrid',
        marcador: '2 - 1',
        estado: 'En Vivo (82\')',
        detalle: 'Spotify Camp Nou',
        borde: 'border-futbol'
    },
    {
        deporte: 'nfl',
        liga: 'NFL - Semana 14',
        local: 'Kansas City Chiefs',
        visitante: 'San Francisco 49ers',
        marcador: '27 - 24',
        estado: 'Finalizado (OT)',
        detalle: 'Arrowhead Stadium',
        borde: 'border-nfl'
    },
    {
        deporte: 'nfl',
        liga: 'NFL - Semana 14',
        local: 'Dallas Cowboys',
        visitante: 'Philadelphia Eagles',
        marcador: '14 - 21',
        estado: 'En Vivo ( Q3 )',
        detalle: 'AT&T Stadium',
        borde: 'border-nfl'
    },
    {
        deporte: 'f1',
        liga: 'Fórmula 1 - GP Mónaco',
        local: 'Max Verstappen (Red Bull)',
        visitante: 'Charles Leclerc (Ferrari)',
        marcador: '1:12.345',
        estado: 'Pole Position',
        detalle: 'Circuit de Monaco',
        borde: 'border-f1'
    },
    {
        deporte: 'f1',
        liga: 'Fórmula 1 - GP Mónaco',
        local: 'Lando Norris (McLaren)',
        visitante: 'Carlos Sainz (Ferrari)',
        marcador: '+0.150s',
        estado: 'Carrera (Final)',
        detalle: 'Circuit de Monaco',
        borde: 'border-f1'
    }
];

// Función para mostrar los resultados en pantalla
function renderizarResultadosV3(lista) {
    const contenedor = document.getElementById('contenedorResultadosV3');
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-secondary fs-5">No hay marcadores disponibles para esta disciplina.</p>
            </div>`;
        return;
    }

    lista.forEach(item => {
        const esEnVivo = item.estado.includes('En Vivo');
        const badgeColor = esEnVivo ? 'bg-danger text-white' : 'bg-secondary text-light';

        let colorScore = 'var(--neon-green)';
        if (item.deporte === 'nfl') colorScore = 'var(--neon-blue)';
        if (item.deporte === 'f1') colorScore = 'var(--neon-red)';

        contenedor.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="match-card-v3 ${item.borde}">
                    <div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-dark border border-secondary text-uppercase">${item.liga}</span>
                            <span class="badge ${badgeColor} rounded-pill px-2 py-1">${item.estado}</span>
                        </div>
                        <div class="text-center my-3">
                            <h6 class="fw-bold mb-1">${item.local}</h6>
                            <small class="text-muted d-block mb-2">vs</small>
                            <h6 class="fw-bold mb-3">${item.visitante}</h6>
                            <div class="score-display" style="color: ${colorScore};">
                                ${item.marcador}
                            </div>
                        </div>
                    </div>
                    <div class="pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                        <small class="text-secondary"><i class="fa-solid fa-location-dot me-1"></i>${item.detalle}</small>
                        <i class="fa-solid fa-chevron-right text-muted small"></i>
                    </div>
                </div>
            </div>`;
    });
}

// Filtro rápido por deporte (Fútbol, NFL, F1)
function filtrarV3(deporte, boton) {
    const botones = document.querySelectorAll('.btn-filter-v3');
    botones.forEach(b => {
        b.classList.remove('active', 'nfl-active', 'f1-active');
    });

    if (deporte === 'nfl') {
        boton.classList.add('nfl-active');
    } else if (deporte === 'f1') {
        boton.classList.add('f1-active');
    } else {
        boton.classList.add('active');
    }

    if (deporte === 'todos') {
        renderizarResultadosV3(baseDatosV3);
    } else {
        const filtrados = baseDatosV3.filter(item => item.deporte === deporte);
        renderizarResultadosV3(filtrados);
    }
}

// Cargar marcadores iniciales
document.addEventListener('DOMContentLoaded', () => {
    renderizarResultadosV3(baseDatosV3);
});
