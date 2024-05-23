<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import type { Project as ProjectType } from '$lib/data/projectData';
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	type Props = {
		projects: ProjectType[];
		backwards: () => void;
		forwards: () => void;
	};

	let { projects, forwards = $bindable(), backwards = $bindable() }: Props = $props();
	// these are both used, but eslint can't tell
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	forwards = () => {
		const selected = projectsArr.shift();
		if (selected) {
			projectsArr.push(selected);
		}
	};

	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	backwards = () => {
		const selected = projectsArr.pop();
		if (selected) {
			projectsArr.unshift(selected);
		}
	};

	function selectInput(i: number) {
		// PERF: Make this better
		if (i === 0) {
			backwards();
		}

		for (let j = 0; j < i - 1; j++) {
			forwards();
		}
	}

	// Apply animations to the first and last elements
	// BUG: When spamming the buttons, the "fly" animation gets out of sync
	function tailAnimations(i: number): { x: number } | undefined {
		switch (i) {
			case 0:
				return { x: -200 };
			case itemsToShow - 1:
				return { x: 200 };
			default:
				return undefined;
		}
	}

	const projectsArr: ProjectType[] = $state([...projects]);
	let itemsToShow = $state(7);

	function updateAnimationState(this: Window) {
		const width = this.window.innerWidth;

		if (width < 640) {
			itemsToShow = 4;
		} else if (width < 768) {
			itemsToShow = 5;
		} else if (width < 1024) {
			itemsToShow = 6;
		} else {
			itemsToShow = 7;
		}
	}

	onMount(() => {
		window.addEventListener('resize', updateAnimationState);

		// cleanup
		return () => window.removeEventListener('resize', updateAnimationState);
	});
</script>

<div class="slider">
	{#each projectsArr.slice(0, itemsToShow) as project, i (project.id)}
		<div
			class="overflow-hidden bg-black rounded-lg project"
			animate:flip={{ duration: 400 }}
			in:fly={tailAnimations(i)}
		>
			<Project {...project} index={i} select={selectInput} />
		</div>
	{/each}
</div>

<style>
	:root {
		--cols: 2;
		--frac: calc(100% / var(--cols));

		@media (min-width: 640px) {
			--cols: 3;
		}

		@media (min-width: 768px) {
			--cols: 4;
		}

		@media (min-width: 1024px) {
			--cols: 5;
		}
	}

	.slider {
		display: grid;
		grid-template-columns: repeat(calc(var(--cols) + 2), 1fr);
		width: calc(100% + 2 * var(--frac));
		margin-left: calc(-1 * var(--frac));
		grid-template-rows: repeat(1, 1fr);
		grid-auto-rows: 0;
		gap: 1rem;
	}

	.project:last-child {
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}

	.project:first-child {
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
	}
</style>
