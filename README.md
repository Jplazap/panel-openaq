# Panel OpenAQ

Panel de monitoreo ambiental desarrollado con **React** y **Vite**, que consume la API REST de **OpenAQ v3** para navegar de forma jerárquica por la información de calidad del aire: **ubicaciones → sensores → mediciones**.

Proyecto realizado para la asignatura de **Aplicaciones Telemáticas**, 8vo nivel, Facultad de Ciencias de la Computación y Diseño Digital, Universidad Técnica Estatal de Quevedo (UTEQ).

Repositorio de referencia (estructura base): [cristianzambrano/panel-openaq](https://github.com/cristianzambrano/panel-openaq)

## Funcionalidades

- **Dashboard principal**: resumen con tarjetas de indicadores (total de estaciones, total de sensores, estaciones fijas y móviles) y una vista rápida de las estaciones más relevantes.
- **Listado de ubicaciones**: tabla completa de las estaciones de monitoreo de calidad del aire registradas en Ecuador, con país, localidad, número de sensores, coordenadas y tipo de estación.
- **Sensores por ubicación**: al seleccionar una estación, se listan sus sensores (parámetro medido, unidad y última actualización disponible).
- **Mediciones por sensor**: al seleccionar un sensor, se listan sus mediciones registradas (fecha, valor, unidad, parámetro y período de agregación).
- **Diseño responsivo**, adaptado a computadora, tablet y dispositivos móviles.

- <img width="856" height="397" alt="image" src="https://github.com/user-attachments/assets/e85e7728-8e45-4007-82cf-ae8338d29802" />
<img width="858" height="347" alt="image" src="https://github.com/user-attachments/assets/8bbdf716-5f18-4ab1-8e2b-1c6d2e159b0d" />
<img width="913" height="444" alt="image" src="https://github.com/user-attachments/assets/bb8ffb9c-cf33-41ce-bd09-d20756c34915" />
<img width="902" height="459" alt="image" src="https://github.com/user-attachments/assets/15f8b17b-5113-4638-982f-d159afe9afd0" />


## Tecnologías utilizadas

- [React](https://react.dev/) 19 (componentes funcionales)
- [Vite](https://vitejs.dev/) 8 (servidor de desarrollo y bundler)
- [React Router DOM](https://reactrouter.com/) 7 (rutas estáticas y dinámicas)
- [OpenAQ API v3](https://docs.openaq.org/) (fuente de datos abiertos de calidad del aire)
- Proxy de desarrollo configurado en `vite.config.js` (evita problemas de CORS y protege la clave de API)

## Estructura del proyecto

```text
panel-openaq/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Encabezado del panel
│   │   ├── Sidebar.jsx          # Menú lateral de navegación
│   │   ├── SummaryCards.jsx     # Tarjetas resumen (props + map)
│   │   ├── StationsTable.jsx    # Tabla de ubicaciones (props + map)
│   │   ├── SensorsTable.jsx     # Tabla de sensores de una ubicación
│   │   └── MeasurementsTable.jsx# Tabla de mediciones de un sensor
│   ├── pages/
│   │   ├── Homepage.jsx             # Dashboard principal ("/")
│   │   ├── LocationsPage.jsx        # Listado de ubicaciones ("/locations")
│   │   ├── LocationSensorsPage.jsx  # Sensores de una ubicación ("/locations/:locationId/sensors")
│   │   ├── SensorMeasurementsPage.jsx # Mediciones de un sensor ("/sensors/:sensorId/measurements")
│   │   └── SummaryCardsPage.jsx     # Vista alterna solo de tarjetas ("/summary")
│   ├── services/
│   │   └── openaqApi.js         # Capa de servicios: consumo de la API de OpenAQ
│   ├── App.jsx                  # Configuración de rutas (React Router)
│   ├── App.css                  # Estilos del layout y componentes
│   ├── index.css
│   └── main.jsx                 # Punto de entrada de React
├── .env                         # Variable OPENAQ_API_KEY (no se sube a GitHub)
├── .gitignore
├── vite.config.js               # Proxy hacia la API de OpenAQ
├── package.json
└── README.md
```

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- npm 9 o superior

Verifica tus versiones con:

```bash
node -v
npm -v
```

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/TU_USUARIO/panel-openaq.git
cd panel-openaq
npm install
```

## Variables de entorno

El proyecto consume la API de OpenAQ a través de un proxy configurado en Vite, que agrega la clave de autenticación (`X-API-Key`) en el servidor de desarrollo, sin exponerla en el navegador.

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
OPENAQ_API_KEY=tu_api_key_de_openaq
```

> Puedes obtener una API key gratuita registrándote en [explore.openaq.org](https://explore.openaq.org/register).

El archivo `.env` está incluido en `.gitignore` y **nunca se sube al repositorio**.

## Ejecución en modo desarrollo

```bash
npm run dev
```

Luego abre en el navegador:

```text
http://localhost:5173
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Vite |
| `npm run build` | Compila la aplicación para producción (carpeta `dist/`) |
| `npm run preview` | Sirve localmente la build de producción |
| `npm run lint` | Revisa el código con Oxlint |

## Rutas de la aplicación

| Ruta | Página | Descripción |
|---|---|---|
| `/` | `Homepage` | Dashboard con resumen e indicadores |
| `/locations` | `LocationsPage` | Listado completo de ubicaciones |
| `/locations/:locationId/sensors` | `LocationSensorsPage` | Sensores de la ubicación seleccionada |
| `/sensors/:sensorId/measurements` | `SensorMeasurementsPage` | Mediciones del sensor seleccionado |
| `/summary` | `SummaryCardsPage` | Vista alterna solo de tarjetas resumen |

## API consumida

- `GET /v3/locations?bbox=...` — ubicaciones de monitoreo dentro del territorio ecuatoriano
- `GET /v3/locations/:id` — detalle de una ubicación (incluye sus sensores)
- `GET /v3/sensors/:id/measurements` — mediciones registradas por un sensor

Documentación oficial: [docs.openaq.org](https://docs.openaq.org/)

## Solución de problemas

- Si aparece un error de dependencias, ejecuta nuevamente `npm install`.
- Si el puerto `5173` está en uso, Vite asignará automáticamente otro puerto disponible.
- Si la API no responde, verifica tu conexión a internet, que el archivo `.env` contenga una clave válida y que hayas reiniciado `npm run dev` después de crearlo o modificarlo.

## Autor

**Plaza Pisanan Jorge Enrique**
Aplicaciones Telemáticas — 8vo nivel "A"
Universidad Técnica Estatal de Quevedo (UTEQ)
