import type { Component } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js"
import Home from './routes/Home/Home';

import Layout from './components/Layout';

const Blog: Component = lazy(() => import ("./routes/Blog"))

const routes = [
  { path: "/", component: Home },
  { path: "/blog", Blog}
];

const App: Component = () => {
  return (
    <Router root={Layout}>
      {routes}
    </Router>
  );
};

export default App;
