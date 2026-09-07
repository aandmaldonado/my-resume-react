import {
  siApachekafka,
  siBamboo,
  siCursor,
  siDocker,
  siDynatrace,
  siElasticsearch,
  siFastapi,
  siGithubactions,
  siGithubcopilot,
  siGitlab,
  siGooglegemini,
  siGooglecloud,
  siGooglepubsub,
  siHuggingface,
  siJenkins,
  siJsonwebtokens,
  siJunit5,
  siJupyter,
  siKeras,
  siKubernetes,
  siMongodb,
  siNumpy,
  siOpenapiinitiative,
  siOpencv,
  siOwasp,
  siPandas,
  siPostgresql,
  siPython,
  siPytorch,
  siScikitlearn,
  siScipy,
  siSonarqubeserver,
  siSplunk,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siSwagger,
  siTensorflow,
  type SimpleIcon,
} from "simple-icons"

export type StackIcon = {
  id: string
  alt: string
  /** Inline SVG from simple-icons */
  path?: string
  hex?: string
  /** Local asset under /public */
  src?: string
}

type IconDef =
  | { id: string; alt: string; icon: SimpleIcon }
  | { id: string; alt: string; src: string }

/** Keyword matchers — longer / more specific patterns first */
const ICON_DEFS: { pattern: RegExp; def: IconDef }[] = [
  { pattern: /\bgithub\s*actions\b/i, def: { id: "githubactions", alt: "GitHub Actions", icon: siGithubactions } },
  { pattern: /\bgithub\s*copilot\b|\bcopilot\b/i, def: { id: "githubcopilot", alt: "GitHub Copilot", icon: siGithubcopilot } },
  { pattern: /\bspring\s*boot\b/i, def: { id: "springboot", alt: "Spring Boot", icon: siSpringboot } },
  { pattern: /\bspring\s*security\b/i, def: { id: "springsecurity", alt: "Spring Security", icon: siSpringsecurity } },
  { pattern: /\bspring\s*(data|batch|jpa)\b/i, def: { id: "spring", alt: "Spring", icon: siSpring } },
  { pattern: /\bazure\s*devops\b/i, def: { id: "azuredevops", alt: "Azure DevOps", src: "/stack/azuredevops.svg" } },
  { pattern: /\bamazon\s*web\s*services\b|\baws\b/i, def: { id: "aws", alt: "Amazon Web Services (AWS)", src: "/stack/amazonwebservices.svg" } },
  { pattern: /\bgoogle\s*cloud\b|\bgcp\b/i, def: { id: "gcp", alt: "Google Cloud Platform", icon: siGooglecloud } },
  { pattern: /\bpub\/?\s*sub\b/i, def: { id: "pubsub", alt: "GCP Pub/Sub", icon: siGooglepubsub } },
  { pattern: /\bapache\s*kafka\b|\bkafka\b/i, def: { id: "kafka", alt: "Apache Kafka", icon: siApachekafka } },
  { pattern: /\bhugging\s*face\b/i, def: { id: "huggingface", alt: "Hugging Face", icon: siHuggingface } },
  { pattern: /\bscikit[- ]?learn\b/i, def: { id: "scikitlearn", alt: "Scikit-Learn", icon: siScikitlearn } },
  { pattern: /\belasticsearch\b/i, def: { id: "elasticsearch", alt: "Elasticsearch", icon: siElasticsearch } },
  { pattern: /\bsonarqube\b/i, def: { id: "sonarqube", alt: "SonarQube", icon: siSonarqubeserver } },
  { pattern: /\bopenapi\b/i, def: { id: "openapi", alt: "OpenAPI", icon: siOpenapiinitiative } },
  { pattern: /\bswagger\b/i, def: { id: "swagger", alt: "Swagger", icon: siSwagger } },
  { pattern: /\bpostgresql\b|\bpostgres\b/i, def: { id: "postgresql", alt: "PostgreSQL", icon: siPostgresql } },
  { pattern: /\bmongodb\b/i, def: { id: "mongodb", alt: "MongoDB", icon: siMongodb } },
  { pattern: /\bkubernetes\b|\bk8s\b/i, def: { id: "kubernetes", alt: "Kubernetes", icon: siKubernetes } },
  { pattern: /\bdocker\b/i, def: { id: "docker", alt: "Docker", icon: siDocker } },
  { pattern: /\bmatplotlib\b/i, def: { id: "matplotlib", alt: "Matplotlib", src: "/stack/matplotlib.svg" } },
  { pattern: /\bseaborn\b/i, def: { id: "seaborn", alt: "Seaborn", src: "/stack/seaborn.svg" } },
  { pattern: /\bnumpy\b/i, def: { id: "numpy", alt: "NumPy", icon: siNumpy } },
  { pattern: /\bpandas\b/i, def: { id: "pandas", alt: "Pandas", icon: siPandas } },
  { pattern: /\bscipy\b/i, def: { id: "scipy", alt: "SciPy", icon: siScipy } },
  { pattern: /\bpython\b/i, def: { id: "python", alt: "Python", icon: siPython } },
  { pattern: /\bfastapi\b/i, def: { id: "fastapi", alt: "FastAPI", icon: siFastapi } },
  { pattern: /\bpytorch\b/i, def: { id: "pytorch", alt: "PyTorch", icon: siPytorch } },
  { pattern: /\btensorflow\b/i, def: { id: "tensorflow", alt: "TensorFlow", icon: siTensorflow } },
  { pattern: /\bkeras\b/i, def: { id: "keras", alt: "Keras", icon: siKeras } },
  { pattern: /\bopencv\b/i, def: { id: "opencv", alt: "OpenCV", icon: siOpencv } },
  { pattern: /\bjenkins\b/i, def: { id: "jenkins", alt: "Jenkins", icon: siJenkins } },
  { pattern: /\bbamboo\b/i, def: { id: "bamboo", alt: "Bamboo", icon: siBamboo } },
  { pattern: /\bgitlab\b/i, def: { id: "gitlab", alt: "GitLab", icon: siGitlab } },
  { pattern: /\bsplunk\b/i, def: { id: "splunk", alt: "Splunk", icon: siSplunk } },
  { pattern: /\bdynatrace\b/i, def: { id: "dynatrace", alt: "Dynatrace", icon: siDynatrace } },
  { pattern: /\bcursor\b/i, def: { id: "cursor", alt: "Cursor", icon: siCursor } },
  { pattern: /\bgemini\b/i, def: { id: "gemini", alt: "Google Gemini", icon: siGooglegemini } },
  { pattern: /\bopenai\b/i, def: { id: "openai", alt: "OpenAI", src: "/stack/openai.svg" } },
  { pattern: /\bjupyter\b/i, def: { id: "jupyter", alt: "Jupyter Notebook", icon: siJupyter } },
  { pattern: /\bjunit\b/i, def: { id: "junit", alt: "JUnit", icon: siJunit5 } },
  { pattern: /\bjwt\b|json\s*web\s*token/i, def: { id: "jwt", alt: "JSON Web Tokens (JWT)", icon: siJsonwebtokens } },
  { pattern: /\bowasp\b/i, def: { id: "owasp", alt: "OWASP", icon: siOwasp } },
  { pattern: /\bjava\b/i, def: { id: "java", alt: "Java", src: "/stack/java.svg" } },
  { pattern: /\boracle\b|\bpl\/?sql\b/i, def: { id: "oracle", alt: "Oracle DB", src: "/stack/oracle.svg" } },
]

function toStackIcon(def: IconDef): StackIcon {
  if ("src" in def) {
    return { id: def.id, alt: def.alt, src: def.src }
  }
  return {
    id: def.id,
    alt: def.alt,
    path: def.icon.path,
    hex: `#${def.icon.hex}`,
  }
}

/**
 * Parses free-text stack entries from the CV and extracts brand icons.
 * Compound strings (e.g. "CI/CD (GitHub Actions, Jenkins)") yield multiple icons.
 */
export function extractStackIcons(stack: string[] | undefined | null): StackIcon[] {
  if (!stack?.length) return []

  const seen = new Set<string>()
  const icons: StackIcon[] = []

  for (const entry of stack) {
    for (const { pattern, def } of ICON_DEFS) {
      if (!pattern.test(entry)) continue
      if (seen.has(def.id)) continue
      seen.add(def.id)
      icons.push(toStackIcon(def))
    }
  }

  return icons
}
