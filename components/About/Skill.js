// import Image from 'next/image'
import React from 'react'
import styles from './Skill.module.css'

const Skill = ({ text, pic }) => {
	return (
		<div className={styles.container}>
			<div >{text}</div>
			<div className={styles.image}>
				<img src={"." + pic} alt={text} width="64" height='64'></img>
				{/* <Image src={pic} alt={text} width="64" height='64'></Image> */}
			</div>
		</div >
	)
}

export default Skill
