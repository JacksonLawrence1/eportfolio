<script>
	// allow extra classes to be added to the icon
	export let classList = '';
</script>

<div
	class={ `relative w-8 h-8 text-white ${classList}` }
>
	<slot />
</div>
