import type { Component } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js"
import Home from './routes/Home';
import About from './routes/About';

import logo from './logo.svg';
import styles from './App.module.css';
import Layout from './components/Layout';

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: lazy(() => import ("./routes/About"))}
];

const App: Component = () => {
  return (
    <Router root={Layout}>
      {routes}
    </Router>
  );
};

export default App;
