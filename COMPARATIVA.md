# Comparativa completa: localhost (Astro) vs sitio Wix (christinadauzon.wixsite.com/se-competente)

**Fecha del análisis original:** 7 de junio de 2026
**Revisión y correcciones:** 4 de septiembre de 2026 — verificado navegando en vivo cada URL del Wix real y releyendo el código fuente actual de `src/`. Los cambios respecto a la versión original están marcados explícitamente.

> Nota: el dominio de producción previsto `academiakomuniki.com` **ya no sirve el sitio Wix** — devuelve la página de error "ConnectYourDomain" de Wix. El sitio Wix solo es accesible hoy en `https://christinadauzon.wixsite.com/se-competente`, que es la URL usada para esta comparativa.

---

## 1. Plataforma y tecnología

| Aspecto | localhost (nueva) | Wix (actual) |
|---------|-------------------|-------------------------------|
| **Motor** | Astro (SSG) | Wix |
| **Hosting** | Estático (preparado para deploy) | Wix hosting, vía `christinadauzon.wixsite.com/se-competente` |
| **Dominio propio** | `academiakomuniki.carpones.com` (provisional, en `astro.config.mjs`) | `academiakomuniki.com` — **desconectado**, da error de Wix |
| **Rendimiento** | HTML estático, ligero | JavaScript pesado de Wix |
| **Footer** | © 2026 por Komuniki | © 2023 por Emprender. Creado con Wix.com |
| **Redes sociales** | Facebook (academiakomuniki) | Facebook (WixEspanol) + Google+ (obsoleto) |

---

## 2. Estructura de navegación / URLs

| Sección | localhost | Wix (URL real) | Diferencia |
|---------|-----------|----------------------|------------|
| Inicio | `/` | `/` | — |
| Quiénes somos | `/quienes-somos` | `/quienes-somos` | Mismo contenido — ver nota abajo |
| Objetivos | `/objetivos` | `/objetivos` | Mismo contenido — ver nota abajo |
| Resultados | `/resultados` | `/resultados` | Mismo contenido — ver nota abajo |
| Colaboramos | `/colaboramos` | `/nuestros-colaboradores` | URL diferente |
| Anuncios | `/anuncios` | `/anunios` (typo: falta la "c") | Typo corregido en local |
| Contacto | `/contacto` | `/christinadauzon` | URL diferente |
| Christina Dauzon | `/christinadauzon` (alias → contacto) | `/christinadauzon` | Mismo contenido |
| El Camino a la Felicidad | `/el-camino-a-la-felicidad` | No existe (integrado en colaboradores) | Página nueva en local |
| Juventud por los DDHH | `/juventud-por-los-derechos-humanos` | No existe (integrado en colaboradores) | Página nueva en local |
| Versión FR | `/fr` | Selector idioma FR (Wix multilingual) | Implementación diferente |

**⚠️ Corrección (04/09):** la versión original de este documento afirmaba que las URLs `/quienes-somos`, `/objetivos` y `/resultados` de Wix mostraban el contenido "cruzado" entre sí. Al navegar directamente a cada una de esas tres URLs en el Wix real, **cada una muestra el contenido que le corresponde por su propio nombre**: `/quienes-somos` → contenido "quiénes somos", `/objetivos` → "determina tus necesidades", `/resultados` → testimonios y modalidades. **El bug real está en los enlaces del menú de navegación de Wix**, que apuntan a la URL equivocada: el link con la etiqueta "Quienes somos" tiene `href="/objetivos"`, el link "Objetivos" tiene `href="/resultados"`, y el link "Resultados" tiene `href="/quienes-somos"`. Es decir, el contenido de cada URL está bien alojado; lo que está mal cableado es el menú. Ver también la sección 8 (redirecciones), que se simplifica gracias a esto.

---

## 3. Contenido por página

### 3.1. Inicio (`/`)

| Aspecto | localhost | Wix |
|---------|-----------|-----|
| CTA principal | "¿Quieres aprender?" + "¿Quieres ser profe?" | "¿Quieres ser profe?" + "¿Quieres APRENDER?" |
| Link CTA profe | → `/contacto` | → `/christinadauzon` |
| Citas | Benjamin Franklin + Nelson Mandela (bien formateadas) | Mismas citas (formato desordenado) |
| Sitios interesantes | 3 cards separadas (Inst. Francés, TV5 Monde, Le Point du FLE) | Links en texto plano |
| Vídeo Ken Robinson | **Embed `<iframe>` real de YouTube** (`index.astro`) | Solo link de texto a la URL de YouTube, sin embed |

