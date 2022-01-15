import Head from 'next/head'
import Nav from '../components/Nav'
import Welcome from '../components/Welcome'
import CanvasNoLines from '../components/CanvasNoLines'
import About from '../components/About'
import Contact from '../components/Contact'
export default function Home() {
	return (
		<div>
			<Head>
				<title>Henrik Zenkert Portfolio Page</title>
				<meta name="description" content="A portfolio page for Henrik Zenkert" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Welcome /> */}
			<Nav></Nav>
			<CanvasNoLines />
			<div style={{ textAlign: 'center' }}>
				<h1 id='projects'>Projects</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<h1 id='contact'>Contact</h1>
				<About></About>
				<Contact></Contact>
			</div>
		</div>
	)
}
