import CardCV from "./CardCV"


function Sysadmin() {

  return (
    <>
    <CardCV head="Linux System Administrator (2011 – 2024)"
      body={<>
        <div>Administration of local networks, servers and workstations
        on Linux</div>
        <div class="px-4">
          <li>Configuration automation (Ansible, Docker, git)</li>
          <li>Network security, protection against hacking and data loss</li>
          <li>Migration from Windows to Linux, user training</li>
        </div>
      </>}
    ></CardCV>
    </>
  )
}

export default Sysadmin
