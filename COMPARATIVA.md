# Comparativa completa: localhost (Astro) vs academiakomuniki.com (Wix)

**Fecha del análisis:** 7 de junio de 2026

---

## 1. Plataforma y tecnología

| Aspecto | localhost (nueva) | academiakomuniki.com (actual) |
|---------|-------------------|-------------------------------|
| **Motor** | Astro (SSG) | Wix |
| **Hosting** | Estático (preparado para deploy) | Wix hosting |
| **Rendimiento** | HTML estático, ligero | JavaScript pesado de Wix |
| **Footer** | © 2026 por Komuniki | © 2023 por Emprender. Creado con Wix.com |
| **Redes sociales** | Facebook (academiakomuniki) | Facebook (WixEspanol) + Google+ (obsoleto) |

---

## 2. Estructura de navegación / URLs

| Sección | localhost | academiakomuniki.com | Diferencia |
|---------|-----------|----------------------|------------|
| Inicio | `/` | `/` | — |
| Quiénes somos | `/quienes-somos` | `/quienes-somos` → muestra **Resultados** | Contenido invertido en Wix |
| Objetivos | `/objetivos` | `/objetivos` → muestra **Quiénes somos** | Contenido invertido en Wix |
| Resultados | `/resultados` | `/resultados` → muestra **Objetivos/Cursos** | Contenido cruzado en Wix |
| Colaboramos | `/colaboramos` | `/nuestros-colaboradores` | URL diferente |
| Anuncios | `/anuncios` | `/anunios` (typo: falta la "c") | Typo corregido en local |
| Contacto | `/contacto` | `/christinadauzon` | URL diferente |
| Christina Dauzon | `/christinadauzon` (alias → contacto) | `/christinadauzon` | Mismo contenido |
| El Camino a la Felicidad | `/el-camino-a-la-felicidad` | No existe (integrado en colaboradores) | Página nueva en local |
| Juventud por los DDHH | `/juventud-por-los-derechos-humanos` | No existe (integrado en colaboradores) | Página nueva en local |
| Versión FR | `/fr` | Selector idioma FR (Wix multilingual) | Implementación diferente |

---

## 3. Contenido por página

### 3.1. Inicio (`/`)

| Aspecto | localhost | Wix |
|---------|-----------|-----|
| CTA principal | "¿Quieres aprender?" + "¿Quieres ser profe?" | "¿Quieres ser profe?" + "¿Quieres APRENDER?" |
| Link CTA profe | → `/contacto` | → `/christinadauzon` |
| Citas | Benjamin Franklin + Nelson Mandela (bien formateadas) | Mismas citas (formato desordenado) |
| Sitios interesantes | 3 cards separadas (Inst. Francés, TV5 Monde, Le Point du FLE) | Links en texto plano |
| Vídeo Ken Robinson | Referenciado como texto | Embed YouTube |

### 3.2. Quiénes somos / Resultados (contenido cruzado en Wix)

- **Wix** tiene un bug de navegación: los labels del menú **no coinciden** con el contenido de la página. "Quienes somos" muestra "Resultados" y viceversa.
- **localhost** corrige esto: cada URL muestra el contenido correcto.

### 3.3. Objetivos (`/objetivos`)

| localhost | Wix |
|-----------|-----|
| Título: "¿Para qué? ¡Determina tus necesidades!" | Título similar pero dentro de otra URL |
| Secciones: Quiénes somos, Niños/Adultos, Necesidades | Mismo contenido pero con formulario integrado |
| CTA: "¡Cuéntanos!" → `/contacto` | Formulario inline |

### 3.4. Resultados (`/resultados`)

| localhost | Wix |
|-----------|-----|
| Título: "¿Preparando tu futuro? ¡Este es tu lugar!" | Mismo contenido, URL cruzada |
| Secciones bien organizadas: Empresas, Niños, Modalidad, Método, Testimonios | Todo en un bloque largo |
| Teléfono clickable `tel:` | Teléfono como texto |
| Testimonios en blockquotes estilizados | Testimonios en texto plano |

### 3.5. Colaboramos (`/colaboramos`)

| localhost | Wix (`/nuestros-colaboradores`) |
|-----------|-----|
| 4 secciones con cards y botones "Saber más" | Todo en texto continuo con links inline |
| Subpáginas dedicadas para cada ONG | Todo en una sola página |
| Diseño limpio y modular | Texto extenso difícil de leer |

### 3.6. Anuncios (`/anuncios`)

| localhost | Wix (`/anunios`) |
|-----------|-----|
| Título: "¿Eres profesor de idiomas?" | Sin título descriptivo |
| Texto en 3 idiomas (EN, FR, ES) | Solo EN y FR |
| URL correcta "anuncios" | Typo "anunios" |

