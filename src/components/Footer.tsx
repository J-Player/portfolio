import styled from "styled-components"

const Footer = styled.footer`
	background-color: black;
	color: white;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	padding: 2rem;
	.social-wrapper {
		display: flex;
		gap: 2rem;
	}
`

export default ({ className }: { className?: string }) => {
	return (
		<Footer className={className}>
			<small>&copy; Todos os direitos reservados - João Pedro</small>
		</Footer>
	)
}
