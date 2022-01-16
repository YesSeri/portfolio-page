import React, { useState } from 'react';
import Item from './item';

const projectsArr = [
	'Operadocs',
	'SveltePiano',
	'RubyChess',
	'TicTacToe multiplayer',
]

function Projects() {
	return (
		<div>
			{projectsArr.map(el => <Item key={el} name={el}></Item>)}
		</div>
	)
}
export default Projects;