<script lang="ts">
	import { type Project } from '$lib/data/projectData';
	import { slide } from 'svelte/transition';

	type Props = {
		item: Project;
		selected: boolean;
	};

	let { item, selected }: Props = $props();

	const { name, overview, imageUrl } = $derived(item);

	// show the description based on focus/hover state
	// always shown if selected
	let description = $state(false);

	const showDescription = () => {
		description = true;
	};

	const hideDescription = () => {
		description = false;
	};
</script>

<div
	class={`flex w-full h-full overflow-hidden relative rounded-md group ${
		selected ? 'opacity-100' : 'focus:opacity-100 hover:opacity-100 opacity-50 duration-200'
	}`}
	onmouseenter={showDescription}
	onmouseleave={hideDescription}
	onfocusin={showDescription}
	onfocusout={hideDescription}
	role="tooltip"
>
	<img src={`images/${imageUrl}`} alt={name} class="object-cover w-full h-full" />
	<div
		class="flex absolute bottom-0 flex-col gap-2 justify-end items-start py-2 px-4 w-full h-full text-left bg-gradient-to-t to-transparent rounded-md md:py-4 from-black/70"
	>
		<h3 class="font-bold md:text-lg text-md">{name}</h3>
		<div>
			{#if selected || description}
				<p transition:slide class="pb-1 text-xs text-gray-300 sm:text-sm">{overview}</p>
			{/if}
		</div>
	</div>
	<div
		class={`${selected ? 'border-4' : 'group-focus:border-4 group-hover:border-4'} border-primary-500 absolute inset-0 transition-all duration-100 ease-linear `}
	></div>
</div>

<style>
	.selected {
		border: 4px solid white;
	}
</style>
