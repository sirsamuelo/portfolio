import { Github, Linkedin } from 'lucide-react';
import React from 'react';

export const Footer = () => {
	return (
		<footer className='w-full bg-white text-center py-16 px-4'>
			<div className='flex items-center justify-center mb-12'>
				<hr className='w-1/4 border-t border-gray-300' />
				<h2 className='text-xl md:text-2xl font-semibold text-gray-800 mx-4 whitespace-nowrap'>
					Contact
				</h2>
				<hr className='w-1/4 border-t border-gray-300' />
			</div>

			{/* Contact Message */}
			<p className='text-sm md:text-base text-gray-600 mb-8 max-w-xl mx-auto'>
				I am currently seeking employment, and I would appreciate it if
				you could contact me with any available job opportunities.
			</p>

			{/* Write Message Button */}
			<a
				href='mailto:tvoj-email@example.com'
				className='inline-block px-8 py-3 mb-16 text-sm font-medium text-gray-600 border border-gray-400 rounded-full transition-colors hover:bg-gray-100'
			>
				Write Message
			</a>

			{/* Social Icons */}
			<div className='flex justify-center gap-6 mb-4'>
				<a
					href='https://github.com/tvoje-meno'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='GitHub Profile'
					className='text-gray-500 hover:text-gray-800 transition-colors'
				>
					<Github size={24} />
				</a>
				<a
					href='https://linkedin.com/in/tvoje-meno'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='LinkedIn Profile'
					className='text-gray-500 hover:text-gray-800 transition-colors'
				>
					<Linkedin size={24} />
				</a>
			</div>

			{/* Copyright */}
			<p className='text-xs text-gray-500'>
				John Smith - {new Date().getFullYear()}
			</p>
		</footer>
	);
};
