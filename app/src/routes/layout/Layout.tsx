import { ParentComponent } from "solid-js";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Layout: ParentComponent = (props) => {
  return (
    <>
      <Header></Header>
      <main>
        {props.children}
      </main>
      <Footer></Footer>
    </>
  )
};

export default Layout