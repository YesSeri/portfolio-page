import React from 'react'
import styles from './Heading.module.css'

const Heading = ({ id, children }) => {
	console.log({ id, children })
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ position: 'relative', margin: 'auto' }}>
				<h1 className={styles.heading} id={id}>{children}</h1>
			</div>
		</div>
	)
}

export default Heading;
