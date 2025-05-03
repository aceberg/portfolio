import { setCurrentPage } from "../../utils/exports"
import Tag from "../Portfolio/Tag";
import CardCV from "./CardCV"


function Fullstack() {

  return (
    <>
    <CardCV head="Fullstack Developer (2022 – Present)"
      body={<>
        Developed more than a dozen applications for work and personal needs. The Open Source apps are listed in my <span class="mytag" onClick={() => setCurrentPage("portfolio")}>Portfolio</span> with filter by technologies and sorting options. For now, <a class="mytag" href="https://github.com/aceberg/WatchYourLAN" target="_blank">WatchYourLAN</a> is the most popular one, let's focus on it:
        <div class="px-4">
          <li>It is a lightweight network IP scanner with notifications, <Tag tag="PostgreSQL" /> and Grafana support</li>
          <li>Backend written in <Tag tag="Go" />, frontend - <Tag tag="SolidJS" />/<Tag tag="TypeScript" /></li>
          <li>Uses goroutines, log levels, simple API</li>
          <li>Integrations to other projects (<a class="mytag" href="https://aur.archlinux.org/packages/watch-your-lan" target="_blank">AUR (ArchLinux)</a>, 
          <a class="mytag" href="https://community-scripts.github.io/ProxmoxVE/scripts?id=watchyourlan" target="_blank">Proxmox VE WatchYourLAN LXC</a>, 
          <a class="mytag" href="https://apps.umbrel.com/app/watch-your-lan" target="_blank">Umbrel</a>, 
          <a class="mytag" href="https://apps.yunohost.org/app/watchyourlan" target="_blank">YunoHost</a>
          ) are supported by independent maintainers</li>
        </div>
      </>}
    ></CardCV>
    </>
  )
}

export default Fullstack
