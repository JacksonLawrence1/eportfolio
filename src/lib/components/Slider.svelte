<script lang="ts" generics="T extends { id: string }">
	import { type ComponentType, type SvelteComponent, onMount } from 'svelte';

	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	type Props = {
		items: T[];

		ItemComponent: ComponentType<SvelteComponent<{ disabled: boolean, item: T, index: number, select: (i: number) => void }>>; 

		currentItem: T;	

		forwards: () => void;
		backwards: () => void;
	};
	
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let { items, ItemComponent, currentItem = $bindable(), forwards = $bindable(), backwards = $bindable() }: Props = $props();

	const itemsArr: T[] = $state([...items]);
	let itemsToShow = $state(7);

	let animationMultiplier: number = $state(1);
	let animationDuration: number = $derived(400 * animationMultiplier);
	
	forwards = () => {
		const selected = itemsArr.shift();
		if (selected) {
			itemsArr.push(selected);
		}

		currentItem = itemsArr[1];
		animationMultiplier = 1;
	};

	backwards = () => {
		const selected = itemsArr.pop();
		if (selected) {
			itemsArr.unshift(selected);
		}

		currentItem = itemsArr[1];
		animationMultiplier = 1;
	};

	function selectInput(i: number) {
		// BUG: animation doesn't work for 6th item, so disabling it temporarily
		if (i === 6) {
			return;
		}

		// PERF: Make this better
		if (i === 0) {
			backwards();
		}

		for (let j = 0; j < i - 1; j++) {
			forwards();
			animationMultiplier = j + 1;
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
		updateAnimationState.call(window);

		// calls whenever window is resized
		window.addEventListener('resize', updateAnimationState);

		// cleanup
		return () => window.removeEventListener('resize', updateAnimationState);
	});
</script>

<div class="relative slider">
	{#each itemsArr.slice(0, itemsToShow) as item, i (item.id)}
		<div
			class="overflow-hidden bg-black rounded-lg project w-full h-max"
			animate:flip={{ duration: animationDuration }}
			in:fly={{x: i === 0 ? '-100%' : `${100 * animationMultiplier}%`, duration: animationDuration }}
		>
			<svelte:component disabled={i >= 6} this={ItemComponent} {item} index={i} select={selectInput} />
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
		grid-auto-flow: column;
		width: calc(100% + 2 * var(--frac));
		margin-left: calc(-1 * var(--frac));
		gap: 0.5rem;
		transition: all 1s;

		@media (min-width: 1024px) {
			gap: 1rem;
		}
	}

	.project:last-child {
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0) 50%);
	}

	.project:first-child {
		mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0) 50%);
	}
</style>
