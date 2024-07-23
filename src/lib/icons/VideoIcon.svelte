<script>
	import Icon from '$lib/components/Icon.svelte';

	export let colour = 'currentColor';
</script>

<Icon {...$$restProps}>
	<svg aria-label="video" xmlns="http://www.w3.org/2000/svg" class="h-full w-full" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke={colour}
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="m15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14zM3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
		/>
	</svg>
</Icon>
