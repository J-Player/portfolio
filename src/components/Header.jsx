import { Link } from "react-router-dom"

import "../styles/components/header.sass"

const Header = () => {
	return (
		<header>
			<h1 className='logo'>JP</h1>
			<nav>
				<ul>
					<li>
						<Link to={''}>Início</Link>
					</li>
					<li>
						<Link to={'about'}>Sobre</Link>
					</li>
					<li>
						<Link to={'skill'}>Habilidades</Link>
					</li>
					<li>
						<Link to={'project'}>Projetos</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
