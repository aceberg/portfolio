import Top from "./Card/Top";
import Bottom from "./Card/Bottom";


function Card(_props: any) {

  return (
    <>
    <div class="mycard">
      <Top app={_props.app}></Top>
      <div class="mt-auto">
        <Bottom app={_props.app}></Bottom>
      </div>
    </div>
    </>
  )
}

export default Card
