<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import { projects } from '$lib/data/projectData';

	let projectsArray = $state([...projects]);
	const itemsToShow = 7;

	function forward() {
		const selected = projectsArray.shift();
		if (selected) {
			projectsArray.push(selected);
		}
	}

	function backward() {
		const selected = projectsArray.pop();
		if (selected) {
			projectsArray.unshift(selected);
		}
	}

	function selectInput(i: number) {
		// PERF: Make this better
		// FIX: bug when pressing project 0
		if (i <= 1) {
			return;
		}

		for (let j = 0; j < i - 1; j++) {
			const selected = projectsArray.shift();
			if (selected) {
				projectsArray.push(selected);
			}
		}
	}
</script>

<div id="projects" class="info-section bg-accent-700">
	<div class="flex flex-col gap-8 wrapper">
		<h2 class="section-header">Projects</h2>
		<div class="slider">
			{#each projectsArray.slice(0, itemsToShow) as project, i}
				<Project {...project} index={i} select={selectInput} />
			{/each}
		</div>
	</div>
	<div class="py-8 flex justify-between wrapper text-xl">
		<button onclick={backward} class="btn">Previous</button>
		<button onclick={forward} class="btn">Next</button>
	</div>
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
		overflow-y: hidden;
	}
</style>
