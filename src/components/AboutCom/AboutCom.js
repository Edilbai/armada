import React from 'react'
import AboutCom1 from '../../assets/images/AboutCom1.png'
import line from '../../assets/images/line.png'

import './AboutCom.css'


export default function AboutCom() {
	return (
		<div className='AbCom'>
     <div className='AbCom_wrapper'>
			  
		 </div>
		 <div className='AbCom_info'>
				<div className='section_had'>
            <img alt='Line' src={line}/>
            <p>О компании</p>
            <img alt='Line' src={line}/>
        </div>
				<div className='AbCom_info1'>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa
					</span>
				</div>
		 </div>
		</div>
	)
}
