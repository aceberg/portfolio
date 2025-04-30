import { createSignal } from "solid-js";
import { sortByField } from "../../utils/sort";


function SortSelect() {
  type SortEvent = Event & {
    currentTarget: HTMLSelectElement;
    target: HTMLSelectElement;
  };

  const [selectValue, setSelectValue] = createSignal<string>("by");

  const handleSort = (event: SortEvent) => {
    const value = event.target ? event.target.value : "default";
    
    sortByField(value);
    
    setSelectValue("");
    setSelectValue("by");
  }

  return (
    <div class="flex justify-end">
      <select class="mysort" onChange={(event)=>{handleSort(event)}} value={selectValue()}>
        <option value="by" selected disabled>Sort by...</option>
        <option value="default">Default</option>
        <option value="name">A-Z / Z-A</option>
        <option value="created">Date Created</option>
        <option value="updated">Date Updated</option>
        <option value="stars">Stars</option>
      </select>
    </div>
  )
}

export default SortSelect
