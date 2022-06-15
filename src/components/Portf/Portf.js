import React from 'react'
import './Portf.css'
import line from '../../assets/images/line.png'
import Port1 from '../../assets/images/Port1.png' 
import Port2 from '../../assets/images/Port2.png'
import Port3 from '../../assets/images/Port3.png'
import Port4 from '../../assets/images/Port4.png'
import Port5 from '../../assets/images/Port1.png'
import Port6 from '../../assets/images/Port1.png'
import Port7 from '../../assets/images/Port1.png'
import Port8 from '../../assets/images/Port8.png'
export default function Portf() {
	return (
		<div>
				<div className='section_had'>
            <img alt='Line' src={line}/>
            <p className='pop'>Портфолио</p>
            <img alt='Line' src={line}/>
        </div>
				<div className='Portf_wrapper'>
						<div className='Portf_info'>
          <div className='Portf_card1'>
					<span>Работа на Манаса</span></div>
					<div className='Portf_card5'>
					<span>Работа на Манаса</span>
					</div>
					<div className='Portf_card6'>
					<span>Работа на Манаса</span>
					</div>
					<div className='Portf_card7'>
					<span>Работа на Манаса</span>
					</div>
				</div>
				<div className='Portf_info'>
					<div className='Portf_card2'>
					<span>Работа на Манаса</span>
					</div>
					<div className='Portf_card3'>
					<span>Работа на Манаса</span>
					</div>
					<div className='Portf_card4'>
					<span>Работа на Манаса</span>
					</div>
					<div className='Portf_card8'>
					<span>Работа на Манаса</span>
					</div>
				</div>
				</div>
			
		</div>
	)
}
