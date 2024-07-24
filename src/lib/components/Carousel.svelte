<script lang="ts" generics="T extends { id: string }">
	import { type Snippet } from 'svelte';
	import { spring } from 'svelte/motion';

	type Props = {
		items: T[];
		current?: number;
		children: Snippet<[T, number]>;
	};

	let { items, current = $bindable(0), children }: Props = $props();

	let width: number = $state(0);

	// dynamically adjust visible items in the carousel based on screen width
	let itemsVisible: number = $derived.by(() => {
		if (width < 640) {
			return 2;
		} else if (width < 768) {
			return 3;
		} else {
			return 4;
		}
	});

	// dynamically adjust height based on screen width, using aspect ratios
	let height: number = $derived.by(() => {
		if (width < 1024) {
			return (width / itemsVisible / 2) * 3; // 2:3
		}

		return (width / itemsVisible / 4) * 3; // 4:3
	});


	// wraps an index around the length of the items array
	const wrap = (n: number) => {
		const offset: number = (n % items.length + items.length) % items.length
		return offset > itemsVisible + 1 ? offset - items.length : offset;
	};


	// animate carousel movement
	let tween = spring(0, { stiffness: 0.1, damping: 0.6 });

	// update the tween whenever current changes
	$effect(() => {
		tween.update((old) => Math.round(old) + wrap(current - old), { soft: 1 });
	});


	function formatStyle(indexOffset: number) {
		const itemWidth: number = 100 / itemsVisible;
		const itemOffset: number = 100 * wrap(indexOffset);

		return `transform: translateX(${itemOffset}%);width: ${itemWidth}%;`;
	}

	function visible(indexOffset: number) {
		let diff: number = wrap(indexOffset);

		// items at edge disappear instantly on exiting DOM, so show an extra item on each side
		return diff >= -2 && diff <= itemsVisible + 1;
	}

	// disables tabbing on the edge buttons that should be hidden
	function edge(indexOffset: number) {
		let diff: number = wrap(indexOffset);
		return diff === -2 || diff === itemsVisible + 1;
	}
</script>

<div class={`noscrollbar relative`} style={`height: ${height}px`} bind:clientWidth={width}>
	{#each items as item, i}
		{@const itemOffset: number = i - $tween}
		{#if visible(itemOffset)}
			<button
				onclick={() => (current = i)}
				class="absolute p-1 h-full"
				style={formatStyle(itemOffset)}
				disabled={edge(itemOffset)}
			>
				{@render children(item, i)}
			</button>
		{/if}
	{/each}
</div>

<style>
	/* chrome, safari, opera */
	.noscrollbar::-webkit-scrollbar {
		display: none;
	}

	/* ie, edge, firefox */
	.noscrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
