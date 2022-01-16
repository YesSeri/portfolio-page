import React, { useState } from 'react';
import Item from './item';

const projectsArr = [
	{ name: 'Operadocs', pic: "/projects/undraw_operadocs.svg", description: 'Find opera songs where there no longer is copyright.', techDescription: "Frontend is in Next JS and Styled Components. Backend in Node JS and MYSQL.", githubLink: "", link: "" },
	// { name: 'RubyChess', pic: "/projects/undraw_react_native.svg", description: "", techDescription: "", },
	{ name: 'Chordipro', pic: "/projects/undraw_react_native.svg", description: "A tool for creating songs with chords, and then displaying them.", techDescription: "Created with React Native app. ", githubLink: "", link: "" },
	{ name: 'Pianisto', pic: "/projects/undraw_pianisto.svg", description: "An online piano. Useable with keyboard, mouse or touch.", techDescription: "Written in Svelte JS, together with the Tone JS library.", githubLink: "", link: "" },
	{ name: 'Gestures', pic: "/projects/undraw_gestures.svg", description: "A google chrome extension for swipe gestures in the browser. Hold down right mouse button to initiate a command.", techDescription: "Vanilla Javascript, and the Google Extension API.", githubLink: "", link: "" },
	{ name: 'Rock, Paper, Scissor multiplayer', pic: "/projects/undraw_rps.svg", description: "Rock, Paper, Scissor as a multiplayer game.", techDescription: "Frontend is HTML, CSS and Javascript. Backend is in Node JS and Socket.IO. Demo is deployed on Heroku.", githubLink: "", link: "" },
]

function Projects() {
	return (
		<div>
			{projectsArr.map(({ name, pic, description, techDescription }, i) => <Item key={name} name={name} pic={pic}
				description={description}
				techDescription={techDescription}
			// style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}
			></Item>)}
		</div>
	)
}
export default Projects;