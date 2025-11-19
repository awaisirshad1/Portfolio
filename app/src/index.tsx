/* @refresh reload */
import 'solid-devtools';
import './index.css';
import { render, Suspense } from 'solid-js/web';
import { Router } from '@solidjs/router';
import { routes } from './routes';
import Layout from './routes/layout/Layout';
// import '../src/assets/styles/overrides.css';


const root = document.getElementById('root'); 
// check if root is null
if (!root) {
  console.error("value of root:", root)
  throw new Error("Root element not found.");
}

// check if root element type
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => 
  <Router root={(props) => <Layout>{props.children}</Layout>}>
    {routes}
  </Router>,
  root!
);
