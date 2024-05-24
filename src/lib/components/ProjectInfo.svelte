<script lang="ts">
	import type { Project } from '$lib/data/projectData';
	
	type Props = {
		project: Project;
	};

	const { project }: Props = $props();
</script>

<div class="info-section bg-accent-700">
	<div class="wrapper">
		<h2 class="section-header">{project.name}</h2>
		<p>{project.overview}</p>
	</div>
</div>
