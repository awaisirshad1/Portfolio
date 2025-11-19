import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';
import HomePage from './routes/home/HomePage';
import BlogPage from './routes/blog/BlogPage';

export const routes: RouteDefinition[] = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogPage }
];
