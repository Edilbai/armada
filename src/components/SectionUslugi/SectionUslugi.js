import React from 'react'
import USL11 from '../../assets/images/USL11.png'
import USL12 from '../../assets/images/USL12.png'
import USL13 from '../../assets/images/USL13.png'
import USL31 from '../../assets/images/USL31.png'
import line from '../../assets/images/line.png'
import './SectionUslugi.css'

export default function SectionUslugi() {
	return (
		<div className='section_USL'>
			<div className='section_had'>
            <img alt='Line' src={line}/>
            <p>Наши услуги</p>
            <img alt='Line' src={line}/>
        </div>
      <div className='USL_wrapper'>
				<div className='USL_wrapper1'>
					<div className='USL_card1'>
						{/* <img src={USL11}/> */}
						<span>Монтажная установка</span>
					</div>
					<div className='USL_card2'>
							{/* <img src={USL12}/> */}
							<span>Самоклейка</span>
					</div>
					<div className='USL_card3'>
						{/* <img src={USL11}/> */}
						<span>Буклеты</span>
					</div>
					<div className='USL_card4'>
							{/* <img src={USL12}/> */}
							<span>Визитки</span>
					</div>
					<div className='USL_card5'>
							{/* <img src={USL31}/> */}
              <span>Вывески</span>
					</div>
				</div>
				<div className='USL_wrapper2'>
				<div className='USL_card6'>
           <span>Банеры</span>
				</div>
						<div className='USL_card2'>
							{/* <img src={USL12}/> */}
							<span>Листовки</span>
					</div>
				</div>
			</div>
		</div>
	)
}
