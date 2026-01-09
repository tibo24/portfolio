<script>
	import { tools } from '$lib/constants/tools';
	import { modals } from '$lib/stores';
</script>

{#if $modals.cardswap}
	<div class="modal modal-open">
		<div class="modal-box max-w-5xl px-12 max-h-8/12">
			<h2 class="font-bold text-3xl text-center mb-8">Project cardswap</h2>
			<div class="grid grid-cols-1 md:grid-cols-5 gap-6">
				<img src="/images/cardswap/cardswap-animation.gif" alt="Cardswap example" class="md:col-span-2" loading="lazy" />
				<div class="md:col-span-3">
					<p class="mb-4">
						Dit is een klein project dat ik gemaakt heb in mijn vrije tijd om Three.js te leren kennen. Ik ben geïnteresseerd in 3D-modellering en was benieuwd
						naar manieren om dit binnen een browser mogelijk te maken.
					</p>
					<p class="mb-4">
						Vanuit die interesse ontstond het idee om een kaarttruck, zoals die vaak door goochelaars wordt uitgevoerd, in een browser te creëren. Het doel was
						om de textuur van de kaart te veranderen op het moment dat deze niet zichtbaar is, zodat de kaart anders is wanneer ze opnieuw zichtbaar wordt.
					</p>
					<img src="/images/cardswap/kaart-textures.webp" alt="Voorbeeld van kaart textures" loading="lazy" />
					<p class="mt-4">Je kan dit project zelf uittesten of een kijkje nemen naar de bijhorende code.</p>

					<h4 class="text-xl font-bold mb-2 mt-6">Technologieën</h4>
					<div class="flex gap-4">
						{#each [tools.JavaScript, tools.ThreeJS] as t}
							<div class="flex">
								<img src={t.src} alt="{t.text} icon" class="h-5" />
								<span class="ms-1">{t.text}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="modal-action">
				<a class="btn btn-soft" href="https://github.com/tibo24/card-magic" target="_blank" rel="noopener noreferrer">Github code</a>
				<a class="btn btn-soft" href="https://tibo24.github.io/card-magic/" target="_blank" rel="noopener noreferrer">Website</a>
				<button class="btn btn-soft" onclick={() => ($modals.cardswap = false)}>Sluiten</button>
			</div>
		</div>
	</div>
{/if}