**⚠️ Corrección (04/09):** la fila del vídeo de Ken Robinson estaba invertida en la versión original. Es **localhost** quien tiene el embed real (`<iframe src="https://www.youtube.com/embed/iG9CE55wbtY">`); Wix solo muestra un enlace de texto a `youtube.com/watch?v=...`, sin reproductor incrustado.

### 3.2. Quiénes somos / Objetivos / Resultados

- El contenido de cada página está correctamente alojado bajo su propia URL tanto en Wix como en local (ver corrección de la sección 2).
- El bug de Wix es de **navegación** (enlaces del menú mal apuntados), no de contenido cruzado por URL.
- **localhost** no reproduce ese bug: el componente `Header.astro` genera cada `href` directamente desde el mismo array que las etiquetas, así que no puede desincronizarse.

### 3.3. Objetivos (`/objetivos`)

| localhost | Wix |
|-----------|-----|
| Título: "¿Para qué? ¡Determina tus necesidades!" | Mismo título y contenido |
| Secciones: Quiénes somos, Niños/Adultos, Necesidades | Mismo contenido, con formulario integrado ("¡Cuéntanos!") |
| CTA: "¡Cuéntanos!" → `/contacto` + botón "Descargar el Formulario" (PDF) | Formulario inline en la propia página |

### 3.4. Resultados (`/resultados`)

| localhost | Wix |
|-----------|-----|
| Título: "¿Preparando tu futuro? ¡Este es tu lugar!" | Mismo título y contenido |
| Secciones bien organizadas: Empresas, Niños, Modalidad, Método, Testimonios | Todo en un bloque largo |
| Teléfono clickable `tel:` | Teléfono como texto |
| Testimonios en blockquotes estilizados, **10 testimonios** | Solo 2 testimonios visibles en el DOM estático (Ana, Beatriz/Juan) — puede haber más en un slider que no renderiza todos a la vez |

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
| Formulario con campos: Nombre, Email, Teléfono, Mensaje | Formulario Wix básico, mismos datos de contacto |
| Dirección, teléfono, email bien estructurados | Datos de contacto en texto |
| Teléfono con link `tel:` | Sin link telefónico |
| ✅ El formulario abre el cliente de correo del usuario (`mailto:`) con nombre, email, teléfono y mensaje precargados — sin backend externo | El formulario de Wix sí envía server-side (confirmación "¡Tus datos se enviaron con éxito!") |

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
| **Navegación** | Menú consistente — cada link apunta a su propia página (sin el bug de cableado de Wix) |
| **Footer** | Copyright actualizado, link real a Facebook de la academia (no a WixEspanol) |
| **Redes sociales** | Eliminado Google+ (obsoleto desde 2019) |
| **Contenido** | Texto en español añadido en Anuncios, testimonios ampliados y mejor formateados, vídeo de Ken Robinson embebido (Wix solo enlaza) |
| **Arquitectura** | Contenido de ONGs separado en subpáginas dedicadas |
| **Rendimiento** | HTML estático vs SPA pesada de Wix |
| **i18n** | Estructura `/fr` preparada para multiidioma |

---

## 6. Contenido pendiente en localhost vs Wix

| Elemento | Estado |
|----------|--------|
| Versión francesa completa | Solo placeholder en `/fr` |
| ~~Imágenes descargadas de Wix sin usar en el código~~ | ✅ Integradas (04/09/2026): `parler-francais.jpg` y `belecole.jpg` en Inicio, `bombilla-encendida.png` en Quiénes somos, `ccdh.jpg` y `drugs-booklet.jpg` en Colaboramos |
| Testimonios frente al slider de Wix | No se puede descartar al 100% que Wix tenga más testimonios en su slider de los que se ven en el DOM estático; conviene revisarlo manualmente antes de dar por cerrado |
| ~~Formulario de contacto funcional~~ | ✅ Resuelto (04/09/2026) vía `mailto:` — ver sección 9 sobre su fiabilidad |

~~Vídeo YouTube embed de Ken Robinson~~ y ~~PDF descargable "Formulario"~~ — **ya resueltos** (ver secciones 3.1 y 3.3): el commit `36f8968` del mismo 7 de junio de 2026 añadió ambos después de escribirse la primera versión de este documento.

---

## 7. Problemas detectados en Wix (sitio real)

### 7.1. Enlaces del menú mal cableados

Los enlaces del menú `/quienes-somos`, `/objetivos` y `/resultados` en Wix apuntan a la URL equivocada para su propia etiqueta (ver corrección en la sección 2). El contenido de cada URL en sí es correcto; el bug es de navegación, no de contenido. Sigue siendo el error de usabilidad más grave del sitio Wix.

### 7.2. Typo en URL

- `/anunios` en vez de `/anuncios`

