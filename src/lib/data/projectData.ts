export type Project = {
	id: string;
	name: string;
	tags: string[];
	overview: string;
	imageUrl: string;
};

export const projects: Project[] = [
	{
		id: 'morbent-manor',
		name: 'Morbent Manor',
		tags: ['C#', 'Unity'],
		overview: 'An ambitious roguelike built in Unity',
		imageUrl: 'morbent-manor.png',
	},
	{
		id: 'kitchen-feud',
		name: 'Kitchen Feud',
		tags: ['C#', 'Unity'],
		overview: 'A team-based cooking game built in Unity',
		imageUrl: 'kf.jpg',
	},
	{
		id: 'warcraft-portfolio',
		name: 'Warcraft Portfolio',
		tags: ['Svelte', 'JavaScript', 'TailwindCSS'],
		overview: 'A portfolio generator for World of Warcraft characters',
		imageUrl: 'warcraft-portfolio.png',
	}, 
	{
		id: 'rendering-engine',
		name: 'C++ Rendering Engine',
		tags: ['C++', 'OpenGL'],
		overview: 'A rendering engine built in C++',
		imageUrl: 'i18.bmp',
	}, 
	{
		id: 'sensitivty-converter',
		name: 'Sensitivity Converter',
		tags: ['React', 'JavaScript'],
		overview: 'A tool to convert sensitivity between games',
		imageUrl: 'sensitivity-converter.png',	
	}
]

