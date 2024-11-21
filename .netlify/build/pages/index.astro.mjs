/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, d as renderSlot, e as renderHead, f as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_5FxhCcnk.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/bankzxcv/work-b/lalida/lalida_port/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Lali - Pediatric Nurse & Professional Nanny"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">', "", '</head> <body class="bg-gray-50"> <div class="fixed inset-0 -z-10 opacity-5"> <svg width="100%" height="100%"> <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse"> <circle cx="10" cy="10" r="2" fill="#2563eb"></circle> <path d="M20 20h4v4h-4z" fill="#2563eb"></path> </pattern> <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect> </svg> </div> ', ' <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script> <script>\n      AOS.init({\n        duration: 800,\n        once: false,\n      });\n    <\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/bankzxcv/work-b/lalida/lalida_port/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const menuItems = [
    {
      title: "About",
      url: "#about",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>`
    },
    {
      title: "Skills",
      url: "#skills",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>`
    },
    {
      title: "Experience",
      url: "#experience",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>`
    },
    {
      title: "Education",
      url: "#education",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm" data-astro-cid-3ef6ksr2> <nav class="container mx-auto px-6 py-4" data-astro-cid-3ef6ksr2> <div class="flex justify-between items-center" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center gap-2 group" data-astro-cid-3ef6ksr2> <div class="relative" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-medical group-hover:text-medical-dark transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-3ef6ksr2></path> </svg> <div class="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white group-hover:scale-110 transition-transform" data-astro-cid-3ef6ksr2></div> </div> <div class="flex flex-col" data-astro-cid-3ef6ksr2> <span class="text-2xl font-bold text-medical group-hover:text-medical-dark transition-colors" data-astro-cid-3ef6ksr2>Lali</span> <span class="text-sm text-gray-600" data-astro-cid-3ef6ksr2>Pediatric Nurse</span> </div> </a> <!-- Desktop Menu --> <ul class="hidden md:flex items-center space-x-1" data-astro-cid-3ef6ksr2> ${menuItems.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.url, "href")} class="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-medical hover:bg-medical-light transition-all group" data-astro-cid-3ef6ksr2> <span class="text-medical group-hover:scale-110 transition-transform" data-astro-cid-3ef6ksr2>${unescapeHTML(item.icon)}</span> <span class="font-medium" data-astro-cid-3ef6ksr2>${item.title}</span> </a> </li>`)} </ul> <!-- Mobile Menu Button --> <div class="md:hidden" data-astro-cid-3ef6ksr2> <button id="mobile-menu-button" class="text-gray-600 hover:text-medical transition-colors p-2 rounded-lg hover:bg-medical-light" aria-label="Menu" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden mt-4 rounded-lg bg-white shadow-lg border border-gray-100" data-astro-cid-3ef6ksr2> <ul class="py-2" data-astro-cid-3ef6ksr2> ${menuItems.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.url, "href")} class="flex items-center gap-3 px-6 py-3 text-gray-600 hover:text-medical hover:bg-medical-light transition-all" data-astro-cid-3ef6ksr2> <span class="text-medical" data-astro-cid-3ef6ksr2>${unescapeHTML(item.icon)}</span> <span class="font-medium" data-astro-cid-3ef6ksr2>${item.title}</span> </a> </li>`)} </ul> </div> </nav> </header>  `;
}, "/Users/bankzxcv/work-b/lalida/lalida_port/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen pt-20 bg-gradient-to-b from-medical-light to-white relative overflow-hidden"> <div class="absolute inset-0 -z-10"> <svg width="100%" height="100%" class="opacity-10"> <pattern id="medical-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"> <path d="M20 0v40M0 20h40" stroke="currentColor" class="text-medical-dark" stroke-width="0.5"></path> <circle cx="20" cy="20" r="1" class="fill-medical-dark"></circle> </pattern> <rect x="0" y="0" width="100%" height="100%" fill="url(#medical-pattern)"></rect> </svg> </div> <div class="container mx-auto px-6 py-20"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="text-left" data-aos="fade-right"> <div class="mb-6"> <h1 class="text-6xl font-bold text-medical-dark mb-2">Lali</h1> <h2 class="text-3xl text-gray-600">Lalida</h2> </div> <h3 class="text-4xl font-bold text-medical mb-6">Professional Nanny & Registered Nurse</h3> <p class="text-xl text-gray-600 mb-8">
Compassionate and dedicated pediatric nurse with 4 years of experience caring for children aged 29 days to 15 years. 
          Combining medical expertise with nurturing childcare skills.
