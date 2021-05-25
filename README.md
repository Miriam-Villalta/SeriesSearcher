# Módulo 2 Evalucación final

La tarea asignada es realizar un buscador de series usando una API ya facilitada. Junto a esto, hay que incorporar un apartado para seleccionar las series favoritas y queden registardas en el localStorage de nuestro navegador.

## Manual de uso:

- Al entrar en la página, introduciremos la palabra clave y clickaremos en el boton `Seach`
- Apareceran las series relacionadas con esa palabra clave y podremos selecionar las que queremos añadir a favoritos. Según clickemos, apareceran o desapareceran de este apartado.
- Al recargar la página, nuestros favoritos seguiran guardados.

## Estructura de carpetas

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```
