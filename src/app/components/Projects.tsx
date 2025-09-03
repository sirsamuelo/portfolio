import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
	{
		name: 'topeducation.sk',
		description:
			'Webstránka pre akreditované kurzy manikúry a pedikúry. Aplikácia umožňuje prehliadanie ponuky kurzov, získavanie informácií o certifikáciách a priamy kontakt s poskytovateľom služieb. Dôraz bol kladený na čistý dizajn a jednoduchú navigáciu pre klientov.',
		technologies: ['Next.js', 'React', 'Tailwind CSS', 'SEO'],
		liveUrl: 'https://www.topeducation.sk',
		githubUrl: '#',
		image: '/topeducation.png',
	},
	{
		name: 'Blogový systém (Inšpirovaný Medium.com)',
		description:
			'Vlastný nástroj na správu obsahu, ktorý mi umožňuje písať, upravovať a publikovať blogové články. Vytvorený pre komplexnú prácu s front-endom aj back-endom, vrátane správy obsahu, ukladania súborov a integrácie externých API.',
		technologies: [
			'React',
			'TypeScript',
			'Express.js',
			'MongoDB',
			'AWS S3',
			'Speechify API',
		],
		liveUrl: '#',
		githubUrl: '#',
		image: '/medium.png',
	},
	{
		name: 'TradeHub (Inzertný portál)',
		description:
			'Komplexná webová aplikácia pre online inzerciu, inšpirovaná portálom Bazoš.sk. Projekt pokrýva kompletnú funkcionalitu od registrácie používateľov až po správu inzerátov a interakciu s nimi, s cieľom vytvoriť robustnú a užívateľsky prívetivú platformu pre obchodovanie.',
		technologies: [
			'React',
			'TypeScript',
			'Express.js',
			'MongoDB',
			'Vite',
			'SCSS',
			'AWS S3',
			'JWT Authentication',
		],
		features: [
			'Registrácia a autentifikácia používateľov',
			'Vytváranie a správa inzerátov',
			'Pokročilé filtrovanie a vyhľadávanie inzerátov',
			'Zobrazovanie inzerátov podľa kategórií',
			'Funkcia Wishlistu pre ukladanie obľúbených položiek',
			'Zdieľanie inzerátov na sociálnych sieťach',
			"Sekcia 'Moje inzeráty' pre správu vlastných ponúk",
			'Ukladanie obrázkov inzerátov na AWS S3',
		],
		liveUrl: 'https://tradehub-demo.vercel.app',
		githubUrl: 'https://github.com/tvoje-meno/tradehub-repo',
		image: '/tradehub.png',
	},
];

export const Projects = () => {
	return (
		<section id='projects' className='w-full bg-light-grey'>
			<section className='max-w-6xl mx-auto px-4 py-16'>
				<div className='flex justify-center mb-12'>
					<h2 className='text-3xl sm:text-4xl font-bold border-b-2 border-gray-400 pb-2'>
						Featured Projects
					</h2>
				</div>

				<div className='space-y-24'>
					{projects.map((project, index) => (
						<div
							key={index}
							className={`flex flex-col md:flex-row items-center gap-8 ${
								index % 2 !== 0 ? 'md:flex-row-reverse' : ''
							}`}
						>
							{/* Project Image */}
							<div className='w-full md:w-1/2 bg-gray-200 aspect-video rounded-lg overflow-hidden shadow-lg'>
								{/* Next.js Image component for optimization */}
								<Image
									src={project.image}
									alt={project.name}
									width={600}
									height={400}
									layout='responsive'
									objectFit='cover'
									className='w-full h-full'
								/>
							</div>

							{/* Project Details */}
							<div className='w-full md:w-1/2'>
								<h3 className='text-2xl font-bold mb-2 text-center md:text-left'>
									{project.name}
								</h3>
								<p className='text-gray-700 leading-relaxed mb-4 text-center md:text-left'>
									{project.description}
								</p>

								{/* Technologies and Links */}
								<div className='border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0'>
									<div className='flex flex-wrap justify-center md:justify-start gap-4 text-sm'>
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full'
											>
												{tech}
											</span>
										))}
									</div>
									<div className='flex gap-4'>
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='text-gray-600 hover:text-gray-800 transition-colors'
										>
											<Github size={24} />
										</a>
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='text-gray-600 hover:text-gray-800 transition-colors'
										>
											<ExternalLink size={24} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</section>
	);
};
