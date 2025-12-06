import { createSignal, ParentComponent, Show } from "solid-js";
import "./dropdownitem.css"
import DownArrowSvg from "../../assets/icons/svg/down-arrow-backup-2-svgrepo-com.svg"
import UpArrowSvg from "../../assets/icons/svg/down-arrow-backup-3-svgrepo-com.svg"
import UnlockedSvg from "../../assets/icons/svg/unlocked.svg"
import CodeSection from "../code-section/CodeSection";

const DropdownItem: ParentComponent = (props) => {
  const [open, setOpen] = createSignal(true);
  const toggleItemDropdown = () => {
    setOpen(!open());
  }

  const myVar = {
    myNum: 1,
    myStr: "testing",
    innerVar: {
      anotherKey: "anotherVal"
    }
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
          <div class="item-content-top-text">
            top text
          </div>
          <div class="item-content-title-container item-content-title-container">
            <div class="item-content-underlined-text-container item-content-underlined-text-orange">
              <span class="item-content-underlined-text">Underlined</span>
            </div>
          </div>
          <div class="item-content-overview-description">
            overview description
          </div>
          <div class="item-content-body-header-container">
            <span>header</span>
            <select class="mediatype-select">
              <option value="dih">dih</option>
            </select>
          </div>
          <div class="item-content-container">
            <div class="item-content-body-title">test1</div>
            <div class="item-content-body-label">label</div>
            <div class="item-content-body-json">
              <CodeSection code={JSON.stringify(myVar)}></CodeSection>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default DropdownItem;