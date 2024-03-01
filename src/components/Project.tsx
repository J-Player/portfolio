import styled from "styled-components"
import Section from "./Section"
import { Color } from "../styles/variables"
import { useState } from "react"
import { Language, projects } from "../configs"
import breakpoints from "../styles/breakpoints"

const Card = (props: { name: string; repository: string; description: string; project?: string | null }) => {
	const { name, description, repository, project } = props
	return (
		<div className='card'>
			<div className='image-wrapper'>
				<img src='bg.jpg' alt='' />
			</div>
			<div className='info-wrapper'>
				<h2>{name}</h2>
				<p>{description}</p>
				<div className='btn-wrapper'>
					<a className='btn-repository' href={repository} target='_blank'>
						Repositório
					</a>
					{project && (
						<a className='btn-project' href={"#"} target='_blank'>
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
						// <button style={{ fontWeight: category == l ? "bold" : "normal" }} onClick={() => setCategory(l)}>
						// 	{capitalize(l)}
						// </button>
					)
				})}
			</div>
			<div className='project-wrapper'>
				{[...Array(4)].map((p, i) => {
					return i < projects[category].length ? (
						<Card
							name={projects[category][i]["name"]}
							description={projects[category][i]["description"]}
							repository={projects[category][i]["repository"]}
							project={projects[category][i]["project"]}
						/>
					) : (
						<div className='card empty'></div>
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
		gap: 2rem;
		width: 100%;
		.card {
			display: grid;
			overflow: hidden;
			grid-template-rows: auto 1fr;
			border-radius: 1rem;
			background-color: ${Color.SECONDARY_BACKGROUND_COLOR};
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);

			&.empty {
				place-items: center;
				background-color: ${Color.TERNARY_BACKGROUND_COLOR};
				border: 1px dashed ${Color.SECONDARY_TEXT_COLOR};
				position: relative;
				min-height: 400px;
				opacity: 0.5;
				&::after {
					content: "Em desenvolvimento";
					position: absolute;
					color: ${Color.SECONDARY_TEXT_COLOR};
					font-weight: bold;
				}
			}

			.image-wrapper {
				background-color: ${Color.TERNARY_BACKGROUND_COLOR};
				position: relative;
				&::after {
					content: "Imagem em breve!";
					border: 1px dashed black;
					position: absolute;
					border-top-left-radius: 1rem;
					border-top-right-radius: 1rem;
					color: ${Color.SECONDARY_TEXT_COLOR};
					inset: 0;
					font-size: 1.6rem;
					display: grid;
					place-items: center;
				}
				img {
					display: block;
					opacity: 0;
					width: 100%;
					max-height: 100%;
				}
			}

			.info-wrapper {
				display: grid;
				padding: 1rem;
				gap: 2rem;
				.btn-wrapper {
					display: flex;
					place-self: end;
					gap: 1rem;
					a {
						display: grid;
						place-items: center;
						height: fit-content;
						width: fit-content;
						border-radius: 0.5rem;
						padding: 1rem;
					}
					.btn-repository {
						background-color: ${Color.PRIMARY_BACKGROUND_COLOR};
						color: ${Color.PRIMARY_TEXT_COLOR};
					}
					.btn-project {
						background-color: ${Color.HIGHLIGHT_COLOR};
						color: ${Color.SECONDARY_TEXT_COLOR};
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
			.card {
				.info-wrapper {
					.btn-wrapper {
						a {
						}
						.btn-repository {
						}
						.btn-project {
						}
					}
				}
			}
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