</p> <div class="space-x-4"> <a href="#experience" class="inline-block px-6 py-3 bg-medical text-white rounded-lg hover:bg-medical-dark transition-colors shadow-lg hover:shadow-xl"> <span class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
View Experience
</span> </a> <a href="#skills" class="inline-block px-6 py-3 bg-white text-medical border-2 border-medical rounded-lg hover:bg-medical-light transition-colors shadow-lg hover:shadow-xl"> <span class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path> </svg>
See Skills
</span> </a> </div> </div> <div class="relative" data-aos="fade-left"> <div class="relative rounded-2xl overflow-hidden shadow-xl"> <img src="/images/LALI.JPG" alt="Lali Profile" class="h-full w-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> </div> <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl" data-aos="fade-up" data-aos-delay="200"> <div class="flex items-center gap-4"> <div class="bg-medical-light p-4 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-medical" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.5v15m7.5-7.5h-15"></path> </svg> </div> <div> <p class="text-sm text-gray-600">Professional Experience</p> <p class="font-bold text-2xl text-medical">4+ Years</p> </div> </div> </div> </div> </div> </div> </section>`;
}, "/Users/bankzxcv/work-b/lalida/lalida_port/src/components/Hero.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    {
      title: "Child Development Knowledge",
      description: "Understanding physical and emotional development stages",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`
    },
    {
      title: "Infant and Toddler Care",
      description: "Proficient in caring for newborns and young children",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`
    },
    {
      title: "Emergency Response",
      description: "Trained in pediatric CPR and First Aid",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>`
    },
    {
      title: "Time Management",
      description: "Skilled at managing busy schedules and activity coordination",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`
    },
    {
      title: "Live-In Care Expertise",
      description: "Experience in providing 24/7 care in a home environment",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>`
    },
    {
      title: "Communication",
      description: "Strong interpersonal skills for maintaining open communication",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-20 bg-white relative overflow-hidden"> <div class="absolute inset-0 -z-10"> <svg width="100%" height="100%" class="opacity-5"> <pattern id="medical-cross" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"> <path d="M20 0v40M0 20h40" stroke="currentColor" class="text-medical" stroke-width="1"></path> </pattern> <rect x="0" y="0" width="100%" height="100%" fill="url(#medical-cross)"></rect> </svg> </div> <div class="container mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-12 text-medical-dark" data-aos="fade-up">Professional Skills</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${skills.map((skill, index) => renderTemplate`<div class="p-6 rounded-lg shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> <div class="text-medical mb-4">${unescapeHTML(skill.icon)}</div> <h3 class="text-xl font-semibold mb-3 text-medical-dark">${skill.title}</h3> <p class="text-gray-600">${skill.description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/bankzxcv/work-b/lalida/lalida_port/src/components/Skills.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      title: "Live-In Au Pair",
      company: "AUPAIR Program (USA)",
      period: "2022 - 2024",
      duties: [
        "Provided full-time live-in care for twin girls and a newborn",
        "Applied Montessori principles",
        "Maintained children's schedules",
        "Performed light housekeeping tasks",
        "Utilized beginner American Sign Language (ASL)"
      ]
    },
    {
      title: "Registered Nurse",
      company: "PAK CHONG NANA HOSPITAL (Korat, Thailand)",
      period: "2018 - 2022",
      duties: [
        "Administered injections and immunizations",
        "Provided wound care and parent education",
        "Collaborated with healthcare teams",
        "Monitored patients' vital signs",
        "Managed medical records"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-20 bg-gray-50"> <div class="container mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">Experience</h2> <div class="space-y-12"> ${experiences.map((exp, index) => renderTemplate`<div class="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> <h3 class="text-2xl font-bold text-primary mb-2">${exp.title}</h3> <p class="text-xl text-gray-600 mb-4">${exp.company}</p> <p class="text-gray-500 mb-4">${exp.period}</p> <ul class="list-disc list-inside space-y-2 text-gray-600"> ${exp.duties.map((duty) => renderTemplate`<li>${duty}</li>`)} </ul> </div>`)} </div> </div> </section>`;
}, "/Users/bankzxcv/work-b/lalida/lalida_port/src/components/Experience.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="education" class="py-20 bg-white"> <div class="container mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">Education</h2> <div class="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg" data-aos="fade-up"> <h3 class="text-2xl font-bold text-primary mb-2">Bachelor of Science, Nursing</h3> <p class="text-xl text-gray-600">Boromarajonani College Nursing Trang (Thailand)</p> <p class="text-gray-500">2018</p> </div> </div> </section>`;
}, "/Users/bankzxcv/work-b/lalida/lalida_port/src/components/Education.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nurse Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Education", $$Education, {})} </main> ` })}`;
}, "/Users/bankzxcv/work-b/lalida/lalida_port/src/pages/index.astro", void 0);

const $$file = "/Users/bankzxcv/work-b/lalida/lalida_port/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
