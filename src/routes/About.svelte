<script lang="ts">
	import { Envelope, Icon } from 'svelte-hero-icons';
	import Foto from '$lib/assets/foto_ik.jpg';
	import { vaardigheden } from '$lib/constants/vaardigheden';
</script>

<div class="min-h-96 p-4 max-w-6xl mx-auto">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-4 gap-4">
		<div class="card bg-base-200 lg:col-span-2">
			<h2 class="card-title text-5xl font-bold mx-8 mt-8 mb-2">Over mij</h2>
			<div class="card-body text-[16px]">
				Ik ben een student Applicatieontwikkeling met een technische achtergrond in elektronica, mede dankzij mijn middelbare opleiding. Tijdens mijn opleiding
				heb ik een brede wereld van softwareontwikkeling leren kennen, met een focus op het bouwen van performante applicaties. Mijn analytische en
				gestructureerde ingesteldheid helpt mij na te denken over hoe technologie in de praktijk werkt. Tijdens mijn stage heb ik ervaring opgedaan in het
				ontwikkelen van applicaties en het werken binnen een professionele omgeving. Ik ben gemotiveerd om nieuwe technologieën te leren kennen en mijn
				technische vaardigheden verder te verdiepen. Dit portfolio geeft een overzicht van mijn projecten en kennis.
			</div>
		</div>
		<div class="card bg-base-200">
			<enhanced:img class="mt-4 max-w-40 mx-auto mask mask-squircle" src={Foto} alt="Foto van mezelf" />
			<div class="card-body text-center">
				<h2 class="card-title self-center font-bold">Tibo Vermunicht</h2>
				<p class="text-accent font-semibold">Student Applicatie Ontwikkeling</p>
				<div class="divider my-2"></div>
				<p class="text-accent font-semibold">Contact</p>
				<div class="text-left w-fit m-auto">
					<div>
						<Icon src={Envelope} size="20" class="inline text-accent" />
						<span class="ml-2 text-tinted">tibovermunicht@gmail.com</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title self-center text-2xl font-bold">Technische vaardigheden</h2>
			{#each vaardigheden as g, i}
				{#if i != 0}<div class="divider my-2"></div>{/if}
				<h4 class="text-xl font-semibold">{g.name}</h4>
				<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
					{#each g.values as v}
						<div class="rounded-xl bg-base-100 py-3 px-4 toolcard">
							<div>
								<enhanced:img src={v.icon} width="24" class="inline rounded" alt="Icon {v.text}" />
								<span class="ml-1 font-semibold">{v.text}</span>
								<progress class="progress progress-secondary" value={v.score} max="100"></progress>
							</div>
						</div>
					{/each}
				</div>
			{/each}
			<div></div>
		</div>
	</div>
</div>

<style>
	.toolcard {
		transition: box-shadow 0.5s ease-in-out;
		transition: transform 0.2s ease-in-out;

		&:hover {
			box-shadow: 0 0 15px -5px var(--color-primary);
			transform: scale(1.02) translate3d(0px, -3px, 0px);
		}
	}
</style>
