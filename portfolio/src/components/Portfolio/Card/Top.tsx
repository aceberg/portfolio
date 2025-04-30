
function Top(_props: any) {
 
  return (
    <>
      <div class="flex justify-between">
        <div class="flex space-x-4">
        {_props.app.Icon === "" ? "" : 
          <img src={_props.app.Icon} class="w-8 h-8 object-cover rounded-lg"></img>
        }
          <h2 class="text-xl font-semibold text-white mb-4">{_props.app.Name}</h2>
        </div>

        <div class="relative group inline-block">
          <div class="flex space-x-2">
            <i class="bi bi-star"></i>
            <p>{_props.app.Stars}</p>
          </div>
          <div class="mytip">GitHub stars</div>
        </div>
      </div>
      
      <p class="text-gray-400 mb-6 leading-relaxed">
        {_props.app.Text}
      </p>
    </>
  )
}

export default Top
