import Image from 'next/image'
import React, { useState } from 'react'
import styles from './item.module.css'

const Item = ({ name, description, techDescription, pic, style }) => {
	console.log({ style })
	console.log({ pic })
	return (
		<div className={styles.item} style={style}>
			<div>
				<h2>
					{name}
				</h2>
				<p>
					{description}
				</p>
				<p>
					{techDescription}
				</p>
			</div>
			<div className={styles.image}>
				{/* <img src={"." + pic} alt={name}></img> */}
				<Image src={pic} alt={name} width={300} height={300} ></Image>
			</div>
		</div>
	)
}

export default Item
