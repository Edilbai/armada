import React from 'react'
import './Production.css'
import Header from './../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Doing from '../../components/Doing/Doing'
import Machine from './../../components/Machine/Machine'

export default function Production() {
	return (
		<div>
			<Doing />
			<Machine />
		</div>
	)
}
