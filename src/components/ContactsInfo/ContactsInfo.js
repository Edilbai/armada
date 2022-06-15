import React from 'react'
import './ContactsInfo.css'
import icon11 from '../../assets/images/icon11.png'
import icon22 from '../../assets/images/icon22.png'
import icon33 from '../../assets/images/icon33.png'
import Contacts_map from '../../assets/images/Contacts_map.png'


export default function ContactsInfo() {
	return (
		<div className='Contacts_main'>
      <div className='Contacts_info1'>
        <div className='Contacts_logo1'>
					<p>Контакты</p>
				</div>
				<div className='Contacts_logo2'>
          <div className='Contact_wrapper'>
						<img src={icon11}/>
						<span>Режим работы</span>
							</div> 
						<p>c 10:00 до 20:00</p>
						<p>Сб, Вс - выходной.</p>
				
				</div>
				<div className='Contacts_logo2'>
          <div className='Contact_wrapper'>
						<img src={icon22}/>
						<span>Телефон</span>
						</div>
						<p>+996 (0553) 577-575, +996 (0773) 577-575</p>
					
				</div>
				<div className='Contacts_logo2'>
          <div className='Contact_wrapper'>
            <img src={icon33}/>
						<span>Адрес</span>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
					
				</div>
			</div>
			<div className='Contacts_map'>
       <img src={Contacts_map}/>
			</div>
		</div>
	)
}
