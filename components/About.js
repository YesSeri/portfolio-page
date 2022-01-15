import React from 'react'
import styles from './About.module.css'
import Skill from './About/Skill'


const About = () => {
	return (
		<div>
			<h1 id='about'>About</h1>
			<section className={styles.section}>
				<div className={styles.pane}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna mauris, facilisis vitae quam vitae, rutrum tincidunt est. Nulla tempus enim nec eros consectetur imperdiet. Duis faucibus metus sit amet elementum scelerisque. Sed rhoncus nisl non dolor convallis, et efficitur eros pellentesque. In bibendum sit amet nisi eu posuere. Vivamus consequat tellus vitae dui fermentum iaculis. Quisque id orci at metus porttitor auctor.
				</div>
				{/* <div className={styles.pane}>
					{skills.map((el, i) => <Skill key={i} text={el.text} pic={el.pic} />)}
				</div> */}
				<div className={styles.skillContainer}>
					<div className={styles.skillColumn} style={{ marginTop: '3em', marginRight: '1em' }}>
						<Skill text={skills[0].text} pic={skills[0].pic}></Skill>
						<Skill text={skills[1].text} pic={skills[1].pic}></Skill>
						<Skill text={skills[2].text} pic={skills[2].pic}></Skill>
					</div>
					<div className={styles.skillColumn}>
						<Skill text={skills[3].text} pic={skills[3].pic}></Skill>
						<Skill text={skills[4].text} pic={skills[4].pic}></Skill>
						<Skill text={skills[5].text} pic={skills[5].pic}></Skill>
					</div>
					<div className={styles.skillColumn} style={{ marginTop: '3em', marginLeft: '1em' }}>
						<Skill text={skills[6].text} pic={skills[6].pic}></Skill>
						<Skill text={skills[7].text} pic={skills[7].pic}></Skill>
						<Skill text={skills[8].text} pic={skills[8].pic}></Skill>
					</div>
				</div>
			</section>
		</div>
	)
}

const skills = [
	{
		text: "Javascript",
		pic: "/icons/js.svg",
	},
	{
		text: "HTML",
		pic: "/icons/html.svg",
	},
	{
		text: "CSS",
		pic: "/icons/css.svg",
	},
	{
		text: "React",
		pic: "/icons/react.svg",
	},
	{
		text: "MYSQL",
		pic: "/icons/mysql.svg",
	},
	{
		text: "Node.JS",
		pic: "/icons/node.svg",
	},
	{
		text: "Git",
		pic: "/icons/git.svg",
	},
	{
		text: "Express",
		pic: "/icons/express.svg",
	},
	{
		text: "React-Native",
		pic: "/icons/react.svg",
	}
]
export default About
