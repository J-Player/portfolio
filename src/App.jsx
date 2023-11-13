import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./styles/app.sass"

function App() {
	return (
		<div id='app'>
			<Header />
			<main><Outlet/></main>
			<Footer />
		</div>
	)
}

export default App
