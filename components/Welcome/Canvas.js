import React, { useRef, useEffect, useState } from 'react'
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
class Dot {
	constructor(x, y, random = true) {
		this.x;
		this.y;
		if (random) {
			this.x = getRandomInt(x);
			this.y = getRandomInt(y);
		} else {
			this.y = y;
			this.x = x;
		}
		this.vx = getRandomArbitrary(-0.07, 0.07);
		this.vy = getRandomArbitrary(-0.07, 0.07);
		const int = getRandomInt(9);
		const colorInt = getRandomInt(9);
		this.color = Math.random() < 0.9 ? `#${colorInt}ad${int}` : `#f44${int}`
	}
}
function debounce(func) {
	var timer;
	return function (event) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(func, 200, event);
	};
}
// This should be like a game loop. 
// 1. Get input.
// 2. Update. Update position of dots.
// 3. Render.


// Recieves width and height and return number of dots, and how far the lines are from the mouse.
function getOptions(width, height) {
	if (width > 1500) {
		return {
			dots: 550,
			distance: 90,
			mouseLinkRadius: 220
		}
	} else if (width > 1100) {
		return {
			dots: 400,
			distance: 80,
			mouseLinkRadius: 180
		}
	} else if (width > 900) {
		return {
			dots: 350,
			distance: 75,
			mouseLinkRadius: 130
		}
	} else if (width > 650) {
		return {
			dots: 300,
			distance: 70,
			mouseLinkRadius: 150
		}
	} else {
		return {
			dots: 230,
			distance: 65,
			mouseLinkRadius: 130
		}
	}
}
const Canvas = props => {
	const canvasRef = useRef(null)
	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		canvas.width = document.body.scrollWidth;
		canvas.height = window.innerHeight;
		let options = getOptions(canvas.width, canvas.height);
		ctx.fillStyle = "#ddd";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		let frameCount = 0;
		let animationFrameId;
		let mousePos = null;

		canvas.addEventListener('mousemove', getMousePos);
		canvas.addEventListener('click', handleClick);
		// Debounce is used to not spam the resize event, but only do it after no new resize event has occured for a small time. 
		window.addEventListener('resize', debounce(function () {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			options = getOptions(canvas.width, canvas.height);
			console.log(options)
			dots = generateDots(options);
		}));
		function handleClick() {
			if (!mousePos) {
				return
			}
			for (let i = 0; i < 2; i++) {
				dots.push(new Dot(mousePos.x, mousePos.y, false));
			}
		}
		const generateDots = () => {
			let arr = [];
			for (let i = 0; i < options.dots; i++) {
				arr.push(new Dot(canvas.width, canvas.height));
			}
			return arr;
		}
		let dots = generateDots();
		function getMousePos(evt) {
			const rect = canvas.getBoundingClientRect();
			const x = evt.clientX - rect.left;
			const y = evt.clientY - rect.top;
			dots[0].x = x;
			dots[0].y = y;
			dots[0].vx = 0;
			dots[0].vy = 0;

			mousePos = {
				x: evt.clientX - rect.left,
				y: evt.clientY - rect.top
			};
		}
		generateLines(dots);

		function generateLines(dots) {
			const distance = 70; // How far dots will link.
			// let temp = []
			if (mousePos === null) return

			for (let i = 0; i < dots.length; i++) {
				for (let j = i; j < dots.length; j++) {
					const firstDot = dots[i];
					const secondDot = dots[j];

					if (
						firstDot.x - secondDot.x < distance &&
						firstDot.y - secondDot.y < distance &&
						firstDot.x - secondDot.x > -distance &&
						firstDot.y - secondDot.y > -distance
					) {

						if (
							firstDot.x - mousePos.x < options.mouseLinkRadius &&
							firstDot.y - mousePos.y < options.mouseLinkRadius &&
							firstDot.x - mousePos.x > -options.mouseLinkRadius &&
							firstDot.y - mousePos.y > -options.mouseLinkRadius
						) {
							ctx.beginPath();
							ctx.moveTo(firstDot.x, firstDot.y);
							ctx.lineTo(secondDot.x, secondDot.y);
							// throw new Error('alksdmlaskm')

							// make the fill colour fade out the further you are from the mouse
							const dotDistance =
								((firstDot.x - mousePos.x) ** 2 +
									(firstDot.y - mousePos.y) ** 2) **
								0.5;
							let distanceRatio = dotDistance / options.mouseLinkRadius;

							// make it so it doesnt fade out completely
							distanceRatio -= 0.3;
							if (distanceRatio < 0) {
								distanceRatio = 0;
							}


							ctx.strokeStyle = `rgba(81, 162, 233,  ${1 - distanceRatio} )`;
							ctx.stroke();
							ctx.closePath();
						}
					}
				}
			}
		}

		const update = (dots) => {
			for (const dot of dots) {
				// I need two pixel margin, to make it look like it bounces of wall.
				if (dot.x <= 2) {
					dot.vx = Math.abs(dot.vx)
				}
				if (dot.y <= 2) {
					dot.vy = Math.abs(dot.vy)
				}
				if (dot.y >= canvas.height - 2) {
					dot.vy = -Math.abs(dot.vy)
				}
				if (dot.x >= canvas.width - 2) {
					dot.vx = -Math.abs(dot.vx)
				}
				dot.x += dot.vx;
				dot.y += dot.vy;
			}
			// Paint a line between all dots, if the length between them is below a certain threshold.
			// When that works, make sure that the distance from mouse is not to high.
			generateLines(dots);
		}
		const draw = (ctx, frameCount) => {
			ctx.fillStyle = "#111"
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
			for (const dot of dots) {
				if (mousePos) {

					const dotDistance =
						((dot.x - mousePos.x) ** 2 +
							(dot.y - mousePos.y) ** 2) **
						0.5;
					let distanceRatio = dotDistance / 300;
					if (distanceRatio > 0.7) {
						distanceRatio = 0.7
					}
					ctx.fillStyle = `rgba(150, 45, 171,  ${1 - distanceRatio} )`;

				} else {
					ctx.fillStyle = `rgba(150, 45, 171,  ${0.3} )`;
				}
				ctx.strokeStyle = dot.color;

				ctx.beginPath();
				ctx.arc(dot.x, dot.y, 1, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.closePath();
			}
		}

		const render = () => {
			frameCount++
			draw(ctx, frameCount)
			update(dots);
			animationFrameId = window.requestAnimationFrame(render)
		}

		render()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [])

	return <canvas ref={canvasRef} {...props} id='home' />
}

export default Canvas