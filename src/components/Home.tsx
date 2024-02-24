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
					<button>LinkedIn</button>
					<button>GitHub</button>
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
			button {
				border: none;
				outline: none;
				padding: 5px 10px;
				border-radius: 0.5rem;
				cursor: pointer;
			}
		}
	}
`

export default HomeStyled
