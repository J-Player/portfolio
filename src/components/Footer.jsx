import "../styles/components/footer.sass"

const Footer = () => {
	const socials = {
		linkedin: { href: "https://www.linkedin.com/in/joão-pedro-rodrigues-diniz-339a1a180/" },
		github: { href: "http://github.com/j-player" },
	}
	return (
		<footer>
			<div className='social-wrapper'>
				<a href={socials.linkedin.href} target='_blank' rel='noreferrer'>
					<img src='icons/socials/linkedin.ico' alt='LinkedIn' />
				</a>
				<a href={socials.github.href} target='_blank' rel='noreferrer'>
					<img src='icons/socials/github.ico' alt='Github' />
				</a>
			</div>
			<small>&copy; Todos os direitos reservados - João Pedro</small>
		</footer>
	)
}

export default Footer
