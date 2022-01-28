import Image from 'next/image';
import React from 'react'
import styles from './GitDemoLink.module.css'
import LinkSVG from '../SVG/LinkSVG'
import GithubSVG from '../SVG/GithubSVG'

const GitDemoLink = ({ githubLink, codeLink }) => {
	return (
		<div className={styles.centered}>
			<div className={styles.container}>
				<div className={styles.paddingContainer}>
					<div
						className={styles.innerContainer}
						onClick={(e) => {
							e.preventDefault();
							let a = document.createElement('a');
							a.target = '_blank';
							a.href = githubLink;
							a.click();
						}}
					>
						<span className={styles.link}>
							Demo
						</span>
						<LinkSVG className={styles.icon} />
						{/* <Image src="/link.svg" alt='link to demo' width="24px" height='24px'></Image> */}
						{/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" ><path fill="white" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" /></svg> */}
					</div>
					<div className={styles.innerContainer}
						onClick={(e) => {
							e.preventDefault();
							let a = document.createElement('a');
							a.target = '_blank';
							a.href = codeLink;
							a.click();
						}}
					>
						<span className={styles.link}>
							Code
						</span>
						<GithubSVG className={styles.icon}></GithubSVG>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GitDemoLink
