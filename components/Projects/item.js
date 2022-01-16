import Image from 'next/image'
import React, { useState } from 'react'
import GitDemoLink from './GitDemoLink'
import styles from './item.module.css'

const Item = ({ el }) => {
	return (
		<div className={styles.item}>
			<div className={styles.description}>
				<h2>
					{el.name}
				</h2>
				<p>
					{el.description}
				</p>
				<GitDemoLink />
				{/* <span className={["material-icons", styles.icon].join(" ")} style={{ verticalAlign: 'middle', marginBottom: 0 }}>computer</span> */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', width: '150px', margin: 'auto' }}>
					{el.tech.map(({ label, link }) =>
					(<div key={label} className={styles.tooltip}>
						<span className={styles.tooltiptext}>
							{label}
						</span>
						<Image src={link} alt={label} width={50} height={50}></Image>
					</div>
					))}
				</div>
				{/* <p>
					{techDescription}
				</p> */}
			</div>
			<div className={styles.image}>
				{/* <img src={"." + pic} alt={name}></img> */}
				<Image src={el.pic} alt={el.name} width={300} height={300} ></Image>
			</div>
		</div >
	)
}

export default Item
