import CardCV from "./CardCV"


function Sysadmin() {

  return (
    <>
    <CardCV head="Linux System Administrator (2011 – 2024)"
      body={<>
        <div>Over a decade of experience managing Linux infrastructure, automation, and security.</div>
        <div class="px-4">
        <li>Maintained server and desktop infrastructure</li>
        <li>Automated workflows using Ansible and optimized deployments with Docker</li>
        <li>Configured CI/CD pipelines and enhanced system monitoring with Grafana</li>
        </div>
      </>}
    ></CardCV>
    </>
  )
}

export default Sysadmin
