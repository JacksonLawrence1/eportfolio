<script lang="ts">
	import Title from '$lib/components/Title.svelte';
import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';

	import '../app.css';

	let animated: boolean = false;

	function animateStars() {
		if (animated) {
			return;
		}

		animated = true;

		// get all spans with class star
		const stars = document.querySelectorAll('span.star');
		window.scrollTo(0, 0);

		for (const star of stars) {
			// cast as span element
			const starElement = star as HTMLSpanElement;

			// apply animation
			const duration = Math.random() * 100 + 20;
			const delay = Math.random() * 20;

			starElement.style.animationDuration = `${duration}s`;
			starElement.style.animationDelay = `${delay}s`;

			star.classList.add('star-animation');
		}
	}
</script>

<nav class="absolute top-0 z-20 mx-auto w-screen list-none">
	<ul class="flex flex-wrap gap-8 justify-center py-8 mx-auto font-bold uppercase wrapper">
		<li>
			<a class="underline-link" href="#about">About</a>
		</li>
		<li>
			<a class="underline-link" href="#projects">Projects</a>
		</li>
		<li>
			<a class="underline-link" href="#contact">Contact</a>
		</li>
	</ul>
</nav>

<slot />

<footer class="flex flex-col p-8 w-full list-none bg-base-900">
	<div id="contact" class="flex flex-wrap gap-10 justify-between py-8 w-full wrapper">
		<div class="flex flex-col flex-grow gap-4 max-w-[640px] basis-1/3">
			<Title title="Contact" />
			<p>
				Feel free to send me an email at <a class="underline hover:text-gray-200" href="mailto:jplqqz@gmail.com">jplqqz@gmail.com</a> or you can also find me on GitHub. I'm always happy to chat about projects, work opportunities, collaborations, or anything else you have in mind.
			</p>
		</div>
		<div class="flex flex-col gap-4 basis-full sm:basis-1/4">
			<h3 class="text-2xl font-bold">Quick Links</h3>
			<ul class="flex flex-col gap-2 text-lg">
				<li>
					<a class="group underline-group" href="mailto:jplqqz@gmail.com">
						<MailIcon classList="group-hover:text-gray-200" />
						<p class="underline-link">jplqqz@gmail.com</p>
					</a>
				</li>
				<li>
					<!-- TODO: Add Link -->
					<a class="group underline-group" target="_blank" href="https://github.com/JacksonLawrence1">
						<GitHubIcon classList="group-hover:text-gray-200" />
						<p class="underline-link">JacksonLawrence1</p>
					</a>
				</li>
				<li>
					<!-- TODO: CV 
					<a class="group" href="/">
						<ResumeIcon classList="group-hover:scale-110 group-hover:text-gray-200" />
						<p class="group-hover:text-gray-200">CV / Resume</p>
					</a>
					-->
				</li>
			</ul>
		</div>
	</div>
	<div
		class="flex flex-wrap gap-8 justify-between items-end pt-8 w-full font-bold uppercase wrapper"
	>
		<button
			class="flex items-center gap-2"
			on:click={animateStars}
			disabled={animated}
			>
			<small class="text-gray-400 text-[0.6rem]">Here's to the fools who dream.</small>
		</button>
		<ul class="flex flex-wrap gap-8 justify-between basis-full text-sm sm:basis-auto sm:justify-end md:text-base">
			<li>
				<a class="underline-link" href="https://github.com/JacksonLawrence1/eportfolio" target="_blank">Source Code</a>
			</li>
			<li>
				<a class="underline-link" href="/">Back to Top</a>
			</li>
		</ul>
	</div>
</footer>

<style>
	footer li a {
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 8px;
	}

</style>
