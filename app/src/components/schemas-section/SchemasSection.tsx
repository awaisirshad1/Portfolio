import { createSignal, ParentComponent, Show } from "solid-js"
import "./schemassection.css"
import DownArrowSvg from "../../assets/icons/svg/down-arrow-backup-2-svgrepo-com.svg"
import UpArrowSvg from "../../assets/icons/svg/down-arrow-backup-3-svgrepo-com.svg"
import Schema from "../schema/Schema"

const SchemasSection: ParentComponent = (props) => {
  const [open, setOpen] = createSignal(true)
  const toggle = () => {
    setOpen(!open());
  }
  
  return(
    <div class="schemas-section-container-div">
      <h4 class="schemas-section-header" onClick={toggle}>
        <span>schemas section</span>
        <Show when={open()} fallback={<DownArrowSvg class="section-expanded-arrows"></DownArrowSvg>}>
          <UpArrowSvg class="section-expanded-arrows"></UpArrowSvg>
        </Show>
      </h4>
      <Show when={open()}>
        <div class="schemas-container">
          <Schema></Schema>
        </div>
      </Show>
    </div>
  );
}

export default SchemasSection;