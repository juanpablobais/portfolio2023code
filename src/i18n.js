// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Hola!": "Hi there!",
      "SOY": "I'M",
      "DesarrolladorWeb" : "Web Developer",
      "Front-end" : "Front-end Developer",
      "UN POCO" : "ABOUT",
      "SOBRE MI" : "ME",
      "Tengo fluidez en lenguajes clásicos como" : "I am fluent in classical languages such as",
      "así como en frameworks modernos como" : "as well as in modern frameworks like",
      "Además, manejo herramientas de control de versiones como" : "Additionally, I have proficiency in version control tools like",
      "y plataformas de colaboración como" : "and collaboration platforms such as",
      "En este momento, estoy ampliando mis conocimientos a través de un curso en línea sobre" : "Currently, I am expanding my knowledge through an online course on",
      "y estoy a punto de iniciar mis estudios en la " : " and am about to begin my studies in the ",
      "Tecnicatura Universitaria en Programación." : "University Technical Degree in Programming.",
      "CONTÁCTAME" : "CONTACT ME",
      "No dudes en" : "Feel free to ",
      "escribirme" : "drop me a line.",
      "Inicio" : "Home",
      "Proyectos" : "Projects",
      "Mis" : "My ",
      "estudios" : "education",
      "Recibido" : "Graduated as a ",
      "Técnico Electromecánico" : "Electromechanical Technician ",
      "en la E.E.S.T N°1 de Chacabuco. (2011-2017)" : "at E.E.S.T N°1 from Chacabuco. (2011-2017)",
      "Estudiando" : "Currently pursuing an ",
      "Técnicatura Universitaria en Programación" : "University Technical Degree in Programming",
      "en UTN." : "at UTN.",
      "Cursos realizados:" : "Completed courses",
      "Desarrollo Web" : "Web Development",
      "en" : "at",
      "Herramientas" : "Tools ",
      "que utilizo" : "I use",
      "visioncriticadesc" : "My personal blog created with Javascript, HTML, CSS, and Bootstrap. In it, I can upload reviews of movies I've watched or write reviews of music albums I've listened to.",
      "portfoliodesc" : "This is my current portfolio, developed with React.js, CSS, and react-bootstrap. The combination of these technologies provides an interactive and responsive interface, effectively showcasing my projects and skills in web development.",
      "sushizendesc" : "This is a static website with a responsive design, created exclusively with HTML and CSS. It serves as a practice to enhance my skills in web development, focusing on building attractive and adaptable interfaces.",
      "portfolio2022desc" : 
      "Previously, I developed this portfolio using React.js. I incorporated features such as the ability to switch between Spanish and English, as well as light-dark viewing modes. The portfolio prominently showcased my projects and included a fully functional contact form to facilitate communication.",
      "voyturdesc" : "VoyTur is a website that I designed to simulate a fictional travel agency. This creation was based on HTML and CSS, implementing a responsive design to ensure an optimal experience on various devices. The initiative allowed me to apply and enhance my skills in web development, focusing on visual presentation and interface adaptability.",
      "buscaminas" : "Minesweeper",
      "buscaminasdesc" :"The Minesweeper game has been predominantly built using Javascript with a touch of CSS. This project emerged as part of a challenge during an interview at TAP company. Choosing Javascript as the main language and adding styles with CSS allowed me to showcase my practical approach to creating interactive applications.",
      "organizerappdesc" : "Web application created with Javascript as the final project for my course at Coderhouse. It includes a note-taking app, a to-do list app, a weather app for your location, and a quiz game.",
      "portfolio2021desc" : "I designed a static web page with a portfolio style, using only HTML and CSS as part of my practice. This initiative allowed me to develop my skills in interface creation and web design, focusing on effective structure and presentation.",
      "justbeauty2021desc" : "This was the first page I developed as part of my project in the Coderhouse web development course, where I acquired the fundamentals of HTML and CSS. This initial project marked the beginning of my journey in web development, providing me with the opportunity to apply the concepts learned and lay the foundation for my ongoing growth in the field.",
      "recientes" : "recent"
    }
  },
  es: {
    translation: {
      "Hola!": "Hola!",
      "SOY": "SOY",
      "DesarrolladorWeb" : "Desarrollador Web",
      "Front-end" : "Desarrollador Front-end",
      "UN POCO" : "UN POCO",
      "SOBRE MI" : "SOBRE MÍ",
      "Tengo fluidez en lenguajes clásicos como" : "Tengo fluidez en lenguajes clásicos como",
      "así como en frameworks modernos como" : "así como en frameworks modernos como",
      "Además, manejo herramientas de control de versiones como" : "Además, manejo herramientas de control de versiones como",
      "y plataformas de colaboración como" : "y plataformas de colaboración como",
      "En este momento, estoy ampliando mis conocimientos a través de un curso en línea sobre" : "En este momento, estoy ampliando mis conocimientos a través de un curso en línea sobre",
      "y estoy a punto de iniciar mis estudios en la " : " y estoy a punto de iniciar mis estudios en la ",
      "Tecnicatura Universitaria en Programación." : "Tecnicatura Universitaria en Programación.",
      "CONTÁCTAME" : "CONTÁCTAME",
      "No dudes en" : "No dudes en ",
      "escribirme" : "escribirme",
      "Inicio" : "Inicio",
      "Proyectos" : "Proyectos",
      "Mis" : "Mis ",
      "estudios" : "estudios",
      "Recibido" : "Recibido ",
      "Técnico Electromecánico" : "Técnico Electromecánico ",
      "en la E.E.S.T N°1 de Chacabuco. (2011-2017)" : "en la E.E.S.T N°1 de Chacabuco. (2011-2017)",
      "Estudiando" : "Estudiando",
      "Técnicatura Universitaria en Programación": "Técnicatura Universitaria en Programación",
      "en UTN." : "en UTN.",
      "Cursos realizados:" : "Cursos realizados:",
      "Desarrollo Web" : "Desarrollo Web",
      "en" : "en",
      "Herramientas" : "Herramientas ",
      "que utilizo" : "que utilizo",
      "visioncriticadesc" : "Mi blog personal creado con Javascript, HTML, CSS y Bootstrap. En el mismo puedo ir subiendo críticas a películas que haya visto o reseñas a discos de música que haya escuchado.",
      "portfoliodesc" : "Este es mi portfolio actual, desarrollado con React.js, CSS y react-bootstrap. La combinación de estas tecnologías ofrece una interfaz interactiva y adaptable, destacando de manera efectiva mis proyectos y habilidades en el desarrollo web.",
      "sushizendesc" : "Esta es una web estática con diseño responsive, creada exclusivamente con HTML y CSS. Se trata de una práctica destinada a mejorar mis habilidades en el desarrollo web, enfocándome en la construcción de interfaces atractivas y adaptables.",
      "portfolio2022desc" : "Anteriormente, desarrollé este portfolio utilizando React.js. Incorporé características como la capacidad de traducción entre español e inglés, así como modos de visualización light-dark. El portfolio presentaba de manera destacada mis proyectos y contaba con un formulario de contacto completamente funcional para facilitar la comunicación.",
      "voyturdesc" : "VoyTur es una página web que diseñé para simular una agencia de viajes ficticia. Esta creación se basó en HTML y CSS, implementando un diseño responsive para garantizar una experiencia óptima en distintos dispositivos. La iniciativa me permitió aplicar y mejorar mis habilidades en el desarrollo web, centrándome en la presentación visual y la adaptabilidad de la interfaz.",
      "buscaminas": "Buscaminas",
      "buscaminasdesc" : "El juego de Buscaminas ha sido construido predominantemente con Javascript y con una pizca de CSS. Este proyecto surgió como parte de un desafío durante una entrevista en la empresa TAP. La elección de utilizar Javascript como lenguaje principal y agregar estilos con CSS me permitió destacar mi enfoque práctico en la creación de aplicaciones interactivas.",
      "organizerappdesc" : "Aplicación web creada con Javascript como proyecto final para mi curso en Coderhouse. Cuenta con una aplicación para escribir notas, una aplicación de que-haceres, una aplicación para ver el clima en tu ubicación y un juego de preguntas y respuestas.",
      "portfolio2021desc" : "Elaboré una página web estática con un estilo de portfolio, utilizando únicamente HTML y CSS como parte de mis prácticas. Esta iniciativa me permitió desarrollar mis habilidades en la creación de interfaces y diseño web, centrándome en la estructura y presentación de manera efectiva.",
      "justbeauty2021desc" : "Esta fue la primera página que desarrollé como parte de mi proyecto en el curso de desarrollo web de Coderhouse, donde adquirí los fundamentos de HTML y CSS. Este proyecto inicial marcó el comienzo de mi viaje en el desarrollo web, proporcionándome la oportunidad de aplicar los conceptos aprendidos y sentar las bases para mi crecimiento continuo en el campo.",
      "recientes" : "recientes"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
