import { ParentComponent } from "solid-js";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Layout: ParentComponent = (props) => {
  return (
    <div class="layout-parent">
      <Header></Header>
      <main>
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  )
};

export default Layout