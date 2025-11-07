import { lazy } from "react";
import type { RouteConfig } from "@/types";

// Lazy-loaded page components
const Home = lazy(() => import("@/pages/Home"));
const Resume = lazy(() => import("@/pages/Resume"));
const Experience = lazy(() => import("@/pages/Experience"));
const Projects = lazy(() => import("@/pages/Projects"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/Blog/BlogPost"));
const Interests = lazy(() => import("@/pages/Interests"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const routes: RouteConfig[] = [
	{
		path: "/",
		element: Home,
		label: "Home",
	},
	{
		path: "/resume",
		element: Resume,
		label: "Resume",
	},
	{
		path: "/experience",
		element: Experience,
		label: "Experience",
	},
	{
		path: "/projects",
		element: Projects,
		label: "Projects",
	},
	{
		path: "/blog",
		element: Blog,
		label: "Blog",
	},
	{
		path: "/interests",
		element: Interests,
		label: "Interests",
	},
];

// Non-navigation routes (not shown in menu)
export const detailRoutes: RouteConfig[] = [
	{
		path: "/blog/:slug",
		element: BlogPost,
	},
];

export const notFoundRoute = {
	path: "*",
	element: NotFound,
};
