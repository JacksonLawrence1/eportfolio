<script lang="ts">
	import { projects } from '$lib/data/projectData';
	import Slider from '$lib/components/Slider.svelte';
	
	let backward: () => void = () => {};
	let forward: () => void = () => {};
</script>

<div id="projects" class="info-section bg-accent-700">
	<div class="flex flex-col gap-8 wrapper">
		<h2 class="section-header">Projects</h2>
		<Slider {projects} bind:backwards={backward} bind:forwards={forward} />
	</div>
	<div class="py-8 flex justify-between wrapper text-xl">
		<button onclick={backward} class="btn">Previous</button>
		<button onclick={forward} class="btn">Next</button>
	</div>
</div>

