import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, f as renderSlot, g as createAstro, m as maybeRenderHead, h as renderComponent } from '../chunks/astro/server_BOp1m10s.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sh445jdo> ${title && renderTemplate`<h2 data-astro-cid-sh445jdo>${title}</h2>`} ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/components/Section.astro", void 0);

const basics = {
	name: "Santiago Hernandez Espejo",
	label: "Ingeniero de Datos y Software",
	image: "/pic.webp",
	email: "santiago224z90@gmail.com",
	phone: "+57 3208931178",
	url: "prontoo",
	summary: "Ingeniero de datos y software con experiencia en la empresa \"Auna\". Dominio de lenguajes de programación como Python,JavaScript, Java, en frameworks y bases de datos para diseñar, desarrollar e implementar soluciones. Experto en aprendizaje autónomo. Comprometido con la calidad y la mejora continua.",
	location: {
		address: "",
		postalCode: "",
		city: "Medellín",
		countryCode: "CO",
		region: "Colombia"
	},
	profiles: [
		{
			network: "Github",
			username: "SantiHez",
			url: "https://github.com/SantiHez"
		},
		{
			network: "Linkedin",
			username: "Santiago Hernandez",
			url: "https://www.linkedin.com/in/santiago-hernandez-e/"
		}
	]
};
const work = [
	{
		name: "Auna",
		position: "Practicante de ingeniería de datos y software",
		startDate: "2023-08-01",
		endDate: "2024-01-31",
		summary: "Description…",
		highlights: [
			"-Mantenimiento de la base de datos y registros.",
			"-Colaboración en la identificación y resolución de problemas técnicos.",
			"-Realización de cálculos y análisis para optimizar procesos.",
			"-Análisis de procesos y redacción de informes con los hallazgos.",
			"-Propuesta de soluciones técnicas en todas las etapas del proyecto.",
			"-Desarrollo y pruebas de prototipos de equipos y sistemas.",
			"-Gestión de documentación y archivos"
		],
		url: "https://www.lasamericas.com.co/es-es/"
	}
];
const education = [
	{
		institution: "Cesde",
		url: "",
		area: "Técnico Laboral como Asistente en Desarrollo de Software",
		studyType: "Tecnico",
		startDate: "2023-02",
		endDate: "2024-06",
		score: "",
		courses: [
		]
	},
	{
		institution: "Universidad de San Buenaventura",
		url: "",
		area: "Ingenieria de datos y software",
		studyType: "Pregrado",
		startDate: "2020-02",
		endDate: "2024-06",
		score: "",
		courses: [
		]
	}
];
const certificates = [
	{
		name: "Introduction to Databases for Back-End Development",
		date: "2023-07-22",
		issuer: "Meta",
		url: "https://coursera.org/share/2bb6534fd8963b5475fd481de1aaaff0"
	},
	{
		name: "Version Control",
		date: "2023-06-20",
		issuer: "Meta",
		url: "https://coursera.org/share/f09231de3c52ddf55e1f9b49ca17b975"
	},
	{
		name: "Programming in Python",
		date: "2023-03-20",
		issuer: "Meta",
		url: "https://coursera.org/share/f366c63133126ab291ec6da6e6733119"
	},
	{
		name: "Introduction to Back-End Development",
		date: "2023-02-25",
		issuer: "Meta",
		url: "https://coursera.org/share/301154d9873516374296ed3bd75d2944"
	}
];
const skills = [
	{
		name: "HTML",
		level: "Avanzado",
		keywords: [
		]
	},
	{
		name: "CSS",
		level: "Avanzado",
		keywords: [
		]
	},
	{
		name: "JavaScript",
		level: "Avanzado",
		keywords: [
		]
	},
	{
		name: "Node",
		level: "Avanzado",
		keywords: [
		]
	},
	{
		name: "MySQL",
		level: "Avanzado",
		keywords: [
		]
	},
	{
		name: "Git",
		level: "Avanzado",
		keywords: [
		]
	},
	{
		name: "Github",
		level: "Avanzado",
		keywords: [
		]
	},
	{
		name: "React",
		level: "Avanzado",
		keywords: [
		]
	},
	{
		name: "Python",
		level: "Avanzado",
		keywords: [
		]
	},
	{
		name: "PHP",
		level: "Avanzado",
		keywords: [
		]
	}
];
const projects = [
	{
		name: "Oiko Mer",
		startDate: "2023-05-21",
		endDate: "2023-09-16",
		isActive: false,
		description: "El proyecto de grado “Oiko Mer” consiste en una página web conectada a una base de datos de sqlite, de diferentes cadenas de supermercado, donde muestra los valores y sobresale el supermercado que cuenta con el producto de menor valor, aparte realiza una gráfica donde se ven los diferentes precios, este proyecto fue construido en Python con los frameworks Django y Chart.js",
		highlights: [
		],
		github: "https://github.com/SantiHez/Oiko-Mer"
	}
];

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Sobre m\xED" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p> ${basics.summary} </p> ` })}`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/components/sections/About.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Educaci\xF3n", "data-astro-cid-qtcj2w7e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-qtcj2w7e> ${education.map(({ institution, startDate, endDate, area }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
    const years = `${startYear} - ${endYear}`;
    return renderTemplate`<li data-astro-cid-qtcj2w7e> <article data-astro-cid-qtcj2w7e> <header data-astro-cid-qtcj2w7e> <div data-astro-cid-qtcj2w7e> <h3 data-astro-cid-qtcj2w7e>${institution}</h3> </div> <time data-astro-cid-qtcj2w7e>${years}</time> </header> <footer data-astro-cid-qtcj2w7e> <p data-astro-cid-qtcj2w7e>${area}</p> </footer> </article> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/components/sections/Education.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Experiencia", "data-astro-cid-ghubstuj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-ghubstuj> ${work.map(
    ({ name, startDate, endDate, position, highlights, url }) => {
      const startYear = new Date(startDate).getFullYear();
      const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
      return renderTemplate`<li data-astro-cid-ghubstuj> <article data-astro-cid-ghubstuj> <header data-astro-cid-ghubstuj> <div data-astro-cid-ghubstuj> <h3 data-astro-cid-ghubstuj> <a${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-ghubstuj> ${name} </a> </h3> <h4 data-astro-cid-ghubstuj>${position}</h4> </div> <div data-astro-cid-ghubstuj> <time${addAttribute(startDate, "datetime")}${addAttribute(startDate, "data-title")} data-astro-cid-ghubstuj> ${startYear} </time> ${" - "} <time${addAttribute(endDate, "datetime")}${addAttribute(endDate, "data-title")} data-astro-cid-ghubstuj> ${endYear} </time> </div> </header> <footer data-astro-cid-ghubstuj> <br data-astro-cid-ghubstuj> ${highlights.map((highlight) => renderTemplate`<p data-astro-cid-ghubstuj>${highlight}</p>`)} </footer> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/components/sections/Experience.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#999999" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/Mail.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#999999" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/Phone.astro", void 0);

const $$Github = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#999999" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/Github.astro", void 0);

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#999999" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/Linkedin.astro", void 0);

const $$WorldWide = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="#666666" stroke-width="1.5"><path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12z"></path><path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761c-.525 0-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.614 23.614 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2c.525 0 1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12z"></path><path stroke-linecap="round" d="M2 12h20"></path></g></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/WorldWide.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const { name, label, image, email, phone, url, summary } = basics;
  const { address, postalCode, city, countryCode, region } = basics.location;
  const SOCIAL_ICONS = {
    Github: $$Github,
    Linkedin: $$Linkedin
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "", "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-anhloy43> <div class="info" data-astro-cid-anhloy43> <h1 data-astro-cid-anhloy43>${name}</h1> <h2 data-astro-cid-anhloy43>${label}</h2> <!-- icono (iconos) --> <span data-astro-cid-anhloy43> ${renderComponent($$result2, "WorldWide", $$WorldWide, { "data-astro-cid-anhloy43": true })} ${city}, ${region} </span> <footer data-astro-cid-anhloy43> ${email && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")}${addAttribute(`Enviar un correo electronico a ${name} al correo ${email}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Mail", $$Mail, { "data-astro-cid-anhloy43": true })} </a>`} ${phone && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")}${addAttribute(``, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Phone", $$Phone, { "data-astro-cid-anhloy43": true })} </a>`} ${basics.profiles.map(({ network, url: url2, username }) => {
    const Icon = SOCIAL_ICONS[network];
    return renderTemplate`<a${addAttribute(url2, "href")}${addAttribute(`Visitar el perfil de ${username} en ${network}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-anhloy43": true })} </a>`;
  })} </footer> </div> <figure data-astro-cid-anhloy43> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} data-astro-cid-anhloy43> </figure> </div> ` })} `;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/components/sections/Hero.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Proyectos", "data-astro-cid-44zkpkd5": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<ul data-astro-cid-44zkpkd5> ${projects.map(
    ({ description, highlights, name, isActive, github }) => {
      return renderTemplate`<li data-astro-cid-44zkpkd5> <article data-astro-cid-44zkpkd5> <header data-astro-cid-44zkpkd5> <h3 data-astro-cid-44zkpkd5> <a${addAttribute(github, "href")} target="_blank"${addAttribute(`Ver el proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${name} </a> ${isActive && renderTemplate`<span data-astro-cid-44zkpkd5>•</span>`} ${github && renderTemplate`<a class="github-code-link"${addAttribute(github, "href")} target="_blank"${addAttribute(`Ver c\xF3digo fuente del proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${renderComponent($$result2, "Github", $$Github, { "data-astro-cid-44zkpkd5": true })} </a>`} </h3> <p data-astro-cid-44zkpkd5>${description}</p> </header> <footer data-astro-cid-44zkpkd5> ${highlights.map((highlight) => {
        return renderTemplate`<span data-astro-cid-44zkpkd5>${highlight}</span>`;
      })} </footer> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/components/sections/Projects.astro", void 0);

const $$Html = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/html.astro", void 0);

const $$Css = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/css.astro", void 0);

const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/javascript.astro", void 0);

const $$React = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/react.astro", void 0);

const $$Node = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/node.astro", void 0);

const $$Sql = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path><path d="M9 7h.01"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/sql.astro", void 0);

const $$Git = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 15v-6"></path><path d="M15 11l-2 -2"></path><path d="M11 7l-1.9 -1.9"></path><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/git.astro", void 0);

const $$Php = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#000000" d="M12 5.601h-.116c-1.61 0-3.18.175-4.69.507l.144-.027a16.125 16.125 0 0 0-3.91 1.343l.094-.042a8.123 8.123 0 0 0-2.57 1.93l-.007.008A3.6 3.6 0 0 0 0 11.684v.004c.019.914.374 1.741.946 2.367l-.002-.003a8.105 8.105 0 0 0 2.529 1.917l.048.021a15.7 15.7 0 0 0 3.71 1.282l.106.019c1.366.305 2.936.48 4.546.48h.123H12h.116c1.61 0 3.18-.175 4.69-.507l-.144.027a16.125 16.125 0 0 0 3.91-1.343l-.094.042a8.123 8.123 0 0 0 2.57-1.93l.007-.008A3.6 3.6 0 0 0 24 11.688v-.004a3.608 3.608 0 0 0-.947-2.371l.002.003a8.105 8.105 0 0 0-2.529-1.917l-.048-.021a15.7 15.7 0 0 0-3.71-1.282l-.106-.019a21.212 21.212 0 0 0-4.546-.48h-.123h.006zm-3.12 7.264c-.131.119-.28.221-.442.301l-.011.005a2.916 2.916 0 0 1-.482.179l-.021.005a1.723 1.723 0 0 1-.579.099h-.024h.001H5.35l-.32 1.963H3.583l1.28-6.675h2.773l.062-.001c.36 0 .706.063 1.026.179l-.021-.007c.295.108.546.276.748.489l.001.001c.175.223.3.493.354.789l.002.011a2.932 2.932 0 0 1-.015 1.059l.003-.019a2.82 2.82 0 0 1-.142.485l.007-.019q-.086.221-.184.417q-.122.196-.27.393a2.164 2.164 0 0 1-.317.343l-.003.002zm4.172.589l.565-2.822c.024-.107.038-.229.038-.355l-.002-.078v.004a.426.426 0 0 0-.111-.283a.671.671 0 0 0-.241-.134l-.005-.001a1.388 1.388 0 0 0-.418-.062l-.051.001h.002h-1.126l-.736 3.73H9.544l1.28-6.48h1.423l-.343 1.767h1.28l.073-.001c.331 0 .653.041.961.117l-.027-.006c.249.055.466.172.641.332l-.001-.001a.84.84 0 0 1 .306.498l.001.005a1.945 1.945 0 0 1-.04.787l.003-.014l-.589 2.994zm7.902-2.184c-.04.181-.082.328-.132.473l.009-.031c-.054.159-.12.297-.201.425l.005-.008a1.812 1.812 0 0 1-.248.408l.003-.004c-.098.122-.203.23-.317.329l-.003.003c-.131.119-.28.221-.442.301l-.011.005a2.916 2.916 0 0 1-.482.179l-.021.005a1.723 1.723 0 0 1-.579.099h-.024h.001h-1.972l-.343 1.959h-1.423l1.28-6.675h2.749l.073-.001c.365 0 .716.063 1.041.18l-.022-.007c.287.104.529.272.718.488l.002.002c.19.222.325.497.378.799l.002.01a2.763 2.763 0 0 1-.04 1.076l.004-.019zm-2.7-1.547h-.978l-.513 2.749h.908c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012a1.877 1.877 0 0 0 .036-.649l.001.009a.812.812 0 0 0-.161-.419l.001.002a1.116 1.116 0 0 0-.409-.243l-.008-.002a1.982 1.982 0 0 0-.689-.096h.003zm-11.19 0h-.978l-.515 2.749h.91c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012a1.877 1.877 0 0 0 .036-.649l.001.009a.812.812 0 0 0-.161-.419l.001.002a1.116 1.116 0 0 0-.409-.243l-.008-.002a1.982 1.982 0 0 0-.689-.096h.003z"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/php.astro", void 0);

const $$Python = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#000000" d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282s2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554m-.056-5.74a.784.784 0 1 1 0-1.57a.784.784 0 1 1 0 1.57"></path><path fill="#000000" d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282s-2.555-4.451-2.555-4.451m-3.981 10.436a.784.784 0 1 1 0 1.57a.784.784 0 1 1 0-1.57"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/python.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const SKILLS_ICONS = {
    HTML: $$Html,
    CSS: $$Css,
    JavaScript: $$Javascript,
    React: $$React,
    Node: $$Node,
    MySQL: $$Sql,
    Git: $$Git,
    Github: $$Github,
    Python: $$Python,
    PHP: $$Php
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Habilidades", "data-astro-cid-sye7xtqh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-sye7xtqh> ${skills.map(({ name }) => {
    const iconName = name === "Next.js" ? "Next" : name;
    const Icon = SKILLS_ICONS[iconName];
    return renderTemplate`<li data-astro-cid-sye7xtqh> ${Icon && renderTemplate`${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-sye7xtqh": true })}`} <span data-astro-cid-sye7xtqh>${name}</span> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/components/sections/Skills.astro", void 0);

const $$KeyboardManager = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer></footer>  `;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/components/KeyboardManager.astro", void 0);

const $$Meta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 256 171"><defs><linearGradient id="IconifyId1916b7b1e57f651a70" x1="13.878%" x2="89.144%" y1="55.934%" y2="58.694%"><stop offset="0%" stop-color="#0064E1"></stop><stop offset="40%" stop-color="#0064E1"></stop><stop offset="83%" stop-color="#0073EE"></stop><stop offset="100%" stop-color="#0082FB"></stop></linearGradient><linearGradient id="IconifyId1916b7b1e57f651a71" x1="54.315%" x2="54.315%" y1="82.782%" y2="39.307%"><stop offset="0%" stop-color="#0082FB"></stop><stop offset="100%" stop-color="#0064E0"></stop></linearGradient></defs><path fill="#0081FB" d="M27.651 112.136c0 9.775 2.146 17.28 4.95 21.82c3.677 5.947 9.16 8.466 14.751 8.466c7.211 0 13.808-1.79 26.52-19.372c10.185-14.092 22.186-33.874 30.26-46.275l13.675-21.01c9.499-14.591 20.493-30.811 33.1-41.806C161.196 4.985 172.298 0 183.47 0c18.758 0 36.625 10.87 50.3 31.257C248.735 53.584 256 81.707 256 110.729c0 17.253-3.4 29.93-9.187 39.946c-5.591 9.686-16.488 19.363-34.818 19.363v-27.616c15.695 0 19.612-14.422 19.612-30.927c0-23.52-5.484-49.623-17.564-68.273c-8.574-13.23-19.684-21.313-31.907-21.313c-13.22 0-23.859 9.97-35.815 27.75c-6.356 9.445-12.882 20.956-20.208 33.944l-8.066 14.289c-16.203 28.728-20.307 35.271-28.408 46.07c-14.2 18.91-26.324 26.076-42.287 26.076c-18.935 0-30.91-8.2-38.325-20.556C2.973 139.413 0 126.202 0 111.148z"></path><path fill="url(#IconifyId1916b7b1e57f651a70)" d="M21.802 33.206C34.48 13.666 52.774 0 73.757 0C85.91 0 97.99 3.597 110.605 13.897c13.798 11.261 28.505 29.805 46.853 60.368l6.58 10.967c15.881 26.459 24.917 40.07 30.205 46.49c6.802 8.243 11.565 10.7 17.752 10.7c15.695 0 19.612-14.422 19.612-30.927l24.393-.766c0 17.253-3.4 29.93-9.187 39.946c-5.591 9.686-16.488 19.363-34.818 19.363c-11.395 0-21.49-2.475-32.654-13.007c-8.582-8.083-18.615-22.443-26.334-35.352l-22.96-38.352C118.528 64.08 107.96 49.73 101.845 43.23c-6.578-6.988-15.036-15.428-28.532-15.428c-10.923 0-20.2 7.666-27.963 19.39z"></path><path fill="url(#IconifyId1916b7b1e57f651a71)" d="M73.312 27.802c-10.923 0-20.2 7.666-27.963 19.39c-10.976 16.568-17.698 41.245-17.698 64.944c0 9.775 2.146 17.28 4.95 21.82L9.027 149.482C2.973 139.413 0 126.202 0 111.148C0 83.772 7.514 55.24 21.802 33.206C34.48 13.666 52.774 0 73.757 0z"></path></svg>`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/icons/Meta.astro", void 0);

const $$Certificates = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Certificados", "data-astro-cid-py6yiie3": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<ul data-astro-cid-py6yiie3> ${certificates.map(({ name, date, issuer, url }) => {
    return renderTemplate`<li data-astro-cid-py6yiie3> <article data-astro-cid-py6yiie3> <header data-astro-cid-py6yiie3> <div data-astro-cid-py6yiie3> <h3 data-astro-cid-py6yiie3><a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" title="Certificado en Coursera" data-astro-cid-py6yiie3>${name}</a></h3> </div> <time data-astro-cid-py6yiie3>${date}</time> </header> <footer data-astro-cid-py6yiie3> <p data-astro-cid-py6yiie3>${renderComponent($$result2, "Meta", $$Meta, { "data-astro-cid-py6yiie3": true })} ${issuer}</p> </footer> </article> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/components/sections/Certificates.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Education", $$Education, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Certificates", $$Certificates, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result, "KeyboardManager", $$KeyboardManager, { "<": true, "Layout": true, "data-astro-cid-j7pv25f6": true })}`;
}, "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/USUARIO/Desktop/Astro/Vercel-Portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
