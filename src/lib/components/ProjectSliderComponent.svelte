<script lang="ts">
	import { type Project } from '$lib/data/projectData';

	type Props = {
		item: Project;
		index: number;
		select: (i: number) => void;
	};

	let { item, index, select }: Props = $props();

	const { name, overview, imageUrl } = $derived(item);
	const selected = $derived(index === 1);
</script>

<div
	class={`flex overflow-hidden relative rounded-md group ${selected ? 'opacity-100' : 'hover:opacity-100 opacity-50 duration-200'}`}
>
	<img
		src={`images/${imageUrl}`}
		alt={name}
		class="flex object-cover justify-center items-center rounded-md aspect-[2/3]"
	/>
	<div
		class="flex absolute bottom-0 flex-col gap-2 justify-end items-start py-2 px-4 w-full h-full text-left bg-gradient-to-t to-transparent rounded-md md:py-4 from-black/70"
	>
		<h3 class="font-bold sm:text-lg">{name}</h3>
		<p
			class={`${selected ? 'h-0 md:h-auto' : 'h-0'} text-sm overflow-hidden md:group-hover:h-auto transition-all duration-100 ease-in`}
		>
			{overview}
		</p>
	</div>
	<button
		onclick={() => select(index)}
		class={`${selected ? 'border-4 border-white' : 'group-hover:border-4 '} group-hover:border-green-500 absolute inset-0 transition-all duration-100 ease-linear `}
	>
	</button>
</div>

<style>
	.selected {
		border: 4px solid white;
	}
</style>
