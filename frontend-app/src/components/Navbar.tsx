import { Component } from "solid-js";
import "../styles/components/base/Navbar.css"
import DropdownMenu from "./navbar/DropdownMenu";
import { A } from "@solidjs/router";

const Navbar: Component = () => {
  return(
    <nav>
      {/* <DropdownMenu></DropdownMenu> */}
      <ul>
        <li class="home-li"><A href= "/" end> Home</A></li>
        <li><A href= "/#projects"> Projects</A></li>
        <li><A href= "/blog"> Blog</A></li>
        <li><A href= "/#links"> Links</A></li>
        <li><A href= "/#contact"> Contact</A></li>
      </ul>
    </nav>
  );
};


export default Navbar;