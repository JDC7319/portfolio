# Portafolio de Juan David — Tailwind CSS v4

Esto es una migracion de un portafolio original en HTML/CSS a HTML + Tailwind CSS v4 (CLI) + JavaScript ligero.

## Estructura

```text
portfolio-tailwind/
├── index.html
├── package.json
├── .gitignore
├── css/
│   ├── input.css
│   └── output.css   (se genera al compilar)
├── js/
│   └── main.js
├── images/         (coloca aquí tus imágenes originales)
├── resource/       (coloca aquí tu CV original)
└── README.md
```

## Paleta personalizada

| Token Tailwind | Hex | Clase de ejemplo |
|---|---|---|
| `black-deep` | `#02010A` | `bg-black-deep` |
| `prussian-blue` | `#04052E` | `bg-prussian-blue` |
| `deep-twilight` | `#140152` | `bg-deep-twilight` |
| `navy` | `#22007C` | `bg-navy` |
| `navy-electric` | `#0D00A4` | `bg-navy-electric` |

## Recursos por copiar del portafolio original

Los archivos `images/` y `resource/` no se incluyeron en los adjuntos originales. Copia estos archivos si los tienes:

- `images/photo-profile.png`
- `images/portfolio1.png`
- `images/portfolio2.png`
- `images/img-contact.svg`
- `resource/my-porfolio.pdf`

El diseño muestra gráficos de respaldo si faltan las imágenes. El botón de CV requiere el PDF real.

## Formulario de contacto

El HTML original no tenía un backend para enviar formularios. En esta versión, el botón prepara un correo mediante `mailto:`. Cambia `data-contact-email=""` en el elemento `<form id="contact-form">` por tu correo real, por ejemplo `data-contact-email="tu-correo@ejemplo.com"`. No envía nada automáticamente: abre el cliente de correo del visitante para que confirme el envío.

## Personalización

- `index.html`: textos, secciones, proyectos, clases de Tailwind, enlaces.
- `css/input.css`: colores con `@theme`, fuente y animación personalizada.
- `js/main.js`: comportamiento del menú móvil y del formulario.

Se han conservado las secciones originales; las tarjetas genéricas de proyectos se sustituyeron por espacios marcados como futuros proyectos. Los enlaces sociales sin URL se omitieron hasta que tengas las direcciones correctas.
