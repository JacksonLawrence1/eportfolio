<script lang="ts" generics="T extends { id: string }">
	import { type ComponentType, type SvelteComponent, onMount } from 'svelte';

	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	type Props = {
		// eslint-disable-next-line no-undef
		items: T[];

		// eslint-disable-next-line no-undef
		ItemComponent: ComponentType<SvelteComponent<{ item: T, index: number, select: (i: number) => void }>>; 

		// eslint-disable-next-line no-undef
		currentItem: T;	

		forwards: () => void;
		backwards: () => void;
	};

	let { items, ItemComponent, currentItem = $bindable(), forwards = $bindable(), backwards = $bindable() }: Props = $props();

	// eslint-disable-next-line no-undef
	const itemsArr: T[] = $state([...items]);
	let itemsToShow = $state(7);

	let animationDuration: number = $state(1);
	

	// these are both used, but eslint can't tell
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	forwards = () => {
		const selected = itemsArr.shift();
		if (selected) {
			itemsArr.push(selected);
		}
		currentItem = itemsArr[1];
		animationDuration = 1;
	};

	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	backwards = () => {
		const selected = itemsArr.pop();
		if (selected) {
			itemsArr.unshift(selected);
		}
		currentItem = itemsArr[1];
		animationDuration = 1;
	};

	function selectInput(i: number) {
		// PERF: Make this better
		if (i === 0) {
			backwards();
		}

		for (let j = 0; j < i - 1; j++) {
			forwards();
			animationDuration = j + 1;
		}
	}

	// Update the number of items to show based on the window size
	function updateAnimationState(this: Window) {
		const width = this.window.innerWidth;

		if (width < 640) {
			itemsToShow = 4;
		} else if (width < 768) {
			itemsToShow = 5;
		} else if (width < 1024) {
			itemsToShow = 6;
		} else {
			itemsToShow = 7;
		}
	}

	onMount(() => {
		// calls whenever window is resized
		window.addEventListener('resize', updateAnimationState);

		// cleanup
		return () => window.removeEventListener('resize', updateAnimationState);
	});
</script>

<div class="slider">
	{#each itemsArr.slice(0, itemsToShow) as item, i (item.id)}
		<div
			class="overflow-hidden bg-black rounded-lg project"
			animate:flip={{ duration: 400 * animationDuration }}
			in:fly={{x: i === 0 ? -250 : 250 * animationDuration, duration: 400 * animationDuration}}
		>
			<svelte:component this={ItemComponent} {item} index={i} select={selectInput} />
		</div>
	{/each}
</div>

<style>
	:root {
		--cols: 2;
		--frac: calc(100% / var(--cols));

		@media (min-width: 640px) {
			--cols: 3;
		}

		@media (min-width: 768px) {
			--cols: 4;
		}

		@media (min-width: 1024px) {
			--cols: 5;
		}
	}

	.slider {
		display: grid;
		grid-template-columns: repeat(calc(var(--cols) + 2), 1fr);
		width: calc(100% + 2 * var(--frac));
		margin-left: calc(-1 * var(--frac));
		grid-template-rows: repeat(1, 1fr);
		grid-auto-rows: 0;
		gap: 1rem;
	}

	.project:last-child {
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}

	.project:first-child {
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
	}
</style>
