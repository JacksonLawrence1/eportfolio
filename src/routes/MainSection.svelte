<script>
	import Title from '$lib/components/Title.svelte';
	import Projects from './Projects.svelte';
</script>

<div class="divider"></div>

<div id="about" class="info-section bg-base-400">
	<div class="flex flex-col gap-4 items-start wrapper">
		<Title title="About" />
		<div class="grid grid-cols-1 gap-8 gap-y-12 w-full lg:grid-cols-3">
			<div class="flex flex-col gap-4 lg:col-span-2">
				<p>
					I'm a full-stack developer based in London, UK. I graduated from the University of Bristol
					in 2023 with a Master's in Computer Science. I like to work creatively on interesting
					projects, explore new technologies and solve complex coding problems.
				</p>

				<p>
					I have a particular interest in making beautiful, yet performant front-end designs. I also
					enjoy developing games, which you can find more about <a
						class="underline"
						href="#projects">here</a
					>.
				</p>

				<p>
					In my free time, you can find me playing games, or watching and reviewing films. Feel free
					to <a class="underline" href="#contact">contact me</a> for any more info, or if you just want
					to say hi!
				</p>

				<p>I also use Neovim, btw.</p>
			</div>
		</div>
	</div>
</div>

<div class="divider"></div>

<Projects />

<div class="divider"></div>
