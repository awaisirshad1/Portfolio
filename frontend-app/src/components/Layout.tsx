import type { ParentComponent } from 'solid-js';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/components/base/Layout.css"

const Layout: ParentComponent = (props) => {
  return(
    <>
      <Navbar></Navbar>
      <div class="main-content">{props.children}</div>
      <Footer></Footer>
    </>
  );
};

export default Layout;