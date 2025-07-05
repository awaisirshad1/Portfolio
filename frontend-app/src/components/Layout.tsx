import type { ParentComponent } from 'solid-js';

const Layout: ParentComponent = (props) => {
  return(
    <>
    <header>This is a header</header>
      {props.children}
    <footer>This is a footer</footer>
    </>
  );
};

export default Layout;