import Image from 'next/image'
import React from 'react'
import GithubSVG from '../SVG/GithubSVG'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.iconsContainer}>
				<GithubSVG width='48' height='48'></GithubSVG>
				<Image src='/mail.png' alt='mail-button' width={48} height={48}></Image>
			</div>
			<div className={styles.textContainer}>
				<span className={styles.name}>HENRIK ZENKERT</span>
			</div>
		</div>
	)
}

export default Footer
