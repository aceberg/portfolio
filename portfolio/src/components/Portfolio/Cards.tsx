import { For } from "solid-js"
import { myApps } from "../../utils/exports"
import Card from "./Card"


function Cards() {

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <For each={myApps()}>{(app) =>
          <Card app={app}></Card>
        }</For>
      </div>
    </>
  )
}

export default Cards
