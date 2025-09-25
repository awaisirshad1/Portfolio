import { Component } from "solid-js";
import "../styles/components/base/Navbar.css"
import { A } from "@solidjs/router";

const Navbar: Component = () => {
  return(
    <nav class="navbar-fixed">
      {/* <DropdownMenu></DropdownMenu> */}
      <ul>
        <li class="home-li"><A class="home-link" href= "/" end> Home</A></li>
        <li><A href="/#experience">Experience</A></li>
        <li><A href="/#projects">Projects</A></li>
        <li><A href="/#links">Links</A></li>
        <li><A href="/#about">About</A></li>
        <li><A href="/#contact">Contact</A></li>
        <li><A href="/blog">Blog</A></li>
      </ul>
    </nav>
  );
};


export default Navbar;