import React, { useState } from 'react'
import styles from './item.module.css'

const Item = ({ name }) => {
	return (
		<div className={styles.item}>
			{name}
		</div>
	)
}

export default Item
