import React, { useRef, useEffect, useState } from 'react'
import styles from './Contact.module.css'


const Contact = () => {
	// const [visible] = useVisibility(false)
	const ref = useRef()
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<input placeholder='Email' id="email" name='email' type="text"></input>
				<input placeholder='Name' id="name" name='name' type="text"></input>
			</div>
			<textarea rows={5} cols={10} placeholder='Message' style={{ fontFamily: 'Poppins' }} className={styles.textarea}></textarea>
			<div className={styles.buttonContainer}>

				<button>Submit</button>
			</div>
		</div>
	)
}

export default Contact
