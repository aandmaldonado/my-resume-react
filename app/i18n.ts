import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        experience: "Experience",
        education: "Education",
        projects: "Projects",
        skills: "Skills",
        recommendations: "Recommendations",
      },
      head: {
        lang_es: "Spanish",
        lang_en: "English",
      },
      hero: {
        title: "AI-Powered Product Engineering",
        subtitle: "Software Engineering | AI with Purpose | Human-in-the-Loop",
        download_cv: "Download CV",
        generating: "Generating...",
        contact_button: "Contact me",
      },
      about: {
        location: "Gandia, Spain",
        title: "About Me",
        descriptions: [
          "I am a Senior Software Engineer with a solid track record of leading the development and integration of solutions across the entire software lifecycle. My experience spans diverse industries, where I have taken on roles of increasing responsibility, from developer and consultant to Technical Lead and CTO.",
          "My passion is technology with a purpose. Today, my professional focus is firmly centered on Artificial Intelligence, not as an end in itself, but as a means to solve complex business problems. I embrace a 'Product Engineer' mindset, dedicating time to deeply understand the 'why' behind a challenge before engineering the 'how'.",
          "I believe in technology that empowers people and optimizes processes. My goal is to collaborate on innovative projects where I can apply my experience to build robust, scalable solutions that deliver a measurable impact."
        ],
        looking_for: "Where I Thrive",
        search_goals: [
          "Projects that apply AI to solve real-world business challenges.",
          "Roles with autonomy and flexibility, focused on delivering results.",
          "Team cultures built on critical thinking, collaboration, and continuous learning."
        ],
        why_collaborate: "My Value Proposition",
        collaboration_reasons: [
          "Technical Leadership & Architectural Vision: Ability to guide projects from conception to deployment.",
          "Bridge Between Business & Technology: Skill in translating strategic objectives into effective technical solutions.",
          "Adaptability & Complex Problem-Solving: Proven experience in rapid learning and solving complex challenges in diverse environments."
        ],
        connect_message: "Let's connect! I am open to opportunities and collaborations that create real impact.",
        years_experience: "Years of Experience",
        industries_list: {
          Telecomunicaciones: "Telecommunications",
          AFP: "Pension Funds",
          Gobierno: "Government",
          Retail: "Retail",
          HR: "Human Resources",
          Banca: "Banking",
          Aerolineas: "Airlines",
          IA: "Artificial Intelligence"
        }
      },
      experience: {
        title: "Work Experience",
        counter: "experiences",
        description: "Description",
        achievements: "Key Achievements",
        responsibilities: "Core Responsibilities",
        experiences: [
          {
            company: "InAdvance Consulting Group",
            position: "Senior Software Engineer (for BCI Bank)",
            period: "2024 - Present",
            location: "Santiago, Chile",
            logo: "/exp/inadvance.jpeg",
            description: "As an integration specialist on the strategic 'Andes Online' project, I led the backend modernization for a new credit card processing platform, focusing on the transition to a robust and scalable microservices architecture.",
            responsibilities: [
              "Analysis and translation of complex financial requirements into technical specifications.",
              "Design and implementation of resilient and secure APIs for system interoperability.",
              "Application of Clean Code principles and 'shift-left' testing strategies.",
              "Active participation in the technical selection and evaluation of new engineering talent."
            ],
            achievements: [
              "Designed and implemented a resilient microservices solution, crafting APIs that ensured seamless and secure communication between legacy systems and the new platform.",
              "Applied a 'shift-left testing' strategy within a DevOps culture, taking ownership of code quality (Clean Code) and security from the earliest stages of development.",
              "Served as the primary liaison between business areas and development, translating complex financial system requirements into clear, actionable technical specifications for the team."
            ]
          },
          {
            company: "Imagemaker",
            position: "Senior Software Engineer (for Banco de Chile)",
            period: "2023 - 2024",
            location: "Santiago, Chile",
            logo: "/exp/imagemaker.jpeg",
            description: "Acted as a technical consultant and backend developer, designing and implementing custom solutions for clients in the legal and corporate sectors. My work focused on software quality, microservice performance, and system observability, leveraging cutting-edge technologies throughout the development cycle.",
            responsibilities: [
              "Provided external technical consulting to optimize projects and resolve complex service issues.",
              "Developed microservices using modern Java versions and Spring Boot.",
              "Conducted automated code reviews to ensure quality and security standards (Veracode, SonarQube).",
              "Ensured system health through proactive service monitoring with Splunk and Dynatrace."
            ],
            achievements: [
              "Led a Proof of Concept (PoC) with AI to redefine service offerings for SME clients by automating the analysis of legal documents with NLP and Computer Vision.",
              "Designed and implemented robust microservices, establishing cloud-native best practices and automated quality standards.",
              "Acted as a key technical consultant for clients, implementing proactive monitoring solutions that significantly reduced system downtime."
            ]
          },
          {
            company: "Falabella",
            position: "Technical Lead",
            period: "2022 - 2023",
            location: "Santiago, Chile",
            logo: "/exp/falabella.jpeg",
            description: "I led the development of a corporate attendance management system implemented across various business units of the Falabella group in Latin America. The project involved decomposing legacy systems, designing distributed and resilient solutions, and applying Domain-Driven Design (DDD) principles and event-driven architecture.",
            responsibilities: [
              "Collaborated with Product Owners and business stakeholders to define requirements.",
              "Managed the backlog and prioritized key project functionalities.",
              "Provided technical leadership to the development team, ensuring compliance with architectural guidelines.",
              "Coordinated with internal and external teams, including managing SaaS provider relationships."
            ],
            achievements: [
              "Led the delivery of a multi-country attendance management system, orchestrating the full product lifecycle and significantly optimizing the company's regional operational efficiency.",
              "Spearheaded the modernization of legacy systems by applying Domain-Driven Design (DDD) and an event-driven architecture to decouple complex business domains.",
              "Led the implementation and integration strategy with a SaaS provider, serving as the main liaison between technical teams, business stakeholders, and external vendors."
            ]
          },
          {
            company: "Neurogenesis IA Technologies",
            position: "CTO & Co-Founder | AI Engineer",
            period: "2021 - 2022",
            location: "Barcelona, Spain",
            logo: "/exp/neurogenesis.jpeg",
            description: "I led the development of Artificial Intelligence solutions focused on social and environmental impact. I managed the cloud infrastructure and oversaw multidisciplinary projects, connecting academia with industry.",
            responsibilities: [
              "Defined the company's initial product vision and technology strategy.",
              "Designed and implemented a scalable cloud architecture on AWS for AI projects.",
              "Applied R&D in Deep Learning and Computer Vision.",
              "Managed and mentored master's thesis projects in AI, DevOps, UX/UI, and Industry 4.0."
            ],
            achievements: [
              "As a Co-Founder, I participated in the company's conception, legal incorporation, and registration.",
              "Led the 'AcuaMattic' project, an end-to-end AI system including a proprietary dataset (+10,000 images), a CNN model (92% accuracy), and integration with a robot prototype.",
              "Orchestrated the complete infrastructure migration to AWS, laying the foundation for large-scale Machine Learning model training and deployment.",
              "Expanded the company's AI solutions portfolio, developing NLP prototypes for document analysis and a production-ready chatbot using Amazon Lex.",
              "Served as a bridge between industry and academia, mentoring multiple master's thesis projects for my alma mater."
            ]
          },
          {
            company: "NTT DATA Europe & LATAM",
            position: "Senior Software Engineer (for Transbank)",
            period: "2019 - 2021",
            location: "Santiago, Chile",
            logo: "/exp/nttdata.jpeg",
            description: "I played an active role in modernizing core systems of the financial ecosystem, addressing the migration of legacy platforms to modern architectures. My focus was on developing highly available and secure applications in a demanding, regulated environment.",
            responsibilities: [
              "Analyzed technical and functional requirements for financial sector clients.",
              "Designed robust and secure IT solutions and strategies.",
              "Developed RESTful Web Services with Java 8 and Spring Boot 2.",
              "Implemented robust authentication and authorization with Spring Security and JWT."
            ],
            achievements: [
              "Led the modernization and migration of Transbank's back-office systems, dramatically enhancing the maintainability and performance of the core banking platform.",
              "Designed and implemented high-availability solutions capable of handling over 1 million daily transactions, applying financial security standards (OWASP, PCI).",
              "Acted as the team's technical reference, establishing quality standards that reduced technical debt through static code analysis tools."
            ]
          },
          {
            company: "Falabella",
            position: "Senior IT Analyst",
            period: "2015 - 2019",
            location: "Santiago, Chile",
            logo: "/exp/falabella.jpeg",
            description: "I was responsible for the development and integration of corporate solutions for various business units of the Falabella Group. I led key projects aimed at improving operational efficiency and the internal user experience through custom Java platforms.",
            responsibilities: [
              "Managed and developed requirements for internal business units.",
              "Built Java web solutions to integrate legacy systems.",
              "Supervised technical team assignments and external providers.",
              "Collaborated directly with different areas to implement custom solutions."
            ],
            achievements: [
              "Led the development of the 'Personnel and Payroll System' (SPR), a key corporate platform that unified HR management for over 50,000 employees.",
              "Designed and implemented a platform for declaring conflicts of interest, strengthening corporate transparency and ethics.",
              "Served as the main point of contact for non-technical business stakeholders, leading requirements gathering to translate their needs into user-oriented software solutions."
            ]
          },
          {
            company: "NTT DATA Europe & LATAM",
            position: "Solutions Analyst (for Movistar Chile)",
            period: "2010 - 2014",
            location: "Santiago, Chile",
            logo: "/exp/nttdata.jpeg",
            description: "I was responsible for migrating the private customer portal for Movistar Chile, developing front-end and back-end components on the IBM WebSphere platform, with the goal of improving customer experience and adding new functionalities.",
            responsibilities: [
              "Developed front-end portlets (HTML, CSS, JavaScript, JSP) with WebSphere Portlet Factory.",
              "Developed backend SOAP Web Services with Java.",
              "Applied the DAO design pattern for data abstraction.",
              "Authored technical documentation and user guides."
            ],
            achievements: [
              "Played a key role in the successful migration of the Movistar Chile customer portal on IBM WebSphere, incorporating new functionalities.",
              "Contributed to a significant improvement in user experience and increased customer autonomy through intuitive interfaces and integrated services."
            ]
          }
        ]
      },
      education: {
        title: "Education & Professional Development",
        counter: "educations",
        educations: [
          {
            institution: "LIDR.co | AI-Powered Careers",
            degree: "AI4DEVS",
            period: "2025 - Present",
            location: "Online, Spain",
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
            location: "Online, Spain",
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
            location: "Online, Spain",
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
            location: "Barcelona, Spain",
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
            location: "Santiago, Chile",
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
            location: "Santiago, Chile",
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
            location: "Santiago, Chile",
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
        title: "Featured Projects",
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
        title: "Skills",
        description: "Technical skills, languages, and soft skills",
        filters: {
          all: "All",
          backend: "Backend",
          frontend: "Frontend",
          cloud: "Cloud",
          ai: "AI",
          devops: "DevOps",
          soft_skills: "Soft Skills",
          languages: "Languages"
        },
        soft_skills: {
          title: "Soft Skills",
          skills: "Communication, Teamwork, Problem Solving, Adaptability, Leadership, Time Management",
        },
        languages: {
          title: "Languages",
          skills: "Spanish Native, English Professional Working Proficiency",
        },
        api_design: {
          title: "API Design",
          skills: "Swagger, OpenAPI",
        },
        code_review: {
          title: "Code Review",
          skills: "Sonar, Veracode, Checkstyle",
        },
        project_management: {
          title: "Project Management",
          skills: "Jira, Confluence, Trello, Scrum, Agile Methodologies",
        },
        frontend: {
          title: "Frontend",
          skills: "HTML, CSS, JavaScript, React",
        },
        backend: {
          title: "Backend",
          skills: "Java, Spring Boot, Python, Flask, FastAPI, REST API",
        },
        database: {
          title: "Database",
          skills:
            "SQL, PL/SQL, Oracle, MySQL, PostgreSQL, NoSQL, MongoDB, JPA, Hibernate",
        },
        code_management: {
          title: "Code Management",
          skills: "GitHub, GitLab, Bitbucket",
        },
        build_tools: {
          title: "Build Tools",
          skills: "Maven, Gradle",
        },
        testing: {
          title: "Testing",
          skills: "JUnit, Mockito, Spock, Karate, ArchUnit",
        },
        cicd: {
          title: "CI/CD",
          skills: "Jenkins, GitHub Actions, Bamboo, Kubernetes, Docker",
        },
        monitoring: {
          title: "Monitoring",
          skills: "Splunk, Dynatrace, Elasticsearch",
        },
        cloud: {
          title: "Cloud (AWS)",
          skills:
            "IAM, EC2, Elastic Beanstalk, Lambda, RDS, DynamoDB, CLI, S3, API Gateway, SageMaker, Rekognition, Lex, CloudFront, Route 53",
        },
        ai: {
          title: "AI",
          skills:
            "Jupyter, Prompting, GenAI, LLM, RAG, HuggingFace, LangChain, OpenCV, SciKit-Learn, TensorFlow, Pytorch, OpenAI, ChatGPT",
        },
      },
      recommendations: [
        {
          counter: "recommendations",
          name: "Inés García",
          position: "Full Stack Developer & Trainer | Green and Digital Transition · Applied AI",
          company: "LIDR.co",
          relation: "Directly supervised Álvaro",
          text: "I had the opportunity to accompany Álvaro as a Teacher Assistant for the AI4Devs master's at Lidr, where I closely supervised his work, and I can say with total confidence that his performance was outstanding. He did an excellent job, tackling an ambitious challenge and integrating AI, backend, frontend, and cloud infrastructure. He demonstrated not only technical mastery but also a very clear product vision, making coherent decisions and providing well-thought-out solutions in every phase of the project. His code stood out for being clean, organized, and maintainable, always applying best practices. Personally, his attitude was impeccable: proactive, participatory, respectful, and very pleasant to deal with. I recommend Álvaro without any doubt. He is a profile that adds real value from the very first moment, and I am sure he will continue to excel in any challenge he decides to undertake.",
          date: "November 25, 2025",
          picture: "",
          linkedin: "https://www.linkedin.com/in/ines-garzeta/",
        },
        {
          name: "Dayli Velasquez",
          position: "Agile Project Lead | Systems Engineer",
          company: "Falabella",
          relation: "Worked in the same team",
          text: "Great professional and person, it was a pleasure to be part of the team and great work!",
          date: "April 23, 2024",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/dayli-velasquez",
        },
        {
          name: "Denys Lopez",
          position:
            "Full stack developer with experience in web development and Scrum methodology",
          company: "NTT DATA Europe & LATAM",
          relation: "Worked in the same team",
          text: "I highly recommend Álvaro Maldonado! As a full stack developer, during our collaboration at Everis, he demonstrated exceptional ability to solve complex problems and collaborate effectively in a team. His passion, eagerness to keep learning, work ethic, and communication skills make him a valuable asset to any project.",
          date: "February 1, 2024",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/denys-lopez",
        },
        {
          name: "Rodrigo Parra Cárcamo",
          position: "Senior Manager Cloud Engineering",
          company: "NTT DATA Europe & LATAM",
          relation: "Direct supervisor of Álvaro",
          text: "Álvaro is an excellent professional and a great person. He has a good technical level, is very proactive and dedicated, capable of researching and solving complex problems. He works very well in a team, always contributing to maintaining a good atmosphere. He is very responsible and committed, I recommend him 100%.",
          date: "January 2, 2024",
          picture:
            "https://media.licdn.com/dms/image/v2/C4E03AQHQqh74lznY5Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1565176798787?e=1756944000&v=beta&t=fqgzMD3wDsExSZjuNU5_u2drnR-unmwc33KfS7XGezE",
          linkedin:
            "https://www.linkedin.com/in/rodrigo-parra-cárcamo-a1872324",
        },
        {
          name: "Nelson Alvarado Vidal",
          position: "Senior Software Engineer | Technical Lead",
          company: "InAdvance Consulting Group",
          relation: "Worked in the same team",
          text: "Álvaro is a proactive person, I learned a lot from him and he is always motivated in his work.",
          date: "October 6, 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/nalvaradov85",
        },
        {
          name: "Sam Hidalgo",
          position:
            "Agile Team Coach | Facilitator | Scrum Master | Product Manager",
          company: "NTT DATA Europe & LATAM",
          relation: "Worked in the same team",
          text: "I worked with Álvaro in the same area. He is a committed and proactive person. Firm and decisive, he adapts very well to teamwork, showing confidence. During the period we worked together, I was able to validate the skills he has for collaborative work and problem solving.",
          date: "September 16, 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/sam-hidalgo-nava",
        },
        {
          name: "Carlos Osorio Calmels",
          position: "Senior Software Developer",
          company: "NTT DATA Europe & LATAM",
          relation: "Worked in the same team",
          text: "An excellent professional, passionate, and 100% committed, as a developer very objective and with a broad knowledge of abstraction and process optimization.",
          date: "September 14, 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/carlosfosorioc",
        },
        {
          name: "Juan Reckmann Cardenas",
          position: "Solutions Team Leader",
          company: "NTT DATA Europe & LATAM",
          relation: "Worked in the same team",
          text: "Álvaro is characterized by a high technical level and 100% commitment, he has great leadership qualities and constant support for the whole team, I would work with him again without hesitation, he can solve complex problems in a very short time.",
          date: "September 13, 2023",
          picture: "",
          linkedin:
            "https://www.linkedin.com/in/juan-nicolas-reckmann-cardenas-80584b40",
        },
        {
          name: "Antonella Amodio Alvarez",
          position:
            "Business Analyst | Expert in Process Optimization & Digital Transformation | Agile & Lean Methodologies | Data-Driven Decision Maker | Power BI",
          company: "Falabella",
          relation: "Worked in the same team",
          text: "I worked with Álvaro during the Time & Attendance project and he has been a great help, providing knowledge and skilled in the technical area, he is a person with integrity, well-developed soft skills, it was a pleasure to work with him!",
          date: "August 10, 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/antonella-amodio-alvarez",
        },
        {
          name: "Bruno Ivan Aguilera Silva",
          position:
            "Senior Software Engineer.",
          company: "Falabella",
          relation: "Worked in the same team",
          text: "It is a pleasure to recommend Álvaro for his exceptional capabilities and soft skills. With his solid background in Computer Engineering and his Master's in Artificial Intelligence, he has demonstrated over a decade of experience in various sectors. His versatility is reflected in his leadership, problem-solving, and adaptability, in both technical and strategic roles. His proficiency in AI/ML/DL, cloud computing, and backend development makes him stand out. His pursuit of dynamic challenges and his commitment to achieving goals are unmatched. Álvaro is a valuable addition to any technology and leadership team.",
          date: "August 9, 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/bruno-ivan-aguilera-silva-808b61166/",
        },
        {
          name: "Pablo Puelma Hernández",
          position: "Senior Project & Service Leader",
          company: "NTT DATA Europe & LATAM",
          relation: "Direct supervisor of Álvaro",
          text: "Álvaro is a person with a very complete technical profile, capable of solving complex problems quickly and with quality, goal-oriented and with great commitment to his work and colleagues. Personally, he is very responsible, reliable and a great team player, always willing to teach others and support them when they need it and always willing to give a little more to achieve goals.",
          date: "August 9, 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/pablopuelmah",
        },
        {
          name: "Pedro Alejandro Oronoz",
          position: "Senior Fullstack Software Engineer",
          company: "Falabella",
          relation: "Worked in the same team",
          text: "I sincerely recommend Álvaro for his professionalism and collaboration during our time working together. His attention to detail, experience and dedication are truly valuable to any team.",
          date: "August 7, 2023",
          picture:
            "",
          linkedin:
            "https://www.linkedin.com/in/pedro-alejandro-oronoz-5025385a",
        },
        {
          name: "Nelly Manterola",
          position:
            "Head of Security / PMI-ACP / Project Manager / Certified ISO IEC 27001 Lead Implementer / Certified ISO 27001:2022 Foundation / Diploma in Information Security / Financial Services / Business Processes",
          company: "Falabella",
          relation: "Direct supervisor of Álvaro",
          text: "I met Álvaro by chance and today I dare to say that he is one of the best technical leaders I have worked with. His results-oriented approach stands out above all and having knowledge of artificial intelligence his vision fosters ethical, responsible values and teamwork is remarkable. It was an excellent experience working with you.",
          date: "August 4, 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/nellymanterola",
        },
      ],
      footer: {
        slogan: "AI-Powered Product Engineering",
        made_with: "Designed & Built by almap[i]",
        copyright: "© {year}. All rights reserved"
      },
      chatbot: {
        name: "Álvaro Maldonado",
        online_status: "Online",
        offline_status: "Offline",
        connecting_status: "Connecting...",
        writing_status: "Typing...",
        error_status: "Connection error",
        error_message: "Sorry, there was an error sending the message. Please try again.",
        offline_message: "I'm currently unable to respond. Please try again later or send me an email at alvaro@almapi.dev.",
        notification_message: "Hello! 👋 How can I help you?",
        input_error: "Chatbot offline - Not available",
        welcome_message:
          "Hello! 👋 I'm Álvaro. I'm here to answer your questions about my professional experience, education, and other work-related topics. Feel free to ask! 😊",
        input_placeholder: "Type your message...",
      },
      contact: {
        title: "Let's Connect!",
        subtitle: "Interested in working together or have a proposal? Contact me!",
        slogan: "AI-Powered Product Engineering",
        ariaFront: "Business card: front",
        ariaBack: "Business card: back",
        back: {
          email: "alvaro@almapi.dev",
          linkedin: "https://www.linkedin.com/in/almapidev/",
          github: "https://github.com/aandmaldonado",
          city: "Gandia, Spain"
        }
      },
      captcha: {
        title: "Verify you're human",
        subtitle: "Click verify to confirm you are human",
        placeholder: "Your answer",
        verify: "Verify",
        cancel: "Cancel",
        attempts: "Attempts",
        new_question: "New Question",
        too_many_attempts: "Too many failed attempts. You can wait {minutes} minutes or reset now.",
        rate_limit_exceeded: "Rate limit exceeded. You can wait or reset now.",
        suspicious_activity: "Suspicious activity detected. Too many attempts in one hour.",
        reset: "Reset"
      },
      data_capture: {
        title: "📝 Contact Information",
        description: "To provide you with better service, we would like to know a little more about you.",
        email_label: "Email *",
        email_placeholder: "name@company.com",
        linkedin_label: "LinkedIn",
        linkedin_placeholder: "linkedin.com/in/your-profile or your-username",
        user_type_label: "User Type *",
        user_type_placeholder: "Select...",
        user_type_options: {
          hr: "HR Professional",
          it: "IT Professional",
          other: "Other"
        },
        cancel: "Cancel",
        submit: "Submit",
        submitting: "Submitting...",
        errors: {
          email_required: "Email required",
          email_invalid: "Invalid email format",
          linkedin_invalid: "Invalid LinkedIn format",
          user_type_required: "Required"
        },
        success_message: "✅ Thank you for providing your information. I can now provide you with better service.",
        error_message: "❌ Error processing information. Please try again."
      },
      gdpr: {
        title: "🔒 GDPR Consent",
        description: "To continue, we need your consent to process your data in accordance with GDPR.",
        analytics_consent: "Analytics Consent",
        analytics_description: "Allows analysis of interactions to improve service",
        data_processing_consent: "Data Processing Consent",
        data_processing_description: "Allows storage and processing of your contact data",
        cancel: "Cancel",
        accept: "Accept",
        processing: "Processing...",
        success_message: "✅ Consent registered. You can continue with the conversation.",
        error_message: "❌ Error processing consent. Please try again."
      },
      banners: {
        data_capture: {
          message: "💡 Would you like Álvaro to send you additional information about specific projects?",
          accept: "Share data",
          reject: "No, thanks"
        },
        gdpr: {
          message: "🔒 To send you personalized information, I need your consent to process data according to GDPR",
          accept: "Give consent",
          reject: "No, thanks"
        },
        data_capture_change_mind: {
          message: "💭 Did you change your mind? You can share your data to receive personalized information",
          accept: "Share data",
          reject: "No, thanks"
        },
        gdpr_change_mind: {
          message: "💭 Did you change your mind? You can give your GDPR consent to process data",
          accept: "Give consent",
          reject: "No, thanks"
        }
      },
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        experience: "Experiencia",
        education: "Educación",
        projects: "Proyectos",
        skills: "Habilidades",
        recommendations: "Recomendaciones",
      },
      head: {
        lang_es: "Español",
        lang_en: "Inglés",
      },
      hero: {
        title: "Ingeniería de Producto Impulsada por IA",
        subtitle: "Ingeniería de Software | IA con Propósito | Human-in-the-Loop",
        download_cv: "Descargar CV",
        generating: "Generando...",
        contact_button: "Contáctame",
      },
      about: {
        location: "Gandía, España",
        title: "Sobre Mí",
        descriptions: [
          "Soy un Ingeniero de Software Senior con una sólida trayectoria liderando el desarrollo y la integración de soluciones a lo largo de todo el ciclo de vida del software. Mi experiencia abarca diversas industrias, donde he asumido roles de creciente responsabilidad, desde desarrollador y consultor hasta Líder Técnico y CTO.",
          "Mi pasión es la tecnología con propósito. Hoy, mi enfoque profesional está firmemente centrado en la Inteligencia Artificial, no como un fin, sino como una herramienta para resolver problemas de negocio complejos. Adopto una mentalidad de 'Product Engineer', dedicando tiempo a entender profundamente el 'porqué' de un desafío antes de diseñar el 'cómo' técnico.",
          "Creo en la tecnología que potencia a las personas y optimiza los procesos. Mi objetivo es colaborar en proyectos innovadores donde pueda aplicar mi experiencia para construir soluciones robustas, escalables y que generen un impacto medible."
        ],
        looking_for: "Mi Entorno Ideal",
        search_goals: [
          "Proyectos que apliquen IA para resolver desafíos de negocio reales.",
          "Roles con autonomía y flexibilidad, orientados a la entrega de resultados.",
          "Culturas de equipo basadas en el pensamiento crítico, la colaboración y el aprendizaje continuo."
        ],
        why_collaborate: "Mi Propuesta de Valor",
        collaboration_reasons: [
          "Liderazgo Técnico y Visión de Arquitectura: Capacidad para guiar proyectos desde la concepción hasta el despliegue.",
          "Puente entre Negocio y Tecnología: Habilidad para traducir objetivos estratégicos en soluciones técnicas efectivas.",
          "Adaptabilidad y Resolución de Problemas: Experiencia probada en aprender rápido y resolver desafíos complejos en diversos entornos."
        ],
        connect_message: "¡Conectemos! Estoy abierto a oportunidades y colaboraciones que generen un impacto real.",
        years_experience: "Años de experiencia",
        industries_list: {
          Telecomunicaciones: "Telecomunicaciones",
          AFP: "AFP",
          Gobierno: "Gobierno",
          Retail: "Retail",
          HR: "Recursos Humanos",
          Banca: "Banca",
          Aerolineas: "Aerolíneas",
          IA: "Inteligencia Artificial"
        }
      },
      experience: {
        title: "Experiencia Laboral",
        counter: "experiencias",
        description: "Descripción",
        achievements: "Logros Clave",
        responsibilities: "Responsabilidades Principales",
        experiences: [
          {
            company: "InAdvance Consulting Group",
            position: "Ingeniero de Software Senior (para Banco BCI)",
            period: "2024 - Presente",
            location: "Santiago, Chile",
            logo: "/exp/inadvance.jpeg",
            description: "Como especialista en integración en el proyecto estratégico 'Andes Online', lideré la modernización del backend para una nueva plataforma de procesamiento de tarjetas de crédito, enfocándome en la transición hacia una arquitectura de microservicios robusta y escalable.",
            responsibilities: [
              "Análisis y traducción de complejos requerimientos financieros a especificaciones técnicas.",
              "Diseño e implementación de APIs resilientes y seguras para la interoperabilidad de sistemas.",
              "Aplicación de principios de Clean Code y estrategias de 'shift-left testing'.",
              "Participación activa en la selección y evaluación técnica de nuevos ingenieros."
            ],
            achievements: [
              "Diseñé e implementé una solución de microservicios resiliente, creando APIs que aseguraron la comunicación fluida y segura entre sistemas legados y la nueva plataforma.",
              "Apliqué una estrategia de 'shift-left testing' dentro de la cultura DevOps, responsabilizándome de la calidad del código y la seguridad desde las fases iniciales del desarrollo.",
              "Actué como puente entre las áreas de negocio y desarrollo, traduciendo los complejos requerimientos del sistema financiero en especificaciones técnicas claras y viables para el equipo."
            ]
          },
          {
            company: "Imagemaker",
            position: "Ingeniero de Software Senior (para Banco de Chile)",
            period: "2023 - 2024",
            location: "Santiago, Chile",
            logo: "/exp/imagemaker.jpeg",
            description: "Actué como consultor técnico y desarrollador backend, diseñando e implementando soluciones a medida para clientes del sector legal y corporativo. Mi trabajo se centró en la calidad del software, el rendimiento de los microservicios y la observabilidad del sistema.",
            responsibilities: [
              "Consultoría técnica externa para optimizar proyectos y resolver problemas complejos.",
              "Desarrollo de microservicios con versiones modernas de Java y Spring Boot.",
              "Revisiones de código automatizadas para asegurar estándares de calidad (Veracode, SonarQube).",
              "Garantía de la salud del sistema mediante monitoreo proactivo de servicios con Splunk y Dynatrace."
            ],
            achievements: [
              "Lideré una Prueba de Concepto (PoC) con IA para redefinir la oferta de servicios a clientes PYME, automatizando el análisis de documentos legales con NLP y Visión por Computador.",
              "Diseñé e implementé microservicios robustos, estableciendo mejores prácticas cloud-native y estándares de calidad automatizados.",
              "Actué como consultor técnico clave para clientes, implementando soluciones de monitoreo proactivo que redujeron significativamente el tiempo de inactividad del sistema."
            ]
          },
          {
            company: "Falabella",
            position: "Líder Técnico",
            period: "2022 - 2023",
            location: "Santiago, Chile",
            logo: "/exp/falabella.jpeg",
            description: "Lideré el desarrollo de un sistema corporativo de gestión de asistencia implementado en diversas unidades de negocio del grupo Falabella en América Latina. El proyecto involucró la descomposición de sistemas legados, el diseño de soluciones distribuidas y la aplicación de principios de Domain-Driven Design (DDD) y arquitectura basada en eventos.",
            responsibilities: [
              "Colaboración con Product Owners y stakeholders para la definición de requerimientos.",
              "Gestión del backlog y priorización de funcionalidades clave del proyecto.",
              "Liderazgo técnico del equipo de desarrollo, asegurando el cumplimiento de las guías de arquitectura.",
              "Coordinación con equipos internos y externos, incluyendo la gestión de proveedores de SaaS."
            ],
            achievements: [
              "Lideré la entrega de un sistema de gestión de asistencia multi-país, orquestando el ciclo de vida completo del producto y optimizando la eficiencia operacional de la compañía a nivel regional.",
              "Impulsé la modernización de sistemas legados mediante la aplicación de Domain-Driven Design (DDD) y una arquitectura basada en eventos para desacoplar dominios de negocio complejos.",
              "Dirigí la estrategia de implementación e integración con un proveedor de SaaS, sirviendo como el nexo principal entre equipos técnicos, stakeholders y proveedores externos."
            ]
          },
          {
            company: "Neurogenesis IA Technologies",
            position: "CTO & Co-Fundador | Ingeniero de IA",
            period: "2021 - 2022",
            location: "Barcelona, España",
            logo: "/exp/neurogenesis.jpeg",
            description: "Lideré el desarrollo de soluciones de Inteligencia Artificial orientadas al impacto social y medioambiental. Gestioné la infraestructura en la nube y supervisé proyectos multidisciplinarios, conectando la academia con la industria.",
            responsibilities: [
              "Definición de la visión de producto inicial y la estrategia tecnológica de la compañía.",
              "Diseño e implementación de una arquitectura cloud escalable en AWS para proyectos de IA.",
              "Investigación y Desarrollo aplicado en Deep Learning y Visión por Computador.",
              "Gestión y mentoría de proyectos de fin de máster en IA, DevOps, UX/UI e Industria 4.0."
            ],
            achievements: [
              "Como Co-Fundador, participé en la concepción, constitución y registro legal de la empresa.",
              "Lideré el proyecto 'AcuaMattic', un sistema de IA de extremo a extremo que incluyó un dataset propio (+10.000 imágenes), un modelo CNN (92% de precisión) y su integración con un prototipo de robot.",
              "Orquesté la migración completa de la infraestructura a AWS, sentando las bases para el entrenamiento y despliegue de modelos de Machine Learning a gran escala.",
              "Amplié el portafolio de soluciones de IA, desarrollando prototipos para el análisis de documentos con NLP y un chatbot productivo con Amazon Lex.",
              "Actué como puente entre la industria y la academia, mentorizando múltiples proyectos de fin de máster para mi alma máter."
            ]
          },
          {
            company: "NTT DATA Europe & LATAM",
            position: "Ingeniero de Software Senior (para Transbank)",
            period: "2019 - 2021",
            location: "Santiago, Chile",
            logo: "/exp/nttdata.jpeg",
            description: "Participé activamente en la modernización de sistemas core del ecosistema financiero, abordando la migración de plataformas legacy a arquitecturas modernas. Mi enfoque fue el desarrollo de aplicaciones de alta disponibilidad y seguras en un entorno regulado y de alta exigencia.",
            responsibilities: [
              "Análisis de requerimientos técnicos y funcionales para clientes del sector financiero.",
              "Diseño de soluciones y estrategias de TI robustas y seguras.",
              "Desarrollo de Web Services RESTful con Java 8 y Spring Boot 2.",
              "Implementación de autenticación y autorización robusta con Spring Security y JWT."
            ],
            achievements: [
              "Lideré la modernización y migración de los sistemas de backoffice de Transbank, mejorando drásticamente la mantenibilidad y el rendimiento de la plataforma core bancaria.",
              "Diseñé e implementé soluciones de alta disponibilidad capaces de gestionar más de 1 millón de transacciones diarias, aplicando estándares de seguridad financiera (OWASP, PCI).",
              "Actué como referente técnico del equipo, estableciendo estándares de calidad que redujeron la deuda técnica mediante herramientas de análisis estático de código."
            ]
          },
          {
            company: "Falabella",
            position: "Analista TI Senior",
            period: "2015 - 2019",
            location: "Santiago, Chile",
            logo: "/exp/falabella.jpeg",
            description: "Fui responsable del desarrollo e integración de soluciones corporativas para diversas unidades de negocio del Grupo Falabella. Lideré proyectos clave orientados a mejorar la eficiencia operativa y la experiencia del usuario interno a través de plataformas personalizadas en Java.",
            responsibilities: [
              "Gestión y desarrollo de requerimientos para unidades de negocio internas.",
              "Construcción de soluciones web Java para integrar sistemas legados.",
              "Supervisión de asignaciones del equipo técnico y proveedores externos.",
              "Colaboración directa con diferentes áreas para implementar soluciones a medida."
            ],
            achievements: [
              "Lideré el desarrollo del 'Sistema de Personal y Remuneraciones' (SPR), una plataforma corporativa clave que unificó la gestión de RRHH para más de 50.000 empleados.",
              "Diseñé e implementé una plataforma para la declaración de conflictos de interés, fortaleciendo la transparencia y la ética corporativa.",
              "Actué como el principal punto de contacto con stakeholders no técnicos, liderando la toma de requerimientos y traduciendo sus necesidades en soluciones de software orientadas al usuario."
            ]
          },
          {
            company: "NTT DATA Europe & LATAM",
            position: "Analista de Soluciones (para Movistar Chile)",
            period: "2010 - 2014",
            location: "Santiago, Chile",
            logo: "/exp/nttdata.jpeg",
            description: "Fui responsable de la migración del portal privado de clientes de Movistar Chile, desarrollando componentes front-end y back-end sobre la plataforma IBM WebSphere, con el objetivo de mejorar la experiencia del cliente y añadir nuevas funcionalidades.",
            responsibilities: [
              "Desarrollo de portlets front-end (HTML, CSS, JavaScript, JSP) con WebSphere Portlet Factory.",
              "Desarrollo de servicios web SOAP con Java para el backend.",
              "Aplicación del patrón de diseño DAO para la abstracción de datos.",
              "Redacción de documentación técnica y guías de usuario."
            ],
            achievements: [
              "Jugué un rol decisivo en la exitosa migración del portal de clientes de Movistar Chile sobre IBM WebSphere, incorporando nuevas funcionalidades.",
              "Contribuí a una mejora significativa en la experiencia de usuario e incrementé la autonomía del cliente a través de interfaces intuitivas y servicios integrados."
            ]
          }
        ]
      },
      education: {
        title: "Educación y Desarrollo Profesional",
        counter: "formaciones",
        educations: [
          {
            institution: "LIDR.co | AI-Powered Careers",
            degree: "AI4DEVS",
            period: "2025 - Presente",
            location: "Online, España",
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
            location: "Online, España",
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
            location: "Online, España",
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
            location: "Barcelona, España",
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
            location: "Santiago, Chile",
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
            location: "Santiago, Chile",
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
            location: "Santiago, Chile",
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
        title: "Proyectos Destacados",
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
        title: "Habilidades",
        description: "Habilidades técnicas, idiomas y habilidades blandas",
        filters: {
          all: "Todos",
          backend: "Backend",
          frontend: "Frontend",
          cloud: "Cloud",
          ai: "IA",
          devops: "DevOps",
          soft_skills: "Habilidades Blandas",
          languages: "Idiomas"
        },
        soft_skills: {
          title: "Habilidades Blandas",
          skills: "Comunicación, Trabajo en Equipo, Resolución de Problemas, Adaptabilidad, Liderazgo, Gestión del Tiempo",
        },
        languages: {
          title: "Idiomas",
          skills: "Español Nativo, Inglés Competencia Profesional",
        },
        api_design: {
          title: "Diseño de API",
          skills: "Swagger, OpenAPI",
        },
        code_review: {
          title: "Revisión de Código",
          skills: "Sonar, Veracode, Checkstyle",
        },
        project_management: {
          title: "Gestión de Proyectos",
          skills: "Jira, Confluence, Trello, Scrum, Agile Methodologies",
        },
        frontend: {
          title: "Frontend",
          skills: "HTML, CSS, JavaScript, React",
        },
        backend: {
          title: "Backend",
          skills: "Java, Spring Boot, Python, Flask, FastAPI, API Rest",
        },
        database: {
          title: "Base de Datos",
          skills:
            "SQL, PL/SQL, Oracle, MySQL, PostgreSQL, NoSQL, MongoDB, JPA, Hibernate",
        },
        code_management: {
          title: "Gestión de Código",
          skills: "GitHub, GitLab, Bitbucket",
        },
        build_tools: {
          title: "Herramientas de Construcción",
          skills: "Maven, Gradle",
        },
        testing: {
          title: "Pruebas",
          skills: "JUnit, Mockito, Spock, Karate, ArchUnit",
        },
        cicd: {
          title: "CI/CD",
          skills: "Jenkins, GitHub Actions, Bamboo, Kubernetes, Docker",
        },
        monitoring: {
          title: "Monitoreo",
          skills: "Splunk, Dynatrace, Elasticsearch",
        },
        cloud: {
          title: "Cloud (AWS)",
          skills:
            "IAM, EC2, Elastic Beanstalk, Lambda, RDS, DynamoDB, CLI, S3, API Gateway, SageMaker, Rekognition, Lex, CloudFront, Route 53",
        },
        ai: {
          title: "IA",
          skills:
            "Jupyter, Prompting, GenAI, LLM, RAG, HuggingFace, LangChain, OpenCV, SciKit-Learn, TensorFlow, Pytorch, OpenAI, ChatGPT",
        },
      },
      recommendations: [
        {
          counter: "recomendaciones",
          name: "Inés García",
          position: "Full Stack Developer & Formadora | Transición verde y digital · IA aplicada",
          company: "LIDR.co",
          relation: "Supervisaba directamente a Álvaro",
          text: "Tuve la oportunidad de acompañar a Álvaro como Teacher Assistant del máster AI4Devs en Lidr, donde supervisé de cerca su trabajo, y puedo decir con total seguridad que su rendimiento fue sobresaliente. Realizó un trabajo excelente, abordando un reto ambicioso e integrando IA, backend, frontend e infraestructura en la nube. Demostró no solo dominio técnico, sino también una visión de producto muy clara, tomando decisiones coherentes y aportando soluciones bien pensadas en cada fase del proyecto. Su código destacaba por ser limpio, ordenado y mantenible, siempre aplicando las mejores prácticas. En lo personal, su actitud fue impecable: proactivo, participativo, respetuoso y muy agradable de tratar. Recomiendo sin ninguna duda a Álvaro. Es un perfil que aporta valor real desde el primer momento y estoy segura de que seguirá sobresaliendo en cualquier desafío que decida asumir.",
          date: "25 de noviembre de 2025",
          picture: "",
          linkedin: "https://www.linkedin.com/in/ines-garzeta/",
        },
        {
          name: "Dayli Velasquez",
          position: "Agile Project Lead | Systems Engineer",
          company: "Falabella",
          relation: "Trabajó en el mismo equipo",
          text: "Gran profesional y persona, todo un gusto haber formado equipo y buen trabajo!",
          date: "23 de abril de 2024",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/dayli-velasquez",
        },
        {
          name: "Denys Lopez",
          position:
            "Desarrollador full stack con experiencia en desarrollo web y metodología Scrum",
          company: "NTT DATA Europe & LATAM",
          relation: "Trabajó en el mismo equipo",
          text: "¡Recomiendo encarecidamente a Álvaro Maldonado! Como desarrollador full stack, durante nuestra colaboración en Everis, demostró una excepcional capacidad para resolver problemas complejos y colaborar eficazmente en equipo. Su pasión, ánimo de seguir aprendiendo, ética de trabajo y habilidades de comunicación hacen de él un valioso activo para cualquier proyecto.",
          date: "1 de febrero de 2024",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/denys-lopez",
        },
        {
          name: "Rodrigo Parra Cárcamo",
          position: "Senior Manager Cloud Engineering",
          company: "NTT DATA Europe & LATAM",
          relation: "Supervisaba directamente a Álvaro",
          text: "Álvaro es un excelente profesional y una gran persona. Tiene un buen nivel técnico, muy proactivo y dedicado, capaz de investigar y resolver problemas complejos. Trabaja muy bien en equipo, contribuyendo siempre a mantener un buen ambiente. Es muy responsable y comprometido, lo recomiendo 100%.",
          date: "2 de enero de 2024",
          picture: "",
          linkedin:
            "https://www.linkedin.com/in/rodrigo-parra-cárcamo-a1872324",
        },
        {
          name: "Nelson Alvarado Vidal",
          position: "Senior Software Engineer | Technical Lead",
          company: "InAdvance Consulting Group",
          relation: "Trabajó en el mismo equipo",
          text: "Álvaro es una persona proactiva, aprendí mucho de él y siempre motivado en su trabajo.",
          date: "6 de octubre de 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/nalvaradov85",
        },
        {
          name: "Sam Hidalgo",
          position:
            "Agile Team Coach | Facilitador | Scrum Master | Product Manager",
          company: "NTT DATA Europe & LATAM",
          relation: "Trabajó en el mismo equipo",
          text: "Trabajé con Álvaro en la misma área. Es una persona comprometida y proactiva. Firme y resolutivo, se adapta muy bien al trabajo en equipo mostrándose seguro. Durante el periodo que trabajamos juntos pude validar las habilidades que tiene para el trabajo colaborativo y la resolución de problemas.",
          date: "16 de septiembre de 2023",
          picture: "",
          linkedin: "https://www.linkedin.com/in/sam-hidalgo-nava",
        },
        {
          name: "Carlos Osorio Calmels",
          position: "Senior Software Developer",
          company: "NTT DATA Europe & LATAM",
          relation: "Trabajó en el mismo equipo",
          text: "Un excelente profesional, apasionado, y comprometido al 100%, como desarrollador muy objetivo y con un amplio conocimiento de abstracción y optimización de procesos.",
          date: "14 de septiembre de 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/carlosfosorioc",
        },
        {
          name: "Juan Reckmann Cardenas",
          position: "Solutions Team Leader",
          company: "NTT DATA Europe & LATAM",
          relation: "Trabajó en el mismo equipo",
          text: "Álvaro se caracteriza por un gran nivel técnico y compromiso 100%, tiene grandes cualidades de líder y de apoyo constante a todo el equipo, volvería a trabajar con él sin problema, puede solucionar problemas complejos en muy poco tiempo.",
          date: "13 de septiembre de 2023",
          picture: "",
          linkedin:
            "https://www.linkedin.com/in/juan-nicolas-reckmann-cardenas-80584b40",
        },
        {
          name: "Antonella Amodio Alvarez",
          position:
            "Business Analyst | Expert in Process Optimization & Digital Transformation | Agile & Lean Methodologies | Data-Driven Decision Maker | Power BI",
          company: "Falabella",
          relation: "Trabajó en el mismo equipo",
          text: "Trabajé con Álvaro durante el proyecto de Time & Attendance y ha sido de gran ayuda aportando conocimientos y capacitado en el área técnica, es una persona con integridad, habilidades blandas desarrolladas, fue un placer trabajar con él!",
          date: "10 de agosto de 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/antonella-amodio-alvarez",
        },
        {
          name: "Bruno Ivan Aguilera Silva",
          position:
            "Senior Software Engineer.",
          company: "Falabella",
          relation: "Trabajó en el mismo equipo",
          text: "Es un placer recomendar a Álvaro por sus excepcionales capacidades y habilidades blandas. Con su sólida formación en Ingeniería Civil en Informática y su Máster en Inteligencia Artificial, ha demostrado más de una década de experiencia en diversos sectores. Su versatilidad se refleja en su liderazgo, resolución de problemas y adaptabilidad, tanto en roles técnicos como estratégicos. Su destreza en IA/ML/DL, cloud computing y desarrollo backend lo hace sobresalir. Su búsqueda de desafíos dinámicos y su compromiso para lograr metas son inigualables. Álvaro es una valiosa adición para cualquier equipo tecnológico y de liderazgo.",
          date: "9 de agosto de 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/bruno-ivan-aguilera-silva-808b61166/",
        },
        {
          name: "Pablo Puelma Hernández",
          position: "Senior Project & Service Leader",
          company: "NTT DATA Europe & LATAM",
          relation: "Supervisaba directamente a Álvaro",
          text: "Álvaro es una persona con un perfil técnico muy completo, capaz de resolver problemas complejos de forma rápida y con calidad, orientado al logro y con un gran compromiso por su trabajo y compañeros. En lo personal, es muy responsable, confiable y un gran compañero de equipo, siempre dispuesto a enseñar a los demás y a apoyarlos cuando lo necesitan y está siempre dispuesto a dar un poco más para lograr las metas.",
          date: "9 de agosto de 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/pablopuelmah",
        },
        {
          name: "Pedro Alejandro Oronoz",
          position: "Senior Fullstack Software Engineer",
          company: "Falabella",
          relation: "Trabajó en el mismo equipo",
          text: "Quiero recomendar sinceramente a Álvaro por su profesionalismo y colaboración durante nuestro tiempo de trabajo conjunto. Su atención a los detalles, su experiencia y dedicación son verdaderamente valiosas para cualquier equipo.",
          date: "7 de agosto de 2023",
          picture:
            "",
          linkedin:
            "https://www.linkedin.com/in/pedro-alejandro-oronoz-5025385a",
        },
        {
          name: "Nelly Manterola",
          position:
            "Head of Security / PMI-ACP / Project Manager / Certified ISO IEC 27001 Lead Implementer / Certified ISO 27001:2022 Foundation / Diploma in Information Security / Financial Services / Business Processes",
          company: "Falabella",
          relation: "Supervisaba directamente a Álvaro",
          text: "Conocí a Álvaro de manera accidental y hoy me atrevo a decir que es uno de los mejores líderes técnicos con los que he trabajado. Su orientación a resultados destaca por sobre todo y al contar con conocimientos de inteligencia artificial su mirada fomenta valores éticos, responsables y el trabajo en equipo es notable. Excelente experiencia fue trabajar junto a ti.",
          date: "4 de agosto de 2023",
          picture:
            "",
          linkedin: "https://www.linkedin.com/in/nellymanterola",
        },
      ],
      footer: {
        slogan: "Ingeniería de Producto Impulsada por IA",
        made_with: "Diseñado y construido por almap[i]",
        copyright: "© {year}. Todos los derechos reservados"
      },
      chatbot: {
        name: "Álvaro Maldonado",
        online_status: "En línea",
        offline_status: "Fuera de línea",
        connecting_status: "Conectando...",
        writing_status: "Escribiendo...",
        error_status: "Error de conexión",
        error_message: "Lo siento, hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
        offline_message: "En este momento no puedo responder. Por favor, intenta de nuevo más tarde o enviame un email a alvaro@almapi.dev.",
        notification_message: "¡Hola! 👋 ¿En qué puedo ayudarte?",
        input_error: "Chatbot offline - No disponible",
        welcome_message:
          "¡Hola! 👋 Soy Álvaro. Estoy aquí para responder tus preguntas sobre mi experiencia profesional, educación y otros temas laborales. ¡Pregúntame lo que necesites! 😊",
        input_placeholder: "Escribe tu mensaje...",
      },
      contact: {
        title: "¡Conectemos!",
        subtitle: "¿Te interesa trabajar juntos o tienes una propuesta? ¡Contáctame!",
        slogan: "Ingeniería de producto impulsada por IA",
        ariaFront: "Tarjeta de presentación: anverso",
        ariaBack: "Tarjeta de presentación: reverso",
        back: {
          email: "alvaro@almapi.dev",
          linkedin: "https://www.linkedin.com/in/almapidev/",
          github: "https://github.com/aandmaldonado",
          city: "Gandía, España"
        }
      },
      captcha: {
        title: "Verifica que eres humano",
        subtitle: "Haz clic en verificar para confirmar que eres humano",
        placeholder: "Tu respuesta",
        verify: "Verificar",
        cancel: "Cancelar",
        attempts: "Intentos",
        new_question: "Nueva Pregunta",
        too_many_attempts: "Demasiados intentos fallidos. Puedes esperar {minutes} minutos o reiniciar ahora.",
        rate_limit_exceeded: "Límite de descargas excedido. Puedes esperar o reiniciar ahora.",
        suspicious_activity: "Actividad sospechosa detectada. Demasiados intentos en una hora.",
        reset: "Reiniciar"
      },
      data_capture: {
        title: "📝 Información de Contacto",
        description: "Para brindarte un mejor servicio, nos gustaría conocer un poco más sobre ti.",
        email_label: "Email *",
        email_placeholder: "nombre@empresa.com",
        linkedin_label: "LinkedIn",
        linkedin_placeholder: "linkedin.com/in/tu-perfil o tu-username",
        user_type_label: "Tipo de Usuario *",
        user_type_placeholder: "Seleccionar...",
        user_type_options: {
          hr: "Profesional RRHH",
          it: "Profesional TI",
          other: "Otro"
        },
        cancel: "Cancelar",
        submit: "Enviar",
        submitting: "Enviando...",
        errors: {
          email_required: "Email obligatorio",
          email_invalid: "Formato de email incorrecto",
          linkedin_invalid: "Formato de LinkedIn incorrecto",
          user_type_required: "Obligatorio"
        },
        success_message: "✅ Gracias por proporcionar tu información. Ahora puedo brindarte un mejor servicio.",
        error_message: "❌ Error al procesar la información. Por favor, intenta de nuevo."
      },
      gdpr: {
        title: "🔒 Consentimiento GDPR",
        description: "Para continuar, necesitamos tu consentimiento para procesar tus datos de acuerdo con el GDPR.",
        analytics_consent: "Consentimiento para Analytics",
        analytics_description: "Permite el análisis de interacciones para mejorar el servicio",
        data_processing_consent: "Consentimiento para Procesamiento de Datos",
        data_processing_description: "Permite el almacenamiento y procesamiento de tus datos de contacto",
        cancel: "Cancelar",
        accept: "Aceptar",
        processing: "Procesando...",
        success_message: "✅ Consentimiento registrado. Puedes continuar con la conversación.",
        error_message: "❌ Error al procesar el consentimiento. Por favor, intenta de nuevo."
      },
      banners: {
        data_capture: {
          message: "💡 ¿Te gustaría que Álvaro te envíe información adicional sobre proyectos específicos?",
          accept: "Compartir datos",
          reject: "No, gracias"
        },
        gdpr: {
          message: "🔒 Para enviarte información personalizada, necesito tu consentimiento para procesar datos según GDPR",
          accept: "Dar consentimiento",
          reject: "No, gracias"
        },
        data_capture_change_mind: {
          message: "💭 ¿Cambiaste de opinión? Puedes compartir tus datos para recibir información personalizada",
          accept: "Compartir datos",
          reject: "No, gracias"
        },
        gdpr_change_mind: {
          message: "💭 ¿Cambiaste de opinión? Puedes dar tu consentimiento GDPR para procesar datos",
          accept: "Dar consentimiento",
          reject: "No, gracias"
        }
      },
    },
  },
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
