import Cards from "../components/Portfolio/Cards"
import Tags from "../components/Portfolio/Tags"
import { getDataFromGithub } from "../utils/github";

function Portfolio() {

  getDataFromGithub();

  return (
    <>
      <Tags></Tags>
      <Cards></Cards>
    </>
  )
}

export default Portfolio
