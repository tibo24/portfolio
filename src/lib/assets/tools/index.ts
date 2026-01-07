import Angular from './Angular.svg';
import Arduino from './arduino.svg';
import CPP from './CPP.svg';
import CSharp from './C_sharp.svg';
import DaisyUI from './daisyui.svg';
import Docker from './docker.svg';
import Git from './git.svg';
import JavaScript from './JavaScript.svg';
import Linux from './linux.svg';
import MSSQL from './Microsoft_SQL_Server.svg';
import MySQL from './mysql.svg';
import PCB from './pcb.png';
import PostgreSQL from './Postgresql.svg';
import Python from './Python.svg';
import React from './React.svg';
import Svelte from './Svelte.svg';
import TailwindCSS from './Tailwind_CSS.svg';
import ThreeJS from './Threejs.svg';
import Threlte from './threlte.png';
import TypeScript from './TypeScript.svg';
import VBNet from './VB.Net.svg';

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
