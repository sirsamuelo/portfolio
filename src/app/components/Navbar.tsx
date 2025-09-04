import React from 'react';

export const Navbar = () => {
	return (
		<header className='w-full'>
			<div className='max-w-6xl mx-auto flex items-center justify-between px-8 py-4'>
				{/* Logo */}
				<div className='text-2xl font-bold'>📱</div>

				{/* Nav Links */}
				<nav className='flex items-center gap-6'>
					<ul className='flex gap-6 text-sm'>
						<li>
							<a href='#about' className='hover:text-blue-500'>
								About
							</a>
						</li>
						<li>
							<a
								href='#experience'
								className='hover:text-blue-500'
							>
								Experience
							</a>
						</li>
						<li>
							<a href='#projects' className='hover:text-blue-500'>
								Projects
							</a>
						</li>
						<li>
							<a href='#contact' className='hover:text-blue-500'>
								Contact
							</a>
						</li>
					</ul>
					<a
						href='/CV.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='border-l pl-4 hover:text-blue-500'
					>
						Resume
					</a>
					<a
						href='#hire'
						className='ml-4 px-4 py-2 border rounded hover:bg-blue-500 hover:text-white transition'
					>
						Hire Me
					</a>
				</nav>
			</div>
		</header>
	);
};
