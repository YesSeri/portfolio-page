import Image from 'next/image'
import React from 'react'
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
				<GitDemoLink githubLink={el.githubLink} codeLink={el.codeLink} />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', width: '150px', margin: 'auto' }}>
					{el.tech.map(({ name, link }) => {
						return (<div key={name} className={styles.tooltip}>
							<span className={styles.tooltiptext}>
								{name}
							</span>
							<Image src={link} alt={name} width={50} height={50}></Image>
						</div>)
					})}
				</div>
			</div>
			<div className={styles.image}>
				{/* <img src={"." + pic} alt={name}></img> */}
				<Image src={el.pic} alt={el.name} width={300} height={300} ></Image>
			</div>
		</div >
	)
}

export default Item
