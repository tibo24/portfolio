import { derived, writable } from 'svelte/store';

export const activeSection = writable('home');

export const modals = writable({
	cardswap: false,
	model_generator: false
});

export const modalOpen = derived(modals, (x) => Object.values(x).some((y) => (y = true)));
