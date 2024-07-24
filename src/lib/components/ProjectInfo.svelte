<script lang="ts">
	import type { Project } from '$lib/data/projectData';
	import { fade } from 'svelte/transition';

	type Props = {
		project: Project;
	};

	const { project }: Props = $props();
	const { id, name, year, tags, description, imageUrl, buttons }: Project = $derived(project);
</script>

{#key id}
	<div class="py-8 bg-accent-700 wrapper project-info-grid" in:fade>
		<div class="relative h-full project-image max-h-[65vh] sm:max-h-none">
			<img
				src={`images/${imageUrl}`}
				alt={name}
				class="object-cover z-10 w-full h-full rounded-lg aspect-square sm:aspect-[16/9]"
			/>
			<div
				class="absolute py-2 h-full w-full top-0 bg-gradient-to-t from-accent-700 from-20% to-transparent to-60% md:bg-gradient-to-r md:from-accent-700 md:to-transparent"
			>
			</div>
			<div class="absolute top-0 w-full h-full radial-gradient"></div>
		</div>
		<div class="flex flex-col gap-2 px-4 md:px-0 md:pt-4 project-title">
			<h3 class="text-2xl sm:text-3xl md:text-4xl">{name}</h3>
			<h3 class="hidden text-xl sm:block md:text-2xl">{year}</h3>
		</div>
		<div class="flex flex-wrap gap-2 px-4 text-sm md:px-0 md:text-base project-tags h-min">
			{#each tags.sort() as tag}
				<span class="bg-green-700 text-sm px-2 rounded-lg">{tag}</span>
			{/each}
		</div>
		<div
			class="flex flex-wrap gap-4 justify-between px-4 sm:justify-start md:px-0 md:pb-4 project-buttons"
		>
			{#each buttons || [] as button}
				<a
					href={button.link}
					target={button.link[0] === '#' ? '_self' : '_blank'}
					rel="noopener noreferrer"
					class={`${button.coloured ? 'btn' : 'btn empty hover:bg-accent-600'} group flex flex-grow sm:flex-grow-0 justify-center items-center gap-2 sm:hover:scale-110 sm:transition-all`}
				>
					<svelte:component
						this={button.icon}
						colour={button.coloured ? 'black' : 'white'}
						classList="group-hover:text-accent-900"
					/>
					{button.text}
				</a>
			{/each}
		</div>
		<div class="flex flex-col gap-4 px-4 pt-4 md:px-0 project-description">
			{#each description as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>
{/key}

<style>
	.project-info-grid {
		display: grid;
		gap: 1rem;
		grid-template-rows: 1fr auto auto auto auto;

		& > div:not(:first-child) {
			z-index: 1;
		}

		.project-image {
			grid-row: 1 / 5;
			grid-column: 1 / -1;
		}

		.project-title {
			grid-row: 2 / 3;
			grid-column: 1 / -1;
		}

		.project-tags {
			grid-row: 3 / 4;
			grid-column: 1 / -1;
		}

		.project-buttons {
			grid-row: 4 / 5;
			grid-column: 1 / -1;
		}

		.project-description {
			grid-row: 5 / 6;
			grid-column: 1 / -1;
		}
	}

	@media (min-width: 768px) {
		.radial-gradient {
			background-image: radial-gradient(
				farthest-corner circle at left 50%,
				rgb(0, 0, 0, 0) 75%,
				theme('colors.accent.700') 95%
			);
		}

		.project-info-grid {
			grid-template-columns: repeat(5, 1fr);
			grid-template-rows: auto auto auto auto;

			.project-image {
				grid-row: 1 / 6;
				grid-column: 2 / 6;
			}

			.project-title {
				grid-column: 1 / 4;
				grid-row: 1 / 2;
			}

			.project-tags {
				grid-column: 1 / 3;
				grid-row: 2 / 3;
			}

			.project-buttons {
				grid-column: 1 / 4;
				grid-row: 4 / 5;
			}

			.project-description {
				grid-column: 1 / 3;
				grid-row: 3 / 4;
			}
		}
	}
</style>
