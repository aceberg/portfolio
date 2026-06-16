
function Middle(_props: any) {

  return (
    <div class="h-45 overflow-hidden rounded-lg relative">
      {_props.app.Screen === "" ? "" : 
        <img src={_props.app.Screen} class="w-full h-full object-cover" />
      }
      
      <div class="absolute bottom-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded flex flex-wrap space-x-2">
        <p>Created: {_props.app.Created}</p>
        <p>Updated: {_props.app.Updated}</p>
      </div>
    </div>
  )
}

export default Middle
