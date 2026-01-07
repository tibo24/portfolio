const Angular = '/images/tools/Angular.svg';
const Arduino = '/images/tools/arduino.svg';
const CPP = '/images/tools/CPP.svg';
const CSharp = '/images/tools/C_sharp.svg';
const DaisyUI = '/images/tools/daisyui.svg';
const Docker = '/images/tools/docker.svg';
const Git = '/images/tools/git.svg';
const JavaScript = '/images/tools/JavaScript.svg';
const Linux = '/images/tools/linux.svg';
const MSSQL = '/images/tools/Microsoft_SQL_Server.svg';
const MySQL = '/images/tools/mysql.svg';
const PCB = '/images/tools/pcb.png';
const PostgreSQL = '/images/tools/Postgresql.svg';
const Python = '/images/tools/Python.svg';
const React = '/images/tools/React.svg';
const Svelte = '/images/tools/Svelte.svg';
const TailwindCSS = '/images/tools/Tailwind_CSS.svg';
const ThreeJS = '/images/tools/Threejs.svg';
const Threlte = '/images/tools/threlte.png';
const TypeScript = '/images/tools/TypeScript.svg';
const VBNet = '/images/tools/VB.Net.svg';

export const tools = {
	Angular: { src: Angular, text: 'Angular' },
	Arduino: { src: Arduino, text: 'Arduino' },
	CPP: { src: CPP, text: 'C++' },
	CSharp: { src: CSharp, text: 'C#' },
	DaisyUI: { src: DaisyUI, text: 'DaisyUI' },
	Docker: { src: Docker, text: 'Docker' },
	Git: { src: Git, text: 'Git' },
	JavaScript: { src: JavaScript, text: 'JavaScript' },
	Linux: { src: Linux, text: 'Linux' },
	MSSQL: { src: MSSQL, text: 'MSSQL' },
	MySQL: { src: MySQL, text: 'MySQL' },
	PCB: { src: PCB, text: 'PCB' },
	PostgreSQL: { src: PostgreSQL, text: 'PostgreSQL' },
	Python: { src: Python, text: 'Python' },
	React: { src: React, text: 'React' },
	Svelte: { src: Svelte, text: 'Svelte' },
	TailwindCSS: { src: TailwindCSS, text: 'Tailwind CSS' },
	ThreeJS: { src: ThreeJS, text: 'ThreeJS' },
	Threlte: { src: Threlte, text: 'Threlte' },
	TypeScript: { src: TypeScript, text: 'TypeScript' },
	VBNet: { src: VBNet, text: 'VB.Net' }
};

export type Tools = typeof tools;
export type ToolKey = keyof Tools;
export type Tool = Tools[ToolKey];

export {
	Angular,
	Arduino,
	CPP,
	CSharp,
	DaisyUI,
	Docker,
	Git,
	JavaScript,
	Linux,
	MSSQL,
	MySQL,
	PCB,
	PostgreSQL,
	Python,
	React,
	Svelte,
	TailwindCSS,
	ThreeJS,
	Threlte,
	TypeScript,
	VBNet
};
