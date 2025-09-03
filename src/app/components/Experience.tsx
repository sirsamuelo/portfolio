import React from 'react';

// Experience Component
export const Experience = () => {
	const experiences = [
		{
			title: 'Junior Software Engineer',
			company: 'Infobip s. r. o.',
			period: '2022 - Jul 2025',
			responsibilities: [
				'Developed frontend components using React and TypeScript for CCaaS (Contact Center as a Service) Platform, delivering scalable solutions for enterprise customers',
				'Collaborated with cross-functional teams in an agile environment, participating in daily standups, sprint planning, retrospectives, and code reviews to ensure high-quality deliverables',
				'Managed code versioning and deployment processes using Git for source control and Jenkins for continuous integration and automated builds',
				'Built reusable UI components and maintained component libraries to improve development efficiency and ensure consistent user experience across the platform',
			],
		},
		{
			title: 'Service Desk Agent',
			company: 'CANCOM Slovakia s.r.o.',
			period: '2020 - 2022',
			responsibilities: [
				'Managed IT support tickets through ServiceNow ticketing system, ensuring proper documentation, prioritization, and timely resolution of technical issues',
				'Basic Linux system administration tasks including service status checks (systemctl), log review (journalctl, /var/log), disk and memory usage monitoring (df, free, top), basic user and permission management (chmod, chown), and remote server access via SSH',
				'Basic network diagnostics using tools like ping and curl to troubleshoot connectivity issues and verify service availability',
				'Hands-on experience with VMware ESXi through vSphere Client: basic VM lifecycle management (start/stop/restart), resource allocation (CPU, RAM, disk), attaching ISOs, creating and reverting snapshots, monitoring VM performance, and basic virtual networking setup',
			],
		},
	];

	return (
		<section id='experience' className='py-16 max-w-6xl mx-auto'>
			{/* Section Header */}
			<div className='text-center mb-16'>
				<div className='flex items-center justify-center mb-4'>
					<div className='h-px bg-gray-300 flex-1'></div>
					<h2 className='text-2xl font-normal text-gray-800 mx-8 tracking-wider'>
						Experience
					</h2>
					<div className='h-px bg-gray-300 flex-1'></div>
				</div>
			</div>

			{/* Experience Items */}
			<div className='space-y-12'>
				{experiences.map((exp, index) => (
					<div
						key={index}
						className='grid grid-cols-1 lg:grid-cols-12 gap-8'
					>
						{/* Left Column - Job Info */}
						<div className='lg:col-span-4'>
							<div className='text-right lg:pr-8'>
								<h3 className='text-lg font-medium text-gray-800 mb-1'>
									{exp.title}
								</h3>
								<p className='text-sm text-gray-600 mb-2'>
									{exp.company}
								</p>
								<p className='text-xs text-gray-500'>
									{exp.period}
								</p>
							</div>
						</div>

						{/* Divider Line */}
						<div className='hidden lg:block lg:col-span-1'>
							<div className='h-full w-px bg-gray-300 mx-auto'></div>
						</div>

						{/* Right Column - Responsibilities */}
						<div className='lg:col-span-7'>
							<ul className='space-y-3'>
								{exp.responsibilities.map(
									(responsibility, idx) => (
										<li
											key={idx}
											className='flex items-start'
										>
											<span className='text-gray-400 mr-3 mt-1.5 text-xs'>
												•
											</span>
											<p className='text-sm text-gray-700 leading-relaxed'>
												{responsibility}
											</p>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
