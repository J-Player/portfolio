import { useState } from 'react'

import projects from '../configs/projects'

import '../styles/pages/project.sass'

const Project = () => {
	const url = 'bg1.jpg'
	const [projectId, setProjectId] = useState(1)
	return (
		<section id='project' className='container'>
			<div className='project-wrapper'>
				<div className='info-wrapper'>
					<h1>{projects[projectId].name}</h1>
					<div className='tech-wrapper'>
						{projects[projectId].tags.map(tag => {
							return <div key={tag} className='tag'>{tag}</div>
						})}
					</div>
					<p>{projects[projectId].description}
					</p>
					<div className='project-links'>
						<a href={projects[projectId].repository} target='_blank' rel='noreferrer' className='btn repository'>
							Repositório
						</a>
						{
							projects[projectId].project ? 
						<a href={projects[projectId].project} target='_blank' rel='noreferrer' className='btn project'>
							Projeto
						</a> : <></>
						}
					</div>
				</div>
				<div className='slider-wrapper'>
					<div className='slider'>
						<div className='slides'>
							<input type='radio' name='slide' id='slide1' checked={projectId === 0} />
							<input type='radio' name='slide' id='slide2' checked={projectId === 1} />
							<input type='radio' name='slide' id='slide3' checked={projectId === 2} />
							<input type='radio' name='slide' id='slide4' checked={projectId === 3} />
							<div className='slide s1'>
								<img src={url} alt='' />
							</div>
							<div className='slide'>
								<img src={url} alt='' />
							</div>
							<div className='slide'>
								<img src={url} alt='' />
							</div>
							<div className='slide'>
								<img src={url} alt='' />
							</div>
						</div>
						<div className='navigation'>
							<label htmlFor='slide1' className='btn-slide' onClick={() => setProjectId(0)}></label>
							<label htmlFor='slide2' className='btn-slide' onClick={() => setProjectId(1)}></label>
							{/* <label htmlFor='slide3' className='btn-slide' onClick={() => setProjectId(2)}></label>
							<label htmlFor='slide4' className='btn-slide' onClick={() => setProjectId(3)}></label> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Project
