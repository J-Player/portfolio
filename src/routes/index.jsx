import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"
import Project from "../pages/Project"
import App from "../App"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/skill", element: <Skill /> },
			{ path: "/Project", element: <Project /> },
		],
	},
])

export default router
