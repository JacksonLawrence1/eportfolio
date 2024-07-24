import { type Button, addButtonIcon } from './buttons';
import projectsJSON from './projects.json';

// only have max 2 buttons
type Buttons = [Button, Button] | [Button];

export type Project = {
	id: string;
	name: string;
	year: number;
	month: number;
	tags: string[];
	overview: string;
	imageUrl: string;
	description: string[];
	buttons: Buttons;
};


export default projectsJSON.map((project) => {
	return { 
		...project, 
		month: +project.date.substring(0, 2),
		year: +project.date.slice(-4),
		description: project.description.split('\n'),
		buttons: project.buttons.map(button => addButtonIcon(button)) as Buttons,
	};
}).sort((a, b) => {
	if (a.year === b.year) {
		return b.month - a.month;
	}
	return b.year - a.year;
});


