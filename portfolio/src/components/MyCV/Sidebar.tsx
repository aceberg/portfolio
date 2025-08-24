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
          <a class="mytag text-sm" href="https://github.com/aceberg" target="_blank">github.com/aceberg</a>
          <div class="mytip">GitHub</div>
        </div>
        <div class="mt-2 relative group">
          <i class="bi bi-envelope-at me-2"></i>
          <a class="mytag text-sm" href="mailto:aceberg_a@proton.me" target="_blank">aceberg_a@proton.me</a>
          <div class="mytip">E-mail</div>
        </div>
        <div class="mt-2 relative group">
          <i class="bi bi-send me-2"></i>
          <a class="mytag text-sm" href="https://t.me/AndrewErlikh" target="_blank">@AndrewErlikh</a>
          <div class="mytip">Telegram</div>
        </div>

        <h2 class="mt-12 mb-6 font-semibold text-white">Skills</h2>
        <div class="grid grid-cols-4 gap-4">
        <IconTag icon="devicon-bootstrap-plain-wordmark" tag="Bootstrap" l="y" />
        <IconTag icon="devicon-firefox-plain" tag="Firefox Extension" l="y" />
        <IconTag icon="devicon-flutter-plain" tag="Flutter" l="y" />
        <IconTag icon="devicon-go-original-wordmark" tag="Go" l="y" />
        <IconTag icon="devicon-javascript-plain" tag="JavaScript" l="y" />  
        <IconTag icon="devicon-mobx-plain" tag="MobX" l="y" />
        <IconTag icon="devicon-python-plain-wordmark" tag="Python" l="y" />
        <IconTag icon="devicon-react-original-wordmark" tag="React" l="y" />
        <IconTag icon="devicon-solidjs-plain" tag="SolidJS" l="y" />
        <IconTag icon="devicon-swagger-plain-wordmark" tag="Swagger" l="y" />
        <IconTag icon="devicon-tailwindcss-plain" tag="Tailwind CSS" l="y" />
        <IconTag icon="devicon-typescript-plain" tag="TypeScript" l="y" />
        </div>

        <div class="mt-16 grid grid-cols-4 gap-4">
        <IconTag icon="devicon-ansible-plain-wordmark" tag="Ansible" l="y" />
        <IconTag icon="devicon-bash-plain" tag="Bash" l="y"/>
        <IconTag icon="devicon-docker-plain-wordmark" tag="Docker" l="y" />
        <IconTag icon="devicon-git-plain-wordmark" tag="git" l="y" />
        <IconTag icon="devicon-grafana-plain-wordmark" tag="Grafana" l="y" />
        <IconTag icon="devicon-helm-original" tag="Helm" l="y"/>
        <IconTag icon="devicon-influxdb-original-wordmark" tag="InfluxDB" l="y" />
        <IconTag icon="devicon-kubernetes-plain-wordmark" tag="Kubernetes" l="y" />
        <IconTag icon="devicon-codepen-original" tag="LXD/Incus" l="y"/>
        <IconTag icon="devicon-mysql-plain-wordmark" tag="MySQL" l="y" />
        <IconTag icon="devicon-postgresql-plain-wordmark" tag="PostgreSQL" l="y" />
        <IconTag icon="devicon-prometheus-plain-wordmark" tag="Prometheus" l="y" />
        </div>
      </>}
    ></CardCV>
    </>
  )
}

export default Sidebar
