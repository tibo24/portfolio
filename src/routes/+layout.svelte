<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Icon, Bars3CenterLeft } from 'svelte-hero-icons';
	import '../app.css';
	import { activeSection } from '$lib/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let { children } = $props();
	export const prerender = true;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="navbar bg-base-100 shadow-sm py-3!">
	<div class="navbar-start">
		<div class="dropdown md:hidden">
			<button>
				<Icon src={Bars3CenterLeft} class="h-8" />
			</button>

			<ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">Over mij</a></li>
				<li><a href="#projecten">Projecten</a></li>
				<li><a href="#stage">Stage</a></li>
			</ul>
		</div>
		<ul class="menu menu-horizontal px-1 py-0 hidden md:flex">
			<li><a href="#home" class:active={$activeSection === 'home'}>Home</a></li>
			<li><a href="#about" class:active={$activeSection === 'about'}>Over mij</a></li>
			<li><a href="#projecten" class:active={$activeSection === 'projecten'}>Projecten</a></li>
			<li><a href="#stage" class:active={$activeSection === 'stage'}>Stage</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<ThemeToggle />
	</div>
</div>
{@render children()}

<style lang="postcss">
	@reference "tailwindcss";

	.navbar {
		position: sticky;
		top: 0;
		z-index: 1000;
		padding: 16px;
		display: flex;
		gap: 20px;
	}

	.active {
		color: var(--color-accent);
	}
</style>
