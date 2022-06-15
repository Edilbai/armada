import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Service from './pages/Service/Service'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Portfolio from './pages/Portfolio/Portfolio'
import Production from './pages/Production/Production'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button'

export default function App() {
	return (
		<BrowserRouter>
			<Header buttonText='Скачать цены' />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/service' element={<Service />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contacts />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/production' element={<Production />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}
