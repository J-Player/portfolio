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
	const socials = {
		linkedin: { href: "https://www.linkedin.com/in/joão-pedro-rodrigues-diniz-339a1a180/" },
		github: { href: "http://github.com/j-player" },
	}
	return (
		<Footer className={className}>
			<div className='social-wrapper'>
				<a href={socials.linkedin.href} target='_blank' rel='noreferrer'>
					<img src='icons/socials/linkedin.ico' alt='LinkedIn' />
				</a>
				<a href={socials.github.href} target='_blank' rel='noreferrer'>
					<img src='icons/socials/github.ico' alt='Github' />
				</a>
			</div>
			<small>&copy; Todos os direitos reservados - João Pedro</small>
		</Footer>
	)
}
