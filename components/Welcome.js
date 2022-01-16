import React from 'react'
import Canvas from './Canvas'

const Welcome = () => {
	return (
		<div style={{ position: 'relative' }}>
			<div><Canvas /></div>
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>
				<div style={{ fontSize: '3em' }}>Henrik Zenkert Portfolio Page</div>
			</div>

		</div>
	)
}

export default Welcome