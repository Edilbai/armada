import React from 'react'
import Header from '../../components/Header/Header'
import Sectionbenefits from '../../components/Sectionbenefits/Sectionbenefits'
import Sectionrequest from '../../components/Sectionrequest/Sectionrequest'
import Footer from '../../components/Footer/Footer'
import './About.css'
import AboutCom from './../../components/AboutCom/AboutCom'
import AboutDo from '../../components/AboutDo/AboutDo'

export default function About() {
	return (
		<div>
			<AboutCom />
			<AboutDo />
			<Sectionbenefits />
			<Sectionrequest />
		</div>
	)
}
