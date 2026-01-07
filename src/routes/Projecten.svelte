<script lang="ts">
	import { CardSwap1, CardSwap2, CardSwap3, CardSwap4 } from '$lib/assets/projects/card-swap';
	import { StempelRender } from '$lib/assets/projects/stempel';
	import { tools, type ToolKey } from '$lib/assets/tools';
	import { ProjectCardswap, ProjectModelGen } from '$lib/components';
	import { modals } from '$lib/stores';
</script>

{#snippet Tools(items: ToolKey[])}
	<div class="flex absolute bottom-2 left-2 gap-2 py-4 px-2">
		{#each items.map((x) => tools[x]) as t}
			<div class="tooltip tooltip-top" data-tip={t.text}>
				<img src={t.src} alt="{t.text} icon" class="h-5" />
			</div>
		{/each}
	</div>
{/snippet}

<div class="min-h-96 p-4 max-w-6xl mx-auto">
	<h1 class="text-5xl font-bold mt-4 mb-8">Projecten</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
		<div class="card bg-base-200">
			<figure class="hover-gallery h-full">
				<enhanced:img src={CardSwap1} alt="Cardswap example" loading="lazy" />
				<enhanced:img src={CardSwap2} alt="Cardswap example" loading="lazy" />
				<enhanced:img src={CardSwap3} alt="Cardswap example" loading="lazy" />
				<enhanced:img src={CardSwap4} alt="Cardswap example" loading="lazy" />
			</figure>
			<div class="card-body p-4">
				<h2 class="card-title mb-2 self-center">Project Cardswap</h2>
				{@render Tools(['JavaScript', 'ThreeJS'])}
				<div class="card-actions justify-end">
					<button class="btn btn-primary" onclick={() => ($modals.cardswap = true)}>Meer info</button>
				</div>
			</div>
		</div>
		<div class="card bg-base-200">
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
			</figure>
			<div class="card-body p-4">
				<h2 class="card-title self-center mb-2">Portfolio</h2>
				{@render Tools(['Svelte', 'TypeScript', 'TailwindCSS', 'DaisyUI', 'Threlte'])}
				<div class="card-actions justify-end">
					<a class="btn btn-primary" href="https://www.github.com">Github</a>
					<!-- TODO REPLACE LINK -->
				</div>
			</div>
		</div>
		<div class="card bg-base-200">
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
			</figure>
			<div class="card-body p-4">
				<h2 class="card-title mb-2 self-center">Project 4.0</h2>
				<div class="flex absolute bottom-2 left-2 gap-2 py-4 px-2">Fucked</div>
			</div>
		</div>
		<div class="card bg-base-200">
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
			</figure>
			<div class="card-body p-4">
				<h2 class="card-title mb-2 self-center">Fan sturing</h2>
				{@render Tools(['Arduino', 'PCB', 'VBNet'])}
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Meer info</button>
				</div>
			</div>
		</div>
		<div class="card bg-base-200">
			<figure>
				<enhanced:img src="{StempelRender}?w=640" alt="Voorbeeld stempel" loading="lazy" />
			</figure>
			<div class="card-body p-4">
				<h2 class="card-title mb-2 self-center">3D stempel generator</h2>
				{@render Tools(['Python'])}
				<div class="card-actions justify-end">
					<button class="btn btn-primary" onclick={() => ($modals.model_generator = true)}>Meer info</button>
				</div>
			</div>
		</div>
	</div>
</div>

<ProjectCardswap />
<ProjectModelGen />

<style lang="postcss">
	.card {
		transition: box-shadow 0.5s ease-in-out;
		transition: transform 0.5s ease-in-out;

		&:hover {
			box-shadow: 0 0 35px -10px var(--color-primary);
			transform: translate3d(0px, -3px, 0px);
		}
	}

	.card figure img {
		aspect-ratio: 4/3;
		object-fit: cover;
	}
</style>
