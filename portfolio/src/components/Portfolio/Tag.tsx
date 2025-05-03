import { setCurrentPage } from "../../utils/exports";
import { filterByTag } from "../../utils/filter";


function Tag(_props: any) {

  const handleFilter = () => {
    setCurrentPage("portfolio");
    filterByTag(_props.tag);
  }

  return (
    <a class="mytag text-sm" onClick={handleFilter}>#{_props.tag}</a>
  )
}

export default Tag
