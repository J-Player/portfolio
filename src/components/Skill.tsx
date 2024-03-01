import styled from "styled-components"
import Section from "./Section"
import { Color } from "../styles/variables"
import breakpoints from "../styles/breakpoints"

const Skill = ({ className }: { className?: string }) => {
	return (
		<Section id='skill' className={className}>
			<h1>HABILIDADES</h1>
			<div className='skill-wrapper'>
				<ul>
					<li>
						<ul>
							<strong>Java</strong>
							<li>
								Desenvolvimento de APIs com <i>Spring Web</i>
							</li>
							<li>
								Desenvolvimento de mensagerias com <i>Spring Kafka</i>
							</li>
							<li>
								Processamento de lotes com <i>Spring Batch</i>
							</li>
						</ul>
					</li>
					<li>
						<ul>
							<strong>Javascript</strong>
							<li>Desenvolvimento de APIs</li>
							<li>
								Desenvolvimento web (<i>HTML</i>, <i>CSS</i> e <i>Javascript</i>)
							</li>
							<li>
								Desenvolvimento de aplicações com <i>React</i> / <i>Vue</i>
							</li>
						</ul>
					</li>
					<li>
						<ul>
							<strong>Python</strong>
							<li>
								Aprendizado de máquina (<i>Sklearn</i>)
							</li>
							<li>
								Ciência de dados (<i>NumPy</i>, <i>Matplotlib</i>, <i>Pandas</i>)
							</li>
						</ul>
					</li>
					<li>
						<strong>Banco de dados</strong> (<i>MySQL</i>, <i>PostgreSQL</i>, <i>Oracle</i>, <i>MongoDB</i>)
					</li>
					<li>
						<strong>DevOps</strong> (<i>Docker</i>, <i>Kubernetes</i>, <i>Terraform</i>)
					</li>
				</ul>
			</div>
			<div className='image-wrapper'>
				<img src='skills.png' alt='' />
			</div>
		</Section>
	)
}

const StyledSkill = styled(Skill)`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: .1fr 1fr;
	column-gap: 2rem;

	background-color: ${Color.TERNARY_BACKGROUND_COLOR};

	h1 {
		grid-column: span 2;
	}

	.skill-wrapper {
		ul,
		li {
			margin-top: 2rem;
			list-style: none;
			font-size: 1.6rem;
			ul li {
				margin-left: 3rem;
			}
		}
	}

	.image-wrapper {
		border-radius: 1rem;
		align-self: center;
		width: 100%;
		img {
			display: block;
			width: 100%;
		}
	}

	@media ${breakpoints.md} {
		h1 {
			grid-column: span 2;
			place-self: center;
		}
		.image-wrapper {
			grid-row: 2;
			grid-column: 1 / 3;
		}
		.skill-wrapper {
			grid-column: 1 / 3;
			grid-row-start: 3;
		}
	}

`

export default StyledSkill
