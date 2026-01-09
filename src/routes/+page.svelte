<script lang="ts">
	import { activeSection } from '$lib/stores';
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Stage from './Stage.svelte';
	import Projecten from './Projecten.svelte';

	const observe = (node: Element, section: string) => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					$activeSection = section;
				}
			},
			{ threshold: 0.3 }
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

<section id="about" class="py-8 relative" use:observe={'about'}>
	<div class="inset-x-0 top-0 absolute h-28 top-effect"></div>
	<About />
</section>
<section id="projecten" class="py-8 relative" use:observe={'projecten'}>
	<div class="inset-x-0 top-0 absolute h-28 top-effect"></div>
	<Projecten />
</section>
<section id="stage" class="py-8 relative" use:observe={'stage'}>
	<div class="inset-x-0 top-0 absolute h-28 top-effect"></div>
	<Stage />
</section>

<style lang="postcss">
	@reference "tailwindcss"
	section {
		height: fit-content;
		width: 100%;
	}
</style>
