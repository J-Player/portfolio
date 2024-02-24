import styled from "styled-components"
import { Color } from "../styles/variables"
import Section from "./Section"

const Home = ({ className }: { className?: string }) => {
	return (
		<Section
			id='home'
			className={className}
			$backgroundColor={Color.PRIMARY_BACKGROUND_COLOR}
			$textColor={Color.PRIMARY_TEXT_COLOR}
		>
			<div>
				<h1>João Pedro R. Diniz</h1>
				<h2>Desenvolvedor Full-Stack</h2>
				<div className='social-media-wrapper'>
					<a href="https://www.linkedin.com/in/joão-pedro-rodrigues-diniz-339a1a180/" target="_blank"><img src="icons/socials/linkedin.ico" alt="LinkedIn icon" /></a>
					<a href="https://github.com/J-Player" target="_blank"><img src="icons/socials/github.ico" alt="LinkedIn icon" /></a>
				</div>
			</div>
		</Section>
	)
}

const HomeStyled = styled(Home)`
	letter-spacing: 0.25rem;
	& > div {
		h1, h2 {
			font-size: 3.5rem;
		}
		.social-media-wrapper {
			display: flex;
			font-size: 2.5rem;
			gap: 1rem;
			a {
				border: none;
				outline: none;
				color: inherit;
				cursor: pointer;
				text-decoration: none;
			}
		}
	}
`

export default HomeStyled
