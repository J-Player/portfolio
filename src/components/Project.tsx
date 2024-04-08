import styled from "styled-components"
import Section from "./Section"
import { Color } from "../styles/variables"
import { useState } from "react"
import ProjectModel, { Language, projects } from "../configs"
import breakpoints from "../styles/breakpoints"

const Card = (props: ProjectModel) => {
	const { name, description, repository, project } = props
	return (
		<div className='card'>
			<img className='card-image' src={`images/${name.toLowerCase()}.png`} alt='' />
			<div className='card-info'>
				<h2>{name}</h2>
				<p>{description}</p>
				<div className='btn-wrapper'>
					<a className='btn-repository' href={repository} target='_blank'>
						Repositório
					</a>
					{project && (
						<a className='btn-project' href={project} target='_blank'>
							Projeto
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

const Project = ({ className }: { className?: string }) => {
	const languages: Language[] = Object.values(Language)
	const [category, setCategory] = useState<Language>(languages[0])
	const capitalize = (str: string): string => str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
	return (
		<Section id='project' className={className}>
			<h1>PROJETOS</h1>
			<p>Aqui estão alguns projetos desenvolvidos por mim.</p>
			<p>
				Para mais projetos, acesse meu{" "}
				<strong>
					<a href='https://github.com/J-Player' target='_blank'>
						GitHub
					</a>
				</strong>
				.
			</p>
			<div className='language-wrapper'>
				{languages.map((l) => {
					return (
						<button
							className={category == l ? "selected" : ""}
							disabled={category == l}
							onClick={() => setCategory(l)}
						>
							{capitalize(l)}
						</button>
					)
				})}
			</div>
			<div className='project-wrapper'>
				{projects[category].map((p, i) => {
					return (
						<Card
							name={projects[category][i]["name"]}
							description={projects[category][i]["description"]}
							repository={projects[category][i]["repository"]}
							project={projects[category][i]["project"]}
						/>
					)
				})}
			</div>
		</Section>
	)
}

const StyledProject = styled(Project)`
	flex-direction: column;
	align-items: start;
	gap: 2rem;
	* {
		font-size: 1.6rem;
		color: inherit;
		text-decoration: none;
	}
	.language-wrapper {
		display: inherit;
		justify-content: center;
		margin-inline: auto;
		gap: inherit;
		width: 100%;
		button {
			padding: 1rem;
			border: none;
			outline: none;
			border-radius: 0.5rem;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
			&:not(.selected):hover {
				background-color: ${Color.PRIMARY_BACKGROUND_COLOR};
				color: ${Color.PRIMARY_TEXT_COLOR};
			}
			&.selected {
				background-color: ${Color.HIGHLIGHT_COLOR};
				border-color: transparent;
				font-weight: bold;
				cursor: not-allowed;
			}
		}
	}
	.project-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		grid-template-rows: repeat(auto-fill, minmax(auto, 1fr));
		gap: 2rem;
		width: 100%;
		.card {
			display: grid;
			overflow: hidden;
			grid-template-rows: .5fr auto;
			border-radius: 1rem;
			background-color: ${Color.SECONDARY_BACKGROUND_COLOR};
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
			&.empty {
				display: none !important;
				background-color: ${Color.TERNARY_BACKGROUND_COLOR};
				border: 1px dashed black;
				display: grid;
				opacity: 0.5;
				place-items: center;
				&::before {
					position: absolute;
					content: "Em desenvolvimento :)";
				}
			}
			.card-image {
				position: relative;
				&::before {
					content: "Imagem em breve :)";
					background-color: ${Color.TERNARY_BACKGROUND_COLOR};
					border: 1px dashed black;
					opacity: 0.5;
					border-radius: 1rem 1rem 0 0;
					position: absolute;
					inset: 0;
					display: grid;
					object-fit: cover;
					place-items: center;
				}
				height: auto;
				object-fit: cover;
				width: 100%;
			}
			.card-info {
				padding: 1.5rem;
				display: flex;
				flex-direction: column;
				gap: 1rem;
				p {
					line-height: 3rem;
					height: 100%;
				}
				.btn-wrapper {
					align-self: end;
					margin-top: 1rem;
					display: flex;
					gap: 1rem;
					a {
						padding: 1rem;
						border-radius: 0.5rem;
					}
					.btn-repository {
						background-color: ${Color.PRIMARY_BACKGROUND_COLOR};
						color: ${Color.PRIMARY_TEXT_COLOR};
					}
					.btn-project {
						background-color: ${Color.HIGHLIGHT_COLOR};
					}
				}
			}
		}
	}

	@media ${breakpoints.xl} {
		.project-wrapper {
			grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		}
	}

	@media ${breakpoints.md} {
		h1 {
			align-self: center;
		}
		.project-wrapper {
			grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		}
	}

	@media ${breakpoints.sm} {
		.btn-wrapper {
			margin-inline: auto;
		}
	}

	@media ${breakpoints.xs} {
		.language-wrapper {
			flex-direction: column;
		}
		.card {
			h2 {
				font-size: 1.4rem;
			}
		}
	}
`

export default StyledProject
