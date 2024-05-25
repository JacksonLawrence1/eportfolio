<script lang="ts">
	import type { Project } from '$lib/data/projectData';

	type Props = {
		project: Project;
	}
	
	const { project }: Props = $props();
	const { name, year, tags, description, imageUrl, buttons }: Project = $derived(project);
</script>

<div class="py-16 wrapper bg-accent-700">
	<div class="flex flex-col gap-4">
		<div class="flex justify-between items-start">
			<h2 class="section-header">{name}</h2>
			<h2 class="section-header">{year}</h2>
		</div>
		<div class="flex gap-2">
			{#each tags.sort() as tag}
				<span class="px-2 pb-1 bg-green-600 rounded-lg">{tag}</span>
			{/each}
		</div>
		<div class="flex gap-4">
			<div class="flex flex-col gap-4">
				{#each description as paragraph}
					<p>{paragraph}</p>
				{/each}
				<div class="flex gap-4 mt-4">
					{#each buttons || [] as button}
						<a
							href={button.link}
							target={button.link[0] === '#' ? '_self' : '_blank'}
							rel="noopener noreferrer"
							class={ `${button.coloured ? "btn" : "btn empty hover:bg-accent-600" } group flex items-center gap-2 hover:scale-110 transition-all` }>
						<svelte:component this={button.icon} colour={button.coloured ? "black" : "white"} classList="group-hover:text-accent-900" />
						{button.text}
						</a>
					{/each}
				</div>
			</div>
			<img
				src={`images/${imageUrl}`}
				alt={name}
				class="w-full h-full rounded-lg max-w-1/2"
			/>
		</div>
	</div>
</div>
