import React from "react"
import styled from "styled-components"
import Section from "./Section"
import { Color } from "../styles/variables"

const Contact = ({ className }: { className?: string }) => {
	return (
		<Section id='contact' className={className}>
			<h1>CONTATOS</h1>
			<div>
				<p>E-mail: <a href="mailto:jp_rd@hotmail.com">jp_rd@hotmail.com</a></p>
				<p>Telefone: <a href="tel:+5521991925834">+55 (21) 99192-5834</a></p>
			</div>
		</Section>
	)
}

const StyledContact = styled(Contact)`
	background-color: ${Color.PRIMARY_BACKGROUND_COLOR};
	color: ${Color.PRIMARY_TEXT_COLOR};
	flex-direction: column;
	justify-content: center;
	align-items: start;
	* {
		font-size: 1.6rem;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	a {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}
`

export default StyledContact
