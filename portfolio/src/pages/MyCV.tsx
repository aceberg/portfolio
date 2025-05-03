import About from "../components/MyCV/About"
import Education from "../components/MyCV/Education"
import Fullstack from "../components/MyCV/Fullstack"
import Sidebar from "../components/MyCV/Sidebar"
import Sysadmin from "../components/MyCV/Sysadmin"

function MyCV() {

  return (
    <>
      <div class="flex flex-col md:flex-row items-start gap-8 mt-4">
        <div class="w-full md:w-1/3">
          <Sidebar></Sidebar>
        </div>
        <div class="w-full md:w-2/3">
          <div class="grid grid-cols-1 gap-8">
          <About></About>
          <Fullstack></Fullstack>
          <Sysadmin></Sysadmin>
          <Education></Education>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCV
