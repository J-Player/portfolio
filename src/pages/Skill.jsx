import "../styles/pages/skill.sass"

const Skill = () => {
	return (
		<section id='skill' className='container'>
			<div className='skill-wrapper'>
				<h1>Habilidades</h1>
				<p>
					<ul>
						Linguagens de programação:
						<li>Java (Spring)</li>
						<li>JavaScript (React, Vue)</li>
						<li>Python</li>
					</ul>
					<ul>
						Banco de dados:
						<li>MySQL</li>
						<li>Postegres</li>
						<li>Oracle</li>
						<li>MongoDB</li>
					</ul>
				</p>
			</div>
			<div className='image-wrapper'>
				<img src='programmer-green.png' alt='' />
			</div>
		</section>
	)
}

export default Skill
