import React from "react"
import styled from "styled-components"
import Section from "./Section"
import { Color } from "../styles/variables"

const projetos = [
	{
		name: "Profanator API",
		description:
			"API reativa desenvolvida em Spring WebFlux com o propósito de fornecer dados relacionados aos itens do Profane (MMO Sandbox brasileiro).",
			tags: ['Java', 'Spring'],
		repository: "https://github.com/J-Player/Profanator-API",
	},{
		name: "Simple Spring Kafka Template",
		description:
			"Um simples template de mensageria utilizando Spring Kafka.",
			tags: ['Java', 'Spring'],
		repository: "https://github.com/J-Player/Simple-Spring-Kafka-Template",
	},{
		name: "Simple Spring Batch Template",
		description:
			"Um simples template de processamento de lotes usando Spring Batch",
			tags: ['Java', 'Spring'],
		repository: "https://github.com/J-Player/Simple-Spring-Batch-Template",
	},
]

const Project = ({ className }: { className?: string }) => {
	return (
		<Section id='project' className={className}>
			<h1>Projetos</h1>
			<p>Aqui estão alguns projetos desenvolvidos por mim.</p>
			<p>Para mais informações acesse meu <a href="https://github.com/J-Player" target="_blank">GitHub</a>.</p>
			<br />
			<ul>
				{projetos.map((p) => {
					return (
						<li>
								<h2>{p.name}</h2>
								<p>{p.description}</p>
								<span className="tags-wrapper">Tech stack:{p.tags.map(t => ` ${t}`)}</span>
								<a href={p.repository} target="_blank">GitHub</a>
						</li>
					)
				})}
			</ul>
		</Section>
	)
}

const StyledProject = styled(Project)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
	&,
	* {
		font-size: 1.6rem;
	}
	ul {
		list-style: none;
		li {
			margin-top: 1rem;
			margin-left: 1rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			border: 1px solid black;
			padding: 1rem;
			width: 50%;
			.tags-wrapper {
				display: flex;
				gap: inherit;
				div {
					padding: .25rem .5rem;
				}
			}
			a {
				background-color: ${Color.PRIMARY_BACKGROUND_COLOR};
				color: ${Color.PRIMARY_TEXT_COLOR};
				text-decoration: none;
				padding: .5rem 1rem;
				width: fit-content;
				border-radius: .5rem;
			}
		}
	}
`

export default StyledProject