### 7.3. Redes sociales obsoletas

- Link a **Google+** (red social cerrada en 2019)
- Link de Facebook apunta a `WixEspanol` en vez de a la academia real

### 7.4. Copyright desactualizado

- "© 2023 por Emprender" — no refleja la marca Komuniki

### 7.5. Dominio propio desconectado

- `academiakomuniki.com` no sirve el sitio Wix: devuelve la página de error "ConnectYourDomain" de Wix. El sitio solo es accesible vía `christinadauzon.wixsite.com/se-competente`.

---

## 8. Mapa de redirecciones necesarias para la migración

**⚠️ Corrección (04/09):** al confirmarse que `/quienes-somos`, `/objetivos` y `/resultados` ya usan en Wix las mismas URLs y el mismo contenido que en local, **no hacen falta redirecciones para esas tres** — solo para las dos páginas que sí cambian de URL:

| URL Wix antigua | URL nueva | Acción |
|-----------------|-----------|--------|
| `/nuestros-colaboradores` | `/colaboramos` | Redirección 301 |
| `/anunios` | `/anuncios` | Redirección 301 |
| `/christinadauzon` | `/contacto` (+ alias `/christinadauzon`) | Ambas activas — ya resuelto en local |

✅ Añadidas en `public/.htaccess` (04/09/2026).

---

## 9. Bloqueantes y pendientes para pasar a producción y retirar Wix

### Crítico (bloqueante)

- ~~Formulario de contacto no funcional~~ — resuelto (04/09/2026): `ContactForm.astro` ahora abre el cliente de correo del usuario (`mailto:christinadauzon@gmail.com`) con nombre, email, teléfono y mensaje precargados en el asunto/cuerpo, sin depender de Formspree ni de ningún backend externo. **Limitación conocida:** requiere que el visitante tenga un cliente de correo configurado en el dispositivo/navegador; en algunos móviles sin app de correo por defecto no abre nada. Es una solución "cero configuración" válida para lanzar ya, pero si más adelante se quiere un formulario que envíe sin depender del cliente de correo del usuario, habría que volver a un backend tipo Formspree.
- **Dominio de producción sin decidir/conectar**: `academiakomuniki.com` está desconectado de Wix (ver 7.5) y `astro.config.mjs` usa de momento `academiakomuniki.carpones.com`. Pendiente de decisión — se sigue usando el subdominio de `carpones.com` como placeholder hasta entonces.

### Importante

- Completar o decidir el alcance de la versión francesa (`/fr` es solo un placeholder).
- ~~Resolver las imágenes huérfanas de la sección 6~~ — integradas (04/09/2026).
- ~~Añadir las redirecciones 301 de la sección 8 a `public/.htaccess`~~ — hecho (04/09/2026).
- No hay analítica (Google Analytics/GTM) en `Layout.astro`; si Wix la tenía, se perderá histórico salvo que se configure de nuevo.
- `.github/` solo contiene configuración de "agent-discovery", no hay workflow de deploy/CI todavía.

### Deseable

- Confirmar que el hosting final sirve HTTPS con certificado válido (el plugin `basicSsl` de Vite es solo para desarrollo local, no afecta al build de producción).
- Comitear o descartar los ficheros sin trackear (`.github/`, `robots.txt`, imágenes) antes de fusionar `feature/pixel-perfect-wix` a `main`.
- Pasar `astro build && astro preview` y revisar visualmente todas las páginas antes del switch de dominio.

---

## 10. Resumen ejecutivo

La nueva web en Astro (localhost) representa una **mejora significativa** sobre la versión Wix actual:

1. **Corrige el bug de navegación** de Wix (menú mal cableado) sin reproducirlo
2. **Mejora el SEO** con URLs limpias, sin typos, y estructura HTML semántica
3. **Moderniza** eliminando dependencias obsoletas (Google+, Wix branding ajeno)
4. **Mejora la arquitectura** separando contenido denso en subpáginas dedicadas
5. **Prepara el multiidioma** con estructura `/fr`
6. **Reduce el peso** pasando de SPA Wix a HTML estático
7. Ya incluye el embed de YouTube de Ken Robinson y el PDF descargable del formulario (resueltos tras el análisis original)

**Estado actual (04/09/2026):** de los dos bloqueantes originales, el formulario de contacto ya funciona (vía `mailto:`, con la limitación de que depende de que el visitante tenga cliente de correo configurado) y las redirecciones 301 y las imágenes huérfanas ya están resueltas. Solo queda pendiente de decisión el dominio de producción definitivo. Junto a eso, quedan abiertos como no bloqueantes: completar la versión francesa y añadir analítica. Ver sección 9 para el detalle priorizado.
