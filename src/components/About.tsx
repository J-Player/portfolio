import React from "react"
import Section from "./Section"
import styled from "styled-components"

const About = ({ className }: { className?: string }) => {
	return (
		<Section className={className} id='about'>
			<div>
				<div className='about-text-wrapper'>
					<h1>SOBRE</h1>
					<p>
						Oi! Meu nome é João Pedro R. Diniz, tenho 26 anos.
						<br />
						Moro no Rio de Janeiro/RJ.
						<br />
						Sou Bacharel em Ciência da Computação (2017 - 2022).
					</p>
					<p>
						Minha jornada como desenvolvedor iniciou com <strong>Java</strong>, a qual dediquei bastante tempo
						estudando-o e desenvolvendo projetos, especialmente utilizando <strong>Spring</strong> (
						<em>Framework Java</em>).
					</p>
					<p>
						Comecei a estuda sobre <strong>desenvolvimento web</strong> (<strong>HTML</strong>,{" "}
						<strong>CSS</strong> e <strong>Javascript</strong>) e posteriormente aprendi a desenvolver aplicações{" "}
						<strong>React</strong> (<em>Biblioteca Javascript</em>).
					</p>
					<p>
						Há muitas coisas que ainda quero e estou aprendendo como <strong>Machine Learning</strong> e{" "}
						<strong>Data Science</strong> com <strong>Python</strong>.
					</p>
					<p>
						<em>
							"Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende." -
							Leonardo da Vinci
						</em>
					</p>
					<p>
						E-mail: jp_rd@hotmail.com
						<br />
						Telefone: (55) 21 99192-5834
					</p>
				</div>
				<div className='photo-wrapper'>
					<img src='' alt='' />
				</div>
			</div>
		</Section>
	)
}

const AboutStyled = styled(About)`
	& > div {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		.about-text-wrapper {
			max-width: 50%;
			p {
				line-height: 3rem;
				margin-bottom: 2rem;
				strong, em {
					font-size: inherit;
				}
			}
		}
		.photo-wrapper {
			background-color: lightgray;
			border-radius: 1rem;
			height: 60vh;
			width: 60vh;
			align-self: center;
			img {
				display: none;
			}
		}
	}
`

export default AboutStyled
