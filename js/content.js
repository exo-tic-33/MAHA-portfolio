window.CONTENT = {
  person: {
    name: "Mohamed Ayman Hatim Aarab",
    shortName: "Ayman",
    role: "Desarrollador Web & Python",
    email: "mhatimaarab@gmail.com",
    location: "Granada, España"
  },

  links: {
    github: "https://github.com/exo-tic-33",
    linkedin: "https://www.linkedin.com/in/mohamed-aymane-hatim-aarab-952333385/",
    instagram: "https://www.instagram.com/exotic._.ayman?igsh=MTVvaDc4a3k4YmM5Nw==",
    email: "mailto:mhatimaarab@gmail.com",
    resume: "cv.html"
  },

  heroStats: {
    es: [
      { label: "Enfoque", value: "Clean Code & Accesibilidad" },
      { label: "Especialidad", value: "Web Modular & Python POO" },
      { label: "Estado", value: "Disponible para prácticas / Junior" }
    ],
    en: [
      { label: "Focus", value: "Clean Code & Accessibility" },
      { label: "Specialty", value: "Modular Web & Python OOP" },
      { label: "Status", value: "Open to internships / Junior roles" }
    ],
    fr: [
      { label: "Objectif", value: "Code propre & Accessibilité" },
      { label: "Spécialité", value: "Web modulaire & Python POO" },
      { label: "Statut", value: "Disponible pour stages / Junior" }
    ]
  },

  projects: [
    {
      id: "apisf",
      featured: true,
      category: {
        es: "Proyecto Destacado Principal / Web",
        en: "Main Featured Project / Web",
        fr: "Projet Phare Principal / Web"
      },
      title: {
        es: "Portal Institucional APISF (Association Professionnelle de l'Ingénierie Sportive et de Formation)",
        en: "APISF Institutional Portal (Association Professionnelle de l'Ingénierie Sportive et de Formation)",
        fr: "Portail Institutionnel APISF (Association Professionnelle de l'Ingénierie Sportive et de Formation)"
      },
      shortTitle: "Portal Institucional APISF",
      img: "projectimg/apisf.jpg",
      imgAlt: "Vista previa del Portal Institucional APISF en producción",
      tech: ["HTML5", "CSS3", "JavaScript", "Mobile-First", "Producción"],
      desc: {
        es: "Sitio web oficial en producción desarrollado para la Asociación Profesional de Ingeniería Deportiva y Formación en Marruecos. Implementa diseño responsive accesible, arquitectura de componentes modular, carga diferida y navegación fluida orientada a la identidad corporativa de la entidad.",
        en: "Official production website developed for the Professional Association of Sports Engineering and Training in Morocco. Implements accessible responsive design, modular component architecture, lazy loading, and fluid navigation tailored to the institution's corporate identity.",
        fr: "Site web officiel en production développé pour l'Association Professionnelle de l'Ingénierie Sportive et de Formation au Maroc. Intègre un design responsive accessible, une architecture de composants modulaires, un chargement différé et une navigation fluide orientée vers l'identité corporative de l'entité."
      },
      links: {
        live: "https://apisf.org.ma/",
        code: "https://github.com/exo-tic-33/APISF-Web"
      }
    },
    {
      id: "academic-management",
      featured: false,
      category: {
        es: "Backend / Lógica Orientada a Objetos",
        en: "Backend / Object-Oriented Logic",
        fr: "Backend / Logique Orientée Objet"
      },
      title: {
        es: "Academic Management System",
        en: "Academic Management System",
        fr: "Academic Management System"
      },
      shortTitle: "Academic Management System",
      img: "projectimg/academic-management.jpg",
      imgAlt: "Vista previa del sistema Academic Management System",
      tech: ["Python 3", "POO", "Data Persistence", "CLI"],
      desc: {
        es: "Sistema modular en Python para la administración de entidades educativas (estudiantes, profesores, asignaturas y registros de notas). Diseñado bajo principios de programación orientada a objetos (POO), validación exhaustiva de entradas y persistencia estructurada de datos.",
        en: "Modular Python system for managing educational entities (students, professors, courses, and grade records). Designed under Object-Oriented Programming (OOP) principles, exhaustive input validation, and structured data persistence.",
        fr: "Système modulaire en Python pour l'administration d'établissements éducatifs (étudiants, professeurs, matières et relevés de notes). Conçu selon les principes de la programmation orientée objet (POO), validation rigoureuse des entrées et persistance structurée des données."
      },
      links: {
        code: "https://github.com/exo-tic-33/academic-management"
      }
    },
    {
      id: "weather-cli",
      featured: false,
      category: {
        es: "Consola / Integración API Externa",
        en: "Console / External API Integration",
        fr: "Console / Intégration d'API Externe"
      },
      title: {
        es: "Weather CLI Tool",
        en: "Weather CLI Tool",
        fr: "Weather CLI Tool"
      },
      shortTitle: "Weather CLI Tool",
      img: "projectimg/weather-cli.jpg",
      imgAlt: "Vista previa de la herramienta de consola Weather CLI Tool",
      tech: ["Python 3", "REST API", "JSON Parsing", "CLI"],
      desc: {
        es: "Herramienta de consola para consulta meteorológica en tiempo real mediante consumo de APIs RESTful externas. Incluye gestión de peticiones HTTP, control de errores de red y parseo eficiente de respuestas JSON.",
        en: "Console command-line tool for real-time weather inquiries through external RESTful API consumption. Includes HTTP request management, network error handling, and efficient JSON response parsing.",
        fr: "Outil en ligne de commande pour la consultation météo en temps réel via la consommation d'API RESTful externes. Comprend la gestion des requêtes HTTP, le traitement des erreurs réseau et l'analyse efficace des réponses JSON."
      },
      links: {
        code: "https://github.com/exo-tic-33/Weather-cli"
      }
    }
  ],

  skillsCategories: [
    {
      id: "frontend",
      icon: "🌐",
      title: {
        es: "Frontend & Diseño",
        en: "Frontend & UI/UX",
        fr: "Frontend & UI/UX"
      },
      skills: [
        "HTML5 Semántico",
        "CSS3 Moderno",
        "JavaScript (En aprendizaje)",
        "Responsive & Mobile-First",
        "Accesibilidad WCAG AA",
        "Glassmorphism UI"
      ]
    },
    {
      id: "backend",
      icon: "⚙️",
      title: {
        es: "Backend & Lógica",
        en: "Backend & Logic",
        fr: "Backend & Logique"
      },
      skills: [
        "Python 3",
        "Programación Orientada a Objetos (POO)",
        "REST APIs",
        "Arquitectura CLI",
        "Validación & Sanitización",
        "JSON Parsing"
      ]
    },
    {
      id: "databases",
      icon: "🗄️",
      title: {
        es: "Bases de Datos",
        en: "Databases",
        fr: "Bases de données"
      },
      skills: [
        "MySQL",
        "SQL Relacional",
        "phpMyAdmin",
        "Modelado E/R",
        "Persistencia Estructurada"
      ]
    },
    {
      id: "tools",
      icon: "🛠️",
      title: {
        es: "Herramientas & Entorno",
        en: "Tools & Environment",
        fr: "Outils & Environnement"
      },
      skills: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "Linux / Bash Terminal",
        "HTTP & DevTools",
        "Despliegue Web"
      ]
    }
  ],

  i18n: {
    es: {
      "brand.name": "Ayman",
      "brand.fullname": "Ayman Hatim Aarab",

      "nav.menu": "Menú",
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.projects": "Proyectos",
      "nav.skills": "Habilidades",
      "nav.resume": "CV",
      "nav.contact": "Contacto",

      "ui.back": "Volver",
      "ui.theme": "Tema",

      "cv.download": "Descargar CV",
      "cv.title": "Currículum Vitae",
      "cv.subtitle": "Visualiza mi trayectoria profesional o descarga una copia en PDF.",

      "hero.title": "Hola, soy Ayman Hatim Aarab",
      "hero.role": "Desarrollador Web & Python",
      "hero.lead": "Construyo aplicaciones web modernas, accesibles y software en Python con enfoque en arquitectura limpia, rendimiento y buenas prácticas.",
      "hero.ctaWork": "Ver Proyectos",
      "hero.ctaResume": "Ver CV",
      "hero.location": "Granada, España",
      "hero.status": "Disponible para prácticas / Junior",
      "hero.cardTitle": "Propuesta de Valor",
      "hero.cardSubtitle": "Compromiso técnico y evolución continua",

      "about.title": "Sobre mí",
      "about.subtitle": "Perfil técnico, enfoque de desarrollo y metas actuales.",
      "about.body": "Soy un desarrollador enfocado en desarrollo web y lógica backend en Python. Me apasiona crear interfaces visualmente atractivas con HTML5, CSS3 y JavaScript, así como estructurar sistemas modulares con POO y bases de datos relacionales.",
      "about.nowTitle": "Enfoque actual",
      "about.now1": "Profundizar en JavaScript vanilla avanzado y arquitecturas frontend modulares.",
      "about.now2": "Diseño de APIs RESTful robustas y persistencia de datos en Python.",
      "about.now3": "Estándares de accesibilidad web (WCAG AA) y rendimiento UI.",

      "projects.title": "Proyectos Destacados",
      "projects.subtitle": "Soluciones reales en producción, lógica de backend y herramientas de consola.",
      "projects.badgeFeatured": "Destacado en Producción",
      "projects.btnLive": "Live Demo",
      "projects.btnCode": "Código",

      "skills.title": "Skills Técnicas",
      "skills.subtitle": "Competencias y stack tecnológico organizado por áreas de especialidad.",

      "footer.bio": "Desarrollador web y Python enfocado en crear soluciones de software limpias, modernas y accesibles.",
      "footer.quick": "Navegación",
      "footer.connect": "Contacto Directo",
      "footer.shortcuts": "Atajos de teclado",
      "footer.shortTheme": "Alternar tema (Claro / Oscuro)",
      "footer.shortLang": "Cambiar idioma",
      "footer.built": "Desarrollado con HTML5, CSS3 & JavaScript Vanilla",

      "contact.pageTitle": "Contacto Profesional",
      "contact.pageSubtitle": "¿Tienes una propuesta, un proyecto en mente o una oportunidad de prácticas? Escríbeme y responderé a la brevedad.",
      "contact.formTitle": "Envíame un mensaje",
      "contact.formSubtitle": "Completa el formulario y me pondré en contacto contigo.",
      "contact.name": "Nombre",
      "contact.namePlaceholder": "Ej. Mohamed Ayman",
      "contact.email": "Correo electrónico",
      "contact.emailPlaceholder": "tu-email@ejemplo.com",
      "contact.subject": "Asunto",
      "contact.subjectPlaceholder": "Consulta sobre un proyecto",
      "contact.message": "Mensaje",
      "contact.messagePlaceholder": "Hola, me gustaría hablar sobre...",
      "contact.send": "Enviar Mensaje",
      "contact.sending": "Enviando mensaje...",
      "contact.sentSuccess": "¡Mensaje enviado con éxito! Me pondré en contacto contigo muy pronto.",
      "contact.sentError": "Hubo un error al enviar el formulario. Por favor escríbeme directamente a mhatimaarab@gmail.com",
      "contact.connectTitle": "Canales Directos",
      "contact.connectSubtitle": "También puedes comunicarte directamente a través de estos canales profesionales."
    },

    en: {
      "brand.name": "Ayman",
      "brand.fullname": "Ayman Hatim Aarab",

      "nav.menu": "Menu",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.resume": "Resume",
      "nav.contact": "Contact",

      "ui.back": "Back",
      "ui.theme": "Theme",

      "cv.download": "Download CV",
      "cv.title": "Curriculum Vitae",
      "cv.subtitle": "Explore my professional background or download a PDF copy.",

      "hero.title": "Hi, I’m Ayman Hatim Aarab",
      "hero.role": "Web & Python Developer",
      "hero.lead": "I build modern, accessible web applications and Python software focused on clean architecture, performance, and best practices.",
      "hero.ctaWork": "View Projects",
      "hero.ctaResume": "View Resume",
      "hero.location": "Granada, Spain",
      "hero.status": "Available for internships / Junior roles",
      "hero.cardTitle": "Value Proposition",
      "hero.cardSubtitle": "Technical commitment and continuous growth",

      "about.title": "About Me",
      "about.subtitle": "Technical background, engineering mindset, and current goals.",
      "about.body": "I am a developer focused on modern web applications and Python backend logic. I enjoy creating visually engaging interfaces with HTML5, CSS3, and JavaScript, as well as structuring modular systems with OOP and relational databases.",
      "about.nowTitle": "Current Focus",
      "about.now1": "Deepening vanilla JavaScript patterns and modular frontend architecture.",
      "about.now2": "Building robust RESTful APIs and structured data persistence in Python.",
      "about.now3": "Web accessibility standards (WCAG AA) and UI performance optimization.",

      "projects.title": "Featured Projects",
      "projects.subtitle": "Production systems, backend object-oriented logic, and console CLI tools.",
      "projects.badgeFeatured": "Featured in Production",
      "projects.btnLive": "Live Demo",
      "projects.btnCode": "Code",

      "skills.title": "Technical Skills",
      "skills.subtitle": "Core competencies and tech stack organized by domain.",

      "footer.bio": "Web & Python developer focused on crafting clean, modern, and accessible software solutions.",
      "footer.quick": "Navigation",
      "footer.connect": "Direct Channels",
      "footer.shortcuts": "Keyboard Shortcuts",
      "footer.shortTheme": "Toggle theme (Light / Dark)",
      "footer.shortLang": "Switch language",
      "footer.built": "Crafted with HTML5, CSS3 & Vanilla JavaScript",

      "contact.pageTitle": "Get In Touch",
      "contact.pageSubtitle": "Have a project in mind, a collaboration inquiry, or an internship opportunity? Reach out and I will reply promptly.",
      "contact.formTitle": "Send me a message",
      "contact.formSubtitle": "Fill in the form and I will get back to you shortly.",
      "contact.name": "Name",
      "contact.namePlaceholder": "E.g., Mohamed Ayman",
      "contact.email": "Email Address",
      "contact.emailPlaceholder": "your-email@example.com",
      "contact.subject": "Subject",
      "contact.subjectPlaceholder": "Project inquiry",
      "contact.message": "Message",
      "contact.messagePlaceholder": "Hello, I would like to discuss a project...",
      "contact.send": "Send Message",
      "contact.sending": "Sending message...",
      "contact.sentSuccess": "Message sent successfully! I will get back to you as soon as possible.",
      "contact.sentError": "Unable to send message right now. Please reach out directly to mhatimaarab@gmail.com",
      "contact.connectTitle": "Direct Channels",
      "contact.connectSubtitle": "You can also connect with me directly through these verified profiles."
    },

    fr: {
      "brand.name": "Ayman",
      "brand.fullname": "Ayman Hatim Aarab",

      "nav.menu": "Menu",
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.projects": "Projets",
      "nav.skills": "Compétences",
      "nav.resume": "CV",
      "nav.contact": "Contact",

      "ui.back": "Retour",
      "ui.theme": "Thème",

      "cv.download": "Télécharger CV",
      "cv.title": "Curriculum Vitae",
      "cv.subtitle": "Découvrez mon parcours ou téléchargez une copie au format PDF.",

      "hero.title": "Bonjour, je suis Ayman Hatim Aarab",
      "hero.role": "Développeur Web & Python",
      "hero.lead": "Je conçois des applications web modernes, accessibles et des solutions Python axées sur une architecture propre et de hautes performances.",
      "hero.ctaWork": "Voir les Projets",
      "hero.ctaResume": "Voir le CV",
      "hero.location": "Grenade, Espagne",
      "hero.status": "Disponible pour stages / Postes Junior",
      "hero.cardTitle": "Proposition de Valeur",
      "hero.cardSubtitle": "Rigueur technique et progression continue",

      "about.title": "À propos de moi",
      "about.subtitle": "Profil technique, vision de développement et objectifs actuels.",
      "about.body": "Je suis un développeur passionné par le web moderne et la logique backend en Python. J'aime concevoir des interfaces soignées en HTML5, CSS3 et JavaScript, tout en structurant des systèmes modulaires avec la POO et des bases de données relationnelles.",
      "about.nowTitle": "En ce moment",
      "about.now1": "Approfondissement de JavaScript vanilla et architectures frontend modulaires.",
      "about.now2": "Conception d'APIs RESTful fiables et persistance des données en Python.",
      "about.now3": "Respect des normes d'accessibilité (WCAG AA) et performances UI.",

      "projects.title": "Projets Phares",
      "projects.subtitle": "Applications en production, logique orientée objet et outils en ligne de commande.",
      "projects.badgeFeatured": "En Production",
      "projects.btnLive": "Démo en direct",
      "projects.btnCode": "Code",

      "skills.title": "Compétences Techniques",
      "skills.subtitle": "Technologies et outils maîtrisés classés par domaines d'expertise.",

      "footer.bio": "Développeur web et Python orienté vers la création de solutions logicielles propres, modernes et accessibles.",
      "footer.quick": "Navigation",
      "footer.connect": "Canaux Directs",
      "footer.shortcuts": "Raccourcis clavier",
      "footer.shortTheme": "Changer de thème (Clair / Sombre)",
      "footer.shortLang": "Changer de langue",
      "footer.built": "Conçu avec HTML5, CSS3 & JavaScript Vanilla",

      "contact.pageTitle": "Contact Professionnel",
      "contact.pageSubtitle": "Un projet à concrétiser, une collaboration ou une opportunité de stage ? Écrivez-moi et je vous répondrai rapidement.",
      "contact.formTitle": "Envoyez-moi un message",
      "contact.formSubtitle": "Remplissez ce formulaire pour me joindre directement.",
      "contact.name": "Nom",
      "contact.namePlaceholder": "Ex. Mohamed Ayman",
      "contact.email": "Adresse Email",
      "contact.emailPlaceholder": "votre-email@exemple.com",
      "contact.subject": "Sujet",
      "contact.subjectPlaceholder": "Demande concernant un projet",
      "contact.message": "Message",
      "contact.messagePlaceholder": "Bonjour, je souhaiterais échanger sur...",
      "contact.send": "Envoyer le message",
      "contact.sending": "Envoi en cours...",
      "contact.sentSuccess": "Message envoyé avec succès ! Je reviendrai vers vous dans les plus brefs délais.",
      "contact.sentError": "Erreur lors de l'envoi. Veuillez me contacter directement à mhatimaarab@gmail.com",
      "contact.connectTitle": "Canaux Directs",
      "contact.connectSubtitle": "Vous pouvez également me joindre via ces profils professionnels vérifiés."
    }
  }
};
