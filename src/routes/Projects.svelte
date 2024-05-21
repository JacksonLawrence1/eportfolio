<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import { projects } from '$lib/data/projectData';

	let projectsArray = $state([...projects]);
	const itemsToShow = 5;

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
		// TODO: Make this better
		for (let j = 0; j < i; j++) {
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
		<div class="grid gap-4 px-16 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-test row-span-7 overflow-y-hidden">
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
