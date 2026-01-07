<script>
	import { tools } from '$lib/constants/tools';
	import { modals } from '$lib/stores';
	import { Canvas } from '@threlte/core';
	import StempelScene from './scenes/StempelScene.svelte';
</script>

{#if $modals.model_generator}
	<div class="modal modal-open">
		<div class="modal-box max-w-5xl px-12 max-h-8/12">
			<h2 class="font-bold text-3xl text-center mb-8">3D stempel generator</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="md:col-span-2">
					<p class="mb-4">
						Voor dit project heb ik een desktopapplicatie ontwikkeld in Python, gebruikmakend van de Tkinter GUI-bibliotheek. De applicatie is ontworpen om een
						zwart-wit afbeelding (tekenprent) - zoals gegeven voorbeeld - automatisch om te zetten naar een 3D-model dat geschikt is voor het maken van een
						stempel. Dit proces combineert beeldverwerking, vectorisatie en 3D-generatie in één intuïtieve workflow.
					</p>
					<p class="mb-4">
						Deze prent kan op de juiste plaats geplaatst worden en vervolgens wordt deze omgezet naar een SVG om zo van de SVG-paths een mesh te maken. Deze
						mesh word gecombineerd met de lege stempel mesh om zo het gewenste resultaat te vormen.
					</p>
				</div>
				<figure>
					<img src="/images/stempel/stempel-prent.webp" alt="prent voor stempel" class="rounded-xl max-w-64 w-full" loading="lazy" />
				</figure>
				<div class="md:col-span-3">
					<h4 class="text-xl font-bold mb-2 mt-6">Demo video werking applicatie</h4>
					<iframe
						class="w-full aspect-video max-w-xl"
						loading="lazy"
						src="https://www.youtube-nocookie.com/embed/6Y0_bg2a7aU?si=94Bb4FT_Fg-4sMN4"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<div class="md:col-span-3">
					<h4 class="text-xl font-bold mb-2 mt-6">Resultaat</h4>
					<p>Hieronder zie je een geprinte versie van een stempel. Daarnaast kan je ook het 3d model zien dat gegenereerd wordt door de applicatie.</p>
				</div>
				<img src="/images/stempel/stempel-print.webp" alt="3d print van voorbeeldstempel" class="rounded-xl max-w-64 w-full" loading="lazy" />
				<div class="md:col-span-2">
					<div class="w-full aspect-square max-h-96 max-w-96">
						<Canvas>
							<StempelScene />
						</Canvas>
					</div>
				</div>
				<div class="md:col-span-3">
					<p class="mb-4">
						De applicatie is momenteel nog in ontwikkeling, maar de basisfunctionaliteit is al aanwezig. In de toekomst kunnen er mogelijk uitbreidingen worden
						toegevoegd voor andere modellen.
					</p>
					<h4 class="text-xl font-bold mb-2 mt-6">Technologieën</h4>
					<div class="flex gap-4">
						{#each [tools.Python] as t}
							<div class="flex">
								<img src={t.src} alt="{t.text} icon" class="h-5" />
								<span class="ms-1">{t.text}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="modal-action">
				<a class="btn btn-soft" href="https://github.com/tibo24/3d-generator" target="_blank" rel="noopener noreferrer">Github code</a>
				<button class="btn btn-soft" onclick={() => ($modals.model_generator = false)}>Sluiten</button>
			</div>
		</div>
	</div>
{/if}
