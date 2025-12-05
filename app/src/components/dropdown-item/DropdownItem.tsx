import { createSignal, ParentComponent, Show } from "solid-js";
import "./dropdownitem.css"
import DownArrowSvg from "../../assets/icons/svg/down-arrow-backup-2-svgrepo-com.svg"
import UpArrowSvg from "../../assets/icons/svg/down-arrow-backup-3-svgrepo-com.svg"
import UnlockedSvg from "../../assets/icons/svg/unlocked.svg"

const DropdownItem: ParentComponent = (props) => {
  const [open, setOpen] = createSignal(true);
  const toggleItemDropdown = () => {
    setOpen(!open());
  }

  return (
    <div class="item-outer-container orange-item">
      <div class="item-title-container" onClick={toggleItemDropdown}>
        <div class="item-title item-title-orange">ITEM TITLE</div>
        <div class="item-title-path">/random</div>
        <div class="item-title-description">a description</div>
        <Show when={open()}>
          <UpArrowSvg class="section-expanded-arrows"></UpArrowSvg>
        </Show>
        <Show when={!open()}>
          <DownArrowSvg class="section-expanded-arrows"></DownArrowSvg>
        </Show>
        <UnlockedSvg class="unlocked-icon"/>
      </div>
      <Show when={open()}>
        <div class="item-content orange-item-content">
          item content
        </div>
      </Show>
    </div>
  );
}

export default DropdownItem;