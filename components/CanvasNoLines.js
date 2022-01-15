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
			this.y = getRandomInt(x);
			this.x = getRandomInt(x);
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
// This should be like a game loop. 
// 1. Get input.
// 2. Update. Update position of dots.
// 3. Render.
const CanvasNoLines = props => {
	const canvasRef = useRef(null)
	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		canvas.width = document.body.scrollWidth;
		canvas.height = window.innerHeight;
		ctx.fillStyle = "#ddd";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		let frameCount = 0;
		let animationFrameId;
		let mousePos = null;

		canvas.addEventListener('mousemove', getMousePos);
		canvas.addEventListener('click', handleClick);
		function handleClick() {
			for (let i = 0; i < 2; i++) {
				dots.push(new Dot(mousePos.x, mousePos.y, false));
			}
		}
		const generateDots = () => {
			let arr = [];
			for (let i = 0; i < 150; i++) {
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
		}
		const draw = (ctx, frameCount) => {
			ctx.fillStyle = "#111"
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
			// ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
			for (const dot of dots) {
				// 		// I use rect for dot to avoid aliasing issues.
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

		//Our draw came here
		const render = () => {
			// if (frameCount > 10) return
			frameCount++
			//registerInput();
			draw(ctx, frameCount)
			update(dots);
			animationFrameId = window.requestAnimationFrame(render)
		}

		render()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [])

	return <canvas style={{ position: 'fixed', zIndex: -5, top: 0, left: 0 }} ref={canvasRef} {...props} />
}

export default CanvasNoLines