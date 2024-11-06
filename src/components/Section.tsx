import styled from 'styled-components'
import { BackgroundColor, Color, FontColor } from '../styles/variables'

const Section = styled.section<{
	$backgroundColor?: BackgroundColor
	$textColor?: FontColor
}>`
	background-color: ${props => props.$backgroundColor || Color.backgroundColor.SECONDARY};
	color: ${props => props.$textColor || Color.fontColor.SECONDARY};
	min-height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10vw;
	font-size: 6.8rem;
	h1 {
		font-size: 3rem;
		margin-bottom: 2rem;
	}
`

export default Section
