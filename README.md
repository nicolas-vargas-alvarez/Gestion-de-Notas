# Sistema de Gestión de Notas

## Archivos
- `index.html` → estructura y botones
- `app.js` → todas las funciones JavaScript

## Cómo subir a GitHub con rama develop

### 1. Crear el repositorio en GitHub
Entra a github.com → New repository → ponle nombre → Create repository

### 2. En tu computador, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "primer commit: estructura base del proyecto"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

### 3. Crear la rama develop y trabajar en ella

```bash
git checkout -b develop
```

### 4. Crear ramas por funcionalidad

```bash
# Integrante A
git checkout -b feature/filtros-y-promedio
# ... hacer cambios en app.js ...
git add app.js
git commit -m "feat: agregar funciones filter para aprobados y reprobados"
git add app.js
git commit -m "feat: agregar funcion reduce para calcular promedio"

# Volver a develop y fusionar
git checkout develop
git merge feature/filtros-y-promedio
git push origin develop

# Integrante B
git checkout -b feature/menu-ordenamiento-switch
# ... hacer cambios en app.js ...
git add app.js
git commit -m "feat: agregar funcion sort para ordenar por nota"
git add app.js
git commit -m "feat: agregar switch para clasificar niveles de nota"
git add app.js
git commit -m "feat: agregar while en mostrarClasificacion"

git checkout develop
git merge feature/menu-ordenamiento-switch
git push origin develop
```

### 5. Cuando el proyecto esté listo, fusionar develop en main

```bash
git checkout main
git merge develop
git push origin main
```
