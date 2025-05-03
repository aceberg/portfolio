import { setCurrentPage } from "../../utils/exports";
import { filterByTag } from "../../utils/filter";

function IconTag(_props: any) {

  const handleFilter = () => {
    setCurrentPage("portfolio");
    filterByTag(_props.tag);
  }

  return (
    <>
      <div class="relative group text-5xl">
        {_props.l === "y" 
        ? <div class="mytag">
          <i class={_props.icon} onClick={handleFilter}></i>
          <div class="mytip">{_props.tag}</div>
        </div> 
        : <>
          <i class={_props.icon}></i>
          <div class="mytip">{_props.tag}</div>
        </>
        }
      </div>
    </>
  )
}

export default IconTag
