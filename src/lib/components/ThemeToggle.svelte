<script lang="ts">
	import { onMount } from 'svelte';
	import { Icon, Moon, Sun } from 'svelte-hero-icons';

	let theme: 'dark' | 'light' = 'dark';
	let mounted = false;

	onMount(() => {
		const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
		theme = saved ?? 'dark';
		document.documentElement.dataset.theme = theme;
		mounted = true;
	});

	function toggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}
</script>

<!-- Prevent SSR mismatch -->
{#if mounted}
	<label class="swap swap-rotate">
		<input type="checkbox" checked={theme === 'light'} on:change={toggle} />
		<Icon src={Moon} class="h-8 w-8 swap-on" mini />
		<Icon src={Sun} class="h-8 w-8 swap-off" mini />
	</label>
{/if}
