import { For } from "solid-js"
import { myApps } from "../../utils/exports"
import SingleCard from "./SingleCard"


function Cards() {

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <For each={myApps()}>{(app) =>
          <SingleCard app={app}></SingleCard>
        }</For>
      </div>
    </>
  )
}

export default Cards
