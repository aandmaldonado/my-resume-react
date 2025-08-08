import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      cv: {
        header: {
          title: "Álvaro Andrés Maldonado Pinto",
          subtitle: "Senior Software Engineer | AI-Powered Dev | Product Engineer",
        },
        contactInfo: {
          location: "Gandia, Spain",
          email: "readme.md@almapi.dev",
          linkedin: "https://www.linkedin.com/in/almapidev/",
          web: "https://almapi.dev",
          github: "https://github.com/aandmaldonado",
          phone: "+34 641 96 23 96",
        },
        about: {
          title: "About Me",
          text: "I am a Senior Software Engineer with a solid background in developing and integrating technology solutions, involved in the entire software development lifecycle.",
        },
        experience: {
          title: "Experience",
          jobs: [
            {
              company: "InAdvance Consulting Group",
              position: "Senior Software Engineer",
              period: "2024 - Present",
              location: "Santiago, Chile",
              responsibilities: [
                "Active participation in the migration of critical financial systems", 
                "Technical design and implementation of scalable microservices", 
                "Development with modern architecture, Agile methodologies, and DevOps/DevSecOps practices",
                "Quality assurance through code reviews and comprehensive testing"
              ]
            },
            {
              company: "Imagemaker",
              position: "Senior Software Engineer",
              period: "2023 - 2024",
              location: "Santiago, Chile",
              responsibilities: [
                "Technical consulting for optimization and problem-solving in projects",
                "Research and development of AI POCs for legal document processing",
                "Microservices development with Java and Spring Boot following best practices",
                "Proactive service monitoring with ElasticSearch, Splunk, and Dynatrace"
              ]
            },
            {
              company: "Falabella",
              position: "Technical Lead",
              period: "2022 - 2023",
              location: "Santiago, Chile",
              responsibilities: [
                "Technical leadership in the development of a corporate attendance management system",
                "Design of distributed and resilient solutions applying DDD and event-driven architecture",
                "Decomposition of legacy systems and decoupling of critical functionalities",
                "Coordination between internal and external teams as a bridge between development and business areas"
              ]
            },
            {
              company: "Neurogenesis IA Technologies",
              position: "CTO & Co-Founder | AI Engineer",
              period: "2021 - 2022",
              location: "Barcelona, Spain",
              responsibilities: [
                "Applied research in AI technologies, focused on Deep Learning and computer vision",
                "Design and implementation of cloud architecture on AWS for AI projects",
                "Development of image classification models using convolutional neural networks",
                "Application of NLP techniques for legal document analysis"
              ]
            },
            {
              company: "NTT DATA Europe & LATAM",
              position: "Senior Software Engineer",
              period: "2019 - 2021",
              location: "Santiago, Chile",
              responsibilities: [
                "Modernization of core systems in the financial ecosystem",
                "Development of secure applications with Spring Security and JWT",
                "Implementation of robust and scalable solutions for high-data-flow environments",
                "Application of OWASP and PCI standards to ensure software quality"
              ]
            },
            {
              company: "Falabella",
              position: "Senior IT Analyst",
              period: "2015 - 2019",
              location: "Santiago, Chile",
              responsibilities: [
                "Development and integration of corporate solutions for business units of the Falabella Group",
                "Leadership in key projects to improve operational efficiency and internal user experience",
                "Construction of Java web solutions to integrate legacy systems",
                "Supervision of technical team assignments and external providers"
              ]
            },
            {
              company: "NTT DATA Europe & LATAM",
              position: "Solutions Analyst",
              period: "2010 - 2014",
              location: "Santiago, Chile",
              responsibilities: [
                "Migration of the private customer portal for Movistar Chile",
                "Development of front-end portlets using WebSphere Portlet Factory",
                "Implementation of SOAP Web Services with Java for back-end",
                "Code quality evaluation with tools like SonarQube"
              ]
            }
          ]
        },
        education: {
          title: "Education",
          degrees: [
            {
              institution: "LIDR.co",
              degree: "AI4DEVS",
              period: "2025 - Present",
              location: "Online, Spain"
            },
            {
              institution: "thePower",
              degree: "Cybersecurity Bootcamp",
              period: "2025",
              location: "Online, Spain"
            },
            {
              institution: "Hackio by thePower",
              degree: "AI Development Bootcamp",
              period: "2025",
              location: "Online, Spain"
            },
            {
              institution: "Universitat Politècnica de Catalunya",
              degree: "Master in Artificial Intelligence",
              period: "2020 - 2021",
              location: "Online, Spain"
            },
            {
              institution: "Universidad de Santiago de Chile",
              degree: "Computer Science Engineering",
              period: "2012 - 2017",
              location: "Santiago, Chile"
            },
          ]
        },
        skills: {
          title: "Skills",
          categories:[
            { name: "Java, Spring Boot, Microservices", category: "Backend" },
            { name: "JavaScript, TypeScript, React", category: "Frontend" },
            { name: "AWS, Docker, Kubernetes", category: "DevOps" },
            { name: "Python, TensorFlow, PyTorch", category: "AI/ML" },
            { name: "SQL, MongoDB, Redis", category: "Databases" },
            { name: "Git, CI/CD, Jenkins", category: "Tools" },
            { name: "Agile, Scrum, Kanban", category: "Methodologies" },
            { name: "Technical leadership, Mentoring", category: "Soft Skills" }
          ],
        },
        lang:{
          title: "Languages",
          languages:[
            { name: "Spanish", level: "Native" },
            { name: "English", level: "B1-B2" },
          ],
        },
        footer: {
          text: "CV automatically generated by almap[i] | almapi.dev"
        }
      },
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
        title: "Hello World! I'm Álvaro Maldonado",
        subtitle: "Senior Software Engineer | AI-Powered Dev | Product Engineer",
        download_cv: "Download CV",
        customize_cv: "Customize CV",
        select_sections: "Select the sections you want to include in CV:",
        sections_selected: "sections selected",
        generating: "Generating...",
        download: "Download CV",
        cancel: "Cancel",
        select_all: "Select all",
        deselect_all: "Deselect all",
        select_all_sections: "Select all sections",
        contact_button: "Contact me",
      },
      about: {
        location: "Gandia, Spain",
        title: "About Me",
        descriptions: [
          "I am a Senior Software Engineer with a solid background in developing and integrating technology solutions, involved in the entire software development lifecycle.",
          "I have worked across various industries, including telecommunications and financial services, holding key roles such as Backend Developer, IT Consultant, Technical Lead, and CTO.",
          "My drive is technology and innovation. Currently, I am focusing my professional growth on Artificial Intelligence and Machine Learning, seeking challenges that align purpose, impact, and growth.",
        ],
        looking_for: "Seeking:",
        search_goals: [
          "Challenging AI & Machine Learning projects",
          "Strategic roles with remote work opportunities",
          "Teams where critical thinking and innovation are paramount",
        ],
        why_collaborate: "Why collaborate with me?",
        collaboration_reasons: [
          "Technical expertise in development, integration, and leadership",
          "Ability to connect technology with business objectives",
          "Highly adaptable to remote work and results-oriented",
        ],
        connect_message:
          "Let's connect! I am open to opportunities and collaborations that create real impact.",
        years_experience: "Years of Experience",
        industries: "Industries",
        industries_list: {
          Telecomunicaciones: "Telecommunications",
          AFP: "Pension Funds",
          Gobierno: "Government",
          Retail: "Retail",
          HR: "Human Resources",
          Banca: "Banking",
          Aerolineas: "Airlines",
          IA: "Artificial Intelligence",
        },
        industries_modal_title: "Industries I have worked in",
      },
      experience: {
        title: "Work Experience",
        counter: "experiences",
        description: "Description",
        achievements: "Achievements",
        responsibilities: "Responsibilities",
        experiences: [
          {
            company: "InAdvance Consulting Group",
            position: "Senior Software Engineer",
            period: "2024 - Present",
            location: "Santiago, Chile",
            logo: "/exp/inadvance.jpeg",
            description:
              "Participated as a backend developer in a key technological migration project for a credit card processing platform. My focus was on designing and implementing modern microservices, ensuring quality, scalability, and standard compliance through Agile methodologies and a DevOps/DevSecOps culture. I also actively contributed to the technical evaluation of new talent for the team.",
            responsibilities: [
              "Active participation in the migration of critical financial systems.",
              "Analysis, requirements gathering, and technical design of scalable microservices.",
              "Development of microservices focusing on modern architecture, Agile methodologies, and DevOps/DevSecOps practices.",
              "Implementation of secure and efficient solutions, adhering to development best practices.",
              "Execution of unit, functional, performance, and architectural tests.",
              "Ensuring quality through code reviews with tools like Veracode and SonarQube.",
              "Participation in technical selection processes through candidate interviews.",
            ],
            achievements: [
              "Key role in microservices implementation and technological migration, promoting agility and development automation.",
              "Ensured solution performance and stability through exhaustive testing and continuous validation.",
              "Direct contribution to team strengthening through effective technical recruitment processes.",
            ],
          },
          {
            company: "Imagemaker",
            position: "Senior Software Engineer",
            period: "2023 - 2024",
            location: "Santiago, Chile",
            logo: "/exp/imagemaker.jpeg",
            description:
              "In this project, I acted as a technical consultant and backend developer, designing and implementing custom solutions for clients in the legal and corporate sector. A highlight was the applied research in artificial intelligence techniques for intelligent document processing. The focus was on software quality, microservice performance, and observability, using cutting-edge technologies throughout the development cycle.",
            responsibilities: [
              "External technical consulting for optimization and problem-solving in projects and services.",
              "Design and implementation of efficient client-oriented solutions, following development best practices.",
              "Research and development of Proofs of Concept (POCs) with AI techniques to process legal PDF documents.",
              "Development of microservices using Java (8, 11, 17) and Spring Boot (2 and 3).",
              "Code review with tools like Veracode, SonarQube, and PMD.",
              "Proactive service monitoring with ElasticSearch, Splunk, and Dynatrace.",
            ],
            achievements: [
              "Led an artificial intelligence POC to automate the reading and analysis of legal documents in PDF, generating innovation and added value for the client.",
              "Consolidated quality and monitoring best practices in critical backend solutions.",
              "Consistent delivery of high-performance solutions aligned with specific client needs.",
            ],
          },
          {
            company: "Falabella",
            position: "Technical Lead",
            period: "2022 - 2023",
            location: "Santiago, Chile",
            logo: "/exp/falabella.jpeg",
            description:
              "I led the development of a corporate attendance management system implemented across various business units of the Falabella group in Latin America. The project involved decomposing legacy systems, designing distributed and resilient solutions, and creating reusable components. I applied Domain-Driven Design (DDD) principles and event-driven architecture, collaborating closely with technical and business teams to ensure a solution aligned with strategic objectives.",
            responsibilities: [
              "Collaborative requirements analysis with the Product Owner and business stakeholders.",
              "Solution design adapted to technical regulations and modern architectural patterns like SAGA and DDD.",
              "Backlog management and prioritization of key project functionalities.",
              "Technical leadership of the development team, ensuring compliance with technical guidelines and best practices.",
              "Design and implementation of distributed, resilient, and reusable systems at an international level.",
              "Decomposition of legacy systems and decoupling of critical functionalities.",
              "API design using Swagger and OpenAPI, promoting standardization and clear documentation.",
              "Validation of technical decisions in conjunction with the Architecture team.",
              "Coordination with internal and external teams, acting as a bridge between development and business areas.",
            ],
            achievements: [
              "Successful implementation of a Corporate Attendance Management System deployed in multiple countries, optimizing shift management and indicator calculation.",
              "Transformation of legacy systems into modern solutions using event-driven architecture and Domain-Driven Design (DDD).",
              "Construction of reusable components aligned with the Falabella group's technological strategy.",
            ],
          },
          {
            company: "Neurogenesis IA Technologies",
            position: "CTO & Co-Founder | AI Engineer",
            period: "2021 - 2022",
            location: "Barcelona, Spain",
            logo: "/exp/neurogenesis.jpeg",
            description:
              "I led the development of Artificial Intelligence solutions focused on social and environmental impact, integrating image processing, NLP, and deep learning technologies. I migrated and managed cloud infrastructure with AWS, implementing scalable architectures to support Machine Learning and Deep Learning models. I designed computer vision models with CNN for ornamental fish classification and built a diversified dataset from real images and videos. I also oversaw multidisciplinary projects in AI, DevOps, UX/UI, and Industry 4.0, connecting academia with industry.",
            responsibilities: [
              "Applied research in AI technologies, focusing on Deep Learning and computer vision.",
              "Design and implementation of cloud architecture on AWS (EC2, S3, Lambda, etc.) for AI projects.",
              "Development of image classification models using convolutional neural networks (CNN).",
              "Construction of a proprietary dataset of images and videos for training classification models.",
              "Application of Natural Language Processing (NLP) techniques to analyze legal documents.",
              "Automation of tasks using chatbots based on Amazon Lex.",
              "Management of master's final projects in areas such as AI, DevOps, UX/UI, and Industry 4.0.",
            ],
            achievements: [
              "Successful migration of the company's infrastructure to AWS, optimizing performance and scalability.",
              "Creation of a robust visual dataset for ornamental fish classification with computer vision.",
              "Development of a Deep Learning model based on CNN for accurate species classification.",
              "Implementation of NLP solutions for automated information extraction from PDF documents.",
              "Delivery of a functional chatbot in production using Amazon Lex.",
              "Strategic alignment of technological innovation projects with environmental and social objectives.",
            ],
          },
          {
            company: "NTT DATA Europe & LATAM",
            position: "Senior Software Engineer",
            period: "2019 - 2021",
            location: "Santiago, Chile",
            logo: "/exp/nttdata.jpeg",
            description:
              "I actively participated in modernizing core systems of the financial ecosystem, addressing the migration of legacy platforms to modern architectures based on Java and Spring Boot. I developed secure applications with Spring Security and JWT, ensuring the protection of critical resources through robust authentication and authorization. I ensured the availability and scalability of the developed solutions, incorporating security best practices (OWASP, PCI) and automated testing. I acted as a technical reference in the analysis, design, and deployment of solutions, promoting quality and risk mitigation using tools like Kiuwan, Fortify, and SonarQube.",
            responsibilities: [
              "Analysis of technical and functional requirements for clients in the financial sector.",
              "Proactive identification of risks and vulnerabilities in existing solutions.",
              "Design of robust and secure IT strategies and solutions.",
              "Development of RESTful Web Services with Java 8 and Spring Boot 2.",
              "Implementation of authentication and authorization with Spring Security and JWT.",
              "Construction of highly available and fault-tolerant applications.",
              "Unit and integration testing with JUnit.",
              "Code review with tools like Kiuwan, Fortify, and SonarQube.",
              "Application of OWASP and PCI standards to ensure software quality.",
              "Deployment of components on Oracle Weblogic servers.",
              "Technical reference for the team and allied business areas.",
            ],
            achievements: [
              "Successful migration of Transbank's backoffice systems, improving efficiency and maintainability.",
              "Effective implementation of secure systems using Spring Security and JWT.",
              "Development of robust and scalable applications for high-data-flow environments.",
              "Risk reduction through static code analysis and secure development practices.",
              "Consolidation of the role as a technical reference in a regulated and highly demanding environment.",
            ],
          },
          {
            company: "Falabella",
            position: "Senior IT Analyst",
            period: "2015 - 2019",
            location: "Santiago, Chile",
            logo: "/exp/falabella.jpeg",
            description:
              "Responsible for the development and integration of corporate solutions for various business units of the Falabella Group. I led key projects aimed at improving operational efficiency and the internal user experience through personalized platforms developed in Java. Ensuring the continuity of processes and fostering an ethical organizational culture, I actively participated in modernizing legacy systems using patterns like MVC.",
            responsibilities: [
              "Management and development of requirements for internal business units.",
              "Construction of Java web solutions to integrate legacy systems.",
              "Application of the MVC design pattern in application development.",
              "Participation in the development and integration of Human Resources systems.",
              "Supervision of technical team assignments and external providers.",
              "Ensuring the operational continuity of corporate processes.",
              "Direct collaboration with different areas for the implementation of custom solutions.",
            ],
            achievements: [
              "Led the creation of a corporate platform for free time management, increasing employee autonomy and improving the work experience.",
              "Design and implementation of a platform for declaring conflicts of interest for senior executives, strengthening transparency and corporate ethics.",
              "Development of effective web solutions in Java that facilitated the integration of legacy systems, improving the interoperability and efficiency of the group's internal systems.",
            ],
          },
          {
            company: "NTT DATA Europe & LATAM",
            position: "Solutions Analyst",
            period: "2010 - 2014",
            location: "Santiago, Chile",
            logo: "/exp/nttdata.jpeg",
            description:
              "Responsible for migrating the private customer portal for Movistar Chile, developing front-end and back-end components on the IBM WebSphere platform. I contributed to improving customer experience through new functionalities, extensively documented the system, and ensured compliance with technical and quality standards.",
            responsibilities: [
              "Migration of the private customer portal for Movistar Chile.",
              "Development of front-end portlets (HTML, CSS, JavaScript, JSP) using WebSphere Portlet Factory.",
              "Deployment of portlets on IBM WebSphere Portal.",
              "Development of SOAP Web Services with Java for back-end, deployed on IBM WebSphere Application Server.",
              "Application of the DAO design pattern for data abstraction.",
              "Code quality evaluation with tools like SonarQube.",
              "Writing technical documentation and user guides to facilitate system maintenance and understanding.",
            ],
            achievements: [
              "Led the successful migration of the Movistar Chile customer portal on IBM WebSphere, incorporating new functionalities and significantly improving user experience.",
              "Increased customer autonomy through intuitive interfaces and integrated services, strengthening account management and contracted services.",
            ],
          },
        ],
      },
      education: {
        title: "Education",
        counter: "educations",
        educations: [
          {
            institution: "LIDR.co | Training great Tech Leaders",
            degree: "AI4DEVS",
            period: "2025 - Present",
            location: "Online, Spain",
            logo: "/edu/lidr.jpeg",
            concepts: [
              "Application of AI across all software development stages.",
              "Proficiency in tools like Github Copilot, ChatGPT, Cursor, and more.",
              "AI-powered code, documentation, and test generation.",
              "Improving productivity and code quality with AI.",
              "Final project with comprehensive AI application.",
              "Practical training with a professional and current focus.",
            ],
          },
          {
            institution: "thePower",
            degree: "Cybersecurity Bootcamp",
            period: "2025",
            location: "Online, Spain",
            logo: "/edu/thepower.jpeg",
            concepts: [
              "Fundamentals, threats, and attack vectors.",
              "Infrastructure, networks, systems, and scripting.",
              "Offensive security and secure development.",
              "Incident management, privacy, and cyber intelligence.",
            ],
          },
          {
            institution: "Hackio by thePower",
            degree: "AI Development Bootcamp",
            period: "2025",
            location: "Online, Spain",
            logo: "/edu/hackio.jpeg",
            concepts: [
              "Programming in Python for AI and ML.",
              "Data analysis with Pandas, NumPy, SQL, and MongoDB.",
              "Generative models and NLP with Hugging Face, OpenAI, and Google AI.",
              "Computer vision, audio, and multimodal models.",
              "Backend with Flask and FastAPI.",
              "Integration with AWS and Azure.",
              "Conversational agents and chains with LangChain.",
              "RAG technologies for augmented generation.",
            ],
          },
          {
            institution: "Universitat Politècnica de Catalunya",
            degree: "Master in Artificial Intelligence",
            period: "2020 - 2021",
            location: "Online, Spain",
            logo: "/edu/upc.jpeg",
            concepts: [
              "Key fundamentals of AI and associated technologies.",
              "Practical application of Machine Learning models and Neural Networks.",
              "Main frameworks for AI model development.",
              "Effective implementation of AI projects, covering all phases from development to management.",
              "Analysis of commercial AI applications and their impact.",
            ],
          },
          {
            institution: "Universidad de Santiago de Chile",
            degree: "Computer Science Engineering",
            period: "2012 - 2017",
            location: "Santiago, Chile",
            logo: "/edu/usach.jpeg",
            concepts: [
              "Basic Sciences: Proficiency in mathematics and physics.",
              "Engineering: Experience in applied mathematics, project, and systems management.",
              "Computer Science: Expertise in information technologies and communication networks.",
              "Humanities and Social Sciences: Knowledge in economics, organization, human behavior, ethics, and bilingualism.",
            ],
          },
          {
            institution: "Universidad de Santiago de Chile",
            degree: "Bachelor in Engineering Sciences",
            period: "2012 - 2015",
            location: "Santiago, Chile",
            logo: "/edu/usach.jpeg",
            concepts: [
              "Basic Sciences.",
              "Engineering Sciences.",
              "Human and Social Sciences.",
            ],
          },
          {
            institution: "INACAP",
            degree: "Computer Engineering",
            period: "2006 - 2010",
            location: "Santiago, Chile",
            logo: "/edu/inacap.jpeg",
            concepts: [
              "Creation of complete solutions supported by software engineering.",
              "Effective administration of technical, financial, and human resources.",
              "Strong leadership in technological and strategic projects.",
              "Adoption of emerging technologies with the aim of promoting digital transformation.",
            ],
          },
        ],
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
          cloud: "Cloud",
          ai: "AI",
          telecommunications: "Telecommunications",
          retail: "Retail"
        },
        projects: [
          {
            title: "Andes Online",
            description: "Strategic transformation of credit card processing.",
            contents: [
              "Migration project representing a significant strategic transformation in credit card processing, replacing the current platform with a more advanced solution provided by a new vendor.",
              "This fundamental change will not only ensure operational continuity but also enhance our technological and business capabilities related to credit cards.",
              "The project emphasizes constant innovation, improved operational efficiency, and strengthening our market position to provide customers with the best experience.",
              "This initiative is expected to mark the beginning of a new era of excellence and growth for the organization.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "AcuaMattic Dataset",
            description:
              "Real and diversified dataset for ornamental fish classification.",
            contents: [
              "The urgent need arises from the lack of specialized image banks for ornamental fish, which hinders research and development of technologies related to the preservation and care of these species. Furthermore, obtaining varied images and videos of specimens of the same species represents a significant challenge.",
              "To address this problem, the creation of a large and diversified image dataset of ornamental fish is proposed, which is fundamental for training classification models.",
              "Key phases: data collection using videos in controlled environments; processing using computer vision techniques for cropping and normalization; and creation of the final dataset with images of 30 different species. This approach avoids synthetic data, reduces overfitting, and improves the quality of the resulting dataset.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "AcuaMattic AI & Robotics (Prototype)",
            description:
              "Intelligent aquarium assistant based on computer vision and robotics.",
            contents: [
              "The goal of this project is to improve social well-being by creating a tool that facilitates the responsible and sustainable acquisition and installation of aquariums for users of all levels, whether experienced enthusiasts or newcomers to the hobby.",
              "It is a fish classifier model, meticulously trained with a vast collection of thousands of videos and images covering the most common ornamental species. This approach allows for highly personalized support for each user, adapted to the specific characteristics of the identified species in their aquarium.",
              "Once the system detects and recognizes the species in question, it communicates with a robot installed in the aquarium to collect precise data on current water parameters. Precise recommendations are then provided for optimal configuration of these parameters, contributing to aquarium maintenance and the well-being of the species inhabiting it.",
            ],
            externalLink:
              "https://www.elconfidencialdigital.com/monarquia/articulo/an/como-evitar-muerte-miles-millones-peces/20211105193248069486.html",
            githubRepo: "",
          },
          {
            title: "SPR (Personnel & Remuneration System)",
            description:
              "Corporate HR system for comprehensive personnel management of the Falabella Group.",
            contents: [
              "Corporate HR system, integrated into the Falabella Group's corporate intranet, addressing the needs of various Latin American countries, including Chile, Peru, Colombia, Argentina, and Uruguay.",
              "Essentially, this system forms the backbone of employee management, efficient personnel handling, and compensation administration for all Falabella Group companies, which include Falabella Retail, Falabella Financial, Sodimac, and Tottus.",
              "Key features: Payroll, Staffing, Store Operations, Finance, Logistics, Access Control.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "Movistar Online Channel",
            description:
              "Migration of the Movistar Chile portal to improve customer experience and autonomy.",
            contents: [
              "Migration of the private portal for Movistar Chile clients using IBM WebSphere, with front-end portlet development and back-end web services to expand functionalities and reduce manual processes.",
              "Key functionalities include detailed access to home and mobile plans, billing information, contracting additional services, secure online payments, and equipment renewal.",
              "This significant update optimizes the customer experience, increasing their autonomy and convenience in managing services and accounts.",
            ],
            externalLink:
              "https://identity.movistar.cl/login?_gl=1*gan1wb*_gcl_au*MTk4NDIyMjUxNi4xNjkzMDE1NDk5&_ga=2.21479423.531242504.1693015499-1259711125.1693015499",
            githubRepo: "",
          },
          {
            title: "Electronic Supervisor",
            description:
              "Electronic supervision solution to optimize the purchase process at Walmart Chile.",
            contents: [
              "An electronic point-of-sale (POS) supervision solution, designed to streamline the purchase process at Walmart Chile (including Líder, Express, and Super Bodega a cuenta).",
              "This application is specifically designed to remotely address customer requests when making payments at the checkout counter.",
              "It enables quick responses to price adjustments and product cancellations during the billing process. This tool is exclusively for authorized supermarket cashiers and supervisors.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "on-premise2cloud",
            description:
              "Migration of on-premise infrastructure to AWS to scale and modernize operations.",
            contents: [
              "The company migrated its operations to Amazon Web Services (AWS) to address key challenges such as scalability, massive data processing, and the development of artificial intelligence solutions.",
              "The project included the creation of an enterprise account in AWS, data migration, process automation, specialized dataset generation, and configuration of secure and flexible environments.",
              "Services like Amazon S3, EC2, and SageMaker were implemented, along with advanced IAM security policies, achieving a modern, secure infrastructure aligned with technological innovation objectives.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "Time & Attendance (T&A)",
            description:
              "Digital attendance system to improve management and work experience in multiple countries.",
            contents: [
              "Corporate Attendance Management System, designed to improve the overall employee experience in different countries (Chile, Peru, and Colombia) and various businesses of the Falabella group (including Falabella Retail, Sodimac, Tottus, Falabella Financial, Mall Plaza, Falabella.com, Falabella Corporate, and IKEA).",
              "The implementation of this cutting-edge technology aligns with current workforce attendance needs, emphasizing remote registration methods to promote digital channels (via apps and web), thereby reducing reliance on biometric devices. It also provides vital data for managing various associated performance indicators, aiding in attendance calculation and facilitating efficient shift management.",
              "Key objectives: ensure legal compliance, acquire data to optimize shifts, collect metrics such as absenteeism and overtime, and introduce remote registration. KPIs: employee satisfaction, overtime hours, absenteeism rates, disputed registrations, and time dedicated to monthly reconciliation.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "Faculty Engine",
            description:
              "Banking solution for automated legal analysis in PDF.",
            contents: [
              "This project involves the development of an advanced banking solution for the corporate sector with the main function of processing and analyzing legal authorization PDF documents in detail.",
              "This technology enables precise customization of products and services for clients by leveraging the information obtained.",
              "This solution results in a significant improvement in the optimization of existing business processes and greater efficiency in decision-making.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "S-Box",
            description:
              "An environment for analyzing videos related to smile episodes.",
            contents: [
              "The S-Box Project is an innovative solution in Affective Computing that uses Artificial Intelligence and Computer Vision to meticulously analyze videos with smiles.",
              "It includes advanced smile analysis, multimodal capture, precise automatic synchronization, intelligent smile filtering, sequence generation, and advanced visualization with AI.",
              "S-Box drives the understanding of human emotions in technological interactions, being a key tool for researchers and professionals in controlled experimental environments.",
            ],
            externalLink: "",
            githubRepo: "https://github.com/aandmaldonado/S-Box",
          },
          {
            title: "Cancellations 2.0",
            description:
              "Backoffice system for managing sales cancellations at Transbank.",
            contents: [
              "This system is part of Transbank's transactional backoffice, specifically designed to process sales cancellation requests.",
              "Cancellation requests: easily initiate individual cancellation requests and batch cancellations by uploading files. Cancellations can be total (covering the entire sale amount) or partial (for amounts less than the total sale value).",
              "Bulk cancellation log: conveniently retrieve a detailed history of all bulk cancellation requests made by a specific merchant.",
              "Audit report: easily review a complete log of cancellation requests, both individual and bulk, covering up to 1 year of historical data.",
            ],
            externalLink: "https://www.youtube.com/watch?v=Nu-q-zOvibA",
            githubRepo: "",
          },
        ],
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
          skills: "Spanish Native, English B1-B2",
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
          name: "Dayli Velasquez",
          position: "Agile Project Lead | Systems Engineer",
          company: "Falabella",
          relation: "Worked in the same team",
          text: "Great professional and person, it was a pleasure to be part of the team and great work!",
          date: "April 23, 2024",
          picture:
            "https://media.licdn.com/dms/image/v2/D4E03AQF21sbdzZSdTQ/profile-displayphoto-shrink_100_100/B4EZaigiBSHYAY-/0/1746483159674?e=1756944000&v=beta&t=fDqarkbJawqywb6EZK_x86FkBcFXmGxjqPthDBvJXJg",
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
            "https://media.licdn.com/dms/image/v2/C4E03AQE3XkDxYVDF1g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516818621856?e=1756944000&v=beta&t=Ap1Kc0XTn0cTyJg4pcVHKIlcGR_YPLM8RTPSFbT9Yeg",
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
            "https://media.licdn.com/dms/image/v2/C4D03AQHGnBPgayrhBQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1658272238383?e=1756944000&v=beta&t=TfLIPMGuDM2_NaHC5ma7L-Z421izwS2e5vatw4XpgtQ",
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
            "https://media.licdn.com/dms/image/v2/D4E03AQH2GNkpjW_KHQ/profile-displayphoto-shrink_100_100/B4EZYnmlisHMAU-/0/1744421150058?e=1756944000&v=beta&t=Qc9cVTyQdMvmatXaj_OjmLpqiiYGYoTujT87CoBxH3s",
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
            "https://media.licdn.com/dms/image/v2/D4E03AQFLX_nVnabnCg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701710053965?e=1756944000&v=beta&t=T7GXOjWbzTAaXSBFBt8Jpe2nFNC2ksULMy0jmNc7zSI",
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
            "https://media.licdn.com/dms/image/v2/D5603AQHBGa6DGAMp_A/profile-displayphoto-scale_100_100/B56Zgz4oWdHMAg-/0/1753217141536?e=1757548800&v=beta&t=FP70g-SvfmazI-NnDTzmgL769oZLff2kP_3ObgjeQvU",
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
            "https://media.licdn.com/dms/image/v2/D4E03AQGaE2lpLHK7tw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714493552503?e=1757548800&v=beta&t=1FTg-fSzddskYtaHms3MehxHwK_yv4iyiR3IvkkiSrk",
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
            "https://media.licdn.com/dms/image/v2/C4E03AQH6CRjUTLn-mQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1561497780876?e=1756944000&v=beta&t=KaX-6zilFH168oNoLfmC8g0fAy8wb3Fwi9XNr9Eunm4",
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
            "https://media.licdn.com/dms/image/v2/C4E03AQHjJYr9SZPBXA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1588953766292?e=1756944000&v=beta&t=YyxgQEcnERCkVJtd8Awj6792rZklRKAZfXTnHzZAOxc",
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
            "https://media.licdn.com/dms/image/v2/D4E03AQEeT_kLf3tMxA/profile-displayphoto-shrink_100_100/B4EZWmVn4DGwAY-/0/1742252441761?e=1757548800&v=beta&t=D78XAtO6IQwAKHD9hDZkGtQLhhKYofUcff7VkxBeyn4",
          linkedin: "https://www.linkedin.com/in/nellymanterola",
        },
      ],
      footer: {
        slogan: "Solving problems with technology",
        made_with: "AI-Powered",
        copyright: "© {year} almap[i]. All rights reserved",
      },
      chatbot: {
        name: "Álvaro Maldonado",
        online_status: "Online",
        welcome_message:
          "Hello! 👋 I'm Álvaro. I'm here to answer your questions about my professional experience, education, and other work-related topics. Feel free to ask! 😊",
        input_placeholder: "Type your message...",
      },
      contact: {
        title: "Let's Connect!",
        subtitle:
          "Interested in working together or have a proposal? Contact me!",
        ariaFront: "Business card: front",
        ariaBack: "Business card: back",
        front: {
          name: "Álvaro Andrés Maldonado Pinto",
          role: "Senior Software Engineer | AI-Powered Dev | Product Engineer",
        },
        back: {
          email: "readme.md@almapi.dev",
          whatsapp: "+34 641 96 23 96",
          linkedin: "https://www.linkedin.com/in/almapidev/",
          city: "Gandia, Spain",
        },
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
        title: "¡Hola Mundo! Soy Álvaro Maldonado",
        subtitle: "Senior Software Engineer | AI-Powered Dev | Product Engineer",
        download_cv: "Descargar CV",
        customize_cv: "Personalizar CV",
        select_sections:
          "Selecciona las secciones que quieres incluir en el CV:",
        sections_selected: "secciones seleccionadas",
        generating: "Generando...",
        download: "Descargar CV",
        cancel: "Cancelar",
        select_all: "Seleccionar todas",
        deselect_all: "Deseleccionar todas",
        select_all_sections: "Seleccionar todas las secciones",
        contact_button: "Contáctame",
      },
      about: {
        location: "Gandía, España",
        title: "Sobre Mí",
        descriptions: [
          "Soy Ingeniero de Software Senior con una trayectoria consolidada en el desarrollo e integración de soluciones tecnológicas, participando en todo el ciclo de vida del software.",
          "He trabajado en diversas industrias como telecomunicaciones, servicios financieros, entre otros, asumiendo roles clave: desde Desarrollador Backend y Consultor TI, hasta Líder Técnico y CTO.",
          "Mi motor es la tecnología y la innovación. Hoy, enfoco mi evolución profesional hacia la Inteligencia Artificial y Machine Learning, en busca de desafíos que conecten propósito, impacto y crecimiento.",
        ],
        looking_for: "Buscando:",
        search_goals: [
          "Proyectos desafiantes en IA & Machine Learning",
          "Roles estratégicos con posibilidad de trabajo remoto",
          "Equipos donde el pensamiento crítico y la innovación sean clave",
        ],
        why_collaborate: "¿Por qué colaborar conmigo?",
        collaboration_reasons: [
          "Experiencia técnica en desarrollo, integración y liderazgo",
          "Capacidad de conectar tecnología con objetivos de negocio",
          "Alta adaptabilidad al trabajo remoto y orientación a resultados",
        ],
        connect_message:
          "¡Conectemos! Estoy abierto a oportunidades y colaboraciones que generen impacto real.",
        years_experience: "Años de experiencia",
        industries: "Industrias",
        industries_list: {
          Telecomunicaciones: "Telecomunicaciones",
          AFP: "AFP",
          Gobierno: "Gobierno",
          Retail: "Retail",
          HR: "Recursos Humanos",
          Banca: "Banca",
          Aerolineas: "Aerolíneas",
          IA: "Inteligencia Artificial",
        },
        industries_modal_title: "Industrias en las que he trabajado",
      },
      experience: {
        title: "Experiencia Laboral",
        counter: "experiencias",
        description: "Descripción",
        achievements: "Logros",
        responsibilities: "Responsabilidades",
        experiences: [
          {
            company: "InAdvance Consulting Group",
            position: "Senior Software Engineer",
            period: "2024 - Presente",
            location: "Santiago, Chile",
            logo: "/exp/inadvance.jpeg",
            description:
              "Participé como desarrollador backend en un proyecto clave de migración tecnológica para una plataforma de procesamiento de tarjetas de crédito. Mi enfoque estuvo en el diseño e implementación de microservicios modernos, asegurando calidad, escalabilidad y cumplimiento de estándares mediante la aplicación de metodologías ágiles y cultura DevOps/DevSecOps. Además, contribuí activamente en la evaluación técnica de nuevos talentos para el equipo.",
            responsibilities: [
              "Participación activa en la migración de sistemas críticos financieros.",
              "Análisis, levantamiento y diseño técnico de microservicios escalables.",
              "Desarrollo de microservicios con enfoque en arquitectura moderna, metodologías ágiles y prácticas DevOps/DevSecOps.",
              "Implementación de soluciones seguras y eficientes, siguiendo buenas prácticas de desarrollo.",
              "Ejecución de pruebas unitarias, funcionales, de rendimiento y arquitectura.",
              "Aseguramiento de calidad mediante revisiones de código con herramientas como Veracode y SonarQube.",
              "Participación en procesos de selección técnica mediante entrevistas a candidatos.",
            ],
            achievements: [
              "Rol clave en la implementación de microservicios y migración tecnológica, promoviendo la agilidad y automatización del desarrollo.",
              "Garantía del rendimiento y estabilidad de las soluciones a través de pruebas exhaustivas y validaciones continuas.",
              "Contribución directa al fortalecimiento del equipo mediante procesos efectivos de reclutamiento técnico.",
            ],
          },
          {
            company: "Imagemaker",
            position: "Senior Software Engineer",
            period: "2023 - 2024",
            location: "Santiago, Chile",
            logo: "/exp/imagemaker.jpeg",
            description:
              "En este proyecto actué como consultor técnico y desarrollador backend, diseñando e implementando soluciones a medida para clientes del sector legal y corporativo. Destaca la investigación aplicada en técnicas de inteligencia artificial para el procesamiento inteligente de documentos. El enfoque estuvo en la calidad del software, rendimiento de los microservicios y observabilidad, utilizando tecnologías de punta en todo el ciclo de desarrollo.",
            responsibilities: [
              "Asesoría técnica externa para optimización y solución de problemas en proyectos y servicios.",
              "Diseño e implementación de soluciones eficientes orientadas al cliente, con buenas prácticas de desarrollo.",
              "Investigación y desarrollo de pruebas de concepto (POC) con técnicas de IA para procesar documentos PDF con aplicaciones legales.",
              "Desarrollo de microservicios utilizando Java (8, 11, 17) y Spring Boot (2 y 3).",
              "Revisión de código fuente con herramientas como Veracode, SonarQube y PMD.",
              "Monitoreo proactivo de servicios con ElasticSearch, Splunk y Dynatrace.",
            ],
            achievements: [
              "Lideré una POC de inteligencia artificial para automatizar la lectura y análisis de documentos legales en PDF, generando innovación y valor añadido para el cliente.",
              "Consolidación de buenas prácticas de calidad y monitoreo en soluciones backend críticas.",
              "Entregas consistentes de alto rendimiento alineadas con las necesidades específicas del cliente.",
            ],
          },
          {
            company: "Falabella",
            position: "Líder Técnico",
            period: "2022 - 2023",
            location: "Santiago, Chile",
            logo: "/exp/falabella.jpeg",
            description:
              "Lideré el desarrollo de un sistema corporativo de gestión de asistencia implementado en diversas unidades de negocio del grupo Falabella en América Latina. El proyecto involucró la descomposición de sistemas legados, el diseño de soluciones distribuidas y resilientes, y la creación de componentes reutilizables. Apliqué principios de Domain-Driven Design (DDD) y arquitectura basada en eventos, colaborando estrechamente con equipos técnicos y de negocio para asegurar una solución alineada con los objetivos estratégicos.",
            responsibilities: [
              "Análisis colaborativo de requerimientos junto al Product Owner y stakeholders del negocio.",
              "Diseño de soluciones adaptadas a normativas técnicas y patrones de arquitectura moderna como SAGA y DDD.",
              "Gestión del backlog y priorización de funcionalidades clave del proyecto.",
              "Liderazgo técnico del equipo de desarrollo, asegurando el cumplimiento de directrices técnicas y buenas prácticas.",
              "Diseño e implementación de sistemas distribuidos, resilientes y reutilizables a nivel internacional.",
              "Descomposición de sistemas legados y desacoplamiento de funcionalidades críticas.",
              "Diseño de APIs utilizando Swagger y OpenAPI, fomentando la estandarización y documentación clara.",
              "Validación de decisiones técnicas en conjunto con el equipo de Arquitectura.",
              "Coordinación con equipos internos y externos, actuando como puente entre desarrollo y áreas de negocio.",
            ],
            achievements: [
              "Implementación exitosa de un Sistema Corporativo de Gestión de Asistencia desplegado en múltiples países, optimizando la gestión de turnos y cálculo de indicadores.",
              "Transformación de sistemas legados en soluciones modernas mediante arquitectura basada en eventos y diseño orientado al dominio (DDD).",
              "Construcción de componentes reutilizables y alineados con la estrategia tecnológica del grupo Falabella.",
            ],
          },
          {
            company: "Neurogenesis IA Technologies",
            position: "CTO & Co-Fundador | Ingeniero de IA",
            period: "2021 - 2022",
            location: "Barcelona, España",
            logo: "/exp/neurogenesis.jpeg",
            description:
              "Lideré el desarrollo de soluciones de Inteligencia Artificial orientadas al impacto social y medioambiental, integrando tecnologías de procesamiento de imágenes, NLP y aprendizaje profundo.",
            responsibilities: [
              "Investigación aplicada en tecnologías de IA, con foco en Deep Learning y visión por computador.",
              "Diseño e implementación de arquitectura cloud en AWS (EC2, S3, Lambda, etc.) para proyectos de IA.",
              "Desarrollo de modelos de clasificación de imágenes utilizando redes neuronales convolucionales (CNN).",
              "Construcción de un dataset propio de imágenes y videos para entrenamiento de modelos de clasificación.",
              "Aplicación de técnicas de procesamiento de lenguaje natural (NLP) para analizar documentos legales.",
              "Automatización de tareas mediante chatbots basados en Amazon Lex.",
              "Gestión de proyectos de fin de máster en áreas como IA, DevOps, UX/UI e Industria 4.0.",
            ],
            achievements: [
              "Migración exitosa de la infraestructura de la compañía a AWS, optimizando rendimiento y escalabilidad.",
              "Creación de un dataset visual robusto para clasificación de peces ornamentales con visión artificial.",
              "Desarrollo de un modelo de Deep Learning basado en CNN para clasificación precisa de especies.",
              "Implementación de soluciones NLP para extracción automatizada de información desde documentos PDF.",
              "Entrega de un chatbot funcional en producción usando Amazon Lex.",
              "Alineación estratégica de proyectos de innovación tecnológica con objetivos medioambientales y sociales.",
            ],
          },
          {
            company: "NTT DATA Europe & LATAM",
            position: "Senior Software Engineer",
            period: "2019 - 2021",
            location: "Santiago, Chile",
            logo: "/exp/nttdata.jpeg",
            description:
              "Participé activamente en la modernización de sistemas core del ecosistema financiero, abordando la migración de plataformas legacy hacia arquitecturas modernas basadas en Java y Spring Boot.",
            responsibilities: [
              "Análisis de requerimientos técnicos y funcionales para clientes del sector financiero.",
              "Identificación proactiva de riesgos y vulnerabilidades en soluciones existentes.",
              "Diseño de estrategias y soluciones informáticas robustas y seguras.",
              "Desarrollo de Web Services Restful con Java 8 y Spring Boot 2.",
              "Implementación de autenticación y autorización con Spring Security y JWT.",
              "Construcción de aplicaciones con alta disponibilidad y tolerancia a fallos.",
              "Pruebas unitarias y de integración con JUnit.",
              "Revisión de código con herramientas como Kiuwan, Fortify y SonarQube.",
              "Aplicación de estándares OWASP y PCI para asegurar la calidad del software.",
              "Despliegue de componentes en servidores Oracle Weblogic.",
              "Referencia técnica para el equipo y áreas de negocio aliadas.",
            ],
            achievements: [
              "Migración exitosa de los sistemas de backoffice de Transbank, mejorando eficiencia y mantenibilidad.",
              "Implementación efectiva de sistemas seguros mediante Spring Security y JWT.",
              "Desarrollo de aplicaciones robustas y escalables para entornos con alto flujo de datos.",
              "Reducción de riesgos mediante análisis estático de código y prácticas seguras de desarrollo.",
              "Consolidación del rol como referente técnico en un entorno regulado y de alta exigencia.",
            ],
          },
          {
            company: "Falabella",
            position: "Analista TI Senior",
            period: "2015 - 2019",
            location: "Santiago, Chile",
            logo: "/exp/falabella.jpeg",
            description:
              "Responsable del desarrollo e integración de soluciones corporativas para diversas unidades de negocio del Grupo Falabella. Lideré proyectos clave orientados a mejorar la eficiencia operativa y la experiencia del usuario interno mediante plataformas personalizadas desarrolladas en Java. Garantizando la continuidad de los procesos y fomentando una cultura organizacional ética, participé activamente en la modernización de los sistemas legados mediante patrones como MVC.",
            responsibilities: [
              "Funciones destacadas",
              "Gestión y desarrollo de requerimientos para unidades de negocio internas.",
              "Construcción de soluciones web en Java para integrar sistemas legados.",
              "Aplicación del patrón de diseño MVC en el desarrollo de aplicaciones.",
              "Participación en el desarrollo e integración de sistemas de Recursos Humanos.",
              "Supervisión de asignaciones de equipo técnico y proveedores externos.",
              "Aseguramiento de la continuidad operativa de los procesos corporativos.",
              "Colaboración directa con distintas áreas para la implementación de soluciones a medida.",
            ],
            achievements: [
              "Liderazgo en la creación de una plataforma corporativa para la gestión de tiempo libre, aumentando la autonomía de los empleados y mejorando la experiencia laboral.",
              "Diseño e implementación de una plataforma para la declaración de conflictos de interés dirigida a altos ejecutivos, fortaleciendo la transparencia y la ética corporativa.",
              "Desarrollo de soluciones web efectivas en Java que facilitaron la integración de sistemas legados, mejorando la interoperabilidad y eficiencia de los sistemas internos del grupo.",
            ],
          },
          {
            company: "NTT DATA Europe & LATAM",
            position: "Analista de Soluciones",
            period: "2010 - 2014",
            location: "Santiago, Chile",
            logo: "/exp/nttdata.jpeg",
            description:
              "Responsable de la migración del portal privado de clientes de Movistar Chile, desarrollando componentes front-end y back-end sobre la plataforma IBM WebSphere. Aporté a la mejora de la experiencia del cliente mediante nuevas funcionalidades, documenté ampliamente el sistema y aseguré el cumplimiento de estándares técnicos y de calidad.",
            responsibilities: [
              "Funciones destacadas",
              "Migración del portal privado de clientes para Movistar Chile.",
              "Desarrollo de portlets front-end (HTML, CSS, JavaScript, JSP) utilizando WebSphere Portlet Factory.",
              "Despliegue de portlets en IBM WebSphere Portal.",
              "Desarrollo de Web Services SOAP con Java para back-end, desplegados en IBM WebSphere Application Server.",
              "Aplicación del patrón de diseño DAO para la abstracción de datos.",
              "Evaluación de la calidad del código con herramientas como SonarQube.",
              "Redacción de documentación técnica y guías de usuario para facilitar el mantenimiento y entendimiento del sistema.",
              "Análisis de requerimientos del cliente y diseño de estrategias de desarrollo acordes.",
            ],
            achievements: [
              "Lideré la migración exitosa del portal de clientes Movistar Chile sobre IBM WebSphere, incorporando nuevas funcionalidades y mejorando notablemente la experiencia de usuario.",
              "Incrementé la autonomía del cliente mediante interfaces intuitivas y servicios integrados, fortaleciendo la gestión de cuentas y servicios contratados.",
            ],
          },
        ],
      },
      education: {
        title: "Educación",
        counter: "formaciones",
        educations: [
          {
            institution: "LIDR.co | Entrenamos grandes líderes en tech",
            degree: "AI4DEVS",
            period: "2025 - Presente",
            location: "Online, España",
            logo: "/edu/lidr.jpeg",
            concepts: [
              "Aplicación de IA en todas las etapas del desarrollo de software.",
              "Dominio de herramientas como Github Copilot, ChatGPT, Cursor y más.",
              "Generación de código, documentación y tests con IA.",
              "Mejora de productividad y calidad del código con IA.",
              "Proyecto final aplicando IA de forma integral.",
              "Formación práctica con enfoque profesional y actual.",
            ],
          },
          {
            institution: "thePower",
            degree: "Bootcamp en Ciberseguridad",
            period: "2025",
            location: "Online, España",
            logo: "/edu/thepower.jpeg",
            concepts: [
              "Fundamentos, amenazas y vectores de ataque.",
              "Infraestructura, redes, sistemas y scripting.",
              "Seguridad ofensiva y desarrollo seguro.",
              "Gestión de incidentes, privacidad y ciberinteligencia.",
              "Enfoque en empleabilidad y orientación profesional.",
            ],
          },
          {
            institution: "Hackio by thePower",
            degree: "Bootcamp en Desarrollo de IA",
            period: "2025",
            location: "Online, España",
            logo: "/edu/hackio.jpeg",
            concepts: [
              "Programación en Python para IA y ML.",
              "Análisis de datos con Pandas, NumPy, SQL y MongoDB.",
              "Modelos generativos y NLP con Hugging Face, OpenAI y Google AI.",
              "Visión por computador, audio y modelos multimodales.",
              "Backend con Flask y FastAPI.",
              "Integración en AWS y Azure.",
              "Agentes conversacionales y cadenas con LangChain.",
              "Tecnologías RAG para generación aumentada.",
            ],
          },
          {
            institution: "Universitat Politècnica de Catalunya",
            degree: "Máster en Inteligencia Artificial",
            period: "2020 - 2021",
            location: "Barcelona, España",
            logo: "/edu/upc.jpeg",
            concepts: [
              "Fundamentos claves de IA y tecnologías asociadas.",
              "Aplicación práctica de modelos de Machine Learning y Redes Neuronales.",
              "Principales frameworks para desarrollo de modelos de IA.",
              "Implementación efectiva de proyectos de IA, cubriendo todas las fases desde desarrollo a gestión.",
              "Análisis de aplicaciones comerciales de IA y su impacto.",
            ],
          },
          {
            institution: "Universidad de Santiago de Chile",
            degree: "Ingeniería Civil en Informática",
            period: "2012 - 2017",
            location: "Santiago, Chile",
            logo: "/edu/usach.jpeg",
            concepts: [
              "Ciencias Básicas: Dominio en matemáticas y física.",
              "Ingeniería: Experiencia en matemáticas aplicadas, gestión de proyectos y sistemas.",
              "Informática: Experticia en tecnologías informáticas y redes de comunicación.",
              "Humanidades y Sociales: Conocimiento en economía, organización, comportamiento humano, ética y bilingüismo.",
            ],
          },
          {
            institution: "Universidad de Santiago de Chile",
            degree: "Licenciatura en Ciencias de la Ingeniería",
            period: "2012 - 2015",
            location: "Santiago, Chile",
            logo: "/edu/usach.jpeg",
            concepts: [
              "Ciencias Básicas.",
              "Ciencias de la Ingeniería.",
              "Ciencias Humanas y Sociales.",
            ],
          },
          {
            institution: "INACAP",
            degree: "Ingenería en Informática",
            period: "2006 - 2010",
            location: "Santiago, Chile",
            logo: "/edu/inacap.jpeg",
            concepts: [
              "Creación de soluciones completas apoyadas en ingeniería de software.",
              "Administración eficaz de recursos técnicos, financieros y humanos.",
              "Liderazgo fuerte en proyectos tecnológicos y estratégicos.",
              "Adopción de tecnologías emergentes con el objetivo de promover la transformación digital.",
            ],
          },
        ],
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
          cloud: "Cloud",
          ai: "IA",
          telecommunications: "Telecomunicaciones",
          retail: "Retail"
        },
        projects: [
          {
            title: "Andes Online",
            description:
              "Transformación estratégica del procesamiento de tarjetas de crédito.",
            contents: [
              "Proyecto migratorio que representa una importante transformación estratégica en el procesamiento de tarjetas de crédito, sustituyendo la plataforma actual por una solución más avanzada proporcionada por un nuevo proveedor.",
              "Este cambio fundamental no sólo asegurará la continuidad operacional, sino que también mejorará nuestras capacidades tecnológicas y de negocio relacionadas con las tarjetas de crédito.",
              "El proyecto enfatiza la innovación constante, la mejora en la eficacia operativa y el fortalecimiento de nuestra posición en el mercado para proporcionar a los clientes la mejor experiencia.",
              "Se espera que esta iniciativa marque el comienzo de una nueva era de excelencia y crecimiento para la organización.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "AcuaMattic Dataset",
            description:
              "Conjunto de datos reales y diversificados para clasificación de peces ornamentales.",
            contents: [
              "La necesidad imperante surge por la falta de bancos de imágenes especializados en peces ornamentales, lo que representa un obstáculo para la investigación y desarrollo de tecnologías relacionadas con la preservación y cuidado de estas especies. Además, obtener imágenes y videos variados de ejemplares de una misma especie representa un desafío importante.",
              "Para abordar este problema se propone la creación de un amplio y diversificado conjunto de datos de imágenes de peces ornamentales, fundamental para el entrenamiento de modelos de clasificación.",
              "Fases clave: recogida de datos mediante vídeos en entornos controlados; procesamiento usando técnicas de visión artificial para recorte y normalización; y creación del dataset final con imágenes de 30 especies diferentes. Este enfoque evita datos sintéticos, reduce el sobreajuste y mejora la calidad del conjunto resultante.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "AcuaMattic IA & Robótica (Prototipo)",
            description:
              "Asistente inteligente para acuarios basado en visión artificial y robótica.",
            contents: [
              "El objetivo de este proyecto es mejorar el bienestar social mediante la creación de una herramienta que facilite la adquisición e instalación responsable y sostenible de acuarios para usuarios de todos los niveles, ya sean entusiastas experimentados o recién llegados a la afición.",
              "Es un modelo clasificador de peces, meticulosamente entrenado con una vasta colección de miles de videos e imágenes que cubren las especies ornamentales más comunes. Este enfoque permite ofrecer un soporte altamente personalizado a cada usuario, adaptado a las características específicas de las especies identificadas en su acuario.",
              "Una vez que el sistema detecta y reconoce la especie en cuestión, se comunica con un robot instalado en el acuario para recopilar datos precisos sobre los parámetros actuales del agua. A continuación se proporcionan recomendaciones precisas para la configuración óptima de estos parámetros, lo que contribuye al mantenimiento del acuario y al bienestar de las especies que lo habitan.",
            ],
            externalLink:
              "https://www.elconfidencialdigital.com/monarquia/articulo/an/como-evitar-muerte-miles-millones-peces/20211105193248069486.html",
            githubRepo: "",
          },
          {
            title: "SPR (Sistema de Personal & Remuneraciones)",
            description:
              "Sistema corporativo de RRHH para la gestión integral del personal del Grupo Falabella.",
            contents: [
              "Sistema de RRHH corporativo, integrado a la intranet corporativa del Grupo Falabella, atendiendo las necesidades de diversos países de América Latina, incluidos Chile, Perú, Colombia, Argentina y Uruguay.",
              "En esencia, este sistema constituye la columna vertebral de la gestión de empleados, el manejo eficiente del personal y la administración de compensaciones para todas las empresas del Grupo Falabella, que engloba a Falabella Retail, Falabella Financial, Sodimac y Tottus.",
              "Características clave: Nómina, Dotación de personal, Operaciones de tienda, Finanzas, Logística, Control de acceso.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "Movistar Canal Online",
            description:
              "Migración del portal Movistar Chile para mejorar la experiencia y autonomía del cliente.",
            contents: [
              "Migración del portal privado para clientes de Movistar Chile utilizando IBM WebSphere, con desarrollo front-end de portlets y back-end de servicios web para ampliar funcionalidades y reducir procesos manuales.",
              "Key functionalities include detailed access to home and mobile plans, billing information, contracting additional services, pagos seguros en línea y renovación de equipos.",
              "Esta actualización significativa optimiza la experiencia del cliente, aumentando su autonomía y comodidad en la gestión de servicios y cuentas.",
            ],
            externalLink:
              "https://identity.movistar.cl/login?_gl=1*gan1wb*_gcl_au*MTk4NDIyMjUxNi4xNjkzMDE1NDk5&_ga=2.21479423.531242504.1693015499-1259711125.1693015499",
            githubRepo: "",
          },
          {
            title: "Electronic Supervisor",
            description:
              "Solución de supervisión electrónica para optimizar el proceso de compra en Walmart Chile.",
            contents: [
              "Una solución de supervisión electrónica de puntos de venta (POS), diseñada para agilizar el proceso de compra en Walmart Chile (incluidos Líder, Express y Super Bodega a cuenta).",
              "Esta aplicación está diseñada específicamente para atender las solicitudes de los clientes de forma remota cuando realizan pagos en el mostrador de caja.",
              "Permite respuestas rápidas a ajustes de precios y cancelaciones de productos durante el proceso de facturación. Esta herramienta está destinada exclusivamente a cajeros y supervisores de supermercados autorizados.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "on-premise2cloud",
            description:
              "Migración de infraestructura on-premise a AWS para escalar y modernizar operaciones.",
            contents: [
              "La empresa migró sus operaciones a Amazon Web Services (AWS) para abordar desafíos clave como la escalabilidad, el procesamiento masivo de datos y el desarrollo de soluciones de inteligencia artificial.",
              "El proyecto incluyó la creación de una cuenta empresarial en AWS, migración de datos, automatización de procesos, generación de datasets especializados y configuración de entornos seguros y flexibles.",
              "Se implementaron servicios como Amazon S3, EC2 y SageMaker, junto con políticas avanzadas de seguridad IAM, logrando una infraestructura moderna, segura y alineada con los objetivos de innovación tecnológica.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "Time & Attendance (T&A)",
            description:
              "Sistema de asistencia digital para mejorar la gestión y experiencia laboral en múltiples países.",
            contents: [
              "Sistema de Gestión de Asistencia Corporativa, diseñado para mejorar la experiencia general de los empleados en diferentes países (Chile, Perú y Colombia) y diversos negocios del grupo Falabella (incluyendo Falabella Retail, Sodimac, Tottus, Falabella Financial, Mall Plaza, Falabella.com, Corporativo Falabella e IKEA).",
              "La implementación de esta tecnología de vanguardia se alinea con las necesidades actuales de asistencia de la fuerza laboral, enfatizando los métodos de registro remoto para promover canales digitales (a través de aplicaciones y web), reduciendo así la dependencia de dispositivos biométricos. También proporciona datos vitales para la gestión de varios indicadores de desempeño asociados, ayudando en el cálculo de asistencia y facilitando una gestión eficiente de los turnos.",
              "Objetivos claves: velar por el cumplimiento legal, adquirir datos para optimizar turnos, recopilar métricas como ausentismo y horas extras, e introducir el registro remoto. KPIs: satisfacción de los empleados, horas extras, tasas de absentismo, registros en disputa y tiempo dedicado a conciliación mensual.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "Motor de Facultades",
            description:
              "Solución bancaria para análisis legal automatizado en PDF.",
            contents: [
              "Este proyecto consiste en el desarrollo de una avanzada solución bancaria para el sector corporativo con la función principal de procesar y analizar detalladamente documentos PDF con autorizaciones legales.",
              "Esta tecnología permite la personalización precisa de productos y servicios para los clientes, al aprovechar la información obtenida.",
              "Esta solución resulta en una mejora significativa en la optimización de procesos comerciales existentes y una mayor eficiencia en la toma de decisiones.",
            ],
            externalLink: "",
            githubRepo: "",
          },
          {
            title: "S-Box",
            description:
              "Un entorno para analizar vídeos relacionados con episodios de sonrisas.",
            contents: [
              "El Proyecto S-Box es una solución innovadora en Computación Afectiva que utiliza Inteligencia Artificial y Visión por Computadora para analizar minuciosamente videos con sonrisas.",
              "Incluye análisis avanzado de sonrisas, captura multimodal, sincronización automática precisa, filtrado inteligente de sonrisas, generación de secuencias y visualización avanzada con IA.",
              "S-Box impulsa la comprensión de emociones humanas en interacciones tecnológicas, siendo una herramienta clave para investigadores y profesionales en entornos experimentales controlados.",
            ],
            externalLink: "",
            githubRepo: "https://github.com/aandmaldonado/S-Box",
          },
          {
            title: "Anulaciones 2.0",
            description:
              "Sistema de backoffice para gestión de cancelaciones de ventas en Transbank.",
            contents: [
              "Este sistema es parte del backoffice transaccional de Transbank, diseñado específicamente para procesar solicitudes de cancelación de ventas.",
              "Solicitudes de cancelación: inicie sin esfuerzo solicitudes de cancelación individuales y cancelaciones por lotes cargando archivos. Las cancelaciones pueden ser totales (cubriendo todo el importe de la venta) o parciales (por importes inferiores al valor total de la venta).",
              "Registro de cancelaciones masivas: recupere fácilmente un historial detallado de todas las solicitudes de cancelación masiva realizadas por un comerciante específico.",
              "Informe de auditoría: revise cómodamente un registro completo de solicitudes de cancelación, tanto individuales como masivas, que abarca hasta 1 año de datos históricos.",
            ],
            externalLink: "https://www.youtube.com/watch?v=Nu-q-zOvibA",
            githubRepo: "",
          },
        ],
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
          skills: "Español Nativo, Inglés B1-B2",
        },
        api_design: {
          title: "API Design",
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
          title: "Database",
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
          name: "Dayli Velasquez",
          position: "Agile Project Lead | Systems Engineer",
          company: "Falabella",
          relation: "Trabajó en el mismo equipo",
          text: "Gran profesional y persona, todo un gusto haber formado equipo y buen trabajo!",
          date: "23 de abril de 2024",
          picture:
            "https://media.licdn.com/dms/image/v2/D4E03AQF21sbdzZSdTQ/profile-displayphoto-shrink_100_100/B4EZaigiBSHYAY-/0/1746483159674?e=1756944000&v=beta&t=fDqarkbJawqywb6EZK_x86FkBcFXmGxjqPthDBvJXJg",
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
            "https://media.licdn.com/dms/image/v2/C4E03AQE3XkDxYVDF1g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516818621856?e=1756944000&v=beta&t=Ap1Kc0XTn0cTyJg4pcVHKIlcGR_YPLM8RTPSFbT9Yeg",
          linkedin: "https://www.linkedin.com/in/denys-lopez",
        },
        {
          name: "Rodrigo Parra Cárcamo",
          position: "Senior Manager Cloud Engineering",
          company: "NTT DATA Europe & LATAM",
          relation: "Supervisaba directamente a Álvaro",
          text: "Álvaro es un excelente profesional y una gran persona. Tiene un buen nivel técnico, muy proactivo y dedicado, capaz de investigar y resolver problemas complejos. Trabaja muy bien en equipo, contribuyendo siempre a mantener un buen ambiente. Es muy responsable y comprometido, lo recomiendo 100%.",
          date: "2 de enero de 2024",
          picture:
            "https://media.licdn.com/dms/image/v2/C4E03AQHQqh74lznY5Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1565176798787?e=1756944000&v=beta&t=fqgzMD3wDsExSZjuNU5_u2drnR-unmwc33KfS7XGezE",
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
            "https://media.licdn.com/dms/image/v2/C4D03AQHGnBPgayrhBQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1658272238383?e=1756944000&v=beta&t=TfLIPMGuDM2_NaHC5ma7L-Z421izwS2e5vatw4XpgtQ",
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
          picture:
            "https://media.licdn.com/dms/image/v2/D4E03AQH2GNkpjW_KHQ/profile-displayphoto-shrink_100_100/B4EZYnmlisHMAU-/0/1744421150058?e=1756944000&v=beta&t=Qc9cVTyQdMvmatXaj_OjmLpqiiYGYoTujT87CoBxH3s",
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
            "https://media.licdn.com/dms/image/v2/D4E03AQFLX_nVnabnCg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701710053965?e=1756944000&v=beta&t=T7GXOjWbzTAaXSBFBt8Jpe2nFNC2ksULMy0jmNc7zSI",
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
            "https://media.licdn.com/dms/image/v2/D5603AQHBGa6DGAMp_A/profile-displayphoto-scale_100_100/B56Zgz4oWdHMAg-/0/1753217141536?e=1757548800&v=beta&t=FP70g-SvfmazI-NnDTzmgL769oZLff2kP_3ObgjeQvU",
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
            "https://media.licdn.com/dms/image/v2/D4E03AQGaE2lpLHK7tw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714493552503?e=1757548800&v=beta&t=1FTg-fSzddskYtaHms3MehxHwK_yv4iyiR3IvkkiSrk",
          linkedin: "https://www.linkedin.com/in/bruno-ivan-aguilera-silva-808b61166/",
        },
        {
          name: "Pablo Puelma Hernández",
          position: "Senior Project & Service Leader",
          company: "NTT DATA Europe & LATAM",
          relation: "Direct supervisor of Álvaro",
          text: "Álvaro es una persona con un perfil técnico muy completo, capaz de resolver problemas complejos de forma rápida y con calidad, orientado al logro y con un gran compromiso por su trabajo y compañeros. En lo personal, es muy responsable, confiable y un gran compañero de equipo, siempre dispuesto a enseñar a los demás y a apoyarlos cuando lo necesitan y está siempre dispuesto a dar un poco más para lograr las metas.",
          date: "9 de agosto de 2023",
          picture:
            "https://media.licdn.com/dms/image/v2/C4E03AQH6CRjUTLn-mQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1561497780876?e=1756944000&v=beta&t=KaX-6zilFH168oNoLfmC8g0fAy8wb3Fwi9XNr9Eunm4",
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
            "https://media.licdn.com/dms/image/v2/C4E03AQHjJYr9SZPBXA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1588953766292?e=1756944000&v=beta&t=YyxgQEcnERCkVJtd8Awj6792rZklRKAZfXTnHzZAOxc",
          linkedin:
            "https://www.linkedin.com/in/pedro-alejandro-oronoz-5025385a",
        },
        {
          name: "Nelly Manterola",
          position:
            "Head of Security / PMI-ACP / Project Manager / Certified ISO IEC 27001 Lead Implementer / Certified ISO 27001:2022 Foundation / Diploma in Information Security / Financial Services / Business Processes",
          company: "Falabella",
          relation: "Direct supervisor of Álvaro",
          text: "Conocí a Álvaro de manera accidental y hoy me atrevo a decir que es uno de los mejores líderes técnicos con los que he trabajado. Su orientación a resultados destaca por sobre todo y al contar con conocimientos de inteligencia artificial su mirada fomenta valores éticos, responsables y el trabajo en equipo es notable. Excelente experiencia fue trabajar junto a ti.",
          date: "4 de agosto de 2023",
          picture:
            "https://media.licdn.com/dms/image/v2/D4E03AQEeT_kLf3tMxA/profile-displayphoto-shrink_100_100/B4EZWmVn4DGwAY-/0/1742252441761?e=1757548800&v=beta&t=D78XAtO6IQwAKHD9hDZkGtQLhhKYofUcff7VkxBeyn4",
          linkedin: "https://www.linkedin.com/in/nellymanterola",
        },
      ],
      footer: {
        slogan: "Resolviendo problemas con tecnologIA",
        made_with: "Impulsado con IA",
        copyright:
          "© {year} almap[i]. Todos los derechos reservados",
        text: "CV generado automáticamente por almap[i] | almapi.dev"
      },
      chatbot: {
        name: "Álvaro Maldonado",
        online_status: "En línea",
        welcome_message:
          "¡Hola! 👋 Soy Álvaro. Estoy aquí para responder tus preguntas sobre mi experiencia profesional, educación y otros temas laborales. ¡Pregúntame lo que necesites! 😊",
        input_placeholder: "Escribe tu mensaje...",
      },
      contact: {
        title: "¡Conectemos!",
        subtitle:
          "¿Te interesa trabajar juntos o tienes una propuesta? ¡Contáctame!",
        ariaFront: "Tarjeta de presentación: anverso",
        ariaBack: "Tarjeta de presentación: reverso",
        front: {
          name: "Álvaro Andrés Maldonado Pinto",
          role: "Senior Software Engineer | AI-Powered Dev | Product Engineer",
        },
        back: {
          email: "readme.md@almapi.dev",
          whatsapp: "+34 641 96 23 96",
          linkedin: "https://www.linkedin.com/in/almapidev/",
          city: "Gandia, Spain",
        },
      },
      cv: {
        header: {
          title: "Álvaro Andrés Maldonado Pinto",
          subtitle: "Senior Software Engineer | AI-Powered Dev | Product Engineer",
        },
        contactInfo: {
          location: "Gandia, Spain",
          email: "readme.md@almapi.dev",
          linkedin: "https://www.linkedin.com/in/almapidev/",
          web: "https://almapi.dev",
          github: "https://github.com/aandmaldonado",
          phone: "+34 641 96 23 96",
        },
        about: {
          title: "Sobre Mí",
          text: "Soy Ingeniero de Software Senior con una trayectoria consolidada en el desarrollo e integración de soluciones tecnológicas, participando en todo el ciclo de vida del software.",
        },
        experience: {
          title: "Experiencia",
          jobs: [
            {
              company: "InAdvance Consulting Group",
              position: "Senior Software Engineer",
              period: "2024 - Present",
              location: "Santiago, Chile",
              responsibilities: [
                "Participación activa en la migración de sistemas financieros críticos", 
                "Diseño técnico e implementación de microservicios escalables", 
                "Desarrollo con arquitectura moderna, metodologías Ágiles y prácticas DevOps/DevSecOps",
                "Aseguramiento de calidad mediante revisiones de código y pruebas exhaustivas"
              ]
            },
            {
              company: "Imagemaker",
              position: "Senior Software Engineer",
              period: "2023 - 2024",
              location: "Santiago, Chile",
              responsibilities: [
                "Consultoría técnica para optimización y resolución de problemas en proyectos",
                "Investigación y desarrollo de POCs con IA para procesamiento de documentos legales",
                "Desarrollo de microservicios con Java y Spring Boot siguiendo mejores prácticas",
                "Monitoreo proactivo de servicios con ElasticSearch, Splunk y Dynatrace"
              ]
            },
            {
              company: "Falabella",
              position: "Technical Lead",
              period: "2022 - 2023",
              location: "Santiago, Chile",
              responsibilities: [
                "Liderazgo técnico en el desarrollo de sistema corporativo de gestión de asistencia",
                "Diseño de soluciones distribuidas y resilientes aplicando DDD y arquitectura event-driven",
                "Descomposición de sistemas legacy y desacoplamiento de funcionalidades críticas",
                "Coordinación entre equipos internos y externos como puente entre desarrollo y áreas de negocio"
              ]
            },
            {
              company: "Neurogenesis IA Technologies",
              position: "CTO & Co-Founder | AI Engineer",
              period: "2021 - 2022",
              location: "Barcelona, Spain",
              responsibilities: [
                "Investigación aplicada en tecnologías de IA, enfocada en Deep Learning y visión por computador",
                "Diseño e implementación de arquitectura cloud en AWS para proyectos de IA",
                "Desarrollo de modelos de clasificación de imágenes usando redes neuronales convolucionales",
                "Aplicación de técnicas de NLP para análisis de documentos legales"
              ]
            },
            {
              company: "NTT DATA Europe & LATAM",
              position: "Senior Software Engineer",
              period: "2019 - 2021",
              location: "Santiago, Chile",
              responsibilities: [
                "Modernización de sistemas core en el ecosistema financiero",
                "Desarrollo de aplicaciones seguras con Spring Security y JWT",
                "Implementación de soluciones robustas y escalables para entornos de alto flujo de datos",
                "Aplicación de estándares OWASP y PCI para asegurar la calidad del software"
              ]
            },
            {
              company: "Falabella",
              position: "Senior IT Analyst",
              period: "2015 - 2019",
              location: "Santiago, Chile",
              responsibilities: [
                "Desarrollo e integración de soluciones corporativas para unidades de negocio del Grupo Falabella",
                "Liderazgo en proyectos clave para mejorar la eficiencia operativa y experiencia de usuarios internos",
                "Construcción de soluciones web Java para integrar sistemas legacy",
                "Supervisión de asignaciones de equipo técnico y proveedores externos"
              ]
            },
            {
              company: "NTT DATA Europe & LATAM",
              position: "Solutions Analyst",
              period: "2010 - 2014",
              location: "Santiago, Chile",
              responsibilities: [
                "Migración del portal de clientes privados para Movistar Chile",
                "Desarrollo de portlets front-end usando WebSphere Portlet Factory",
                "Implementación de Web Services SOAP con Java para back-end",
                "Evaluación de calidad de código con herramientas como SonarQube"
              ]
            }
          ]
        },
        education: {
          title: "Educación",
          degrees: [
            {
              institution: "LIDR.co",
              degree: "AI4DEVS",
              period: "2025 - Present",
              location: "Online, España"
            },
            {
              institution: "thePower",
              degree: "Cybersecurity Bootcamp",
              period: "2025",
              location: "Online, España"
            },
            {
              institution: "Hackio by thePower",
              degree: "AI Development Bootcamp",
              period: "2025",
              location: "Online, España"
            },
            {
              institution: "Universitat Politècnica de Catalunya",
              degree: "Máster en Inteligencia Artificial",
              period: "2020 - 2021",
              location: "Online, España"
            },
            {
              institution: "Universidad de Santiago de Chile",
              degree: "Ingeniería en Ciencias de la Computación",
              period: "2012 - 2017",
              location: "Santiago, Chile"
            },
          ]
        },
        skills: {
          title: "Habilidades",
          categories:[
            { name: "Java, Spring Boot, Microservicios", category: "Backend" },
            { name: "JavaScript, TypeScript, React", category: "Frontend" },
            { name: "AWS, Docker, Kubernetes", category: "DevOps" },
            { name: "Python, TensorFlow, PyTorch", category: "IA/ML" },
            { name: "SQL, MongoDB, Redis", category: "Bases de Datos" },
            { name: "Git, CI/CD, Jenkins", category: "Herramientas" },
            { name: "Agile, Scrum, Kanban", category: "Metodologías" },
          ],
        },
        lang:{
          title: "Idiomas",
          languages:[
            { name: "Español", level: "Nativo" },
            { name: "Inglés", level: "B1-B2" },
          ],
        },
        footer: {
          text: "CV generado automáticamente por almap[i] | almapi.dev"
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
