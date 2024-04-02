import React from "react"
import Section from "./Section"
import styled from "styled-components"
import { Color } from "../styles/variables"
import breakpoints from "../styles/breakpoints"

const About = ({ className }: { className?: string }) => {
	return (
		<Section className={className} id='about'>
			<h1>SOBRE</h1>
			<div className='about-wrapper'>
				<p>
					Oi! Meu nome é João Pedro R. Diniz, tenho 27 anos.
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
					Comecei a estuda sobre <strong>desenvolvimento web</strong> (<strong>HTML</strong>, <strong>CSS</strong>{" "}
					e <strong>Javascript</strong>) e posteriormente aprendi a desenvolver aplicações <strong>React</strong> (
					<em>Biblioteca Javascript</em>).
				</p>
				<p>
					Há muitas coisas que ainda quero e estou aprendendo como <strong>Machine Learning</strong> e{" "}
					<strong>Data Science</strong> com <strong>Python</strong>.
				</p>
				<p>
					E-mail: jp_rd@hotmail.com
					<br />
					Telefone: (55) 21 99192-5834
				</p>
			</div>
			<div className='photo-wrapper'>{false && <img src='' alt='' /> /* IMAGEM EM BREVE! */}</div>
			<div className='social-wrapper'>
				<a className='btn-github' href='https://github.com/J-Player' target='_blank'>
					<img src='icons/socials/github.svg' alt='' />
					GitHub
				</a>
				<a
					className='btn-linkedin'
					href='https://www.linkedin.com/in/joão-pedro-rodrigues-diniz-339a1a180/'
					target='_blank'
				>
					<img src='icons/socials/linkedin.svg' alt='' />
					LinkedIn
				</a>
				<a className='btn-cv' href='#' target='_blank'>
					<img src='icons/socials/pdf.svg' alt='' />
					Currículo
				</a>
			</div>
		</Section>
	)
}

const AboutStyled = styled(About)`
	display: grid;
	grid-template-columns: 1fr 0.9fr;
	grid-template-rows: auto;
	grid-auto-flow: row;
	gap: 2rem;
	h1 {
		grid-column: span 2;
	}
	.about-wrapper {
		p {
			font-size: 1.6rem;
			line-height: 3rem;
			margin-bottom: 2rem;
		}
	}
	.photo-wrapper {
		background-color: lightgray;
		place-self: center;
		border-radius: 1rem;
		overflow: hidden;
		width: clamp(260px, 280px, 380px);
		height: clamp(260px, 280px, 380px);
		position: relative;
		img {
			display: block;
			height: 100%;
			width: 100%;
		}
		&::after {
			content: "Foto em breve :)";
			position: absolute;
			border: 1px dashed black;
			border-radius: inherit;
			inset: 0;
			font-size: 1.6rem;
			display: grid;
			place-items: center;
		}
	}
	.social-wrapper {
		display: flex;
		gap: 1rem;
		font-size: 1.6rem;
		a {
			display: flex;
			gap: inherit;
			align-items: center;
			border-radius: 0.5rem;
			text-decoration: none;
			padding: 1rem;
			font-size: inherit;
			color: inherit;
			img {
				width: clamp(16px, 32px, 64px);
			}
		}
		.btn-github {
			background-color: ${Color.PRIMARY_BACKGROUND_COLOR};
			color: #fff;
			border: 1px solid transparent;
		}
		.btn-linkedin {
			background-color: #0a66c2 !important;
			color: #fff;
		}
		.btn-cv {
			display: none;
			background-color: #ebebeb;
			color: ${Color.SECONDARY_TEXT_COLOR};
			border: 1px solid ${Color.PRIMARY_BACKGROUND_COLOR};
		}
	}

	@media ${breakpoints.md} {
		h1 {
			grid-column: span 2;
			place-self: center;
		}
		.photo-wrapper {
			grid-row: 2 / 3;
			grid-column: 1 / 3;
			margin-inline: auto;
		}
		.about-wrapper {
			grid-column: 1 / 3;
			grid-row: 3 / 4;
			grid-row-start: 3;
		}
	}

	@media ${breakpoints.sm} {
		.social-wrapper {
			grid-column: 2 span;
			justify-content: center;
		}
	}
`

export default AboutStyled
