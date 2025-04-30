import { Show } from "solid-js"
import { currentPage, setCurrentPage } from "../utils/exports"


function Header() {

  const handleCV = () => {
    setCurrentPage("cv");
  }

  const handlePortfolio = () => {
    setCurrentPage("portfolio");
  }

  return (
    <>
    <nav class="text-white">
      <div class="flex items-center justify-between">
        <div class="flex space-x-6 p-4 px-12">
        <Show
            when={currentPage() === "portfolio"}
            fallback={<>
              <a href="#" onClick={handlePortfolio}>Portfolio</a>
              <a href="#" class="text-indigo-200">My CV</a>
            </>}
          >
            <a href="#" class="text-indigo-200">Portfolio</a>
            <a href="#" onClick={handleCV}>My CV</a>
          </Show>
        </div>
        <a href="https://github.com/aceberg" target="_blank" class="flex justify-end p-4 px-12 text-xl">
          <i class="bi bi-github"></i>
        </a>
      </div>
    </nav>

    </>
  )
}

export default Header
