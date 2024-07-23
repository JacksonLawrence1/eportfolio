<script lang="ts">
	import { type Project } from '$lib/data/projectData';
	import { slide } from 'svelte/transition';

	type Props = {
		disabled: boolean;
		item: Project;
		index: number;
		select: (i: number) => void;
	};

	let { disabled, item, index, select }: Props = $props();

	const { name, overview, imageUrl } = $derived(item);

	const selected = $derived(index === 1);

	// show the description based on focus/hover state
	// always shown if selected
	let description = $state(false);

	const showDescription = () => {
		if (!disabled) {
			description = true;
		}
	};

	const hideDescription = () => {
		description = false;
	};
</script>

<button
	class={`flex overflow-hidden relative rounded-md group ${
		selected 
			? 'opacity-100' 
			: !disabled && 'focus:opacity-100 hover:opacity-100 opacity-50 duration-200'}`}
	onmouseenter={showDescription}
	onmouseleave={hideDescription}
	onfocusin={showDescription}
	onfocusout={hideDescription}
	onclick={() => select(index)}
>
	<img
		src={`images/${imageUrl}`}
		alt={name}
		class="flex object-cover justify-center items-center rounded-md aspect-[2/3]"
	/>
	<div
		class="flex absolute bottom-0 flex-col gap-2 justify-end items-start py-2 px-4 w-full h-full text-left bg-gradient-to-t to-transparent rounded-md md:py-4 from-black/70"
	>
		<h3 class="font-bold text-md md:text-lg">{name}</h3>
		<div>
			{#if selected || description}
				<p transition:slide class="text-gray-300 text-xs sm:text-sm pb-1">{overview}</p>
			{/if}
		</div>
	</div>
	<div
		class={`${selected ? 'border-4' : !disabled && 'group-focus:border-4 group-hover:border-4'} border-primary-500 absolute inset-0 transition-all duration-100 ease-linear `}
	>
	</div>
</button>

<style>
	.selected {
		border: 4px solid white;
	}
</style>
