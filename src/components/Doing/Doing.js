import React from 'react'
import line from '../../assets/images/line.png'
import DoImage1 from '../../assets/images/DoImage1.png'
import DoImage2 from '../../assets/images/DoImage2.png'
import DoImage3 from '../../assets/images/DoImage3.png'
import './Doing.css'

export default function Doing() {
	return (
		<div className='Doing'>
						<div className='section_had'>
            <img alt='Line' src={line}/>
            <p>Производство</p>
            <img alt='Line' src={line}/>
        </div>
				<div className='DoImage'>
					<div>
           <img src={DoImage1}/>
					</div>
					<div>
           <img src={DoImage2}/>
					</div>
					<div>
           <img src={DoImage3}/>
					</div>
				</div>
		</div>
	)
}
