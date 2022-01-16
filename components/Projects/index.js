import React, { useState } from 'react';
import Item from './item';
import projectsArr from './projectInfo';
function Projects() {
	return (
		<div>
			{projectsArr.map((el, i) =>
				<Item
					key={el.name}
					el={el}
				></Item>)
			}
		</div >
	)
}
export default Projects;