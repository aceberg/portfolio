import Top from "./Card/Top";
import Bottom from "./Card/Bottom";
import Middle from "./Card/Middle";


function Card(_props: any) {

  return (
    <>
    <div class="mycard mt-auto">
      <a href={_props.app.Link} target="_blank">
        <div class="md:h-27">
          <Top app={_props.app}></Top>
        </div>
        <Middle app={_props.app}></Middle>
      </a>
      <div class="md:h-10">
        <Bottom app={_props.app}></Bottom>
      </div>
    </div>
    </>
  )
}

export default Card
