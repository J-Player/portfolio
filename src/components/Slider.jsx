import { useState } from "react"
import "../styles/components/slider.sass"

const Slider = (props) => {
	const [slideId, setSlideId] = useState(props.projectId)
	// const [slideId, setSlideId] = useState(1)
	const url = "bg1.jpg"
	// const url = "https://source.unsplash.com/random/1360x768?technology"
	return (
		<div className='slider'>
			<div className='slides'>
				<input type='radio' name='slide' id='slide1' checked={slideId === 1}/>
				<input type='radio' name='slide' id='slide2' checked={slideId === 2}/>
				<input type='radio' name='slide' id='slide3' checked={slideId === 3}/>
				<input type='radio' name='slide' id='slide4' checked={slideId === 4}/>
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
				<label htmlFor='slide1' className='btn-slide' onClick={() => setSlideId(1)}></label>
				<label htmlFor='slide2' className='btn-slide' onClick={() => setSlideId(2)}></label>
				<label htmlFor='slide3' className='btn-slide' onClick={() => setSlideId(3)}></label>
				<label htmlFor='slide4' className='btn-slide' onClick={() => setSlideId(4)}></label>
			</div>
		</div>
	)
}

export default Slider
