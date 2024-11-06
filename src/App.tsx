import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'

const App = () => {
	return (
		<main>
			<Header />
			<Home />
			<About />
			<Skill />
			<Project />
			<Contact />
			<Footer />
		</main>
	)
}

export default App
