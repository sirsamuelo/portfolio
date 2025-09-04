import Image from 'next/image';

export const About = () => {
	return (
		<section id='about' className='w-full bg-gray-100 py-16 px-8'>
			<div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
				<div className='col-span-2'>
					<div className='text-center mb-12'>
						<div className='flex items-center justify-center mb-4'>
							<div className='h-px bg-gray-300 flex-1'></div>
							<h2 className='text-2xl font-normal text-gray-800 mx-8 tracking-wider'>
								About Me
							</h2>
							<div className='h-px bg-gray-300 flex-1'></div>
						</div>
					</div>
				</div>

				<div className='md:col-span-1'>
					<p className='text-gray-700 leading-relaxed'>
						Hello, my name is Sam and I am a passionate and
						dedicated developer with a strong focus on creating
						clean, efficient, and modern web applications. My
						journey in technology began with a curiosity for how
						things work, and it quickly evolved into a drive to
						build intuitive and seamless digital experiences.
					</p>
					<p className='text-gray-700 leading-relaxed mt-4'>
						I specialize in technologies like **React**,
						**Node.js**, and modern JavaScript frameworks. I am a
						firm believer in continuous learning and always stay
						up-to-date with the latest industry trends to deliver
						the best possible solutions. I am driven by challenges
						and thrive on turning complex problems into elegant
						code.
					</p>
				</div>

				<div className='w-full md:w-1/2 h-87 bg-gray-200 aspect-video rounded-lg overflow-hidden shadow-lg'>
					<Image
						src='/me.png'
						alt='samkou'
						width={600}
						height={400}
						layout='responsive'
						objectFit='cover'
						className='w-full h-full'
					/>
				</div>
			</div>
		</section>
	);
};
