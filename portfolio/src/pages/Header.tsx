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
    <nav class="text-white border-gray-800 border-b">
      <div class="flex justify-between p-4 px-12">
        <div class="flex space-x-6">
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
        <a href="https://github.com/aceberg" target="_blank" class="flex justify-end text-xl">
          <i class="bi bi-github"></i>
        </a>
      </div>
    </nav>

    </>
  )
}

export default Header
