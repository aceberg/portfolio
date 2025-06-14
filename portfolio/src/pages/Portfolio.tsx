import Cards from "../components/Portfolio/Cards"
import DownButton from "../components/Portfolio/DownButton";
import SortSelect from "../components/Portfolio/SortSelect";
import Tags from "../components/Portfolio/Tags"

function Portfolio() {

  return (
    <>
      <Tags></Tags>
      <SortSelect></SortSelect>
      <Cards></Cards>
      <DownButton></DownButton>
    </>
  )
}

export default Portfolio
