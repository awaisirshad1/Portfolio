import { createSignal, ParentComponent, Show } from "solid-js"
import "./schema.css"
import DownArrowSvg from "../../assets/icons/svg/down-arrow-backup-2-svgrepo-com.svg"
import RightArrowSvg from "../../assets/icons/svg/right-arrow-backup-2-svgrepo-com.svg"

const Schema: ParentComponent = (props) => {
  const [open, setOpen] = createSignal(false);
  const toggle = () => {
    setOpen(!open());
  }
  
  return (
    <div class="schema-container">
      <span class="schema-name" onClick={toggle}>
        <span>Schema title</span>
        <Show when={open()} fallback={<RightArrowSvg class="schema-expand-arrows"/>}>
          <DownArrowSvg class="schema-expand-arrows"/>
        </Show>
      </span>
      
    </div>
  );
}

export default Schema;