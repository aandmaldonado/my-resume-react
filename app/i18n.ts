import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        experience: "Experience",
        education: "Education",
        projects: "Projects",
        skills: "Skills"
      },
      head: {
        lang_es: "Spanish",
        lang_en: "English"
      },
      hero: {
        title: "Hello World! I'm Álvaro Maldonado",
        subtitle: "Senior Software Engineer | AI-Powered Engineer"
      },
      about: {
        location: "Gandia, Spain",
        title: "About Me",
        description1: "I am a Senior Software Engineer with a solid background in developing and integrating technology solutions, involved in the entire software development lifecycle.",
        description2: "I have worked across various industries, including telecommunications and financial services, holding key roles such as Backend Developer, IT Consultant, Technical Lead, and CTO.",
        description3: "My drive is technology and innovation. Currently, I am focusing my professional growth on Artificial Intelligence and Machine Learning, seeking challenges that align purpose, impact, and growth.",
        description4: "Seeking:",
        description5: [
          "Challenging AI & Machine Learning projects",
          "Strategic roles with remote work opportunities",
          "Teams where critical thinking and innovation are paramount"
        ],
        description6: "Why collaborate with me?",
        description7: [
          "Technical expertise in development, integration, and leadership",
          "Ability to connect technology with business objectives",
          "Highly adaptable to remote work and results-oriented"
        ],
        description8: "Let's connect! I am open to opportunities and collaborations that create real impact.",
        years_experience: "YoE",
        industries: "Industries"
      },
      experience: {
        title: "Work Experience",
        exp1: {
          company: "InAdvance Consulting Group",
          position: "Senior Software Engineer",
          period: "2024 - Present",
          location: "Santiago, Chile",
          description1: "Description",
          description2: "Participated as a backend developer in a key technological migration project for a credit card processing platform. My focus was on designing and implementing modern microservices, ensuring quality, scalability, and standard compliance through Agile methodologies and a DevOps/DevSecOps culture. I also actively contributed to the technical evaluation of new talent for the team.",
          resp1: "Key Responsibilities",
          resp2: "Active participation in the migration of critical financial systems.",
          resp3: "Analysis, requirements gathering, and technical design of scalable microservices.",
          resp4: "Development of microservices focusing on modern architecture, Agile methodologies, and DevOps/DevSecOps practices.",
          resp5: "Implementation of secure and efficient solutions, adhering to development best practices.",
          resp6: "Execution of unit, functional, performance, and architectural tests.",
          resp7: "Ensuring quality through code reviews with tools like Veracode and SonarQube.",
          resp8: "Participation in technical selection processes through candidate interviews.",
          achiev1: "Achievements",
          achiev2: "Key role in microservices implementation and technological migration, promoting agility and development automation.",
          achiev3: "Ensured solution performance and stability through exhaustive testing and continuous validation.",
          achiev4: "Direct contribution to team strengthening through effective technical recruitment processes."
        },
        exp2: {
          company: "Imagemaker",
          position: "Senior Software Engineer",
          period: "2023 - 2024",
          location: "Santiago, Chile",
          description1: "Description",
          description2: "In this project, I acted as a technical consultant and backend developer, designing and implementing custom solutions for clients in the legal and corporate sector. A highlight was the applied research in artificial intelligence techniques for intelligent document processing. The focus was on software quality, microservice performance, and observability, using cutting-edge technologies throughout the development cycle.",
          resp1: "Key Responsibilities",
          resp2: "External technical consulting for optimization and problem-solving in projects and services.",
          resp3: "Design and implementation of efficient client-oriented solutions, following development best practices.",
          resp4: "Research and development of Proofs of Concept (POCs) with AI techniques to process legal PDF documents.",
          resp5: "Development of microservices using Java (8, 11, 17) and Spring Boot (2 and 3).",
          resp6: "Code review with tools like Veracode, SonarQube, and PMD.",
          resp7: "Proactive service monitoring with ElasticSearch, Splunk, and Dynatrace.",
          achiev1: "Achievements",
          achiev2: "Led an artificial intelligence POC to automate the reading and analysis of legal documents in PDF, generating innovation and added value for the client.",
          achiev3: "Consolidated quality and monitoring best practices in critical backend solutions.",
          achiev4: "Consistent delivery of high-performance solutions aligned with specific client needs."
        },
        exp3: {
          company: "Falabella",
          position: "Technical Lead",
          period: "2022 - 2023",
          location: "Santiago, Chile",
          description1: "Description",
          description2: "I led the development of a corporate attendance management system implemented across various business units of the Falabella group in Latin America. The project involved decomposing legacy systems, designing distributed and resilient solutions, and creating reusable components. I applied Domain-Driven Design (DDD) principles and event-driven architecture, collaborating closely with technical and business teams to ensure a solution aligned with strategic objectives.",
          resp1: "Key Responsibilities",
          resp2: "Collaborative requirements analysis with the Product Owner and business stakeholders.",
          resp3: "Solution design adapted to technical regulations and modern architectural patterns like SAGA and DDD.",
          resp4: "Backlog management and prioritization of key project functionalities.",
          resp5: "Technical leadership of the development team, ensuring compliance with technical guidelines and best practices.",
          resp6: "Design and implementation of distributed, resilient, and reusable systems at an international level.",
          resp7: "Decomposition of legacy systems and decoupling of critical functionalities.",
          resp8: "API design using Swagger and OpenAPI, promoting standardization and clear documentation.",
          resp9: "Validation of technical decisions in conjunction with the Architecture team.",
          resp10: "Coordination with internal and external teams, acting as a bridge between development and business areas.",
          achiev1: "Achievements",
          achiev2: "Successful implementation of a Corporate Attendance Management System deployed in multiple countries, optimizing shift management and indicator calculation.",
          achiev3: "Transformation of legacy systems into modern solutions using event-driven architecture and Domain-Driven Design (DDD).",
          achiev4: "Construction of reusable components aligned with the Falabella group's technological strategy."
        },
        exp4: {
          company: "Neurogenesis IA Technologies",
          position: "CTO & Co-Founder | AI Engineer",
          period: "2021 - 2022",
          location: "Barcelona, Spain",
          description1: "Description",
          description2: "I led the development of Artificial Intelligence solutions focused on social and environmental impact, integrating image processing, NLP, and deep learning technologies. I migrated and managed cloud infrastructure with AWS, implementing scalable architectures to support Machine Learning and Deep Learning models. I designed computer vision models with CNN for ornamental fish classification and built a diversified dataset from real images and videos. I also oversaw multidisciplinary projects in AI, DevOps, UX/UI, and Industry 4.0, connecting academia with industry.",
          resp1: "Key Responsibilities",
          resp2: "Applied research in AI technologies, focusing on Deep Learning and computer vision.",
          resp3: "Design and implementation of cloud architecture on AWS (EC2, S3, Lambda, etc.) for AI projects.",
          resp4: "Development of image classification models using convolutional neural networks (CNN).",
          resp5: "Construction of a proprietary dataset of images and videos for training classification models.",
          resp6: "Application of Natural Language Processing (NLP) techniques to analyze legal documents.",
          resp7: "Automation of tasks using chatbots based on Amazon Lex.",
          resp8: "Management of master's final projects in areas such as AI, DevOps, UX/UI, and Industry 4.0.",
          achiev1: "Achievements",
          achiev2: "Successful migration of the company's infrastructure to AWS, optimizing performance and scalability.",
          achiev3: "Creation of a robust visual dataset for ornamental fish classification with computer vision.",
          achiev4: "Development of a Deep Learning model based on CNN for accurate species classification.",
          achiev5: "Implementation of NLP solutions for automated information extraction from PDF documents.",
          achiev6: "Delivery of a functional chatbot in production using Amazon Lex.",
          achiev7: "Strategic alignment of technological innovation projects with environmental and social objectives."
        },
        exp5: {
          company: "NTT DATA",
          position: "Senior Software Engineer",
          period: "2019 - 2021",
          location: "Santiago, Chile",
          description1: "Description",
          description2: "I actively participated in modernizing core systems of the financial ecosystem, addressing the migration of legacy platforms to modern architectures based on Java and Spring Boot. I developed secure applications with Spring Security and JWT, ensuring the protection of critical resources through robust authentication and authorization. I ensured the availability and scalability of the developed solutions, incorporating security best practices (OWASP, PCI) and automated testing. I acted as a technical reference in the analysis, design, and deployment of solutions, promoting quality and risk mitigation using tools like Kiuwan, Fortify, and SonarQube.",
          resp1: "Key Responsibilities",
          resp2: "Analysis of technical and functional requirements for clients in the financial sector.",
          resp3: "Proactive identification of risks and vulnerabilities in existing solutions.",
          resp4: "Design of robust and secure IT strategies and solutions.",
          resp5: "Development of RESTful Web Services with Java 8 and Spring Boot 2.",
          resp6: "Implementation of authentication and authorization with Spring Security and JWT.",
          resp7: "Construction of highly available and fault-tolerant applications.",
          resp8: "Unit and integration testing with JUnit.",
          resp9: "Code review with tools like Kiuwan, Fortify, and SonarQube.",
          resp10: "Application of OWASP and PCI standards to ensure software quality.",
          resp11: "Deployment of components on Oracle Weblogic servers.",
          resp12: "Technical reference for the team and allied business areas.",
          achiev1: "Achievements",
          achiev2: "Successful migration of Transbank's backoffice systems, improving efficiency and maintainability.",
          achiev3: "Effective implementation of secure systems using Spring Security and JWT.",
          achiev4: "Development of robust and scalable applications for high-data-flow environments.",
          achiev5: "Risk reduction through static code analysis and secure development practices.",
          achiev6: "Consolidation of the role as a technical reference in a regulated and highly demanding environment."
        },
        exp6: {
          company: "Falabella",
          position: "Senior IT Analyst",
          period: "2015 - 2019",
          location: "Santiago, Chile",
          description1: "Description",
          description2: "Responsible for the development and integration of corporate solutions for various business units of the Falabella Group. I led key projects aimed at improving operational efficiency and the internal user experience through personalized platforms developed in Java. Ensuring the continuity of processes and fostering an ethical organizational culture, I actively participated in modernizing legacy systems using patterns like MVC.",
          resp1: "Key Responsibilities",
          resp2: "Management and development of requirements for internal business units.",
          resp3: "Construction of Java web solutions to integrate legacy systems.",
          resp4: "Application of the MVC design pattern in application development.",
          resp5: "Participation in the development and integration of Human Resources systems.",
          resp6: "Supervision of technical team assignments and external providers.",
          resp7: "Ensuring the operational continuity of corporate processes.",
          resp8: "Direct collaboration with different areas for the implementation of custom solutions.",
          achiev1: "Achievements",
          achiev2: "Led the creation of a corporate platform for free time management, increasing employee autonomy and improving the work experience.",
          achiev3: "Design and implementation of a platform for declaring conflicts of interest for senior executives, strengthening transparency and corporate ethics.",
          achiev4: "Development of effective web solutions in Java that facilitated the integration of legacy systems, improving the interoperability and efficiency of the group's internal systems."
        },
        exp7: {
          company: "NTT DATA",
          position: "Solutions Analyst",
          period: "2010 - 2014",
          location: "Santiago, Chile",
          description1: "Description",
          description2: "Responsible for migrating the private customer portal for Movistar Chile, developing front-end and back-end components on the IBM WebSphere platform. I contributed to improving customer experience through new functionalities, extensively documented the system, and ensured compliance with technical and quality standards.",
          resp1: "Key Responsibilities",
          resp2: "Migration of the private customer portal for Movistar Chile.",
          resp3: "Development of front-end portlets (HTML, CSS, JavaScript, JSP) using WebSphere Portlet Factory.",
          resp4: "Deployment of portlets on IBM WebSphere Portal.",
          resp5: "Development of SOAP Web Services with Java for back-end, deployed on IBM WebSphere Application Server.",
          resp6: "Application of the DAO design pattern for data abstraction.",
          resp7: "Code quality evaluation with tools like SonarQube.",
          resp8: "Writing technical documentation and user guides to facilitate system maintenance and understanding.",
          resp9: "Analysis of client requirements and design of appropriate development strategies.",
          achiev1: "Achievements",
          achiev2: "Led the successful migration of the Movistar Chile customer portal on IBM WebSphere, incorporating new functionalities and significantly improving user experience.",
          achiev3: "Increased customer autonomy through intuitive interfaces and integrated services, strengthening account management and contracted services."
        }
      },
      education: {
        title: "Education",
        edu1: {
          institution: "LIDR.co",
          degree: "AI4DEVS",
          period: "2025 - Present",
          location: "Online, Spain",
          concepts: [
            "Application of AI across all software development stages.",
            "Proficiency in tools like Github Copilot, ChatGPT, Cursor, and more.",
            "AI-powered code, documentation, and test generation.",
            "Improving productivity and code quality with AI.",
            "Final project with comprehensive AI application.",
            "Practical training with a professional and current focus."
          ]
        },
        edu2: {
          institution: "thePower",
          degree: "Cybersecurity Bootcamp",
          period: "2025",
          location: "Online, Spain",
          concepts: [
            "Fundamentals, threats, and attack vectors.",
            "Infrastructure, networks, systems, and scripting.",
            "Offensive security and secure development.",
            "Incident management, privacy, and cyber intelligence."
          ]
        },
        edu3: {
          institution: "Hackio by thePower",
          degree: "AI Development Bootcamp",
          period: "2025",
          location: "Online, Spain",
          concepts: [
            "Programming in Python for AI and ML.",
            "Data analysis with Pandas, NumPy, SQL, and MongoDB.",
            "Generative models and NLP with Hugging Face, OpenAI, and Google AI.",
            "Computer vision, audio, and multimodal models.",
            "Backend with Flask and FastAPI.",
            "Integration with AWS and Azure.",
            "Conversational agents and chains with LangChain.",
            "RAG technologies for augmented generation."
          ]
        },
        edu4: {
          institution: "Universitat Politècnica de Catalunya",
          degree: "Master in Artificial Intelligence",
          period: "2020 - 2021",
          location: "Online, Spain",
          concepts:[
            "Key fundamentals of AI and associated technologies.",
            "Practical application of Machine Learning models and Neural Networks.",
            "Main frameworks for AI model development.",
            "Effective implementation of AI projects, covering all phases from development to management.",
            "Analysis of commercial AI applications and their impact."
          ]
        },
        edu5: {
          institution: "Universidad de Santiago de Chile",
          degree: "Computer Science Engineering",
          period: "2012 - 2017",
          location: "Santiago, Chile",
          concepts: [
            "Basic Sciences: Proficiency in mathematics and physics.",
            "Engineering: Experience in applied mathematics, project, and systems management.",
            "Computer Science: Expertise in information technologies and communication networks.",
            "Humanities and Social Sciences: Knowledge in economics, organization, human behavior, ethics, and bilingualism."
          ]
        },
        edu6: {
          institution: "Universidad de Santiago de Chile",
          degree: "Bachelor in Engineering Sciences",
          period: "2012 - 2015",
          location: "Santiago, Chile",
          concepts: [
            "Basic Sciences.",
            "Engineering Sciences.",
            "Human and Social Sciences."
          ]
        },
        edu7: {
          institution: "INACAP",
          degree: "Computer Engineering",
          period: "2006 - 2010",
          location: "Santiago, Chile",
          concepts: [
            "Creation of complete solutions supported by software engineering.",
            "Effective administration of technical, financial, and human resources.",
            "Strong leadership in technological and strategic projects.",
            "Adoption of emerging technologies with the aim of promoting digital transformation."
          ]
        }
      },
      projects: {
        title: "Featured Projects",
        more_info: "More Info",
        external_link: "External Link",
        github_repo: "GitHub",
        project1: {
          title: "Andes Online",
          description: "Strategic transformation of credit card processing.",
          contents: [
            "Migration project representing a significant strategic transformation in credit card processing, replacing the current platform with a more advanced solution provided by a new vendor.",
            "This fundamental change will not only ensure operational continuity but also enhance our technological and business capabilities related to credit cards.",
            "The project emphasizes constant innovation, improved operational efficiency, and strengthening our market position to provide customers with the best experience.",
            "This initiative is expected to mark the beginning of a new era of excellence and growth for the organization."
          ],
          externalLink: "https://example.com/es/project1",
          githubRepo: "https://github.com/your-repo/project1-es"
        },
        project2: {
          title: "AcuaMattic Dataset",
          description: "Real and diversified dataset for ornamental fish classification.",
          contents: [
            "The urgent need arises from the lack of specialized image banks for ornamental fish, which hinders research and development of technologies related to the preservation and care of these species. Furthermore, obtaining varied images and videos of specimens of the same species represents a significant challenge.",
            "To address this problem, the creation of a large and diversified image dataset of ornamental fish is proposed, which is fundamental for training classification models.",
            "Key phases: data collection using videos in controlled environments; processing using computer vision techniques for cropping and normalization; and creation of the final dataset with images of 30 different species. This approach avoids synthetic data, reduces overfitting, and improves the quality of the resulting dataset."
          ],
          externalLink: "https://example.com/es/project2",
          githubRepo: "https://github.com/your-repo/project2-es"
        },
        project3: {
          title: "AcuaMattic AI & Robotics (Prototype)",
          description: "Intelligent aquarium assistant based on computer vision and robotics.",
          contents: [
            "The goal of this project is to improve social well-being by creating a tool that facilitates the responsible and sustainable acquisition and installation of aquariums for users of all levels, whether experienced enthusiasts or newcomers to the hobby.",
            "It is a fish classifier model, meticulously trained with a vast collection of thousands of videos and images covering the most common ornamental species. This approach allows for highly personalized support for each user, adapted to the specific characteristics of the identified species in their aquarium.",
            "Once the system detects and recognizes the species in question, it communicates with a robot installed in the aquarium to collect precise data on current water parameters. Precise recommendations are then provided for optimal configuration of these parameters, contributing to aquarium maintenance and the well-being of the species inhabiting it."
          ],
          externalLink: "https://www.elconfidencialdigital.com/monarquia/articulo/an/como-evitar-muerte-miles-millones-peces/20211105193248069486.html",
          githubRepo: "https://github.com/your-repo/project3-es"
        },
        project4: {
          title: "SPR (Personnel & Remuneration System)",
          description: "Corporate HR system for comprehensive personnel management of the Falabella Group.",
          contents: [
            "Corporate HR system, integrated into the Falabella Group's corporate intranet, addressing the needs of various Latin American countries, including Chile, Peru, Colombia, Argentina, and Uruguay.",
            "Essentially, this system forms the backbone of employee management, efficient personnel handling, and compensation administration for all Falabella Group companies, which include Falabella Retail, Falabella Financial, Sodimac, and Tottus.",
            "Key features: Payroll, Staffing, Store Operations, Finance, Logistics, Access Control."
          ],
          externalLink: "https://example.com/es/project4",
          githubRepo: "https://github.com/your-repo/project4-es"
        },
        project5: {
          title: "Movistar Online Channel",
          description: "Migration of the Movistar Chile portal to improve customer experience and autonomy.",
          contents: [
            "Migration of the private portal for Movistar Chile clients using IBM WebSphere, with front-end portlet development and back-end web services to expand functionalities and reduce manual processes.",
            "Key functionalities include detailed access to home and mobile plans, billing information, contracting additional services, secure online payments, and equipment renewal.",
            "This significant update optimizes the customer experience, increasing their autonomy and convenience in managing services and accounts."
          ],
          externalLink: "https://identity.movistar.cl/login?_gl=1*gan1wb*_gcl_au*MTk4NDIyMjUxNi4xNjkzMDE1NDk5&_ga=2.21479423.531242504.1693015499-1259711125.1693015499",
          githubRepo: "https://github.com/your-repo/project5-es"
        },
        project6: {
          title: "Electronic Supervisor",
          description: "Electronic supervision solution to optimize the purchase process at Walmart Chile.",
          contents: [
            "An electronic point-of-sale (POS) supervision solution, designed to streamline the purchase process at Walmart Chile (including Líder, Express, and Super Bodega a cuenta).",
            "This application is specifically designed to remotely address customer requests when making payments at the checkout counter.",
            "It enables quick responses to price adjustments and product cancellations during the billing process. This tool is exclusively for authorized supermarket cashiers and supervisors."
          ],
          externalLink: "https://example.com/es/project6",
          githubRepo: "https://github.com/your-repo/project6-es"
        },
        project7: {
          title: "on-premise2cloud",
          description: "Migration of on-premise infrastructure to AWS to scale and modernize operations.",
          contents: [
            "The company migrated its operations to Amazon Web Services (AWS) to address key challenges such as scalability, massive data processing, and the development of artificial intelligence solutions.",
            "The project included the creation of an enterprise account in AWS, data migration, process automation, specialized dataset generation, and configuration of secure and flexible environments.",
            "Services like Amazon S3, EC2, and SageMaker were implemented, along with advanced IAM security policies, achieving a modern, secure infrastructure aligned with technological innovation objectives."
          ],
          externalLink: "https://example.com/es/project7",
          githubRepo: "https://github.com/your-repo/project7-es"
        },
        project8: {
          title: "Time & Attendance (T&A)",
          description: "Digital attendance system to improve management and work experience in multiple countries.",
          contents: [
            "Corporate Attendance Management System, designed to improve the overall employee experience in different countries (Chile, Peru, and Colombia) and various businesses of the Falabella group (including Falabella Retail, Sodimac, Tottus, Falabella Financial, Mall Plaza, Falabella.com, Falabella Corporate, and IKEA).",
            "The implementation of this cutting-edge technology aligns with current workforce attendance needs, emphasizing remote registration methods to promote digital channels (via apps and web), thereby reducing reliance on biometric devices. It also provides vital data for managing various associated performance indicators, aiding in attendance calculation and facilitating efficient shift management.",
            "Key objectives: ensure legal compliance, acquire data to optimize shifts, collect metrics such as absenteeism and overtime, and introduce remote registration. KPIs: employee satisfaction, overtime hours, absenteeism rates, disputed registrations, and time dedicated to monthly reconciliation."
          ],
          externalLink: "https://example.com/es/project8",
          githubRepo: "https://github.com/your-repo/project8-es"
        },
        project9: {
          title: "Faculty Engine",
          description: "Banking solution for automated legal analysis in PDF.",
          contents: [
            "This project involves the development of an advanced banking solution for the corporate sector with the main function of processing and analyzing legal authorization PDF documents in detail.",
            "This technology enables precise customization of products and services for clients by leveraging the information obtained.",
            "This solution results in a significant improvement in the optimization of existing business processes and greater efficiency in decision-making."
          ],
          externalLink: "https://identity.movistar.cl/login?_gl=1*gan1wb*_gcl_au*MTk4NDIyMjUxNi4xNjkzMDE1NDk5&_ga=2.21479423.531242504.1693015499-1259711125.1693015499",
          githubRepo: "https://github.com/your-repo/project9-es"
        },
        project10: {
          title: "S-Box",
          description: "An environment for analyzing videos related to smile episodes.",
          contents: [
            "The S-Box Project is an innovative solution in Affective Computing that uses Artificial Intelligence and Computer Vision to meticulously analyze videos with smiles.",
            "It includes advanced smile analysis, multimodal capture, precise automatic synchronization, intelligent smile filtering, sequence generation, and advanced visualization with AI.",
            "S-Box drives the understanding of human emotions in technological interactions, being a key tool for researchers and professionals in controlled experimental environments."
          ],
          externalLink: "https://example.com/es/project10",
          githubRepo: "https://github.com/aandmaldonado/S-Box"
        },
        project11: {
          title: "Cancellations 2.0",
          description: "Backoffice system for managing sales cancellations at Transbank.",
          contents: [
            "This system is part of Transbank's transactional backoffice, specifically designed to process sales cancellation requests.",
            "Cancellation requests: easily initiate individual cancellation requests and batch cancellations by uploading files. Cancellations can be total (covering the entire sale amount) or partial (for amounts less than the total sale value).",
            "Bulk cancellation log: conveniently retrieve a detailed history of all bulk cancellation requests made by a specific merchant.",
            "Audit report: easily review a complete log of cancellation requests, both individual and bulk, covering up to 1 year of historical data."
          ],
          externalLink: "https://www.youtube.com/watch?v=Nu-q-zOvibA",
          githubRepo: "https://github.com/your-repo/project10-es"
        }
      },
      skills: {
        title: "Skills",
        technical: {
          title: "Technical Skills"
        },
        soft_skills: {
          title: "Soft Skills",
          communication: "Communication",
          teamwork: "Teamwork",
          problem_solving: "Problem Solving",
          adaptability: "Adaptability",
          leadership: "Leadership",
          time_management: "Time Management"
        },
        languages: {
          title: "Languages",
          spanish: "Spanish",
          english: "English",
          native: "Native",
          intermediate: "B1-B2"
        },
        api_design: {
          title: "API Design",
          skills: "Swagger, OpenAPI"
        },
        code_review: {
          title: "Code Review",
          skills: "Sonar, Veracode, Checkstyle"
        },
        project_management: {
          title: "Project Management",
          skills: "Jira, Confluence"
        },
        frontend: {
          title: "Frontend",
          skills: "HTML, CSS, JavaScript, React"
        },
        backend: {
          title: "Backend",
          skills: "Java, Spring Boot, Python, Flask, FastAPI, REST API"
        },
        database: {
          title: "Database",
          skills: "SQL, PL/SQL, Oracle, MySQL, PostgreSQL, NoSQL, MongoDB, JPA, Hibernate"
        },
        code_management: {
          title: "Code Management",
          skills: "GitHub, GitLab, Bitbucket"
        },
        build_tools: {
          title: "Build Tools",
          skills: "Maven, Gradle"
        },
        testing: {
          title: "Testing",
          skills: "JUnit, Mockito, Spock, Karate, ArchUnit"
        },
        cicd: {
          title: "CI/CD",
          skills: "Jenkins, GitHub Actions, Bamboo, Kubernetes, Docker"
        },
        monitoring: {
          title: "Monitoring",
          skills: "Splunk, Dynatrace, Elasticsearch"
        },
        cloud: {
          title: "Cloud (AWS)",
          skills: "IAM, EC2, Elastic Beanstalk, Lambda, RDS, DynamoDB, CLI, S3, API Gateway, SageMaker, Rekognition, Lex, CloudFront, Route 53"
        },
        ai: {
          title: "AI",
          skills: "Jupyter, Prompting, GenAI, LLM, RAG, HuggingFace, LangChain, OpenCV, SciKit-Learn, TensorFlow, Pytorch, OpenAI, ChatGPT"
        }
      },
      footer: {
        slogan: "Building the future with code",
        made_with: "Made with AI",
        copyright: "© 2024 Álvaro Maldonado. All rights reserved."
      },
      chatbot: {
        name: "Álvaro Maldonado",
        online_status: "Online",
        welcome_message: "Hello! 👋 I'm Álvaro. I'm here to answer your questions about my professional experience, education, and other work-related topics. Feel free to ask! 😊",
        input_placeholder: "Type your message..."
      }
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
        skills: "Habilidades"
      },
      head: {
        lang_es: "Español",
        lang_en: "Inglés"
      },
      hero: {
        title: "¡Hola Mundo! Soy Álvaro Maldonado",
        subtitle: "Senior Software Engineer | AI-Powered Engineer"
      },
      about: {
        location: "Gandía, España",
        title: "Sobre Mí",
        description1: "Soy Ingeniero de Software Senior con una trayectoria consolidada en el desarrollo e integración de soluciones tecnológicas, participando en todo el ciclo de vida del software.",
        description2: "He trabajado en diversas industrias como telecomunicaciones, servicios financieros, entre otros, asumiendo roles clave: desde Desarrollador Backend y Consultor TI, hasta Líder Técnico y CTO.",
        description3: "Mi motor es la tecnología y la innovación. Hoy, enfoco mi evolución profesional hacia la Inteligencia Artificial y Machine Learning, en busca de desafíos que conecten propósito, impacto y crecimiento.",
        description4: "En búsqueda de:",
        description5: [
          "Proyectos desafiantes en IA & Machine Learning",
          "Roles estratégicos con posibilidad de trabajo remoto",
          "Equipos donde el pensamiento crítico y la innovación sean clave"
        ],
        description6: "¿Por qué colaborar conmigo?",
        description7: [
          "Experiencia técnica en desarrollo, integración y liderazgo",
          "Capacidad de conectar tecnología con objetivos de negocio",
          "Alta adaptabilidad al trabajo remoto y orientación a resultados"
        ],
        description8: "¿Conectamos? Estoy abierto a oportunidades y colaboraciones que generen impacto real.",
        years_experience: "Años de Experiencia",
        industries: "Industrias"
      },
      experience: {
        title: "Experiencia Laboral",
        exp1: {
          company: "InAdvance Consulting Group",
          position: "Senior Software Engineer",
          period: "2024 - Present",
          location: "Santiago, Chile",
          description1: "Descripción",
          description2: "Participé como desarrollador backend en un proyecto clave de migración tecnológica para una plataforma de procesamiento de tarjetas de crédito. Mi enfoque estuvo en el diseño e implementación de microservicios modernos, asegurando calidad, escalabilidad y cumplimiento de estándares mediante la aplicación de metodologías ágiles y cultura DevOps/DevSecOps. Además, contribuí activamente en la evaluación técnica de nuevos talentos para el equipo.",
          resp1: "Funciones destacadas",
          resp2: "Participación activa en la migración de sistemas críticos financieros.",
          resp3: "Análisis, levantamiento y diseño técnico de microservicios escalables.",
          resp4: "Desarrollo de microservicios con enfoque en arquitectura moderna, metodologías ágiles y prácticas DevOps/DevSecOps.",
          resp5: "Implementación de soluciones seguras y eficientes, siguiendo buenas prácticas de desarrollo.",
          resp6: "Ejecución de pruebas unitarias, funcionales, de rendimiento y arquitectura.",
          resp7: "Aseguramiento de calidad mediante revisiones de código con herramientas como Veracode y SonarQube.",
          resp8: "Participación en procesos de selección técnica mediante entrevistas a candidatos.",
          achiev1: "Logros",
          achiev2: "Rol clave en la implementación de microservicios y migración tecnológica, promoviendo la agilidad y automatización del desarrollo.",
          achiev3: "Garantía del rendimiento y estabilidad de las soluciones a través de pruebas exhaustivas y validaciones continuas.",
          achiev4: "Contribución directa al fortalecimiento del equipo mediante procesos efectivos de reclutamiento técnico."
        },
        exp2: {
          company: "Imagemaker",
          position: "Senior Software Engineer",
          period: "2023 - 2024",
          location: "Santiago, Chile",
          description1: "Descripción",
          description2: "En este proyecto actué como consultor técnico y desarrollador backend, diseñando e implementando soluciones a medida para clientes del sector legal y corporativo. Destaca la investigación aplicada en técnicas de inteligencia artificial para el procesamiento inteligente de documentos. El enfoque estuvo en la calidad del software, rendimiento de los microservicios y observabilidad, utilizando tecnologías de punta en todo el ciclo de desarrollo.",
          resp1: "Funciones destacadas",
          resp2: "Asesoría técnica externa para optimización y solución de problemas en proyectos y servicios.",
          resp3: "Diseño e implementación de soluciones eficientes orientadas al cliente, con buenas prácticas de desarrollo.",
          resp4: "Investigación y desarrollo de pruebas de concepto (POC) con técnicas de IA para procesar documentos PDF con aplicaciones legales.",
          resp5: "Desarrollo de microservicios utilizando Java (8, 11, 17) y Spring Boot (2 y 3).",
          resp6: "Revisión de código fuente con herramientas como Veracode, SonarQube y PMD.",
          resp7: "Monitoreo proactivo de servicios con ElasticSearch, Splunk y Dynatrace.",
          achiev1: "Logros",
          achiev2: "Lideré una POC de inteligencia artificial para automatizar la lectura y análisis de documentos legales en PDF, generando innovación y valor añadido para el cliente.",
          achiev3: "Consolidación de buenas prácticas de calidad y monitoreo en soluciones backend críticas.",
          achiev4: "Entregas consistentes de alto rendimiento alineadas con las necesidades específicas del cliente."
        },
        exp3: {
          company: "Falabella",
          position: "Líder Técnico",
          period: "2022 - 2023",
          location: "Santiago, Chile",
          description1: "Descripción",
          description2: "Lideré el desarrollo de un sistema corporativo de gestión de asistencia implementado en diversas unidades de negocio del grupo Falabella en América Latina. El proyecto involucró la descomposición de sistemas legados, el diseño de soluciones distribuidas y resilientes, y la creación de componentes reutilizables. Apliqué principios de Domain-Driven Design (DDD) y arquitectura basada en eventos, colaborando estrechamente con equipos técnicos y de negocio para asegurar una solución alineada con los objetivos estratégicos.",
          resp1: "Funciones destacadas",
          resp2: "Análisis colaborativo de requerimientos junto al Product Owner y stakeholders del negocio.",
          resp3: "Diseño de soluciones adaptadas a normativas técnicas y patrones de arquitectura moderna como SAGA y DDD.",
          resp4: "Gestión del backlog y priorización de funcionalidades clave del proyecto.",
          resp5: "Liderazgo técnico del equipo de desarrollo, asegurando el cumplimiento de directrices técnicas y buenas prácticas.",
          resp6: "Diseño e implementación de sistemas distribuidos, resilientes y reutilizables a nivel internacional.",
          resp7: "Descomposición de sistemas legados y desacoplamiento de funcionalidades críticas.",
          resp8: "Diseño de APIs utilizando Swagger y OpenAPI, fomentando la estandarización y documentación clara.",
          resp9: "Validación de decisiones técnicas en conjunto con el equipo de Arquitectura.",
          resp10: "Coordinación con equipos internos y externos, actuando como puente entre desarrollo y áreas de negocio.",
          achiev1: "Logros",
          achiev2: "Implementación exitosa de un Sistema Corporativo de Gestión de Asistencia desplegado en múltiples países, optimizando la gestión de turnos y cálculo de indicadores.",
          achiev3: "Transformación de sistemas legados en soluciones modernas mediante arquitectura basada en eventos y diseño orientado al dominio (DDD).",
          achiev4: "Construcción de componentes reutilizables y alineados con la estrategia tecnológica del grupo Falabella."
        },
        exp4: {
          company: "Neurogenesis IA Technologies",
          position: "CTO & Co-Fundador | Ingeniero de IA",
          period: "2021 - 2022",
          location: "Barcelona, España",
          description1: "Descripción",
          description2: "Lideré el desarrollo de soluciones de Inteligencia Artificial orientadas al impacto social y medioambiental, integrando tecnologías de procesamiento de imágenes, NLP y aprendizaje profundo. Migré y gestioné infraestructura cloud con AWS, implementando arquitecturas escalables para soportar modelos de Machine Learning y Deep Learning. Diseñé modelos de visión por computador con CNN para clasificación de peces ornamentales y construí un dataset diversificado a partir de imágenes y videos reales. También supervisé proyectos multidisciplinarios en IA, DevOps, UX/UI e Industria 4.0, conectando la academia con la empresa.",
          resp1: "Funciones destacadas",
          resp2: "Investigación aplicada en tecnologías de IA, con foco en Deep Learning y visión por computador.",
          resp3: "Diseño e implementación de arquitectura cloud en AWS (EC2, S3, Lambda, etc.) para proyectos de IA.",
          resp4: "Desarrollo de modelos de clasificación de imágenes utilizando redes neuronales convolucionales (CNN).",
          resp5: "Construcción de un dataset propio de imágenes y videos para entrenamiento de modelos de clasificación.",
          resp6: "Aplicación de técnicas de procesamiento de lenguaje natural (NLP) para analizar documentos legales.",
          resp7: "Automatización de tareas mediante chatbots basados en Amazon Lex.",
          resp8: "Gestión de proyectos de fin de máster en áreas como IA, DevOps, UX/UI e Industria 4.0.",
          achiev1: "Logros",
          achiev2: "Migración exitosa de la infraestructura de la compañía a AWS, optimizando rendimiento y escalabilidad.",
          achiev3: "Creación de un dataset visual robusto para clasificación de peces ornamentales con visión artificial.",
          achiev4: "Desarrollo de un modelo de Deep Learning basado en CNN para clasificación precisa de especies.",
          achiev5: "Implementación de soluciones NLP para extracción automatizada de información desde documentos PDF.",
          achiev6: "Entrega de un chatbot funcional en producción usando Amazon Lex.",
          achiev7: "Alineación estratégica de proyectos de innovación tecnológica con objetivos medioambientales y sociales."
        },
        exp5: {
          company: "NTT DATA",
          position: "Senior Software Engineer",
          period: "2019 - 2021",
          location: "Santiago, Chile",
          description1: "Descripción",
          description2: "Participé activamente en la modernización de sistemas core del ecosistema financiero, abordando la migración de plataformas legacy hacia arquitecturas modernas basadas en Java y Spring Boot. Desarrollé aplicaciones seguras con Spring Security y JWT, garantizando la protección de recursos críticos mediante autenticación y autorización robusta. Aseguré la disponibilidad y escalabilidad de las soluciones desarrolladas, incorporando buenas prácticas de seguridad (OWASP, PCI) y pruebas automatizadas. Actué como referente técnico en el análisis, diseño y despliegue de soluciones, promoviendo la calidad y la mitigación de riesgos mediante herramientas como Kiuwan, Fortify y SonarQube.",
          resp1: "Funciones destacadas",
          resp2: "Análisis de requerimientos técnicos y funcionales para clientes del sector financiero.",
          resp3: "Identificación proactiva de riesgos y vulnerabilidades en soluciones existentes.",
          resp4: "Diseño de estrategias y soluciones informáticas robustas y seguras.",
          resp5: "Desarrollo de Web Services Restful con Java 8 y Spring Boot 2.",
          resp6: "Implementación de autenticación y autorización con Spring Security y JWT.",
          resp7: "Construcción de aplicaciones con alta disponibilidad y tolerancia a fallos.",
          resp8: "Pruebas unitarias y de integración con JUnit.",
          resp9: "Revisión de código con herramientas como Kiuwan, Fortify y SonarQube.",
          resp10: "Aplicación de estándares OWASP y PCI para asegurar la calidad del software.",
          resp11: "Despliegue de componentes en servidores Oracle Weblogic.",
          resp12: "Referencia técnica para el equipo y áreas de negocio aliadas.",
          achiev1: "Logros",
          achiev2: "Migración exitosa de los sistemas de backoffice de Transbank, mejorando eficiencia y mantenibilidad.",
          achiev3: "Implementación efectiva de sistemas seguros mediante Spring Security y JWT.",
          achiev4: "Desarrollo de aplicaciones robustas y escalables para entornos con alto flujo de datos.",
          achiev5: "Reducción de riesgos mediante análisis estático de código y prácticas seguras de desarrollo.",
          achiev6: "Consolidación del rol como referente técnico en un entorno regulado y de alta exigencia."
        },
        exp6: {
          company: "Falabella",
          position: "Analista TI Senior",
          period: "2015 - 2019",
          location: "Santiago, Chile",
          description1: "Descripción",
          description2: "Responsable del desarrollo e integración de soluciones corporativas para diversas unidades de negocio del Grupo Falabella. Lideré proyectos clave orientados a mejorar la eficiencia operativa y la experiencia del usuario interno mediante plataformas personalizadas desarrolladas en Java. Garantizando la continuidad de los procesos y fomentando una cultura organizacional ética, participé activamente en la modernización de los sistemas legados mediante patrones como MVC.",
          resp1: "Funciones destacadas",
          resp2: "Gestión y desarrollo de requerimientos para unidades de negocio internas.",
          resp3: "Construcción de soluciones web en Java para integrar sistemas legados.",
          resp4: "Aplicación del patrón de diseño MVC en el desarrollo de aplicaciones.",
          resp5: "Participación en el desarrollo e integración de sistemas de Recursos Humanos.",
          resp6: "Supervisión de asignaciones de equipo técnico y proveedores externos.",
          resp7: "Aseguramiento de la continuidad operativa de los procesos corporativos.",
          resp8: "Colaboración directa con distintas áreas para la implementación de soluciones a medida.",
          achiev1: "Logros",
          achiev2: "Liderazgo en la creación de una plataforma corporativa para la gestión de tiempo libre, aumentando la autonomía de los empleados y mejorando la experiencia laboral.",
          achiev3: "Diseño e implementación de una plataforma para la declaración de conflictos de interés dirigida a altos ejecutivos, fortaleciendo la transparencia y la ética corporativa.",
          achiev4: "Desarrollo de soluciones web efectivas en Java que facilitaron la integración de sistemas legados, mejorando la interoperabilidad y eficiencia de los sistemas internos del grupo."
        },
        exp7: {
          company: "NTT DATA",
          position: "Analista de Soluciones",
          period: "2010 - 2014",
          location: "Santiago, Chile",
          description1: "Descripción",
          description2: "Responsable de la migración del portal privado de clientes de Movistar Chile, desarrollando componentes front-end y back-end sobre la plataforma IBM WebSphere. Aporté a la mejora de la experiencia del cliente mediante nuevas funcionalidades, documenté ampliamente el sistema y aseguré el cumplimiento de estándares técnicos y de calidad.",
          resp1: "Funciones destacadas",
          resp2: "Migración del portal privado de clientes para Movistar Chile.",
          resp3: "Desarrollo de portlets front-end (HTML, CSS, JavaScript, JSP) utilizando WebSphere Portlet Factory.",
          resp4: "Despliegue de portlets en IBM WebSphere Portal.",
          resp5: "Desarrollo de Web Services SOAP con Java para back-end, desplegados en IBM WebSphere Application Server.",
          resp6: "Aplicación del patrón de diseño DAO para la abstracción de datos.",
          resp7: "Evaluación de la calidad del código con herramientas como SonarQube.",
          resp8: "Redacción de documentación técnica y guías de usuario para facilitar el mantenimiento y entendimiento del sistema.",
          resp9: "Análisis de requerimientos del cliente y diseño de estrategias de desarrollo acordes.",
          achiev1: "Logros",
          achiev2: "Lideré la migración exitosa del portal de clientes Movistar Chile sobre IBM WebSphere, incorporando nuevas funcionalidades y mejorando notablemente la experiencia de usuario.",
          achiev3: "Incrementé la autonomía del cliente mediante interfaces intuitivas y servicios integrados, fortaleciendo la gestión de cuentas y servicios contratados."
        }
      },
      education: {
        title: "Educación",
        edu1: {
          institution: "LIDR.co",
          degree: "AI4DEVS",
          period: "2025",
          location: "Online, España",
          concepts: [
            "Aplicación de IA en todas las etapas del desarrollo de software.",
            "Dominio de herramientas como Github Copilot, ChatGPT, Cursor y más.",
            "Generación de código, documentación y tests con IA.",
            "Mejora de productividad y calidad del código con IA.",
            "Proyecto final aplicando IA de forma integral.",
            "Formación práctica con enfoque profesional y actual."
          ]
        },
        edu2: {
          institution: "thePower",
          degree: "Bootcamp en Ciberseguridad",
          period: "2025",
          location: "Online, España",
          concepts:[
            "Fundamentos, amenazas y vectores de ataque.",
            "Infraestructura, redes, sistemas y scripting.",
            "Seguridad ofensiva y desarrollo seguro.",
            "Gestión de incidentes, privacidad y ciberinteligencia.",
            "Enfoque en empleabilidad y orientación profesional."
          ]
        },
        edu3: {
          institution: "Hackio by thePower",
          degree: "Bootcamp en Desarrollo de IA",
          period: "2025",
          location: "Online, España",
          concepts:[
            "Programación en Python para IA y ML.",
            "Análisis de datos con Pandas, NumPy, SQL y MongoDB.",
            "Modelos generativos y NLP con Hugging Face, OpenAI y Google AI.",
            "Visión por computador, audio y modelos multimodales.",
            "Backend con Flask y FastAPI.",
            "Integración en AWS y Azure.",
            "Agentes conversacionales y cadenas con LangChain.",
            "Tecnologías RAG para generación aumentada."
          ]
        },
        edu4: {
          institution: "Universitat Politècnica de Catalunya",
          degree: "Máster en Inteligencia Artificial",
          period: "2020 - 2021",
          location: "Barcelona, España",
          concepts:[
            "Fundamentos claves de IA y tecnologías asociadas.",
            "Aplicación práctica de modelos de Machine Learning y Redes Neuronales.",
            "Principales frameworks para desarrollo de modelos de IA.",
            "Implementación efectiva de proyectos de IA, cubriendo todas las fases desde desarrollo a gestión.",
            "Análisis de aplicaciones comerciales de IA y su impacto."
          ]
        },
        edu5: {
          institution: "Universidad de Santiago de Chile",
          degree: "Ingeniería Civil en Informática",
          period: "2012 - 2017",
          location: "Santiago, Chile",
          concepts: [
            "Ciencias Básicas: Dominio en matemáticas y física.",
            "Ingeniería: Experiencia en matemáticas aplicadas, gestión de proyectos y sistemas.",
            "Informática: Experticia en tecnologías informáticas y redes de comunicación.",
            "Humanidades y Sociales: Conocimiento en economía, organización, comportamiento humano, ética y bilingüismo."
          ]
        },
        edu6: {
          institution: "Universidad de Santiago de Chile",
          degree: "Licenciatura en Ciencias de la Ingeniería",
          period: "2012 - 2015",
          location: "Santiago, Chile",
          concepts: [
            "Ciencias Básicas.",
            "Ciencias de la Ingeniería.",
            "Ciencias Humanas y Sociales."
          ]
        },
        edu7: {
          institution: "INACAP",
          degree: "Ingenería en Informática",
          period: "2006 - 2010",
          location: "Santiago, Chile",
          concepts: [
            "Creación de soluciones completas apoyadas en ingeniería de software.",
            "Administración eficaz de recursos técnicos, financieros y humanos.",
            "Liderazgo fuerte en proyectos tecnológicos y estratégicos.",
            "Adopción de tecnologías emergentes con el objetivo de promover la transformación digital."]
        }
      },
      projects: {
        title: "Proyectos Destacados",
        more_info: "Más Información",
        external_link: "Link Externo",
        github_repo: "GitHub",
        project1: {
          title: "Andes Online",
          description: "Transformación estratégica del procesamiento de tarjetas de crédito.",
          contents: [
            "Proyecto migratorio que representa una importante transformación estratégica en el procesamiento de tarjetas de crédito, sustituyendo la plataforma actual por una solución más avanzada proporcionada por un nuevo proveedor.",
            "Este cambio fundamental no sólo asegurará la continuidad operacional, sino que también mejorará nuestras capacidades tecnológicas y de negocio relacionadas con las tarjetas de crédito.",
            "El proyecto enfatiza la innovación constante, la mejora en la eficacia operativa y el fortalecimiento de nuestra posición en el mercado para proporcionar a los clientes la mejor experiencia.",
            "Se espera que esta iniciativa marque el comienzo de una nueva era de excelencia y crecimiento para la organización."
          ],
          externalLink: "https://example.com/es/project1",
          githubRepo: "https://github.com/your-repo/project1-es"
        },
        project2: {
          title: "AcuaMattic Dataset",
          description: "Conjunto de datos reales y diversificados para clasificación de peces ornamentales.",
          contents: [
            "La necesidad imperante surge por la falta de bancos de imágenes especializados en peces ornamentales, lo que representa un obstáculo para la investigación y desarrollo de tecnologías relacionadas con la preservación y cuidado de estas especies. Además, obtener imágenes y videos variados de ejemplares de una misma especie representa un desafío importante.",
            "Para abordar este problema se propone la creación de un amplio y diversificado conjunto de datos de imágenes de peces ornamentales, fundamental para el entrenamiento de modelos de clasificación.",
            "Fases clave: recogida de datos mediante vídeos en entornos controlados; procesamiento usando técnicas de visión artificial para recorte y normalización; y creación del dataset final con imágenes de 30 especies diferentes. Este enfoque evita datos sintéticos, reduce el sobreajuste y mejora la calidad del conjunto resultante."
          ],
          externalLink: "https://example.com/es/project2",
          githubRepo: "https://github.com/your-repo/project2-es"
        },
        project3: {
          title: "AcuaMattic IA & Robótica (Prototipo)",
          description: "Asistente inteligente para acuarios basado en visión artificial y robótica.",
          contents: [
            "El objetivo de este proyecto es mejorar el bienestar social mediante la creación de una herramienta que facilite la adquisición e instalación responsable y sostenible de acuarios para usuarios de todos los niveles, ya sean entusiastas experimentados o recién llegados a la afición.",
            "Es un modelo clasificador de peces, meticulosamente entrenado con una vasta colección de miles de videos e imágenes que cubren las especies ornamentales más comunes. Este enfoque permite ofrecer un soporte altamente personalizado a cada usuario, adaptado a las características específicas de las especies identificadas en su acuario.",
            "Una vez que el sistema detecta y reconoce la especie en cuestión, se comunica con un robot instalado en el acuario para recopilar datos precisos sobre los parámetros actuales del agua. A continuación se proporcionan recomendaciones precisas para la configuración óptima de estos parámetros, lo que contribuye al mantenimiento del acuario y al bienestar de las especies que lo habitan."
          ],
          externalLink: "https://www.elconfidencialdigital.com/monarquia/articulo/an/como-evitar-muerte-miles-millones-peces/20211105193248069486.html",
          githubRepo: "https://github.com/your-repo/project3-es"
        },
        project4: {
          title: "SPR (Sistema de Personal & Remuneraciones)",
          description: "Sistema corporativo de RRHH para la gestión integral del personal del Grupo Falabella.",
          contents: [
            "Sistema de RRHH corporativo, integrado a la intranet corporativa del Grupo Falabella, atendiendo las necesidades de diversos países de América Latina, incluidos Chile, Perú, Colombia, Argentina y Uruguay.",
            "En esencia, este sistema constituye la columna vertebral de la gestión de empleados, el manejo eficiente del personal y la administración de compensaciones para todas las empresas del Grupo Falabella, que engloba a Falabella Retail, Falabella Financial, Sodimac y Tottus.",
            "Características clave: Nómina, Dotación de personal, Operaciones de tienda, Finanzas, Logística, Control de acceso."
          ],
          externalLink: "https://example.com/es/project4",
          githubRepo: "https://github.com/your-repo/project4-es"
        },
        project5: {
          title: "Movistar Canal Online",
          description: "Migración del portal Movistar Chile para mejorar la experiencia y autonomía del cliente.",
          contents: [
            "Migración del portal privado para clientes de Movistar Chile utilizando IBM WebSphere, con desarrollo front-end de portlets y back-end de servicios web para ampliar funcionalidades y reducir procesos manuales.",
            "Funcionalidades clave incluyen acceso detallado a planes de hogar y móviles, información de facturación, contratación de servicios adicionales, pagos seguros en línea y renovación de equipos.",
            "Esta actualización significativa optimiza la experiencia del cliente, aumentando su autonomía y comodidad en la gestión de servicios y cuentas."
          ],
          externalLink: "https://identity.movistar.cl/login?_gl=1*gan1wb*_gcl_au*MTk4NDIyMjUxNi4xNjkzMDE1NDk5&_ga=2.21479423.531242504.1693015499-1259711125.1693015499",
          githubRepo: "https://github.com/your-repo/project5-es"
        },
        project6: {
          title: "Supervisor Electrónico",
          description: "Solución de supervisión electrónica para optimizar el proceso de compra en Walmart Chile.",
          contents: [
            "Una solución de supervisión electrónica de puntos de venta (POS), diseñada para agilizar el proceso de compra en Walmart Chile (incluidos Líder, Express y Super Bodega a cuenta).",
            "Esta aplicación está diseñada específicamente para atender las solicitudes de los clientes de forma remota cuando realizan pagos en el mostrador de caja.",
            "Permite respuestas rápidas a ajustes de precios y cancelaciones de productos durante el proceso de facturación. Esta herramienta está destinada exclusivamente a cajeros y supervisores de supermercados autorizados."
          ],
          externalLink: "https://example.com/es/project6",
          githubRepo: "https://github.com/your-repo/project6-es"
        },
        project7: {
          title: "on-premise2cloud",
          description: "Migración de infraestructura on-premise a AWS para escalar y modernizar operaciones.",
          contents: [
            "La empresa migró sus operaciones a Amazon Web Services (AWS) para abordar desafíos clave como la escalabilidad, el procesamiento masivo de datos y el desarrollo de soluciones de inteligencia artificial.",
            "El proyecto incluyó la creación de una cuenta empresarial en AWS, migración de datos, automatización de procesos, generación de datasets especializados y configuración de entornos seguros y flexibles.",
            "Se implementaron servicios como Amazon S3, EC2 y SageMaker, junto con políticas avanzadas de seguridad IAM, logrando una infraestructura moderna, segura y alineada con los objetivos de innovación tecnológica."
          ],
          externalLink: "https://example.com/es/project7",
          githubRepo: "https://github.com/your-repo/project7-es"
        },
        project8: {
          title: "Tiempo & Asistencia (T&A)",
          description: "Sistema de asistencia digital para mejorar la gestión y experiencia laboral en múltiples países.",
          contents: [
            "Sistema de Gestión de Asistencia Corporativa, diseñado para mejorar la experiencia general de los empleados en diferentes países (Chile, Perú y Colombia) y diversos negocios del grupo Falabella (incluyendo Falabella Retail, Sodimac, Tottus, Falabella Financial, Mall Plaza, Falabella.com, Corporativo Falabella e IKEA).",
            "La implementación de esta tecnología de vanguardia se alinea con las necesidades actuales de asistencia de la fuerza laboral, enfatizando los métodos de registro remoto para promover canales digitales (a través de aplicaciones y web), reduciendo así la dependencia de dispositivos biométricos. También proporciona datos vitales para la gestión de varios indicadores de desempeño asociados, ayudando en el cálculo de asistencia y facilitando una gestión eficiente de los turnos.",
            "Objetivos claves: velar por el cumplimiento legal, adquirir datos para optimizar turnos, recopilar métricas como ausentismo y horas extras, e introducir el registro remoto. KPIs: satisfacción de los empleados, horas extras, tasas de absentismo, registros en disputa y tiempo dedicado a conciliación mensual."
          ],
          externalLink: "https://example.com/es/project8",
          githubRepo: "https://github.com/your-repo/project8-es"
        },
        project9: {
          title: "Motor de Factultades",
          description: "Solución bancaria para análisis legal automatizado en PDF.",
          contents: [
            "Este proyecto consiste en el desarrollo de una avanzada solución bancaria para el sector corporativo con la función principal de procesar y analizar detalladamente documentos PDF con autorizaciones legales.",
            "Esta tecnología permite la personalización precisa de productos y servicios para los clientes, al aprovechar la información obtenida.",
            "Esta solución resulta en una mejora significativa en la optimización de procesos comerciales existentes y una mayor eficiencia en la toma de decisiones."
          ],
          externalLink: "https://identity.movistar.cl/login?_gl=1*gan1wb*_gcl_au*MTk4NDIyMjUxNi4xNjkzMDE1NDk5&_ga=2.21479423.531242504.1693015499-1259711125.1693015499",
          githubRepo: "https://github.com/your-repo/project9-es"
        },
        project10: {
          title: "S-Box",
          description: "Un entorno para analizar vídeos relacionados con episodios de sonrisas.",
          contents: [
            "El Proyecto S-Box es una solución innovadora en Computación Afectiva que utiliza Inteligencia Artificial y Visión por Computadora para analizar minuciosamente videos con sonrisas.",
            "Incluye análisis avanzado de sonrisas, captura multimodal, sincronización automática precisa, filtrado inteligente de sonrisas, generación de secuencias y visualización avanzada con IA.",
            "S-Box impulsa la comprensión de emociones humanas en interacciones tecnológicas, siendo una herramienta clave para investigadores y profesionales en entornos experimentales controlados."
          ],
          externalLink: "https://example.com/es/project10",
          githubRepo: "https://github.com/aandmaldonado/S-Box"
        },
        project11: {
          title: "Anulaciones 2.0",
          description: "Sistema de backoffice para gestión de cancelaciones de ventas en Transbank.",
          contents: [
            "Este sistema es parte del backoffice transaccional de Transbank, diseñado específicamente para procesar solicitudes de cancelación de ventas.",
            "Solicitudes de cancelación: inicie sin esfuerzo solicitudes de cancelación individuales y cancelaciones por lotes cargando archivos. Las cancelaciones pueden ser totales (cubriendo todo el importe de la venta) o parciales (por importes inferiores al valor total de la venta).",
            "Registro de cancelaciones masivas: recupere fácilmente un historial detallado de todas las solicitudes de cancelación masiva realizadas por un comerciante específico.",
            "Informe de auditoría: revise cómodamente un registro completo de solicitudes de cancelación, tanto individuales como masivas, que abarca hasta 1 año de datos históricos."
          ],
          externalLink: "https://www.youtube.com/watch?v=Nu-q-zOvibA",
          githubRepo: "https://github.com/your-repo/project10-es"
        }
      },
      skills: {
        title: "Habilidades",
        technical: {
          title: "Habilidades Técnicas"
        },
        soft_skills: {
          title: "Habilidades Blandas",
          communication: "Comunicación",
          teamwork: "Trabajo en Equipo",
          problem_solving: "Resolución de Problemas",
          adaptability: "Adaptabilidad",
          leadership: "Liderazgo",
          time_management: "Gestión del Tiempo"
        },
        languages: {
          title: "Idiomas",
          spanish: "Español",
          english: "Inglés",
          native: "Nativo",
          intermediate: "B1-B2"
        },
        api_design: {
          title: "Diseño de APIs",
          skills: "Swagger, OpenAPI"
        },
        code_review: {
          title: "Revisión de Código",
          skills: "Sonar, Veracode, Checkstyle"
        },
        project_management: {
          title: "Gestión de Proyectos",
          skills: "Jira, Confluence"
        },
        frontend: {
          title: "Frontend",
          skills: "HTML, CSS, JavaScript, React"
        },
        backend: {
          title: "Backend",
          skills: "Java, Spring Boot, Python, Flask, FastAPI, API Rest"
        },
        database: {
          title: "Base de Datos",
          skills: "SQL, PL/SQL, Oracle, MySQL, PostgreSQL, NoSQL, MongoDB, JPA, Hibernate"
        },
        code_management: {
          title: "Gestión de Código",
          skills: "GitHub, GitLab, Bitbucket"
        },
        build_tools: {
          title: "Herramientas de Construcción",
          skills: "Maven, Gradle"
        },
        testing: {
          title: "Pruebas",
          skills: "JUnit, Mockito, Spock, Karate, ArchUnit"
        },
        cicd: {
          title: "CI/CD",
          skills: "Jenkins, GitHub Actions, Bamboo, Kubernetes, Docker"
        },
        monitoring: {
          title: "Monitoreo",
          skills: "Splunk, Dynatrace, Elasticsearch"
        },
        cloud: {
          title: "Cloud (AWS)",
          skills: "IAM, EC2, Elastic Beanstalk, Lambda, RDS, DynamoDB, CLI, S3, API Gateway, SageMaker, Rekognition, Lex, CloudFront, Route 53"
        },
        ai: {
          title: "IA",
          skills: "Jupyter, Prompting, GenAI, LLM, RAG, HuggingFace, LangChain, OpenCV, SciKit-Learn, TensorFlow, Pytorch, OpenAI, ChatGPT"
        }
      },
      footer: {
        slogan: "Construyendo el futuro con código",
        made_with: "Hecho con IA",
        copyright: "© 2024 Álvaro Maldonado. Todos los derechos reservados."
      },
      chatbot: {
        name: "Álvaro Maldonado",
        online_status: "En línea",
        welcome_message: "¡Hola! 👋 Soy Álvaro. Estoy aquí para responder tus preguntas sobre mi experiencia profesional, educación y otros temas laborales. ¡Pregúntame lo que necesites! 😊",
        input_placeholder: "Escribe tu mensaje..."
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
