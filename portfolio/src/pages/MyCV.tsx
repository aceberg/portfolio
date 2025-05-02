import About from "../components/MyCV/About"
import Education from "../components/MyCV/Education"
import Fullstack from "../components/MyCV/Fullstack"
import Sidebar from "../components/MyCV/Sidebar"
import Sysadmin from "../components/MyCV/Sysadmin"


function MyCV() {



  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div class="col-span-2">
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
