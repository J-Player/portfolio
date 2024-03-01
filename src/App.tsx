import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./components/About"
import Home from "./components/Home"
import Project from "./components/Project"
import Skill from "./components/Skill"
import styled from "styled-components"
import Contact from "./components/Contact"

const App = styled.main``

export default () => {
	return (
		<App>
			<Header />
			<Home />
			<About/>
			<Skill/>
			<Project/>
			<Contact/>
			{/**
			*/}
			<Footer />
		</App>
	)
}
