import { createSignal } from "solid-js";
import { myAppsConst, setMyApps } from "../../utils/exports";

let down = -1;
let field = "by";

function SortSelect() {
  type FilterEvent = Event & {
    currentTarget: HTMLSelectElement;
    target: HTMLSelectElement;
  };

  const [selectValue, setSelectValue] = createSignal<string>("by");

  const handleSort = (event: FilterEvent) => {
    const value = event.target ? event.target.value : "by";
    down = - down;

    console.log("SORT", value, down);
    
    if (field === value) { field = "by" } else { field = value };
    let tmp = myAppsConst;
    switch (value) {
      case "name":
        tmp.sort((a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1)*down);
        break;
      case "created":
        tmp.sort((a, b) => (a.Created > b.Created ? 1 : -1)*down);
        break;
      case "updated":
        tmp.sort((a, b) => (a.Updated > b.Updated ? 1 : -1)*down);
        break;
      case "stars":
        tmp.sort((a, b) => (Number(a.Stars) > Number(b.Stars) ? 1 : -1)*down);
        break;
    }
    setSelectValue("");
    setSelectValue("by");
    setMyApps([]);
    setMyApps(tmp);
  }

  return (
    <div class="flex justify-end">
    <div class="inline-block">
      <select class="mysort" onChange={(event)=>{handleSort(event)}} value={selectValue()}>
        <option value="by" selected disabled>Sort by...</option>
        <option value="name">A-Z</option>
        <option value="created">Date Created</option>
        <option value="updated">Date Updated</option>
        <option value="stars">Stars</option>
      </select>
    </div>
    </div>
  )
}

export default SortSelect
