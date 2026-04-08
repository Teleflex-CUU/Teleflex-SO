// Estado central
const state = {
  USER: null,
  empActual: null,
  consultas: [],
  incapacidades: [],
  bitacora: JSON.parse(localStorage.getItem('bitacora') || '[]')
};

// Helpers
function byId(id){ return document.getElementById(id); }
function qs(q){ return document.querySelector(q); }

// Bitácora
function logAction(tipo, detalle){
  const item = {
    fecha: new Date().toISOString(),
    tipo,
    detalle,
    user: state.USER?.nombre || '—'
  };
  state.bitacora.unshift(item);
  localStorage.setItem('bitacora', JSON.stringify(state.bitacora));
}
