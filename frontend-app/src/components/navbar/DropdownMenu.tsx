import { createSignal, onCleanup, Show } from 'solid-js';
import "../../styles/components/navbar/dropdown-menu.css";

const DropdownMenu = () => {
  // const [hoverDisplayMenu, setHoverDisplayMenu] = createSignal(false);
  // const [stickyDisplayMenu, setStickyDisplayMenu] = createSignal(false);
  // const toggleHoverDisplayMenuOn = () => setHoverDisplayMenu(true)
  // const toggleHoverDisplayMenuOff = () => setHoverDisplayMenu(false)
  // const toggleStickyDisplayMenu = () => setStickyDisplayMenu(!stickyDisplayMenu())
  
  // const [stickyOpen, setStickyOpen] = createSignal(false);
  // let menuRef; 

  // let mouseInside = false;
  // const handleDocumentClick = (e: MouseEvent) => {
  //   if (!menuRef.contains(e.target as Node)) {
  //     setStickyOpen(false);
  //   }
  // };

  // // Listen for outside clicks
  // document.addEventListener("click", handleDocumentClick);
  // onCleanup(() => document.removeEventListener("click", handleDocumentClick));

  return (
    <div>




      {/* <div
      class="menu-container"
      ref={menuRef}
      onMouseEnter={() => {
        if (!stickyOpen()) mouseInside = true;
      }}
      onMouseLeave={() => {
        mouseInside = false;
        if (!stickyOpen()) {
          setStickyOpen(false);
        }
      }}
      >
        <button
          class="menu-button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent outside click close
            setStickyOpen(!stickyOpen());
          }}
        >
          Menu ▾
        </button>

        <div class={`dropdown ${stickyOpen() || mouseInside ? "show" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div class="menu-container">
        <button 
          class="menu-button"
          onClick={() => toggleStickyDisplayMenu()}
          onMouseOver={() => toggleHoverDisplayMenuOn()}  
          onMouseLeave={() => toggleHoverDisplayMenuOff()}
        >Menu</button> 
        {stickyDisplayMenu() || hoverDisplayMenu()? <div>displayed</div> : null}
      </div> */}
    </div>
  );
}

export default DropdownMenu;
