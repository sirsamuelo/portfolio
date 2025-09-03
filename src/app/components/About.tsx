export const About = () => {
	return (
		<section id='about' className='w-full bg-gray-100 py-16 px-8'>
			<div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
				{/* Heading */}
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

				{/* Content */}
				<div className='md:col-span-1'>
					<p className='text-gray-700 leading-relaxed'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent sit amet vestibulum felis. Vivamus facilisis
						ligula id fringilla gravida. Sed consectetur mauris at
						magna tempor, vel cursus nunc blandit. Donec in libero
						vel magna consectetur vehicula.
					</p>
				</div>

				{/* Image Placeholder */}
				<div className='w-full h-48 bg-gray-300 rounded-lg md:col-span-1' />
			</div>
		</section>
	);
};
