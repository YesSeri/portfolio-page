import Head from 'next/head'
import Nav from '../components/Nav'
import Welcome from '../components/Welcome'
import CanvasNoLines from '../components/CanvasNoLines'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Heading from '../components/Heading'
import Footer from '../components/Footer'
export default function Home() {
	return (
		<div>
			<Head>
				<title>Henrik Zenkert Portfolio Page</title>
				<meta name="description" content="A portfolio page for Henrik Zenkert" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Welcome />
			<Nav></Nav>
			<CanvasNoLines />
			<div style={{ textAlign: 'center' }}>
				<Heading id='about'>About</Heading>
				<About></About>
				<Heading id='projects'>Projects</Heading>
				<Projects></Projects>
				<Heading id='contact'>Contact</Heading>
				<Contact></Contact>
				<Footer></Footer>
			</div>
		</div>
	)
}
