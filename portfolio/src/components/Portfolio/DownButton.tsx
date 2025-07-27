
function DownButton() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollUp = () => {
    window.scrollBy({
      top: -window.innerHeight, // Scroll by one screen height
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by one screen height
      behavior: "smooth",
    });
  };

  const styleClass = "text-gray-400 p-2 hover:bg-gray-800 rounded hover:text-indigo-300 text-2xl cursor-pointer"

  return (
    <div class="fixed bottom-4 right-4 flex flex-col space-y-1 z-50">
      <div class="relative group inline-block" onClick={scrollTop}>
        <i class={"bi bi-chevron-bar-up "+styleClass}></i>
        <div class="mytip">Top</div>
      </div>
      <div class="relative group inline-block" onClick={scrollUp}>
        <i class={"bi bi-chevron-up "+styleClass}></i>
        <div class="mytip">Up</div>
      </div>
      <div class="relative group inline-block" onClick={scrollDown}>
        <i class={"bi bi-chevron-down "+styleClass}></i>
        <div class="mytip">Down</div>
      </div>
      <div class="relative group inline-block" onClick={scrollBottom}>
        <i class={"bi bi-chevron-bar-down "+styleClass}></i>
        <div class="mytip">Bottom</div>
      </div>
    </div>
  );
}

export default DownButton;
