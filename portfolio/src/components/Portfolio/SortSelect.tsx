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

  const pageReload = () => {
    const url = window.location.href.split('?')[0];
    window.location.href = url + '?cachebuster=' + new Date().getTime();
  }

  return (
    <div class="flex justify-end">
      <div class="relative group inline-block p-1 me-2" onClick={pageReload}>
        <i class="bi bi-arrow-clockwise text-gray-400 hover:text-indigo-300 cursor-pointer"></i>
        <div class="mytip">Reload page</div>
      </div>
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
