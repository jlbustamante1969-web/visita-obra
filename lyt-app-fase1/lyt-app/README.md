# Levante y Terral · Panel de gestión PWA

Panel de control centralizado para la gestión de Levante y Terral, Arquitectura y Reformas SL.

## Estructura

```
lyt-app/
├── index.html       ← App principal (una sola página, todas las vistas)
├── manifest.json    ← Configuración PWA
├── sw.js            ← Service Worker (caché offline)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Despliegue en GitHub Pages

### Opción A — Repositorio nuevo (recomendado)

1. Crear repositorio en GitHub: `lyt-app`
2. Subir todos estos archivos a la rama `main`
3. Ir a **Settings → Pages → Source → main / root**
4. La app queda disponible en: `https://jlbustamante1969-web.github.io/lyt-app/`

### Opción B — Dentro del repo existente de Visita Obra

1. Crear carpeta `/lyt-app/` en el repositorio `visita-obra`
2. Subir los archivos dentro de esa carpeta
3. Disponible en: `https://jlbustamante1969-web.github.io/visita-obra/lyt-app/`

> Si usas la Opción B, actualizar `"start_url"` en `manifest.json` a `"/visita-obra/lyt-app/"`.

## Instalar en el móvil (Android · Pixel 9)

1. Abrir Chrome y navegar a la URL de la app
2. Menú (⋮) → **"Añadir a pantalla de inicio"**
3. La app se instala como PWA nativa, sin Play Store

## Roadmap

| Fase | Estado | Contenido |
|------|--------|-----------|
| Fase 1 | ✅ Completa | Esqueleto navegable, panel, ajustes |
| Fase 2 | 🔄 Siguiente | Módulo Visita Obra migrado |
| Fase 3 | ⏳ Pendiente | Módulo Facturas con formulario |
| Fase 4 | ⏳ Pendiente | Módulo Extracto CAJAMAR |
| Fase 5 | ⏳ Pendiente | Módulo Obras desde Notion |
