<script lang="ts" generics="T extends { id: string }">
	import { type Snippet } from 'svelte';

	type Props = {
		items: T[];
		current?: number;
		children: Snippet<[T, number]>;
	};

	let { items, current = $bindable(0), children }: Props = $props();

	let width: number = $state(0);

	// depending on our width, we want to show a certain number of items
	let itemsVisible: number = $derived.by(() => {
		if (width < 640) {
			return 2;
		} else if (width < 768) {
			return 3;
		} else {
			return 4;
		}
	});

	let height: number = $derived.by(() => {
		if (width < 1024) { // 2:3 aspect ratio for lg screens and below
			return (width / itemsVisible / 2) * 3
		}

		// 4:3 aspect ratio for xl screens and above
		return (width / itemsVisible / 4) * 3;
	});

	function difference(index: number) {
		// distance between the current index and the index we want to show, with wrap 
		let diff: number = (index - current + items.length) % items.length;

		// if the difference is more than the items we want to show, then difference becomes negative
		return diff > itemsVisible + 1 ? diff - items.length : diff;
	}

	function formatStyle(index: number) {
		const widthPercentage: number = 100 / itemsVisible; // percentage width of each item
		const offset: number = 100 * difference(index); // how much to translate each item forward

		return `transform: translateX(${offset}%);width: ${widthPercentage}%;`;
	}

	function visible(index: number) {
		const diff: number = difference(index);

		// -1 to account for item behind being partially visible
		return diff >= -1 && diff <= itemsVisible;
	}
</script>

<div class={`carousel relative`} style={`height: ${height}px`} bind:clientWidth={width}>
	{#each items as item, i}
		{#if visible(i)}
			<button onclick={() => current = i} class="absolute h-full w-full p-1" style={formatStyle(i)}>
				{@render children(item, i)}
			</button>
		{/if}
	{/each}
</div>

<style>
	.carousel {
		scrollbar-width: none;
	}
</style>
