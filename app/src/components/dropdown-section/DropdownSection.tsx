import { createSignal, ParentComponent, Show } from "solid-js";
import "./dropdownsection.css"
import DownArrowSvg from "../../assets/icons/svg/down-arrow-backup-2-svgrepo-com.svg"
import UpArrowSvg from "../../assets/icons/svg/down-arrow-backup-3-svgrepo-com.svg"

const DropdownSection:ParentComponent = (props) => {
  const [open, setOpen] = createSignal(true);
  const toggleDropdown = () => {
    setOpen(!open());
  }
  return (
    <div class="opblock">
      <div>
        <div class="section-header-div" onClick={toggleDropdown}>
          <h3 class="section-header">
            <a href="">
              <span>Section Header</span>
            </a>
            <small>
              <span class="section-description">description of section</span>
            </small>
            <Show when={open()}>
              <UpArrowSvg class="section-expanded-arrows"></UpArrowSvg>
            </Show>
            <Show when={!open()}>
              <DownArrowSvg class="section-expanded-arrows"></DownArrowSvg>
            </Show>
          </h3>
        </div>
        <Show when={open()}>
          <div>hidden message is now visible</div>
        </Show>
      </div>
    </div>
  );
}

export default DropdownSection;