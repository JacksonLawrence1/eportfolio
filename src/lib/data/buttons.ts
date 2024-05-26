import { type ComponentType, type SvelteComponent } from 'svelte';

import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
import MailIcon from '$lib/icons/MailIcon.svelte';
import PlayIcon from '$lib/icons/PlayIcon.svelte';
import GlobeIcon from '$lib/icons/GlobeIcon.svelte';
import VideoIcon from '$lib/icons/VideoIcon.svelte';

type buttonComponent = ComponentType<SvelteComponent<{colour: string, classList?: string}>>;

export type Button = {
	text: string;
	link: string;
	coloured: boolean;
	icon?: buttonComponent;
}

export type ButtonProps = {
	text: string;
	link: string;
}

const iconMap: Record<string, buttonComponent> = {
	'GitHub': GitHubIcon,
	'Contact': MailIcon,
	'Play': PlayIcon,
	'Website': GlobeIcon,
	'Video': VideoIcon,
}

const colouredButtons: Set<string> = new Set(['Website', 'Play', 'Video']);

// Add a button icon based on the text
export function addButtonIcon({ text, link }: ButtonProps): Button {
	return {
		text,
		link,
		coloured: colouredButtons.has(text),
		icon: iconMap[text] || PlayIcon,
	}
}
