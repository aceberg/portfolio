import { filterByTag } from "../../utils/filter";


function Tag(_props: any) {

  const handleFilter = () => {
    filterByTag(_props.tag);
  }

  return (
    <a class="mytag" onClick={handleFilter}>{_props.tag}</a>
  )
}

export default Tag
