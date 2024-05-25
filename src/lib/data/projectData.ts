import { type Button, addButtonIcon } from './buttons';
import projectsJSON from './projects.json';

export type Project = {
	id: string;
	name: string;
	year: number;
	tags: string[];
	overview: string;
	imageUrl: string;
	description: string[];
	buttons: Button[];
};

export const projects: Project[] = projectsJSON.map((project) => {
	return { 
		...project, 
		description: project.description.split('\n'),
		buttons: project.buttons.map(button => addButtonIcon(button)),
	};
}).sort((a, b) => b.year - a.year);

projects.unshift(projects.pop()!); // Move the latest project to the front


