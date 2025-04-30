import Cards from "../components/Portfolio/Cards"
import SortSelect from "../components/Portfolio/SortSelect";
import Tags from "../components/Portfolio/Tags"
import { getDataFromGithub } from "../utils/github";

function Portfolio() {

  getDataFromGithub();

  return (
    <>
      <Tags></Tags>
      <SortSelect></SortSelect>
      <Cards></Cards>
    </>
  )
}

export default Portfolio
