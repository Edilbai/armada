import React from 'react'
import './AboutDo.css'
import line from '../../assets/images/line.png'
import AboutDo1 from '../../assets/images/AboutDo1.png'
import AboutDo2 from '../../assets/images/AboutDo2.png'
import AboutDo3 from '../../assets/images/AboutDo3.png'
import AboutDo4 from '../../assets/images/AboutDo4.png'

export default function AboutDo() {
	return (
		<div className='AboutDo'>
				<div className='section_had'>
            <img alt='Line' src={line}/>
            <p>Чем мы занимаемся?</p>
            <img alt='Line' src={line}/>
        </div>
        <div className='AboutDo_main'>
					<div className='AboutDo_info1'>
						<img src={AboutDo1}/>
					</div>
					<div className='AboutDo_info1'>
						<img src={AboutDo2}/>
					</div>
					<div className='AboutDo_info'>
						<img src={AboutDo3}/>
					</div>
					<div className='AboutDo_info'>
						<img src={AboutDo4}/>
				</div>
		</div>
		</div>
	)
}
