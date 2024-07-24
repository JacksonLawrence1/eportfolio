<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import ProjectInfo from '$lib/components/ProjectInfo.svelte';
	import ProjectSliderComponent from '$lib/components/ProjectSliderComponent.svelte';
	import Title from '$lib/components/Title.svelte';

	import projects from '$lib/data/projectData';
	import { type Project } from '$lib/data/projectData';

	let current: number = 0;

	// wrap around the current index, with no negative values
	function updateCurrent(direction: number) {
		return (current + direction + projects.length) % projects.length;
	}
</script>

<div id="projects" class="info-section bg-accent-700">
	<div class="flex flex-col gap-4 wrapper">
		<Title title="Projects" />
		<Carousel bind:current items={projects}>
			{#snippet children(item: Project, i: number)}
				<ProjectSliderComponent selected={current === i} {item} />
			{/snippet}
		</Carousel>
		<div class="flex justify-between">
			<button class="btn" onclick={() => current = updateCurrent(-1)}>Prev</button>
			<button class="btn" onclick={() => current = updateCurrent(1)}>Next</button>
		</div>
		<ProjectInfo project={projects[current]} />
	</div>
</div>
