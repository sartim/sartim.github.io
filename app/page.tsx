const stats = [
  { value: "10+", label: "years building software & platforms" },
  { value: "30%", label: "reduction in AWS infrastructure spend" },
  { value: "4 to 5", label: "years shaping architecture and standards" },
];

const impact = [
  {
    number: "01",
    title: "A platform built for change",
    summary: "Designed and operated production infrastructure spanning AWS EKS, Hetzner bare metal Kubernetes, and LXC. Brought diverse environments under consistent automation and operational standards.",
    tags: ["AWS EKS", "Kubernetes", "Terraform", "Ansible"],
  },
  {
    number: "02",
    title: "Visibility across every layer",
    summary: "Standardised observability with OpenTelemetry, Prometheus, Grafana, Jaeger, and Sentry. This gave teams clearer signals across cloud native and legacy workloads.",
    tags: ["OpenTelemetry", "Prometheus", "Jaeger", "Sentry"],
  },
  {
    number: "03",
    title: "30% less cloud spend",
    summary: "Led a practical AWS cost optimisation programme through utilisation reviews, resource cleanup, and instance standardisation. Lowered spend without trading away reliability.",
    tags: ["FinOps", "AWS", "Governance", "Reliability"],
  },
];

const projects = [
  {
    name: "Trussium",
    description: "A practical platform for building dependable software systems, bringing together clear service boundaries, automation, and production-minded engineering patterns.",
    stack: "Platform · Architecture · Delivery",
    url: "https://trussiumhq.github.io",
  },
  {
    name: "Storemesh",
    description: "A modular commerce and identity platform shaped around well-defined services, API contracts, and reliable foundations for product teams.",
    stack: "Go · APIs · Distributed systems",
    url: "https://sartim.github.io/storemesh-docs/",
  },
  {
    name: "Drogon Framework API Starter",
    description: "A production-minded C++ API starter with a clear foundation for building fast, maintainable services and documenting their interfaces.",
    stack: "C++ · Drogon · REST APIs",
    url: "https://sartim.github.io/drogon-api-starter/",
  },
  {
    name: "ASP.NET Core API Starter",
    description: "A structured .NET API foundation designed to accelerate service delivery with maintainable boundaries, documentation, and operational readiness.",
    stack: "C# · ASP.NET Core · APIs",
    url: "https://sartim.github.io/aspnet-core-api-starter/",
  },
  {
    name: "Search Engine",
    description: "A focused search platform project exploring indexing, retrieval, and the engineering foundations behind useful information discovery.",
    stack: "Search · APIs · Systems",
    url: "https://sartim.github.io/search-engine/",
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

      <section className="recruiter-note shell" aria-label="Recruiter overview">
        <p className="section-index">Quick fit</p>
        <div className="recruiter-note-copy">
          <h2>Useful when the system is complex and the outcome matters.</h2>
          <div className="recruiter-points">
            <p><strong>Best fit</strong> Software and platform engineering, backend systems, cloud infrastructure, DevOps, and technical leadership.</p>
            <p><strong>Working style</strong> Hands-on, collaborative, and comfortable moving between architecture, implementation, delivery, and operations.</p>
          </div>
        </div>
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
          <blockquote>“I build across the whole system, from application code to the platform it runs on.”</blockquote>
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
