import styled from "styled-components"
import Section from "./Section"
import { Color } from "../styles/variables"

const Skill = ({ className }: { className?: string }) => {
	return (
		<Section id='skill' className={className}>
			<h1>HABILIDADES</h1>
			<ul>
				<li>
					<ul>
						<b>Java</b>
						<li>Desenvolvimento de APIs com <i>Spring Web</i></li>
						<li>Desenvolvimento de mensagerias com <i>Spring Kafka</i></li>
						<li>Processamento de lotes com <i>Spring Batch</i></li>
					</ul>
				</li>
				<li>
					<ul>
						<b>Javascript</b>
						<li>Desenvolvimento de APIs</li>
						<li>Desenvolvimento web (<i>HTML</i>, <i>CSS</i> e <i>Javascript</i>)</li>
						<li>Desenvolvimento de aplicações com <i>React</i> / <i>Vue</i></li>
					</ul>
				</li>
				<li>
					<ul>
						<b>Python</b>
						<li>Aprendizado de máquina (<i>Sklearn</i>)</li>
						<li>Ciência de dados (<i>Matplotlib</i>, <i>Pandas</i>)</li>
					</ul>
				</li>
				<li>Banco de dados (<i>MySQL</i>, <i>PostgreSQL</i>, <i>Oracle</i>, <i>MongoDB</i>)</li>
				<li>Experiência com containerização (<i>Docker</i>, <i>Kubernetes</i>)</li>
			</ul>
		</Section>
	)
}

const StyledSkill = styled(Skill)`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	background-color: ${Color.TERNARY_BACKGROUND_COLOR};
	li {
		margin-top: 2rem;
	}
	ul, li, i, b {
		font-size: 1.6rem;
		list-style: none;
		ul li {
			font-size: inherit;
			margin-left: 3rem;
		}
	}
`

export default StyledSkill
