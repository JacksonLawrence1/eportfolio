<script lang="ts">
	import { type Project as ProjectType, projects } from '$lib/data/projectData';
	import Slider from '$lib/components/Slider.svelte';
	
	import Project from '$lib/components/Project.svelte'
	import ProjectInfo from '$lib/components/ProjectInfo.svelte';
	
	let backward: () => void = $state(() => {});
	let forward: () => void = $state(() => {});

	let currentProject: ProjectType = $state.frozen(projects[1]);
</script>

<div id="projects" class="info-section bg-accent-700">
	<div class="flex flex-col gap-8 wrapper">
		<h2 class="section-header">Projects</h2>
		<Slider items={projects} bind:currentItem={currentProject} ItemComponent={Project} bind:backwards={backward} bind:forwards={forward} />
	</div>
	<div class="py-8 flex justify-between wrapper text-xl">
		<button onclick={backward} class="btn">Previous</button>
		<button onclick={forward} class="btn">Next</button>
	</div>
	<ProjectInfo project={currentProject} />
</div>

