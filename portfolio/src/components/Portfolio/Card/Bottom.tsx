import { For } from "solid-js";
import Tag from "../Tag";


function Bottom(_props: any) {

  return (
    <div class="md:h-55">
      <a href={_props.app.Link} target="_blank">
        <div class="h-45 overflow-hidden rounded-lg relative">
          {_props.app.Screen === "" ? "" : 
            <img src={_props.app.Screen} class="w-full h-full object-cover" />
          }
          

          <div class="absolute bottom-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded flex flex-wrap space-x-2">
            <p>Created: {_props.app.Created}</p>
            <p>Updated: {_props.app.Updated}</p>
          </div>
        </div>
      </a>

      <div class="flex flex-wrap items-center gap-x-4 mt-2 md:h-10">
        <For each={_props.app.Tags}>{(tag) =>
          <Tag tag={tag} />
        }</For>
      </div>
    </div>
  )
}

export default Bottom
