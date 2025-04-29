import { For } from "solid-js";
import { filterByTag } from "../../utils/filter";


function SingleCard(_props: any) {

  const handleOpen = () => {
    if (_props.app.Link !== "") {
      window.open(_props.app.Link, '_blank');
    }
  }

  const handleFilter = (tag: string, event: MouseEvent) => {
    event.stopPropagation();
    filterByTag(tag);
  }

  return (
    <>
      <div class="card" onClick={handleOpen}>
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <img src={_props.app.Icon} class="w-8 h-8 object-cover rounded-lg"></img>
            <h2 class="text-xl font-semibold text-white mb-4">{_props.app.Name}</h2>
          </div>

          <div class="relative group inline-block">
            <div class="flex space-x-2">
              <i class="bi bi-star"></i>
              <p>{_props.app.Stars}</p>
            </div>
            <div class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
              GitHub stars
            </div>
          </div>
        </div>
        <p class="text-gray-400 mb-6 leading-relaxed">
          {_props.app.Text}
        </p>
        
        {/* <div class="h-48 overflow-hidden rounded-lg">
          <img src={_props.app.Screen} class="w-full h-full object-cover" />
        </div> */}
        <div class="h-48 overflow-hidden rounded-lg relative">
          <img src={_props.app.Screen} class="w-full h-full object-cover" />

          <div class="absolute bottom-2 right-2 bg-black/35 text-white text-sm px-2 py-1 rounded flex flex-wrap space-x-2">
            <p>Created: {_props.app.Created}</p>
            <p>Updated: {_props.app.Updated}</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-4 mt-2">
          <For each={_props.app.Tags}>{(tag) =>
            <a class="mytag" onClick={(e) => handleFilter(tag, e)}>#{tag}</a>
          }</For>
        </div>
      </div>
    </>
  )
}

export default SingleCard
