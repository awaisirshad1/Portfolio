import type { ParentComponent } from 'solid-js';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/components/base/Layout.css"

const Layout: ParentComponent = (props) => {
  return(
    <>
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default Layout;