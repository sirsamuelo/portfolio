import React from 'react';

type SectionHeadingProps = {
	title: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
	return (
		<div className='flex items-center justify-center w-full my-8'>
			<div className='flex-1 h-[1px] bg-gray-400' />
			<h2 className='mx-4 text-xl font-semibold whitespace-nowrap text-black'>
				{title}
			</h2>
			<div className='flex-1 h-[1px] bg-gray-400' />
		</div>
	);
};

export default SectionHeading;
