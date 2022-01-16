import React from 'react'
import Canvas from './Canvas'
import styles from './Welcome.module.css'

const Welcome = () => {
	return (
		<div style={{ position: 'relative' }}>
			<div><Canvas /></div>
			<div className={styles.textContainer}>
				<h1 className={styles.text}>I am<br className={styles.lineBreak} /> Henrik <span className={styles.highlight}>Zenkert</span>.
					<br />Full stack developer</h1>
			</div>

		</div>
	)
}

export default Welcome