import React from 'react'
import './Button.css'

import Button from '@mui/material/Button'

export default function Buttonn(props) {
	return (
		<Button variant='contained' disableElevation>
			{props.buttonText}
		</Button>
	)
}
