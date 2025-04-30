import { For } from "solid-js";
import Tag from "../Tag";


function Bottom(_props: any) {

  return (
    <>
    <a href={_props.app.Link} target="_blank">
      <div class="h-48 overflow-hidden rounded-lg relative">
        {_props.app.Screen === "" ? "" : 
          <img src={_props.app.Screen} class="w-full h-full object-cover" />
        }
        

        <div class="absolute bottom-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded flex flex-wrap space-x-2">
          <p>Created: {_props.app.Created}</p>
          <p>Updated: {_props.app.Updated}</p>
        </div>
      </div>
    </a>

    <div class="flex flex-wrap gap-4 mt-2">
      <For each={_props.app.Tags}>{(tag) =>
        <Tag tag={tag} />
      }</For>
    </div>
    </>
  )
}

export default Bottom
