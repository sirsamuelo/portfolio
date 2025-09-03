import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

export default function Home() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Footer />
		</div>
	);
}
