import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.iconsContainer}>
				<a href='https://github.com/YesSeri/'>
					<Image src='/github.png' alt='mail-button' width={48} height={48}></Image>
				</a>
				<a href='mailto:henrik.zenkert@gmail.com'>
					<Image src='/mail.png' alt='mail-button' width={48} height={48}></Image>
				</a>
			</div>
			<div className={styles.textContainer}>
				<span className={styles.name}>HENRIK ZENKERT</span>
			</div>
		</div>
	)
}

export default Footer
