<script lang="ts">
	import Landscape from './Landscape.svelte';
	import MainSection from './MainSection.svelte';
</script>

<div class="w-screen h-screen background-gradient">
	<div class="absolute z-10 w-full">
		<div
			class="flex-col gap-2 items-start p-10 mx-auto mt-8 mb-auto w-full wrapper titles"
		>
			<h3 class="text-xl">Hello, I'm</h3>
			<h1 class="text-6xl origin-left italiana">Jackson Lawrence</h1>
			<h2 class="text-md"><strong>Full stack</strong> developer</h2>
		</div>
	</div>
	<Landscape />
</div>

<MainSection />

<style>
	@media (min-height: 480px) {
		.titles {
			margin-top: 8rem;
		}
	}
</style>
