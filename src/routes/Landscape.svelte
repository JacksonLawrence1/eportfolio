<script lang="ts">
	import ScrollArrow from '$lib/components/ScrollArrow.svelte';
	import { onMount } from 'svelte';

	function addStars(numStars: number): void {
		const starContainer = document.getElementById('star-container');

		if (!starContainer) {
			return;
		}

		for (let i = 0; i < numStars; i++) {
			const star = document.createElement('span');
			star.classList.add('star');
			star.style.left = `${Math.random() * 100}%`;
			star.style.top = `${Math.random() * 100}%`;
			star.style.height = star.style.width = `${Math.random() * 3}px`;

			starContainer.appendChild(star);
		}
	}

	onMount(() => {
		addStars(250);
	});
</script>

<div class="flex overflow-hidden relative h-[80vh]">
	<div id="star-container"></div>
	<div class="absolute top-0 left-0 w-full h-full">
		<div
			class="flex absolute bottom-0 left-1/2 flex-col min-w-full max-h-full -translate-x-1/2 z-[5] min-h-1/2 w-[2500px]"
		>
			<svg
				viewBox="0 0 4000 1000"
				xmlns="http://www.w3.org/2000/svg"
				class="block translate-y-[40%] h-auto max-w-full fill-[url(#horizon)]"
				aria-label="Landscape"
			>
				<defs>
					<linearGradient id="horizon" x1="0%" x2="0%" y1="0%" y2="100%">
						<stop offset="10%" stop-color="#111111" />
						<stop offset="100%" stop-color="blue" />
					</linearGradient>
				</defs>
				<path
					d="M396 354c9 0 18-3 27-5 7-1 14 0 20 2 17 3 34-1 51 2 9 2 19 2 29 2 13 1 26-3 39-1 11 2 22 1 33 1 16-2 33 1 49-1 22-2 44 3 66 2 16 0 31 4 46 5 9 0 18 4 28 4 6 1 12 0 18-1 12-1 22-6 34-7l33-2c10-1 19 4 29 4 9 1 18 1 27 4 14 3 28 3 42 3 19 1 39-2 59 2 15 3 30 6 46 6 17-1 35 0 52-4 23-5 47-5 70-3 17 2 32 11 48 15 27 7 56 10 84 10 16-1 31 6 45 13 10 4 20 4 30 7 6 2 10 9 16 12 7 2 15-2 22-5 12-4 25-2 37-5 23-6 47-1 70-4 15-3 29 9 43 3 13-5 28-10 43-7s29 6 44 7c9 0 17-5 26-5 16 0 33 2 49-1 10-2 18-7 28-8 8-1 17 3 25 1 31-11 63-4 94-10 11-2 23-3 34-2 14 0 28-5 42-4 11 1 20 7 31 9 9 2 18-1 27-3 13-2 26 1 38-2l18-6c7 0 14 4 21 4 13 0 26 3 40 4 11-1 20 8 31 8s22 0 33-3 22-8 33-10l28-5c4-1 8 3 11 5 13 1 27 6 39 1 7-2 14 1 21 3 12 4 24 6 37 9 11 3 22 1 34 3 7 1 15 4 23 4h35c9 1 17 5 26 6l29 4c13 3 27 1 41 2 10 0 19 5 28 6l36 3c14 3 28 2 42 2 12 0 24 2 35 0 12-1 23-4 33-7 10-4 20-3 30-3 11 0 21-5 32-6 13 0 27-1 40-4 7-2 14-7 22-7 8-1 17-1 25-4 13-4 26-2 39-3l23 1c12 2 24 1 35 5 9 3 19 5 29 5 8 0 16-2 24-4 11-2 22 1 32 0l27-1c11 0 22-3 33-1l37 3c11 0 22 6 33 5l21 1c10 3 20-2 30-3 16-2 32-6 48-1 16 6 34 1 51 3l55-7c8-1 16 3 24 3 9 0 17-8 26-8s17 6 24 11c12 9 26 17 42 18 15 2 31 3 46 1 25-3 50-7 74-13 13-2 25-10 39-8 18 2 37 4 55 3 17-1 34 2 51 0 12-2 24 0 36 1 7 0 12-6 19-8 8 0 16 2 25 1 12-3 23 3 35 3 13 2 25-5 37-5 10-2 18 8 29 7 9-1 18-3 28-3v597H0V391l36-5c11-1 23 1 34 3 17-3 34-9 52-8 15 1 31-2 46-3 9-1 15-7 24-8 13 0 26 1 39-4 5-1 10-5 16-5 20 1 39-1 59-1 16 1 30-6 46-6l24-2c7-1 13 2 20 2z"
				/>
			</svg>
		</div>
	</div>
	<div
		class="absolute opacity-40 bg-secondary-900 w-[50%] left-[10%] top-[50%] aspect-square rounded-full blur-2xl z-[2]"
	></div>
</div>

<div class="overflow-hidden relative bottom-0 w-full floor h-[30vh] bg-base-200">
	<div class="absolute bottom-[12vh] left-1/2 -translate-x-1/2">
		<ScrollArrow destination="#about" />
	</div>
</div>

<style>
	.floor::before {
		content: '';
		position: absolute;
		inset: -10px;
		background: radial-gradient(
			farthest-side ellipse at center 25%,
			transparent,
			theme('colors.base.600') 60%
		);
	}
</style>
