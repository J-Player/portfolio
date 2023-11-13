import { Link } from "react-router-dom"
import "../styles/pages/about.sass"

const About = () => {
	const tel = "+55 21 99192-5834"
	const getNumbers = (str) => str.replace(/\D*/g, "")
	return (
		<section id='about' className='container'>
			<div className='info-wrapper'>
				<h1>Sobre mim</h1>
				<p>
					João Pedro R. Diniz, 26 anos.
					<br />
					Moro no Rio de Janeiro/RJ.
					<br />
					Bacharel em Ciência da Computação (2017 - 2022).
				</p>
				<p>
					Entusiasta de tecnologia desde pequeno.
					<br />
					Interessado em descobrir novas tecnologias.
					<br />
					Diverte-se desenvolvendo soluções inovadoras.
					<br />
				</p>
				<p>
					Ainda não tenho experiência profissional, mas tenho algumas{" "}
					<span className='highlight'>
						<Link to={"/skill"}>habilidades</Link>
					</span>{" "}
					aplicadas em alguns{" "}
					<span className='highlight'>
						<Link to={"/project"}>projetos</Link>
					</span>
					.
					<br />
					Vamos conversar?
					<br />
					E-mail:{" "}
					<span className='highlight'>
						<a href='mailto:jp_rd@hotmail.com'>jp_rd@hotmail.com</a>
					</span>
					<br />
					Telefone:{" "}
					<span className='highlight'>
						<a href={`tel:+${getNumbers(tel)}`}>(55) 21 99192-5834</a>
					</span>
				</p>
				<div className='social-wrapper'>
					<a className='btn linkedin' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/joão-pedro-rodrigues-diniz-339a1a180/'>
						<img src='icons/socials/linkedin.ico' alt='' />
						LinkedIn
					</a>
					<a className='btn github' target='_blank' rel='noreferrer' href='http://github.com/j-player'>
						<img src='icons/socials/github.ico' alt='' />
						GitHub
					</a>
					<a className='btn download' target='_blank' rel='noreferrer' href='#'>
						<img src='icons/download.ico' alt='' />
						Baixar CV
					</a>
				</div>
			</div>
			<div className='image-wrapper'>
				<img src='programmer-green.png' alt='' />
			</div>
		</section>
	)
}

export default About
