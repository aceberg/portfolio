import { For } from "solid-js";
import Tag from "../Tag";


function Bottom(_props: any) {

  return (
    <div class="flex flex-wrap items-center gap-x-4 mt-2 md:h-10">
      <For each={_props.app.Tags}>{(tag) =>
        <Tag tag={tag} />
      }</For>
    </div>
  )
}

export default Bottom
