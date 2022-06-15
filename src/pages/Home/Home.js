import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Sectionservice from '../../components/Sectionservice/Sectionservice'
import Sectionjob from '../../components/Sectionjob/Sectionjob'
import Sectionprice from '../../components/Sectionprice/Sectionprice'
import Sectionclients from '../../components/Sectionclients/Sectionclients'
import Sectioncommands from '../../components/Sectioncommands/Sectioncommands'
import Sectionrequest from '../../components/Sectionrequest/Sectionrequest'
export default function Home() {
	return (
		<div>
			<Banner buttonTex='Оставить заявку' />
			<Sectionservice />
			<Sectionjob buttonText='Все работы' />
			<Sectionprice buttonText='Скачать прайс' />
			<Sectionclients />
			<Sectioncommands />
			<Sectionrequest buttonText='Отправить' />
		</div>
	)
}
