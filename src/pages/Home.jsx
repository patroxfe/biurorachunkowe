import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Services from '../components/Services'

const Home = () => {
	return (
		<div>
			<Header />
			<AboutMe />
			<Services />
			<Contact />
			<Newsletter />
		</div>
	)
}

export default Home
