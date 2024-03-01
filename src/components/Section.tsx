import React from "react"
import styled from "styled-components"
import { Color } from "../styles/variables"

const Section = styled.section<{ $backgroundColor?: Color; $textColor?: Color }>`
	background-color: ${(props) => props.$backgroundColor || Color.SECONDARY_BACKGROUND_COLOR};
	color: ${(props) => props.$textColor || Color.SECONDARY_TEXT_COLOR};
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
