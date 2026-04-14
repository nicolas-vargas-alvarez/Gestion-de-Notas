
// app.js - Sistema de Gestión de Notas

const aprendices = [
  { nombre: "Ana",   nota: 4.5, programa: "ADSO" },
  { nombre: "Luis",  nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseño Web" }
];

// ── FUNCIÓN AUXILIAR: imprimir lista en pantalla ──
function mostrarLista(titulo, lista) {
  let html = "<h3>" + titulo + "</h3><ul>";
  lista.forEach(function(a) {
    html += "<li>" + a.nombre + " | Nota: " + a.nota + " | Programa: " + a.programa + "</li>";
  });
  html += "</ul>";
  document.getElementById("resultado").innerHTML = html;
}

// ── 1. Mostrar todos los aprendices ──────────
function mostrarTodos() {
  mostrarLista("Todos los aprendices", aprendices);
}

// ── 2. Aprobados usando filter() ─────────────
function mostrarAprobados() {
  const aprobados = aprendices.filter(function(a) {
    return a.nota >= 3.0;
  });
  mostrarLista("Aprendices aprobados (nota >= 3.0)", aprobados);
}

// ── 3. Reprobados usando filter() ────────────
function mostrarReprobados() {
  const reprobados = aprendices.filter(function(a) {
    return a.nota < 3.0;
  });
  mostrarLista("Aprendices reprobados (nota < 3.0)", reprobados);
}

// ── 4. Nombres en mayúscula usando map() ─────
function mostrarMayusculas() {
  const enMayuscula = aprendices.map(function(a) {
    return {
      nombre: a.nombre.toUpperCase(),
      nota: a.nota,
      programa: a.programa
    };
  });
  mostrarLista("Nombres en mayúscula", enMayuscula);
}

