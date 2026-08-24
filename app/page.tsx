const stats = [
  { value: "10+", label: "years building software & platforms" },
  { value: "30%", label: "reduction in AWS infrastructure spend" },
  { value: "4–5", label: "years shaping architecture & standards" },
];

const impact = [
  {
    number: "01",
    title: "A platform built for change",
    summary: "Designed and operated production infrastructure spanning AWS EKS, Hetzner bare-metal Kubernetes, and LXC—bringing diverse environments under consistent automation and operational standards.",
    tags: ["AWS EKS", "Kubernetes", "Terraform", "Ansible"],
  },
  {
    number: "02",
    title: "Visibility across every layer",
    summary: "Standardised observability with OpenTelemetry, Prometheus, Grafana, Jaeger, and Sentry—giving teams clearer signals across cloud-native and legacy workloads.",
    tags: ["OpenTelemetry", "Prometheus", "Jaeger", "Sentry"],
  },
  {
    number: "03",
    title: "30% less cloud spend",
    summary: "Led a practical AWS cost-optimisation programme through utilisation reviews, resource cleanup, and instance standardisation—lowering spend without trading away reliability.",
    tags: ["FinOps", "AWS", "Governance", "Reliability"],
  },
];

const projects = [
  {
    name: "Insight Agent",
    description: "A security-minded serverless FastAPI service on Google Cloud Run, fully provisioned with Terraform and delivered through keyless CI/CD.",
    stack: "Python · GCP · Terraform",
    url: "https://github.com/sartim/insight-agent",
  },
  {
    name: "Storemesh User Service",
    description: "A Go identity service with explicit HTTP and gRPC adapters, shared domain logic, session controls, and an OpenAPI contract.",
    stack: "Go · gRPC · Gin",
    url: "https://github.com/sartim/storemesh-user-service",
  },
  {
    name: "M-PESA Python SDK",
    description: "A published Python integration library covering core M-PESA workflows including C2B, B2B, B2C, reversals, and transaction status.",
    stack: "Python · Payments · PyPI",
    url: "https://github.com/sartim/mpesa-sdk",
  },
  {
    name: "AWS Static Delivery",
    description: "Reusable Terraform infrastructure for delivering web applications through S3, CloudFront, and managed TLS certificates.",
    stack: "Terraform · CloudFront · S3",
    url: "https://github.com/sartim/terraform-cloudfront-s3-react-deploy",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Timothy Nyachio, home">
          <span>TN</span>
          <span className="brand-name">Timothy Nyachio</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#contact">Connect</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Software · Platforms · Infrastructure</div>
        <h1>I build software and platforms <em>that scale.</em></h1>
        <div className="hero-bottom">
          <p>
            Software and Platform Engineer with 10+ years across product
            engineering, distributed systems, cloud infrastructure, DevOps,
            and technical leadership.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore selected work <span>↘</span></a>
            <a className="button text" href="https://www.linkedin.com/in/timothy-nyachio" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="proof shell" aria-label="Career highlights">
        {stats.map((stat) => (
          <div className="stat" key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="intro shell" id="work">
        <p className="section-index">01 / Selected impact</p>
        <h2>Engineering decisions that move the business forward.</h2>
      </section>

      <section className="impact shell" aria-label="Selected professional impact">
        {impact.map((item) => (
          <article className="impact-card" key={item.number}>
            <span className="card-number">{item.number}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="tags" aria-label="Technologies and themes">
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="expertise" id="expertise">
        <div className="shell expertise-grid">
          <div>
            <p className="section-index light">02 / What I bring</p>
            <h2>Deep systems thinking. Practical delivery.</h2>
          </div>
          <div className="capabilities">
            <article>
              <span>Platform</span>
              <h3>Cloud & infrastructure</h3>
              <p>AWS and GCP, Kubernetes, Terraform, networking, GitOps, CI/CD, security, and cost governance.</p>
            </article>
            <article>
              <span>Product</span>
              <h3>Full-stack & backend engineering</h3>
              <p>Python, Go, C#, JavaScript, and TypeScript; frontend applications, REST and gRPC APIs, messaging, payments, and integrations.</p>
            </article>
            <article>
              <span>Operations</span>
              <h3>Reliability at scale</h3>
              <p>Observability, incident response, distributed tracing, performance, service networking, and production ownership.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="projects shell">
        <div className="projects-heading">
          <p className="section-index">03 / Open source</p>
          <h2>Selected public work.</h2>
          <a href="https://github.com/sartim?tab=repositories" target="_blank" rel="noreferrer">All repositories <span>↗</span></a>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <a className="project" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-stack">{project.stack}</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="profile shell">
        <p className="section-index">04 / Perspective</p>
        <div className="profile-copy">
          <blockquote>“I build across the whole system—from application code to the platform it runs on.”</blockquote>
          <div className="profile-detail">
            <p>Software and Platform Engineer with 10+ years of experience across backend and frontend development, distributed systems, cloud infrastructure, DevOps, and technical leadership.</p>
            <p>I design and operate scalable production platforms, lead architecture and engineering improvements, standardise observability and deployment practices, and improve reliability, delivery standards, and operational efficiency across complex environments.</p>
            <p>My work is collaborative and hands-on: mentoring engineers and partnering across engineering, DevOps, SRE, and business teams to turn difficult systems into dependable products.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <p className="section-index light">05 / Connect</p>
          <h2>Have a difficult system to make simpler?</h2>
          <div className="contact-row">
            <p>Let’s compare notes on the product, platform, or engineering challenge in front of you.</p>
            <div>
              <a className="button contact-button" href="https://www.linkedin.com/in/timothy-nyachio" target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a>
              <a className="github-link" href="https://github.com/sartim" target="_blank" rel="noreferrer">GitHub / sartim <span>↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Timothy Nyachio</span>
        <span>Software & Platform Engineer · Backend · Cloud · Delivery</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