### 3.7. Contacto (`/contacto`)

| localhost | Wix (`/christinadauzon`) |
|-----------|-----|
| URL semántica `/contacto` | URL personal `/christinadauzon` |
| Formulario con campos: Nombre, Email, Teléfono, Mensaje | Formulario Wix básico |
| Dirección, teléfono, email bien estructurados | Datos de contacto en texto |
| Teléfono con link `tel:` | Sin link telefónico |

---

## 4. Páginas nuevas en localhost (no existen en Wix como páginas separadas)

| Página | Contenido |
|--------|-----------|
| `/el-camino-a-la-felicidad` | Página dedicada con CTA al curso online y link a web |
| `/juventud-por-los-derechos-humanos` | Página dedicada con citas (MLK, Gandhi, Voltaire, Jefferson) y explicación de DDHH |
| `/fr` (versión francesa) | Placeholder indicando migración en curso |

---

## 5. Mejoras en la versión local vs Wix

| Categoría | Mejora |
|-----------|--------|
| **SEO** | URLs semánticas, sin typos, títulos H1 correctos |
| **Accesibilidad** | Links `tel:` para teléfono, estructura de headings correcta |
| **Navegación** | Menú consistente, contenido no cruzado |
| **Footer** | Copyright actualizado, link real a Facebook de la academia (no a WixEspanol) |
| **Redes sociales** | Eliminado Google+ (obsoleto desde 2019) |
| **Contenido** | Texto en español añadido en Anuncios, testimonios mejor formateados |
| **Arquitectura** | Contenido de ONGs separado en subpáginas dedicadas |
| **Rendimiento** | HTML estático vs SPA pesada de Wix |
| **i18n** | Estructura `/fr` preparada para multiidioma |

---

## 6. Contenido que falta en localhost vs Wix

| Elemento | Estado |
|----------|--------|
| Vídeo YouTube embed de Ken Robinson | Solo referencia textual, no embed |
| Formulario funcional de "¿Qué pasó?" (objetivos) | Simplificado como CTA a contacto |
| PDF descargable "Formulario" | No incluido |
| Versión francesa completa | Solo placeholder |
| Imágenes decorativas Wix (comics franceses, etc.) | Posiblemente diferentes |

---

## 7. Problemas detectados en Wix (academiakomuniki.com)

### 7.1. Contenido cruzado en el menú

Las URLs `/quienes-somos`, `/objetivos` y `/resultados` muestran contenido que **NO corresponde** con su nombre en el menú de navegación. Es el error más grave de usabilidad.

### 7.2. Typo en URL

- `/anunios` en vez de `/anuncios`

### 7.3. Redes sociales obsoletas

- Link a **Google+** (red social cerrada en 2019)
- Link de Facebook apunta a `WixEspanol` en vez de a la academia real

### 7.4. Links externos rotos

- Algunos links apuntan a `cms.e.jimdo.com` (dominio roto/redirigido)
- El link de "drugfreeworld" apunta a jimdo en vez del sitio real

### 7.5. Copyright desactualizado

- "© 2023 por Emprender" — no refleja la marca Komuniki

---

## 8. Mapa de redirecciones necesarias para la migración

Para mantener el SEO al migrar de Wix a la nueva web:

| URL Wix antigua | URL nueva | Acción |
|-----------------|-----------|--------|
| `/quienes-somos` | `/quienes-somos` | Contenido corregido |
| `/objetivos` | `/objetivos` | Contenido corregido |
| `/resultados` | `/resultados` | Contenido corregido |
| `/nuestros-colaboradores` | `/colaboramos` | Redirección 301 |
| `/anunios` | `/anuncios` | Redirección 301 |
| `/christinadauzon` | `/contacto` (+ alias `/christinadauzon`) | Ambas activas |

---

## 9. Resumen ejecutivo

La nueva web en Astro (localhost) representa una **mejora significativa** sobre la versión Wix actual:

1. **Corrige errores graves** de navegación y contenido cruzado
2. **Mejora el SEO** con URLs limpias y estructura HTML semántica
3. **Moderniza** eliminando dependencias obsoletas (Google+, Wix branding ajeno)
4. **Mejora la arquitectura** separando contenido denso en subpáginas dedicadas
5. **Prepara el multiidioma** con estructura `/fr`
6. **Reduce el peso** pasando de SPA Wix a HTML estático

Pendientes principales: completar la versión francesa, añadir el embed de YouTube de Ken Robinson, y verificar que todas las imágenes estén migradas correctamente.
