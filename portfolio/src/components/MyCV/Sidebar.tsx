import CardCV from "./CardCV"
import IconTag from "./IconTag"


function Sidebar() {

  return (
    <>
    <CardCV head="Andrew Erlikh"
      body={<>
        <div class="italic">Fullstack-developer,</div>
        <div class="italic">Linux engineer</div>
        <div class="mt-2 relative group">
          <i class="bi bi-github me-2"></i>
          <a class="mytag" href="https://github.com/aceberg" target="_blank">github.com/aceberg</a>
          <div class="mytip">GitHub</div>
        </div>
        <div class="mt-2 relative group">
          <i class="bi bi-envelope-at me-2"></i>
          <a class="mytag" href="mailto:aceberg_a@proton.me" target="_blank">aceberg_a@proton.me</a>
          <div class="mytip">E-mail</div>
        </div>
        <div class="mt-2 relative group">
          <i class="bi bi-send me-2"></i>
          <a class="mytag" href="https://t.me/AndrewErlikh" target="_blank">@AndrewErlikh</a>
          <div class="mytip">Telegram</div>
        </div>

        <div class="mt-16 grid grid-cols-4 gap-4">
        <IconTag icon="devicon-bootstrap-plain-wordmark" tag="Bootstrap" l="y"></IconTag>
        <IconTag icon="devicon-firefox-plain" tag="Firefox Extension" l="y"></IconTag>
        <IconTag icon="devicon-flutter-plain" tag="Flutter" l="y"></IconTag>
        <IconTag icon="devicon-go-original-wordmark" tag="Go" l="y"></IconTag>
        <IconTag icon="devicon-javascript-plain" tag="JavaScript" l="y"></IconTag>  
        <IconTag icon="devicon-mobx-plain" tag="MobX" l="y"></IconTag>
        <IconTag icon="devicon-postgresql-plain-wordmark" tag="PostgreSQL" l="y"></IconTag>
        <IconTag icon="devicon-react-original-wordmark" tag="React" l="y"></IconTag>
        <IconTag icon="devicon-solidjs-plain" tag="SolidJS" l="y"></IconTag>
        <IconTag icon="devicon-tailwindcss-plain" tag="Tailwind CSS" l="y"></IconTag>
        <IconTag icon="devicon-typescript-plain" tag="TypeScript" l="y"></IconTag>
        <IconTag icon="devicon-vite-original-wordmark" tag="Vite"></IconTag>
        </div>

        <div class="mt-16 grid grid-cols-4 gap-4">
        <IconTag icon="devicon-ansible-plain-wordmark" tag="Ansible"></IconTag>
        <IconTag icon="devicon-bash-plain" tag="Bash"></IconTag>
        <IconTag icon="devicon-debian-plain-wordmark" tag="Debian"></IconTag>
        <IconTag icon="devicon-docker-plain-wordmark" tag="Docker"></IconTag>
        <IconTag icon="devicon-git-plain-wordmark" tag="Git"></IconTag>
        <IconTag icon="devicon-grafana-plain-wordmark" tag="Grafana"></IconTag>
        <IconTag icon="devicon-influxdb-original-wordmark" tag="InfluxDB" l="y"></IconTag>
        <IconTag icon="devicon-kubernetes-plain-wordmark" tag="Kubernetes"></IconTag>
        <IconTag icon="devicon-linux-plain" tag="Linux"></IconTag>
        <IconTag icon="devicon-prometheus-plain-wordmark" tag="Prometheus" l="y"></IconTag>
        <IconTag icon="devicon-redhat-plain-wordmark" tag="RedHat"></IconTag>
        <IconTag icon="devicon-ubuntu-plain-wordmark" tag="Ubuntu"></IconTag>
        </div>
      </>}
    ></CardCV>
    </>
  )
}

export default Sidebar
