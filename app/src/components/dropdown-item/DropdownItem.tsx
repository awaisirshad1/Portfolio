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
    },
    testingArr: ["hello", "goodbye"]
  }

  return (
    <div class="item-outer-container orange-item">
      <div class="item-title-container" onClick={toggleItemDropdown}>
        <div class="item-title item-title-orange">org</div>
        <div class="item-title-path">
          <span>/</span>
          <span>title</span>
        </div>
        <div class="item-title-description">start-end</div>
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
            short Description
          </div>
          <div class="item-content-title-container item-content-title-container">
            <div class="item-content-underlined-text-container item-content-underlined-text-orange">
              <span class="item-content-underlined-text">Tech stack</span>
            </div>
          </div>
          <div class="item-content-overview-description">
            Java, Spring Boot, TestNG, Cucumber, Grafana, OpenTelemetry
          </div>
          <div class="item-content-body-header-container">
            <span>Summary</span>
            <select class="mediatype-select">
              <option value="application/json">application/json</option>
            </select>
          </div>
          <div class="item-content-container">
            <div class="item-content-body-title">summary opener</div>
            <div class="item-content-body-label">impact statement placeholder</div>
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