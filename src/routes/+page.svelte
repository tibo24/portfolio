<script lang="ts">
	import { activeSection } from '$lib/stores';
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Stage from './Stage.svelte';
	import Projecten from './Projecten.svelte';

	// let activeSection = 'home';
	const observe = (node: Element, section: string) => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					$activeSection = section;
				}
			},
			{ threshold: 0.6 }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	};
</script>

<section id="home" use:observe={'home'}><Home /></section>

<section id="about" class="py-8 bg-effect" use:observe={'about'}><About /></section>
<section id="projecten" class="py-8 bg-effect" use:observe={'projecten'}><Projecten /></section>
<section id="stage" class="py-8 bg-effect" use:observe={'stage'}><Stage /></section>

<style lang="postcss">
	@reference "tailwindcss"
	section {
		height: fit-content;
		width: 100%;
	}

	.bg-effect {
		@apply bg-linear-to-b from-gray-800/10 to-gray-800/80;
	}
</style>
