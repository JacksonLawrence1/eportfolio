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
		overview: 'Ambitious roguelike built in Unity',
		imageUrl: 'morbent-manor.png',
	},
	{
		id: 'kitchen-feud',
		name: 'Kitchen Feud',
		tags: ['C#', 'Unity'],
		overview: 'Online team-based cooking game built in Unity',
		imageUrl: 'kf.jpg',
	},
	{
		id: 'warcraft-portfolio',
		name: 'Warcraft Portfolio',
		tags: ['Svelte', 'JavaScript', 'TailwindCSS'],
		overview: 'Portfolio creation tool for World of Warcraft characters',
		imageUrl: 'warcraft-portfolio.png',
	}, 
	{
		id: 'rendering-engine',
		name: 'C++ Rendering Engine',
		tags: ['C++', 'SDL2', 'GLM'],
		overview: 'Rendering engine built in C++ with SDL2 and GLM',
		imageUrl: 'i18.bmp',
	}, 
	{
		id: 'sensitivty-converter',
		name: 'Sensitivity Converter',
		tags: ['React', 'JavaScript'],
		overview: 'Tool to convert mouse sensitivity between games',
		imageUrl: 'sensitivity-converter.png',	
	},
	{
		id: 'letterboxd-rec',
		name: 'Letterboxd Rec',
		tags: ['Go', 'HTMX'],
		overview: 'Accurate Movie recommendations, built using Go',
		imageUrl: 'placeholder.png',
	},
	{
		id: 'blender-farm',
		name: 'AWS Rendering Farm',
		tags: ['Python', 'AWS'],
		overview: 'Rendering farm for Blender built with AWS',
		imageUrl: 'placeholder.png',
	},
	{
		id: 'graph-calculator',
		name: 'Graphing Calculator',
		tags: ['Python', 'Pygame'],
		overview: 'Desmos like graphing calculator',
		imageUrl: 'graph-calculator.png',
	},
	{
		id: 'ale-trail',
		name: 'Ale Trail',
		tags: ['Android', 'Kotlin'],
		overview: 'Pub crawl tracking app for Android devices',
		imageUrl: 'pilgrim.jpg',
	},
	{
		id: 'director-spectrum',
		name: 'Director Spectrum',
		tags: ['Svelte', 'TypeScript'],
		overview: "Showcase of different film director styles",
		imageUrl: 'placeholder.png',
	},
	{
		id: 'bse',
		name: 'Bristol Stock Exchange',
		tags: ['Python'],
		overview: 'Evaluation of an automated and adaptive stock trading strategy',
		imageUrl: 'placeholder.png',
	}
]

