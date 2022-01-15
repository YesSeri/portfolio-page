import React from 'react';
import styles from './Nav.module.css'

const Nav = () => {
	return (
		<div className={styles.navbar}>
			<a href='#home'>Home</a>
			<a href='#about'>About</a>
			<a href='#projects'>Projects</a>
			<a href='#contact'>Contact</a>
		</div>
	)
}

export default Nav
