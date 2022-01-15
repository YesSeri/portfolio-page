import React, { useRef, useEffect, useState } from 'react'
import styles from './Contact.module.css'


const Contact = () => {
	// const [visible] = useVisibility(false)
	const ref = useRef()
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<label htmlFor='email'>Email</label>
				<input id="email" type="text"></input>
				<label htmlFor='name'>Name</label>
				<input id="name" type="text"></input>
			</div>
			<textarea className={styles.textarea}></textarea>
		</div>
	)
}

export default Contact
