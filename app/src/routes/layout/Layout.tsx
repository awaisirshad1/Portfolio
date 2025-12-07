import { ParentComponent } from "solid-js";
import Header from "../../components/header/Header";

const Layout: ParentComponent = (props) => {
  return (
    <div class="layout-parent">
      <Header></Header>
      <main>
        {props.children}
      </main>
    </div>
  )
};

export default Layout