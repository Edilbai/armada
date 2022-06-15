import React from 'react'
import line from '../../assets/images/line.png'
import DoDo1 from '../../assets/images/DoDo1.png'
import arrow1 from '../../assets/images/arrow1.png'
import arrow2 from '../../assets/images/arrow2.png'
import './Machine.css'

export default function Machine() {
	return (
		<div>
			<div className='section_had'>
				<img alt='Line' src={line} />
				<p>Оборудование</p>
				<img alt='Line' src={line} />
			</div>
			<div className='Machine_info'>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
					purus sit amet luctus venenatis, lectus magna fringilla urna,
					porttitor rhoncus dolor purus non enim praesent elementum facilisis
					leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
					diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
					quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
					massa vitae tortor condimentum lacinia quis vel eros donec ac odio
					tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra
					vitae congue eu, consequat ac felis donec et odio pellentesque diam
					volutpat commodo sed egestas egestas fringilla phasellus faucibus
				</span>
			</div>
			<div className='DoDo1'>
				<div className='DoDo_wrapper'>
					<div className='DoDo_arrow1'>
						<button>
							<img src={arrow1} />
						</button>
					</div>
					<div className='DoDo_arrow1'>
						<button>
							<img src={arrow2} />
						</button>
					</div>
				</div>
				<div className='DoDo_info'>
					<span>Печатает около 100 страниц в минуту</span>
				</div>
			</div>
		</div>
	)
}
