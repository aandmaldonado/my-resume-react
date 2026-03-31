import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { chatbotTranslations } from "@/components/chatbot/i18n";

const resources = {
  en: {
    translation: {
      nav: {
        about: "Profile",
        experience: "Experience",
        education: "Education",
        projects: "Solutions",
        skills: "Stack",
        recommendations: "Testimonials",
        contact: "Contact",
      },
      hero: {
        title: "Hello World! I'm ",
        subtitle: "Technical Leadership | Software Architecture | Human-in-the-loop",
        contact_button: "Contact me",
      },
      about: {
        location: "Gandia, Spain",
        title: "Career & Strategic Vision",
        cards: [
          {
            number: "01",
            title: "Product DNA",
            description: "Software Engineer by training, Product Engineer by mindset. With +15 years of evolution from Dev to CTO, my approach is not about 'writing code', but understanding the why behind a challenge before engineering the how."
          },
          {
            number: "02",
            title: "Strategic Bridge",
            description: "Specialist in closing the gap between business objectives and technical execution. My value is not only in architecture, but in the technical leadership that ensures technology is a growth driver, not a bottleneck."
          },
          {
            number: "03",
            title: "AI with Purpose",
            description: "I don't see AI as a trend, but as the definitive tool for solving complex problems. I design Intelligent Systems architectures under the Human-in-the-loop philosophy, always prioritizing real and measurable impact."
          }
        ],
      },
      experience: {
        title: "Professional Impact & Track Record",
        counter: "experiences",
        description: "Description",
        achievements: "Key Achievements",
        responsibilities: "Core Responsibilities",
        experiences: [
          {
            company: "InAdvance Consulting Group",
            position: "Senior Backend Engineer & Integration Lead",
            period: "2024 - Present",
            location: "Chile",
            logo: "/exp/inadvance.jpeg",
            achievements: [
              "Led the modernization of the card system, supporting 500K+ daily transactions through a resilient microservices architecture, ensuring 24/7 availability.",
              "Reduced critical incidents by 45% by applying CI/CD, Trunk Based Development, and Shift-Left Testing.",
              "Transformed financial requirements into scalable solutions that eliminated ambiguities and accelerated delivery."
            ]
          },
          {
            company: "Imagemaker",
            position: "Senior Backend Engineer & Tech Consultant",
            period: "2023 - 2024",
            location: "Chile",
            logo: "/exp/imagemaker.jpeg",
            achievements: [
              "Reduced response time by 99.9% (from 48h to <3s) through an AI PoC that automated the analysis of 10,000 monthly legal documents.",
              "Developed Cloud-Native microservices with CI/CD and automated reviews, reducing technical debt by 30% and ensuring scalability.",
              "Decreased downtime in critical systems by 60% by implementing proactive observability with Splunk and Dynatrace for early detection."
            ]
          },
          {
            company: "Falabella",
            position: "Technical Lead",
            period: "2022 - 2023",
            location: "Chile",
            logo: "/exp/falabella.jpeg",
            achievements: [
              "Orchestrated the technical transformation of the regional attendance system for 50,000+ employees, reducing technical debt by 35% through domain decoupling with DDD.",
              "Designed a transactional core with DDD and event-driven architecture to process 2M daily events with low latency.",
              "Accelerated time-to-market by 30% and eliminated data inconsistencies through standardized SaaS API integration."
            ]
          },
          {
            company: "Neurogenesis IA Technologies",
            position: "CTO & Co-Founder | AI Engineer",
            period: "2021 - 2022",
            location: "Spain",
            logo: "/exp/neurogenesis.jpeg",
            achievements: [
              "Co-founded and led the technology strategy and product roadmap from incorporation to launch.",
              "Developed an end-to-end AI system with 92% accuracy (CNN), based on the creation of a proprietary dataset of +10k images.",
              "Designed Cloud-Native infrastructure on AWS to deploy scalable ML models and facilitate production (MLOps).",
              "Technically led 7 innovation projects (+50 students) in AI and DevOps, aligning academic research with real commercial applications."
            ]
          },
          {
            company: "NTT DATA",
            position: "Senior Backend Engineer & Tech Consultant",
            period: "2019 - 2021",
            location: "Chile",
            logo: "/exp/nttdata.jpeg",
            achievements: [
              "Designed high-availability architecture processing +1M daily transactions and reduced critical vulnerabilities by 50% by implementing OWASP and PCI standards.",
              "Refactored critical modules with high technical debt, migrating monolithic logic to decoupled microservices to improve maintainability and deployment speed.",
              "Established the test automation and static analysis framework (Shift-Left), drastically reducing the error rate detected in pre-production environments."
            ]
          }
        ]
      },
      education: {
        title: "Education & Specialization",
        counter: "educations",
        educations: [
          {
            institution: "LIDR.co | AI-Powered Careers",
            degree: "AI4DEVS",
            period: "2025",
            location: "Spain",
            logo: "/edu/lidr.jpeg",
            concepts: [
              "Strategic application of AI across all stages of the software development lifecycle.",
              "Advanced proficiency in AI-assisted development tools (Copilot, ChatGPT, Cursor).",
              "Efficient generation of code, documentation, and tests using AI.",
              "Methodologies for improving productivity and code quality with AI."
            ]
          },
          {
            institution: "Hackio by thePower",
            degree: "AI Development Bootcamp",
            period: "2025",
            location: "Spain",
            logo: "/edu/hackio.jpeg",
            concepts: [
              "Advanced Python programming for Artificial Intelligence and Machine Learning.",
              "Data analysis and manipulation with Pandas, NumPy, SQL, and MongoDB.",
              "Development of generative models and NLP with Hugging Face and OpenAI.",
              "Backend implementation for AI solutions with Flask and FastAPI."
            ]
          },
          {
            institution: "thePower",
            degree: "Cybersecurity Bootcamp",
            period: "2025",
            location: "Spain",
            logo: "/edu/thepower.jpeg",
            concepts: [
              "Understanding of fundamentals, threats, and attack vectors.",
              "Security across infrastructure, networks, and systems.",
              "Offensive security and secure development (DevSecOps) practices.",
              "Incident management, privacy, and cyber intelligence."
            ]
          },
          {
            institution: "Universitat Politècnica de Catalunya",
            degree: "Master's Degree in Artificial Intelligence",
            period: "2020 - 2021",
            location: "Spain",
            logo: "/edu/upc.jpeg",
            concepts: [
              "Awarded 'Best Final Project' of the graduating class.",
              "Mastery of the theoretical and practical fundamentals of AI.",
              "Development and application of Machine Learning and Neural Network models.",
              "Management and implementation of end-to-end AI projects."
            ]
          },
          {
            institution: "Universidad de Santiago de Chile",
            degree: "Computer Science Engineering",
            period: "2012 - 2017",
            location: "Chile",
            logo: "/edu/usach.jpeg",
            concepts: [
              "Awarded 'Top Student of the Graduating Class'.",
              "Solid foundation in basic sciences and applied mathematics.",
              "Competence in project management and engineering systems.",
              "Mastery of information technologies, algorithms, and software architecture."
            ]
          },
          {
            institution: "Universidad de Santiago de Chile",
            degree: "Bachelor's Degree in Engineering Sciences",
            period: "2012 - 2015",
            location: "Chile",
            logo: "/edu/usach.jpeg",
            concepts: [
              "Foundational studies in Basic Sciences (Calculus, Algebra, Physics).",
              "Core curriculum in Engineering Sciences.",
              "Complementary studies in Human and Social Sciences."
            ]
          },
          {
            institution: "INACAP",
            degree: "Computer Engineering",
            period: "2006 - 2010",
            location: "Chile",
            logo: "/edu/inacap.jpeg",
            concepts: [
              "Development of comprehensive software solutions.",
              "Effective administration of technical, financial, and human resources.",
              "Leadership in the execution of technological and strategic projects.",
              "Application of emerging technologies to drive digital transformation."
            ]
          }
        ]
      },
      projects: {
        title: "Built & Scaled",
        counter: "projects",
        more_info: "More Info",
        external_link: "External Link",
        github_repo: "GitHub",
        close: "Back",
        filters: {
          all: "All",
          bank: "Bank",
          hr: "HR",
          ai: "AI"
        },
        projects: [
          {
            title: "AcuaMattic",
            description: "AI & Robotics for Aquariums. This project aimed to create a tool to facilitate responsible aquarium ownership, blending AI with social and environmental well-being.",
            contents: [
              "As CTO, I led the creation of the AI system from conception through to the initial integration phases. My role encompassed building a proprietary dataset (+10,000 images) and training a high-accuracy CNN model (92% accuracy), defining the architecture for its future integration with a robot prototype.",
              "The system was designed to provide users with personalized, data-driven care recommendations, demonstrating the application of complex AI in a product with a clear purpose."
            ],
            externalLink: "https://www.elconfidencialdigital.com/monarquia/articulo/an/como-evitar-muerte-miles-millones-peces/20211105193248069486.html",
            githubRepo: ""
          },
          {
            title: "JuezSW",
            description: "AI for Insolvency Administration. This system assists companies facing insolvency, who must generate complex liquidation plans that adhere to strict legal regulations for submission in court.",
            contents: [
              "My contribution focused on defining the architecture for a two-stage AI system: creating a dataset by analyzing a legal corpus, and designing an NLP model capable of interpreting legislation to generate the plans.",
              "The concept was designed to drastically reduce plan creation time and ensure regulatory compliance, facilitating efficient and legally sound auction processes."
            ],
            externalLink: "https://digitalfinanzas.com/estilo-de-vida/la-tormenta-perfecta-esta-a-punto-de-llegar-a-espana/",
            githubRepo: ""
          },
          {
            title: "Faculty Engine",
            description: "AI-Powered Legal Analysis. A banking solution designed to accelerate the analysis of legal documents to customize product offerings for SME clients.",
            contents: [
              "I led a Proof of Concept (PoC) applying NLP and Computer Vision techniques to automatically extract and analyze information from PDFs.",
              "The PoC demonstrated a radical improvement in processing efficiency, enabling faster, more accurate data-driven business decision-making."
            ],
            externalLink: "",
            githubRepo: ""
          },
          {
            title: "Time & Attendance",
            description: "Corporate HR System. A multi-country digital attendance platform for Falabella Group, which needed to modernize attendance tracking for over 50,000 employees and gain better operational insights.",
            contents: [
              "As Technical Lead, I orchestrated the full product lifecycle, from decomposing legacy systems to designing an event-driven, microservices-based architecture and integrating with a SaaS provider.",
              "The system significantly improved operational efficiency in shift management and KPI tracking (absenteeism, overtime), while enhancing the employee experience."
            ],
            externalLink: "",
            githubRepo: ""
          },
          {
            title: "Transbank Migration",
            description: "Banking Backoffice Modernization. Transbank's transactional back-office system required a major overhaul to improve maintainability, performance, and security in a high-volume environment.",
            contents: [
              "I played a key role in migrating the legacy platform to a modern microservices architecture (Java), designing high-availability solutions for over 1 million daily transactions.",
              "The migration resulted in a more efficient, scalable, and secure platform, significantly reducing technical debt and operational risks for the client."
            ],
            externalLink: "https://www.youtube.com/watch?v=Nu-q-zOvibA",
            githubRepo: ""
          },
          {
            title: "Andes Online",
            description: "Payment Platform Transformation. A strategic project to modernize a credit card processing platform to ensure operational continuity and strengthen market position.",
            contents: [
              "As an Integration Specialist, I am leading the backend modernization, designing a resilient microservices architecture and ensuring seamless integration between legacy systems and the new platform.",
              "As a project currently in development, my current role focuses on ensuring the integration is successful and scalable, with the goal of enhancing operational efficiency and the customer experience."
            ],
            externalLink: "",
            githubRepo: ""
          }
        ]
      },
      skills: {
        title: "Capabilities & Stack",
        project_management: {
          title: "Leadership & Strategy",
          skills: "Technical Leadership, Human-in-the-loop, Product Engineering, Agile Development, Mentoring",
        },
        ai: {
          title: "AI & Intelligent Systems",
          skills:
            "GenAI, LLM, RAG, LangChain, HuggingFace, Agentic Workflows, OpenCV, TensorFlow, PyTorch, CNN",
        },
        backend: {
          title: "Architecture & Backend",
          skills: "Java, Spring Boot, Python, FastAPI, Microservices, DDD, SQL, NoSQL",
        },
        cicd: {
          title: "Cloud & DevOps",
          skills: "AWS, GCP, Kubernetes, Docker, Jenkins, GitHub Actions, Splunk, Dynatrace, Elasticsearch",
        },
        code_review: {
          title: "Clean Code & Shift-Left",
          skills: "JUnit, Mockito, Spock, Karate, Checkstyle, Sonar, Veracode, ArchUnit",
        },
        languages: {
          title: "Languages",
          skills: "Spanish Native, English B2",
        },
      },
      recommendations: {
        counter: "Professional Endorsements",
        list: [
          {
            name: "Jesus Garcia",
            text: "Álvaro Maldonado is synonymous with efficiency and quality. A 'top tier' backend developer who combines impressive technical depth with proactivity that makes life easier for the entire team. If there's a fire to put out or an architecture to design, he is the person I trust.",
            picture: "/recommendations/jesus_garcia.jpeg",
            linkedin: "https://www.linkedin.com/in/jesus-garcia-b44209104/",
          },
          {
            name: "Inés García",
            text: "I had the opportunity to accompany Álvaro as a Teacher Assistant for the AI4Devs master's at Lidr, where I closely supervised his work, and I can say with total confidence that his performance was outstanding. He did an excellent job, tackling an ambitious challenge and integrating AI, backend, frontend, and cloud infrastructure. He demonstrated not only technical mastery but also a very clear product vision, making coherent decisions and providing well-thought-out solutions in every phase of the project. His code stood out for being clean, organized, and maintainable, always applying best practices. Personally, his attitude was impeccable: proactive, participatory, respectful, and very pleasant to deal with. I recommend Álvaro without any doubt. He is a profile that adds real value from the very first moment, and I am sure he will continue to excel in any challenge he decides to undertake.",
            picture: "/recommendations/ines_garcia.jpeg",
            linkedin: "https://www.linkedin.com/in/ines-garzeta/",
          },
          {
            name: "Dayli Velasquez",
            text: "Great professional and person, it was a pleasure to be part of the team and great work!",
            picture: "/recommendations/dayli_velasquez.jpeg",
            linkedin: "https://www.linkedin.com/in/dayli-velasquez",
          },
          {
            name: "Denys Lopez",
            text: "I highly recommend Álvaro Maldonado! As a full stack developer, during our collaboration at Everis, he demonstrated exceptional ability to solve complex problems and collaborate effectively in a team. His passion, eagerness to keep learning, work ethic, and communication skills make him a valuable asset to any project.",
            picture: "/recommendations/denys_lopez.jpeg",
            linkedin: "https://www.linkedin.com/in/denys-lopez",
          },
          {
            name: "Rodrigo Parra Cárcamo",
            text: "Álvaro is an excellent professional and a great person. He has a good technical level, is very proactive and dedicated, capable of researching and solving complex problems. He works very well in a team, always contributing to maintaining a good atmosphere. He is very responsible and committed, I recommend him 100%.",
            picture: "/recommendations/rodrigo_parra.jpeg",
            linkedin:
              "https://www.linkedin.com/in/rodrigo-parra-cárcamo-a1872324",
          },
          {
            name: "Nelson Alvarado Vidal",
            text: "Álvaro is a proactive person, I learned a lot from him and he is always motivated in his work.",
            picture: "/recommendations/nelson_alvarado.jpeg",
            linkedin: "https://www.linkedin.com/in/nalvaradov85",
          },
          {
            name: "Sam Hidalgo",
            text: "I worked with Álvaro in the same area. He is a committed and proactive person. Firm and decisive, he adapts very well to teamwork, showing confidence. During the period we worked together, I was able to validate the skills he has for collaborative work and problem solving.",
            picture: "/recommendations/sam_hidalgo.jpeg",
            linkedin: "https://www.linkedin.com/in/sam-hidalgo-nava",
          },
          {
            name: "Carlos Osorio Calmels",
            text: "An excellent professional, passionate, and 100% committed, as a developer very objective and with a broad knowledge of abstraction and process optimization.",
            picture: "/recommendations/carlos_osorio.jpeg",
            linkedin: "https://www.linkedin.com/in/carlosfosorioc",
          },
          {
            name: "Juan Reckmann Cardenas",
            text: "Álvaro is characterized by a high technical level and 100% commitment, he has great leadership qualities and constant support for the whole team, I would work with him again without hesitation, he can solve complex problems in a very short time.",
            picture: "",
            linkedin:
              "https://www.linkedin.com/in/juan-nicolas-reckmann-cardenas-80584b40",
          },
          {
            name: "Antonella Amodio Alvarez",
            text: "I worked with Álvaro during the Time & Attendance project and he has been a great help, providing knowledge and skilled in the technical area, he is a person with integrity, well-developed soft skills, it was a pleasure to work with him!",
            picture: "/recommendations/antonella_amodio.jpeg",
            linkedin: "https://www.linkedin.com/in/antonella-amodio-alvarez",
          },
          {
            name: "Bruno Ivan Aguilera Silva",
            text: "It is a pleasure to recommend Álvaro for his exceptional capabilities and soft skills. With his solid background in Computer Engineering and his Master's in Artificial Intelligence, he has demonstrated over a decade of experience in various sectors. His versatility is reflected in his leadership, problem-solving, and adaptability, in both technical and strategic roles. His proficiency in AI/ML/DL, cloud computing, and backend development makes him stand out. His pursuit of dynamic challenges and his commitment to achieving goals are unmatched. Álvaro is a valuable addition to any technology and leadership team.",
            picture: "/recommendations/bruno_aguilera.jpeg",
            linkedin: "https://www.linkedin.com/in/bruno-ivan-aguilera-silva-b6a91b11",
          },
          {
            name: "Pablo Puelma Hernández",
            text: "Álvaro is a person with a very complete technical profile, capable of solving complex problems quickly and with quality, goal-oriented and with great commitment to his work and colleagues. Personally, he is very responsible, reliable and a great team player, always willing to teach others and support them when they need it and always willing to give a little more to achieve goals.",
            picture: "/recommendations/pablo_puelma.jpeg",
            linkedin: "https://www.linkedin.com/in/pablopuelmah",
          },
          {
            name: "Pedro Alejandro Oronoz",
            text: "I sincerely recommend Álvaro for his professionalism and collaboration during our time working together. His attention to detail, experience and dedication are truly valuable to any team.",
            picture: "/recommendations/pedro_oronoz.jpeg",
            linkedin:
              "https://www.linkedin.com/in/pedro-alejandro-oronoz-5025385a",
          },
          {
            name: "Nelly Manterola",
            text: "I met Álvaro by chance and today I dare to say that he is one of the best technical leaders I have worked with. His results-oriented approach stands out above all and having knowledge of artificial intelligence his vision fosters ethical, responsible values and teamwork is remarkable. It was an excellent experience working with you.",
            picture: "/recommendations/nelly_manterola.jpeg",
            linkedin: "https://www.linkedin.com/in/nellymanterola",
          },
          {
            name: "Almudena Álvarez Sánchez",
            text: "As a Talent Manager, I have had the opportunity to work with Álvaro on his career development in Spain. It has been a great discovery both at a professional and personal level. Álvaro has a hybrid profile that stands out for bridging entrepreneurship and development, with deep knowledge of the latest market technologies such as AI. He comes across as a dedicated and passionate professional who demonstrates his commitment from the very first conversation. Having Álvaro on your project is a safe bet for his knowledge, his involvement, and all the value he brings to the team!",
            picture: "/recommendations/almudena_alvarez.jpeg",
            linkedin: "https://www.linkedin.com/in/almudena-alvarez-sanchez/",
          },
        ]
      },
      footer: {
        slogan: "Find a way or make one!",
        made_with: "Designed & Built by almap[i]",
        copyright: "© {year}. ALL RIGHTS RESERVED."
      },
      contact: {
        title: "Start a Conversation",
        subtitle: "Are you interested in working together or have a proposal? Contact me!",
        slogan: "Turning business vision into scalable products",
        flipHint: "Tap the card to flip it",
        back: {
          email: "readme.md@almapi.dev",
          linkedin: "@alvaro-maldonado-ai",
          github: "@aandmaldonado",
          city: "Gandía, Spain | Global Remote"
        }
      },
      chatbot: chatbotTranslations.en
    }
  },
  es: {
    translation: {
      nav: {
        about: "Perfil",
        experience: "Trayectoria",
        education: "Formación",
        projects: "Soluciones",
        skills: "Stack",
        recommendations: "Testimonios",
        contact: "Contacto",
      },
      hero: {
        title: "¡Hola Mundo! Soy ",
        subtitle: "Liderazgo Técnico | Arquitectura de Software | Human-in-the-loop",
        contact_button: "Contáctame",
      },
      about: {
        location: "Gandía, España",
        title: "Trayectoria y Visión Estratégica",
        cards: [
          {
            number: "01",
            title: "ADN de Producto",
            description: "Ingeniero de Software de formación, Product Engineer de mentalidad. Con +15 años de evolución desde Dev hasta CTO, mi enfoque no es 'picar código', sino entender el porqué de un desafío antes de diseñar el cómo técnico."
          },
          {
            number: "02",
            title: "Puente Estratégico",
            description: "Especialista en cerrar la brecha entre los objetivos de negocio y la ejecución técnica. Mi valor no está solo en la arquitectura, sino en el liderazgo técnico que garantiza que la tecnología sea un motor de escala, no un freno."
          },
          {
            number: "03",
            title: "IA con Propósito",
            description: "No veo la IA como una tendencia, sino como la herramienta definitiva para resolver problemas complejos. Diseño arquitecturas de Sistemas Inteligentes bajo la filosofía Human-in-the-loop, priorizando siempre el impacto real y medible."
          }
        ],
      },
      experience: {
        title: "Historial de Impacto Profesional",
        counter: "experiencias",
        description: "Descripción",
        achievements: "Logros Clave",
        responsibilities: "Responsabilidades Principales",
        experiences: [
          {
            company: "InAdvance Consulting Group",
            position: "Senior Backend Engineer & Integration Lead",
            period: "2024 - Presente",
            location: "Chile",
            logo: "/exp/inadvance.jpeg",
            achievements: [
              "Lideré la modernización del sistema de tarjetas, soportando +500K transacciones diarias mediante una arquitectura de resiliencia en microservicios, garantizando disponibilidad total (24/7).",
              "Reduje un 45% los incidentes críticos aplicando CI/CD, Trunk Based Development y Shift-Left Testing.",
              "Transformé requerimientos financieros en soluciones escalables que eliminaron ambigüedades y aceleraron entregas."
            ]
          },
          {
            company: "Imagemaker",
            position: "Senior Backend Engineer & Tech Consultant",
            period: "2023 - 2024",
            location: "Chile",
            logo: "/exp/imagemaker.jpeg",
            achievements: [
              "Reduje el tiempo de respuesta en un 99.9% (de 48h a <3s) mediante una PoC de IA que automatizó el análisis de 10,000 documentos legales mensuales.",
              "Desarrollé microservicios Cloud-Native con CI/CD y revisiones automáticas, reduciendo deuda técnica en 30% y garantizando escalabilidad.",
              "Disminuí en 60% el downtime en sistemas críticos implementando observabilidad proactiva con Splunk y Dynatrace para detección temprana."
            ]
          },
          {
            company: "Falabella",
            position: "Technical Lead",
            period: "2022 - 2023",
            location: "Chile",
            logo: "/exp/falabella.jpeg",
            achievements: [
              "Orquesté la transformación técnica del sistema de asistencia regional para +50,000 colaboradores, reduciendo la deuda técnica en un 35% mediante el desacoplamiento de dominios con DDD.",
              "Diseñé un núcleo transaccional con DDD y arquitectura event-driven para procesar 2M eventos diarios con baja latencia.",
              "Aceleré en 30% el time-to-market y eliminé inconsistencias de datos mediante integración de APIs SaaS estandarizadas."
            ]
          },
          {
            company: "Neurogenesis IA Technologies",
            position: "CTO & Co-Fundador | AI Engineer",
            period: "2021 - 2022",
            location: "España",
            logo: "/exp/neurogenesis.jpeg",
            achievements: [
              "Co-fundé y dirigí la estrategia tecnológica y el roadmap productivo desde la constitución hasta el lanzamiento.",
              "Desarrollé un sistema IA end-to-end con 92% de precisión (CNN), fundamentado en la creación de un dataset propio de +10k imágenes.",
              "Diseñé infraestructura Cloud-Native en AWS para desplegar modelos ML escalables y facilitar la producción (MLOps).",
              "Lideré técnicamente 7 proyectos de innovación (+50 estudiantes) en IA y DevOps, alineando la investigación académica con aplicaciones comerciales reales."
            ]
          },
          {
            company: "NTT DATA",
            position: "Senior Backend Engineer & Tech Consultant",
            period: "2019 - 2021",
            location: "Chile",
            logo: "/exp/nttdata.jpeg",
            achievements: [
              "Diseñé arquitectura de alta disponibilidad procesando +1M transacciones diarias y reduje un 50% vulnerabilidades críticas implementando estándares OWASP y PCI.",
              "Refactoricé módulos críticos con deuda técnica elevada, migrando lógica monolítica a microservicios desacoplados para mejorar la mantenibilidad y la velocidad de despliegue.",
              "Establecí el framework de automatización de pruebas y análisis estático (Shift-Left), reduciendo drásticamente la tasa de errores detectados en entornos de pre-producción."
            ]
          }
        ]
      },
      education: {
        title: "Formación y Especialización",
        counter: "formaciones",
        educations: [
          {
            institution: "LIDR.co | AI-Powered Careers",
            degree: "AI4DEVS",
            period: "2025",
            location: "España",
            logo: "/edu/lidr.jpeg",
            concepts: [
              "Aplicación estratégica de IA en todas las etapas del ciclo de vida del software.",
              "Dominio avanzado de herramientas de desarrollo asistido por IA (Copilot, ChatGPT, Cursor).",
              "Generación eficiente de código, documentación y pruebas utilizando IA.",
              "Metodologías para la mejora de la productividad y calidad del código mediante IA."
            ]
          },
          {
            institution: "Hackio by thePower",
            degree: "Bootcamp en Desarrollo de IA",
            period: "2025",
            location: "España",
            logo: "/edu/hackio.jpeg",
            concepts: [
              "Programación avanzada en Python para Inteligencia Artificial y Machine Learning.",
              "Análisis y manipulación de datos con Pandas, NumPy, SQL y MongoDB.",
              "Desarrollo de modelos generativos y NLP con Hugging Face y OpenAI.",
              "Implementación de backend para soluciones de IA con Flask y FastAPI."
            ]
          },
          {
            institution: "thePower",
            degree: "Bootcamp en Ciberseguridad",
            period: "2025",
            location: "España",
            logo: "/edu/thepower.jpeg",
            concepts: [
              "Comprensión de fundamentos, amenazas y vectores de ataque.",
              "Seguridad en infraestructura, redes y sistemas.",
              "Prácticas de seguridad ofensiva y desarrollo seguro (DevSecOps).",
              "Gestión de incidentes, privacidad y ciberinteligencia."
            ]
          },
          {
            institution: "Universitat Politècnica de Catalunya",
            degree: "Máster en Inteligencia Artificial",
            period: "2020 - 2021",
            location: "España",
            logo: "/edu/upc.jpeg",
            concepts: [
              "Reconocimiento al 'Mejor Proyecto de Fin de Máster' de la promoción.",
              "Dominio de los fundamentos teóricos y prácticos de la IA.",
              "Desarrollo y aplicación de modelos de Machine Learning y Redes Neuronales.",
              "Gestión e implementación de proyectos de IA de extremo a extremo."
            ]
          },
          {
            institution: "Universidad de Santiago de Chile",
            degree: "Ingeniería Civil en Informática",
            period: "2012 - 2017",
            location: "Chile",
            logo: "/edu/usach.jpeg",
            concepts: [
              "Reconocimiento como 'Mejor Alumno de la Promoción'.",
              "Sólida formación en ciencias básicas y matemáticas aplicadas.",
              "Competencia en gestión de proyectos y sistemas de ingeniería.",
              "Dominio de tecnologías de la información, algoritmos y arquitecturas de software."
            ]
          },
          {
            institution: "Universidad de Santiago de Chile",
            degree: "Licenciatura en Ciencias de la Ingeniería",
            period: "2012 - 2015",
            location: "Chile",
            logo: "/edu/usach.jpeg",
            concepts: [
              "Estudios fundacionales en Ciencias Básicas (Cálculo, Álgebra, Física).",
              "Currículum central en Ciencias de la Ingeniería.",
              "Estudios complementarios en Ciencias Humanas y Sociales."
            ]
          },
          {
            institution: "INACAP",
            degree: "Ingeniería en Informática",
            period: "2006 - 2010",
            location: "Chile",
            logo: "/edu/inacap.jpeg",
            concepts: [
              "Desarrollo de soluciones de software integrales.",
              "Administración de recursos técnicos, financieros y humanos.",
              "Liderazgo en la ejecución de proyectos tecnológicos y estratégicos.",
              "Aplicación de tecnologías emergentes para la transformación digital."
            ]
          }
        ]
      },
      projects: {
        title: "Soluciones Implementadas",
        counter: "proyectos",
        more_info: "Más Info",
        external_link: "Link Externo",
        github_repo: "GitHub",
        close: "Volver",
        filters: {
          all: "Todos",
          bank: "Banca",
          hr: "RRHH",
          ai: "IA"
        },
        projects: [
          {
            title: "AcuaMattic",
            description: "IA y Robótica para Acuarios. Este proyecto buscaba crear una herramienta para facilitar la tenencia responsable de acuarios, uniendo la IA con el bienestar social y medioambiental.",
            contents: [
              "Como CTO, lideré la creación del sistema de IA desde la concepción hasta las fases iniciales de integración. Mi rol abarcó la creación de un dataset propio (+10.000 imágenes) y el entrenamiento de un modelo CNN (92% de precisión), definiendo la arquitectura para su futura integración con un prototipo de robot.",
              "El sistema fue diseñado para ofrecer recomendaciones de cuidado personalizadas y basadas en datos, demostrando la aplicación de IA compleja en un producto con un propósito claro."
            ],
            externalLink: "https://www.elconfidencialdigital.com/monarquia/articulo/an/como-evitar-muerte-miles-millones-peces/20211105193248069486.html",
            githubRepo: ""
          },
          {
            title: "JuezSW",
            description: "IA para Administración Concursal. Este sistema asiste a empresas en suspensión de pagos, que necesitan generar complejos planes de liquidación cumpliendo con una estricta normativa legal para ser presentados ante un juez.",
            contents: [
              "Participé en la fase de concepción y diseño, definiendo la arquitectura de un sistema de IA de dos fases: la creación de un dataset mediante el análisis de un corpus legal, y el diseño de un modelo de NLP capaz de interpretar la legislación para generar los planes.",
              "El concepto fue diseñado para reducir drásticamente el tiempo de elaboración de planes y garantizar el cumplimiento normativo, facilitando procesos de subasta eficientes y legalmente sólidos."
            ],
            externalLink: "https://digitalfinanzas.com/estilo-de-vida/la-tormenta-perfecta-esta-a-punto-de-llegar-a-espana/",
            githubRepo: ""
          },
          {
            title: "Motor de Facultades",
            description: "Análisis Legal con IA. Una solución bancaria diseñada para acelerar el análisis de documentos legales y así personalizar la oferta de productos a clientes del sector PYME.",
            contents: [
              "Lideré una Prueba de Concepto (PoC) aplicando técnicas de NLP y Visión por Computador para extraer y analizar automáticamente la información de los PDFs.",
              "La PoC demostró una mejora radical en la eficiencia del procesamiento, permitiendo una toma de decisiones de negocio más rápida y precisa basada en datos."
            ],
            externalLink: "",
            githubRepo: ""
          },
          {
            title: "Time & Attendance",
            description: "Sistema Corporativo de RRHH. Una plataforma de asistencia digital multi-país para el Grupo Falabella, que necesitaba modernizar su seguimiento de asistencia para más de 50.000 empleados y obtener mejores insights operativos.",
            contents: [
              "Como Líder Técnico, orquesté el ciclo de vida completo del producto, desde la descomposición de sistemas legados hasta el diseño de una arquitectura de microservicios basada en eventos y la integración con un proveedor SaaS.",
              "El sistema mejoró significativamente la eficiencia operativa en la gestión de turnos y el seguimiento de KPIs (ausentismo, horas extras), mientras mejoraba la experiencia del empleado."
            ],
            externalLink: "",
            githubRepo: ""
          },
          {
            title: "Migración Transbank",
            description: "Modernización de Backoffice Bancario. El sistema de backoffice transaccional de Transbank requería una revisión mayor para mejorar la mantenibilidad, el rendimiento y la seguridad en un entorno de alto volumen.",
            contents: [
              "Jugué un papel clave en la migración del sistema legado a una arquitectura moderna de microservicios (Java), diseñando soluciones de alta disponibilidad para más de 1 millón de transacciones diarias.",
              "La migración resultó en una plataforma más eficiente, escalable y segura, reduciendo significativamente la deuda técnica y los riesgos operativos para el cliente."
            ],
            externalLink: "https://www.youtube.com/watch?v=Nu-q-zOvibA",
            githubRepo: ""
          },
          {
            title: "Andes Online",
            description: "Transformación de Plataforma de Pagos. Un proyecto estratégico para modernizar la plataforma de procesamiento de tarjetas y asegurar la continuidad operativa en el mercado.",
            contents: [
              "Como Especialista en Integración, estoy liderando la modernización del backend, diseñando una arquitectura de microservicios resiliente y asegurando la integración fluida entre los sistemas legados y la nueva plataforma.",
              "Como proyecto actualmente en desarrollo, mi rol se centra en garantizar que la integración sea exitosa y escalable, con el objetivo de mejorar la eficiencia operativa y la experiencia del cliente."
            ],
            externalLink: "",
            githubRepo: ""
          }
        ]
      },
      skills: {
        title: "Capacidades y Stack Técnico",
        project_management: {
          title: "Liderazgo & Estrategia",
          skills: "Liderazgo Técnico, Human-in-the-loop, Ingeniería de Producto, Desarrollo Ágil, Mentoring",
        },
        ai: {
          title: "IA & Sistemas Inteligentes",
          skills:
            "GenAI, LLM, RAG, LangChain, HuggingFace, Agentic Workflows, OpenCV, TensorFlow, PyTorch, CNN",
        },
        backend: {
          title: "Arquitectura & Backend",
          skills: "Java, Spring Boot, Python, FastAPI, Microservices, DDD, SQL, NoSQL",
        },
        cicd: {
          title: "Cloud & DevOps",
          skills: "AWS, GCP, Kubernetes, Docker, Jenkins, GitHub Actions, Splunk, Dynatrace, Elasticsearch",
        },
        code_review: {
          title: "Clean Code & Shift-Left",
          skills: "JUnit, Mockito, Spock, Karate, Checkstyle, Sonar, Veracode, ArchUnit",
        },
        languages: {
          title: "Idiomas",
          skills: "Español Nativo, Inglés B2",
        },
      },
      recommendations: {
        counter: "Testimonios de Impacto",
        list: [
          {
            name: "Jesus Garcia",
            text: "Álvaro Maldonado es sinónimo de eficiencia y calidad. Un desarrollador backend \"top tier\" que combina una profundidad técnica impresionante con una proactividad que facilita la vida de todo el equipo. Si hay un fuego que apagar o una arquitectura que diseñar, es la persona en quien confío.",
            picture: "/recommendations/jesus_garcia.jpeg",
            linkedin: "https://www.linkedin.com/in/jesus-garcia-b44209104/",
          },
          {
            name: "Inés García",
            text: "Tuve la oportunidad de acompañar a Álvaro como Teacher Assistant del máster AI4Devs en Lidr, donde supervisé de cerca su trabajo, y puedo decir con total seguridad que su rendimiento fue sobresaliente. Realizó un trabajo excelente, abordando un reto ambicioso e integrando IA, backend, frontend e infraestructura en la nube. Demostró no solo dominio técnico, sino también una visión de producto muy clara, tomando decisiones coherentes y aportando soluciones bien pensadas en cada fase del proyecto. Su código destacaba por ser limpio, ordenado y mantenible, siempre aplicando las mejores prácticas. En lo personal, su actitud fue impecable: proactivo, participativo, respetuoso y muy agradable de tratar. Recomiendo sin ninguna duda a Álvaro. Es un perfil que aporta valor real desde el primer momento y estoy segura de que seguirá sobresaliendo en cualquier desafío que decida asumir.",
            picture: "/recommendations/ines_garcia.jpeg",
            linkedin: "https://www.linkedin.com/in/ines-garzeta/",
          },
          {
            name: "Dayli Velasquez",
            text: "Gran profesional y persona, todo un gusto haber formado equipo y buen trabajo!",
            picture: "/recommendations/dayli_velasquez.jpeg",
            linkedin: "https://www.linkedin.com/in/dayli-velasquez",
          },
          {
            name: "Denys Lopez",
            text: "¡Recomiendo encarecidamente a Álvaro Maldonado! Como desarrollador full stack, durante nuestra colaboración en Everis, demostró una excepcional capacidad para resolver problemas complejos y colaborar eficazmente en equipo. Su pasión, ánimo de seguir aprendiendo, ética de trabajo y habilidades de comunicación hacen de él un valioso activo para cualquier proyecto.",
            picture: "/recommendations/denys_lopez.jpeg",
            linkedin: "https://www.linkedin.com/in/denys-lopez",
          },
          {
            name: "Rodrigo Parra Cárcamo",
            text: "Álvaro es un excelente profesional y una gran persona. Tiene un buen nivel técnico, muy proactivo y dedicado, capaz de investigar y resolver problemas complejos. Trabaja muy bien en equipo, contribuyendo siempre a mantener un buen ambiente. Es muy responsable y comprometido, lo recomiendo 100%.",
            picture: "/recommendations/rodrigo_parra.jpeg",
            linkedin:
              "https://www.linkedin.com/in/rodrigo-parra-cárcamo-a1872324",
          },
          {
            name: "Nelson Alvarado Vidal",
            text: "Álvaro es una persona proactiva, aprendí mucho de él y siempre motivado en su trabajo.",
            picture: "/recommendations/nelson_alvarado.jpeg",
            linkedin: "https://www.linkedin.com/in/nalvaradov85",
          },
          {
            name: "Sam Hidalgo",
            text: "Trabajé con Álvaro en la misma área. Es una persona comprometida y proactiva. Firme y resolutivo, se adapta muy bien al trabajo en equipo mostrándose seguro. Durante el periodo que trabajamos juntos pude validar las habilidades que tiene para el trabajo colaborativo y la resolución de problemas.",
            picture: "/recommendations/sam_hidalgo.jpeg",
            linkedin: "https://www.linkedin.com/in/sam-hidalgo-nava",
          },
          {
            name: "Carlos Osorio Calmels",
            text: "Un excelente profesional, apasionado, y comprometido al 100%, como desarrollador muy objetivo y con un amplio conocimiento de abstracción y optimización de procesos.",
            picture: "/recommendations/carlos_osorio.jpeg",
            linkedin: "https://www.linkedin.com/in/carlosfosorioc",
          },
          {
            name: "Juan Reckmann Cardenas",
            text: "Álvaro se caracteriza por un gran nivel técnico y compromiso 100%, tiene grandes cualidades de líder y de apoyo constante a todo el equipo, volvería a trabajar con él sin problema, puede solucionar problemas complejos en muy poco tiempo.",
            picture: "",
            linkedin:
              "https://www.linkedin.com/in/juan-nicolas-reckmann-cardenas-80584b40",
          },
          {
            name: "Antonella Amodio Alvarez",
            text: "Trabajé con Álvaro durante el proyecto de Time & Attendance y ha sido de gran ayuda aportando conocimientos y capacitado en el área técnica, es una persona con integridad, habilidades blandas desarrolladas, fue un placer trabajar con él!",
            picture: "/recommendations/antonella_amodio.jpeg",
            linkedin: "https://www.linkedin.com/in/antonella-amodio-alvarez",
          },
          {
            name: "Bruno Ivan Aguilera Silva",
            text: "Es un placer recomendar a Álvaro por sus excepcionales capacidades y habilidades blandas. Con su sólida formación en Ingeniería Civil en Informática y su Máster en Inteligencia Artificial, ha demostrado más de una década de experiencia en diversos sectores. Su versatilidad se refleja en su liderazgo, resolución de problemas y adaptabilidad, tanto en roles técnicos como estratégicos. Su destreza en IA/ML/DL, cloud computing y desarrollo backend lo hace sobresalir. Su búsqueda de desafíos dinámicos y su compromiso para lograr metas son inigualables. Álvaro es una valiosa adición para cualquier equipo tecnológico y de liderazgo.",
            picture: "/recommendations/bruno_aguilera.jpeg",
            linkedin: "https://www.linkedin.com/in/bruno-ivan-aguilera-silva-808b61166/",
          },
          {
            name: "Pablo Puelma Hernández",
            text: "Álvaro es una persona con un perfil técnico muy completo, capaz de resolver problemas complejos de forma rápida y con calidad, orientado al logro y con un gran compromiso por su trabajo y compañeros. En lo personal, es muy responsable, confiable y un gran compañero de equipo, siempre dispuesto a enseñar a los demás y a apoyarlos cuando lo necesitan y está siempre dispuesto a dar un poco más para lograr las metas.",
            picture: "/recommendations/pablo_puelma.jpeg",
            linkedin: "https://www.linkedin.com/in/pablopuelmah",
          },
          {
            name: "Pedro Alejandro Oronoz",
            text: "Quiero recomendar sinceramente a Álvaro por su profesionalismo y colaboración durante nuestro tiempo de trabajo conjunto. Su atención a los detalles, su experiencia y dedicación son verdaderamente valiosas para cualquier equipo.",
            picture: "/recommendations/pedro_oronoz.jpeg",
            linkedin:
              "https://www.linkedin.com/in/pedro-alejandro-oronoz-5025385a",
          },
          {
            name: "Nelly Manterola",
            text: "Conocí a Álvaro de manera accidental y hoy me atrevo a decir que es uno de los mejores líderes técnicos con los que he trabajado. Su orientación a resultados destaca por sobre todo y al contar con conocimientos de inteligencia artificial su mirada fomenta valores éticos, responsables y el trabajo en equipo es notable. Excelente experiencia fue trabajar junto a ti.",
            picture: "/recommendations/nelly_manterola.jpeg",
            linkedin: "https://www.linkedin.com/in/nellymanterola",
          },
          {
            name: "Almudena Álvarez Sánchez",
            text: "Como Talent Manager he tenido la oportunidad de trabajar con Álvaro en su desarrollo de carrera en España. Ha sido gran descubrimiento tanto a nivel profesional como personal. Álvaro es perfil que destaca por tener un perfil híbrido entre emprendimiento y desarrollo con grandes conocimientos de las últimas tecnologías del mercado como es la IA. Se muestra como un profesional entregado y apasionado de su trabajo que lo demuestra desde el primer momento que hablas con él. Contar con Álvaro en tu proyecto es una apuesta segura por su conocimiento, su implicación y por todo el valor que añade en el equipo!",
            picture: "/recommendations/almudena_alvarez.jpeg",
            linkedin: "https://www.linkedin.com/in/almudena-alvarez-sanchez/",
          },
        ]
      },
      footer: {
        slogan: "Find a way or make one!",
        made_with: "Diseñado y construido por almap[i]",
        copyright: "© {year}. TODOS LOS DERECHOS RESERVADOS."
      },
      contact: {
        title: "Iniciemos una Conversación",
        subtitle: "¿Te interesa trabajar juntos o tienes una propuesta? ¡Contáctame!",
        slogan: "Transformo visión de negocio en productos escalables",
        flipHint: "Toca la tarjeta para voltearla",
        back: {
          email: "readme.md@almapi.dev",
          linkedin: "@alvaro-maldonado-ai",
          github: "@aandmaldonado",
          city: "Gandía, España | Remoto Global"
        }
      },
      chatbot: chatbotTranslations.es
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
