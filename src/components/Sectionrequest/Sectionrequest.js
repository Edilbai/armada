import React from 'react'
import './Sectionrequest.css'
import Button from '../Button/Button'

export default function Sectionrequest(props) {
	return (
		<div className='sectionrequest'>
			<h4>Оставьте бесплатную заявку</h4>
			<p>и менеджер по работе с клиентами свяжется с вами и проконсультирует</p>
			<div className='sectionrequest_submit'>
				<input placeholder='Ваше Имя' />
				<input placeholder='Ваш телефон ' />
				<Button buttonText={props.buttonText} />
			</div>
		</div>
	)
}
