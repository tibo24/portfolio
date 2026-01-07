import {
	Angular,
	CPP,
	CSharp,
	Docker,
	Git,
	JavaScript,
	Linux,
	MSSQL,
	MySQL,
	PostgreSQL,
	Python,
	React,
	Svelte,
	TailwindCSS,
	TypeScript,
	VBNet
} from '$lib/assets/tools';

export const vaardigheden = [
	{
		name: 'Programming languages',
		values: [
			{ text: 'Python', icon: Python, score: 75 },
			{ text: 'C++', icon: CPP, score: 70 },
			{ text: 'C#', icon: CSharp, score: 55 },
			{ text: 'VB.Net', icon: VBNet, score: 60 },
			{ text: 'JavaScript', icon: JavaScript, score: 85 },
			{ text: 'TypeScript', icon: TypeScript, score: 70 }
		]
	},
	{
		name: 'Frontend',
		values: [
			{ text: 'Svelte', icon: Svelte, score: 65 },
			{ text: 'React', icon: React, score: 50 },
			{ text: 'Angular', icon: Angular, score: 40 },
			{ text: 'Tailwind CSS', icon: TailwindCSS, score: 70 }
		]
	},
	{
		name: 'Database',
		values: [
			{ text: 'MySQL', icon: MySQL, score: 50 },
			{ text: 'Microsoft SQL', icon: MSSQL, score: 60 },
			{ text: 'PostgreSQL', icon: PostgreSQL, score: 40 }
		]
	},
	{
		name: 'Dev tools',
		values: [
			{ text: 'Linux', icon: Linux, score: 65 },
			{ text: 'Docker', icon: Docker, score: 40 },
			{ text: 'Git', icon: Git, score: 65 }
		]
	}
];
