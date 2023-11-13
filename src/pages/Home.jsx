import "../styles/pages/home.sass"

const Home = () => {
	return (
		<section id='home' className='container'>
			<div className='title-wrapper'>
				<span>Oi, eu sou</span>
				<h1 className="title">João Pedro</h1>
				<h2>Desenvolvedor Full-Stack</h2>
				<div className="tech-wrapper">
					<img src='icons/tech/java.ico' alt='Java' />
					<img src='icons/tech/javascript.ico' alt='Javascript' />
					<img src='icons/tech/reactjs.ico' alt='React' />
					<img src='icons/tech/vuejs.ico' alt='Vue' />
					<img src='icons/tech/python.ico' alt='Python' /></div>
				
			</div>
			<div className='image-wrapper'>
				<img src='programmer-green.png' alt='' />
			</div>
		</section>
	)
}

export default Home
