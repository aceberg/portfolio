import CardCV from "./CardCV"


function Sidebar() {

  return (
    <>
    <CardCV head="Andrew Erlikh"
      body={<>
        <div class="italic">Fullstack-developer,</div>
        <div class="italic">Linux sysadmin</div>
        <div class="mt-2">
          <i class="bi bi-github me-2"></i>
          <a class="mytag" href="https://github.com/aceberg" target="_blank">github.com/aceberg</a>
        </div>
        <div class="mt-2">
          <i class="bi bi-envelope-at me-2"></i>
          <a class="mytag" href="mailto:aceberg_a@proton.me" target="_blank">aceberg_a@proton.me</a>
        </div>
        <div class="mt-2">
          <i class="bi bi-send me-2"></i>
          <a class="mytag" href="https://t.me/AndrewErlikh" target="_blank">https://t.me/AndrewErlikh</a>
        </div>
      </>}
    ></CardCV>
    </>
  )
}

export default Sidebar
