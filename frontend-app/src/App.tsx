import type { Component } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js"
import Home from './routes/Home';

import Layout from './components/Layout';

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: lazy(() => import ("./routes/About"))},
  { path: "/projects", component: lazy(() => import ("./routes/Projects"))}
];

const App: Component = () => {
  return (
    <Router root={Layout}>
      {routes}
    </Router>
  );
};

export default App;
