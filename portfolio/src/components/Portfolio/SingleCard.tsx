import Top from "./Card/Top";
import Bottom from "./Card/Bottom";


function SingleCard(_props: any) {

  const handleOpen = () => {
    if (_props.app.Link !== "") {
      window.open(_props.app.Link, '_blank');
    }
  }

  return (
    <>
      <div class="mycard" onClick={handleOpen}>
        {/* <div class="flex flex-col justify-between h-90"> */}
          <Top app={_props.app}></Top>
          <Bottom app={_props.app}></Bottom>
        {/* </div> */}
      </div>
    </>
  )
}

export default SingleCard
