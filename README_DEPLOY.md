Despliegue en GitHub Pages y configuración del formulario

1) Publicar en GitHub Pages
- Crea un repositorio en GitHub y sube todos los archivos del proyecto (index.html, principal.html, fotos.html, videos.html, recetas.html, contacto.html, MGMStyle.css, carpetas `images/` y `videos/`).
- En tu máquina local dentro de la carpeta del proyecto, ejecuta:

```bash
git init
git add .
git commit -m "Inicial: sitio abuela"
git branch -M main
git remote add origin https://github.com/wvillal2/MY-GRAND-MOTHER-BLOG/tree/main
git push -u origin main
```

- En GitHub, ve a Settings → Pages y selecciona la rama `main` y la carpeta `/ (root)`. Guarda. Tras unos minutos tu sitio estará en: `https://github.com/wvillal2/MY-GRAND-MOTHER-BLOG/tree/main`.

2) Hacer que el formulario envíe a tu correo (Formspree)
- Ve a https://formspree.io/ y crea una cuenta gratuita.
- Crea un formulario y copia el identificador de formulario (FORM_ID). Formspree te dará una URL tipo `https://formspree.io/f/xxxxxxxx`.
- Abre `contacto.html` y reemplaza `FORM_ID` en el atributo `action` del formulario por el identificador real.
- Opcional: cambia el enlace `mailto:tu-email@ejemplo.com` por tu dirección real como fallback.

3) Opciones alternativas
- Si prefieres no usar Formspree, puedes usar otros servicios: Netlify Forms, Getform, Basin, o montar un backend propio (Node/PHP/Python) para enviar emails.

Si quieres, puedo:
- Generar un ejemplo de commit y comandos personalizados con tu `TU_USUARIO` y `TU_REPO`.
- Te ayudo a crear el repo en GitHub (necesitaré que autorizues push desde aquí o me des credenciales — normalmente lo haces tú siguiendo los comandos anteriores).
