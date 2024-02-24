import styled from "styled-components"
import { Color } from "../styles/variables"

const Header = styled.header`
	position: sticky;
	top: 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5vh 10vw;

	box-shadow: 0 0.3rem 4px 0 rgba(0, 0, 0, 0.25);

	background-color: ${Color.PRIMARY_BACKGROUND_COLOR};
	color: ${Color.PRIMARY_TEXT_COLOR};
	font-size: 12rem;

	max-height: 10vh;

	h1 {
		font-size: 4rem;
		a {
			font-size: inherit;
			color: inherit;
			text-decoration: none;
		}
	}

	nav {
		display: inherit;
		width: 50%;
		ul {
			display: flex;
			flex-grow: 1;
			justify-content: space-between;
			align-items: center;
			list-style: none;
			a {
				text-decoration: none;
				color: inherit;
				text-underline-offset: 2px;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`

export default () => {
	return (
		<Header>
			<h1>
				<a href='#home'>JP</a>
			</h1>
			<nav>
				<ul>
					<li>
						<a href={"#about"}>Sobre</a>
					</li>
					<li>
						<a href={"#skill"}>Habilidades</a>
					</li>
					<li>
						<a href={"#project"}>Projetos</a>
					</li>
					<li>
						<a href={"#contact"}>Contatos</a>
					</li>
				</ul>
			</nav>
		</Header>
	)
}
