<script lang="ts">
	type Props = {
		name: string;
		imageUrl: string;
		overview: string;
		index: number;
		select: (i: number) => void;
	};

	let { name, imageUrl, index, overview, select }: Props = $props();
	const selected = $state(index === 1);
</script>

<div class="project bg-black rounded-lg">
	<div
		class={`fader flex overflow-hidden relative w-full h-full rounded-md group ${selected ? 'opacity-100' : 'hover:opacity-100 opacity-50 duration-200'}`}
	>
		<img src={`images/${imageUrl}`} alt={name} class="object-cover rounded-md aspect-[2/3] flex justify-center items-center" />
		<div
			class="flex absolute bottom-0 flex-col gap-2 justify-end items-start py-2 px-4 h-full text-left bg-gradient-to-t to-transparent rounded-md md:py-4 w-fit from-black/70"
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
			class={ `${selected ? 'border-4 border-white' : 'group-hover:border-4 '} group-hover:border-green-500 absolute inset-0 transition-all duration-100 ease-linear ` }
		>
		</button>
	</div>
</div>

<style>
	.selected {
		border: 4px solid white;
	}

	.project:last-child {
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}

	.project:first-child {
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
	}
</style>
