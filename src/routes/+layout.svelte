<script>
	import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';
	import ResumeIcon from '$lib/icons/ResumeIcon.svelte';

	import '../app.css';
</script>

<nav class="absolute top-0 z-20 mx-auto w-screen list-none">
	<ul class="flex flex-wrap gap-8 justify-center py-8 mx-auto font-bold uppercase wrapper">
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="#about">About</a>
		</li>
		<li>
			<a href="#projects">Projects</a>
		</li>
		<li>
			<a href="#contact">Contact</a>
		</li>
	</ul>
</nav>

<slot />

<footer class="flex flex-col p-8 w-full list-none bg-base-900">
	<div id="contact" class="flex flex-wrap gap-10 justify-between py-8 w-full wrapper">
		<div class="flex flex-col flex-grow gap-4 max-w-[640px] basis-1/3">
			<h3 class="text-2xl font-bold">Contact</h3>
			<p>
				Feel free to send me an email at <a class="underline hover:text-gray-200" href="mailto:jplqqz@gmail.com">jplqqz@gmail.com</a> or you can also find me on GitHub. I'm always happy to chat about projects, work opportunities, collaborations, or anything else you have in mind.
			</p>
		</div>
		<div class="flex flex-col gap-4 basis-full sm:basis-1/4">
			<h3 class="text-2xl font-bold">Quick Links</h3>
			<ul class="flex flex-col gap-2 text-lg">
				<li>
					<a class="group" href="mailto:jplqqz@gmail.com">
						<MailIcon classList="group-hover:scale-110 group-hover:text-gray-200" />
						<p class="group-hover:text-gray-200">jplqqz@gmail.com</p>
					</a>
				</li>
				<li>
					<!-- TODO: Add Link -->
					<a class="group" href="/">
						<GitHubIcon classList="group-hover:scale-110 group-hover:text-gray-200" />
						<p class="group-hover:text-gray-200">GitHub</p>
					</a>
				</li>
				<li>
					<!-- TODO: Add Link -->
					<a class="group" href="/">
						<ResumeIcon classList="group-hover:scale-110 group-hover:text-gray-200" />
						<p class="group-hover:text-gray-200">CV / Resume</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div
		class="flex flex-wrap gap-8 justify-between items-end pt-8 w-full font-bold uppercase wrapper"
	>
		<small class="text-gray-400 text-[0.6rem]">Here's to the fools who dream.</small>
		<ul class="flex flex-wrap gap-8 justify-between basis-full sm:basis-auto sm:justify-end">
			<li>
				<a href="/">v1.0</a>
			</li>
			<li>
				<a href="https://github.com/JacksonLawrence1/eportfolio" target="_blank">Source Code</a>
			</li>
			<li>
				<a href="/">Back to Top</a>
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
