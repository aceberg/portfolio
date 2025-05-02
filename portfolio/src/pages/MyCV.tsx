import Sidebar from "../components/MyCV/Sidebar"


function MyCV() {



  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div class="mycard col-span-2 p-4">Main content</div>
      </div>
    </>
  )
}

export default MyCV
