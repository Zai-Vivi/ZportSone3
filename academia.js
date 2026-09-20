// Base de datos de lecciones tácticas para Fútbol, NFL y F1
const baseAcademiaV3 = [
    {
        id: 1,
        categoria: 'futbol',
        titulo: 'Fuera de Juego (Offside)',
        nivel: 'Básico',
        descripcion: 'Un atacante está en posición adelanta si se encuentra más cerca de la línea de gol rival que el balón y el penúltimo rival al recibir el pase.',
        icono: 'fa-solid fa-bullseye',
        colorIcono: 'rgba(0, 255, 170, 0.15)',
        colorTexto: 'var(--neon-green)'
    },
    {
        id: 2,
        categoria: 'futbol',
        titulo: 'Funcionamiento del VAR',
        nivel: 'Intermedio',
        descripcion: 'Asistencia de video para revisar 4 situaciones decisivas: goles, penaltis, tarjetas rojas directas y confusión de identidad de jugadores.',
        icono: 'fa-solid fa-tv',
        colorIcono: 'rgba(0, 255, 170, 0.15)',
        colorTexto: 'var(--neon-green)'
    },
    {
        id: 3,
        categoria: 'nfl',
        titulo: 'Downs y Avance de 10 Yardas',
        nivel: 'Básico',
        descripcion: 'El equipo ofensivo tiene 4 intentos (downs) para avanzar un mínimo de 10 yardas mediante pases o acarreos directos.',
        icono: 'fa-solid fa-arrows-left-right',
        colorIcono: 'rgba(0, 191, 255, 0.15)',
        colorTexto: 'var(--neon-blue)'
    },
    {
        id: 4,
        categoria: 'nfl',
        titulo: 'Sistema de Anotaciones',
        nivel: 'Básico',
        descripcion: 'Touchdown = 6 puntos (ingresando el balón a la zona final). Gol de Campo = 3 puntos (patada aprobada entre los postes).',
        icono: 'fa-solid fa-trophy',
        colorIcono: 'rgba(0, 191, 255, 0.15)',
        colorTexto: 'var(--neon-blue)'
    },
    {
        id: 5,
        categoria: 'f1',
        titulo: 'Uso del DRS (Alerón Móvil)',
        nivel: 'Avanzado',
        descripcion: 'Apertura del alerón trasero para ganar velocidad punta en rectas. Solo se activa si estás a menos de 1 segundo del auto predecesor en zona habilitada.',
        icono: 'fa-solid fa-gauge-high',
        colorIcono: 'rgba(255, 51, 102, 0.15)',
        colorTexto: 'var(--neon-red)'
    },
    {
        id: 6,
        categoria: 'f1',
        titulo: 'Estrategia de Paradas (Pit Stops)',
        nivel: 'Intermedio',
        descripcion: 'Cambio obligatorio de neumáticos durante la carrera. La elección entre compuestos Blandos, Medios o Duros determina la velocidad y durabilidad.',
        icono: 'fa-solid fa-circle-dot',
        colorIcono: 'rgba(255, 51, 102, 0.15)',
        colorTexto: 'var(--neon-red)'
    }
];

let catSeleccionadaV3 = 'todas';

// Renderizado dinámico de tarjetas
function renderizarAcademiaV3(lista) {
    const contenedor = document.getElementById('contenedorAcademiaV3');
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-secondary fs-5">No se encontraron conceptos para tu búsqueda.</p>
            </div>`;
        return;
    }

    lista.forEach(item => {
        contenedor.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="academy-card-v3">
                    <div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="icon-box-v3" style="background: ${item.colorIcono}; color: ${item.colorTexto};">
                                <i class="${item.icono}"></i>
                            </div>
                            <span class="badge bg-dark border border-secondary text-uppercase">${item.nivel}</span>
                        </div>
                        <h5 class="fw-bold mb-2">${item.titulo}</h5>
                        <p class="text-secondary small mb-4">${item.descripcion}</p>
                    </div>
                    <div class="pt-3 border-top border-secondary border-opacity-25 text-end">
                        <button class="btn btn-sm btn-outline-light rounded-pill px-3" onclick="marcarComprendido(this)">
                            <i class="fa-regular fa-circle-check me-1"></i> Entendido
                        </button>
                    </div>
                </div>
            </div>`;
    });
}

// Filtrar por categoría
function filtrarAcademiaV3(categoria, boton) {
    catSeleccionadaV3 = categoria;
    document.querySelectorAll('.btn-academy-v3').forEach(b => b.classList.remove('active'));
    boton.classList.add('active');

    aplicarFiltrosV3();
}

// Filtrar por texto ingresado
function aplicarFiltrosV3() {
    const texto = document.getElementById('buscadorAcademiaV3').value.toLowerCase();

    const resultados = baseAcademiaV3.filter(item => {
        const coincideCat = catSeleccionadaV3 === 'todas' || item.categoria === catSeleccionadaV3;
        const coincideTxt = item.titulo.toLowerCase().includes(texto) || item.descripcion.toLowerCase().includes(texto);
        return coincideCat && coincideTxt;
    });

    renderizarAcademiaV3(resultados);
}

// Acción interactiva al presionar "Entendido"
function marcarComprendido(btn) {
    btn.classList.replace('btn-outline-light', 'btn-success');
    btn.style.color = '#000';
    btn.style.fontWeight = 'bold';
    btn.innerHTML = '<i class="fa-solid fa-check me-1"></i> Aprendido';
    btn.disabled = true;
}

// Inicializar eventos
document.addEventListener('DOMContentLoaded', () => {
    renderizarAcademiaV3(baseAcademiaV3);

    const buscador = document.getElementById('buscadorAcademiaV3');
    if (buscador) {
        buscador.addEventListener('input', aplicarFiltrosV3);
    }
});
