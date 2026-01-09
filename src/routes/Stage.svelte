<script lang="ts">
	import { DocumentText, Icon } from 'svelte-hero-icons';
</script>

<div class="min-h-96 p-4 max-w-6xl mx-auto">
	<h1 class="text-5xl font-bold mt-4 mb-8">Stage</h1>
	<div class="grid grid-cols-12 gap-2">
		<div class="col-span-9">
			<p>
				Tijdens mijn stage bij Sodego in Vorselaar, werkte ik aan de ontwikkeling van een desktopapplicatie voor het beheer van data en sturing van
				tv-opstelling tijdens een tentoonstelling.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae reiciendis totam aliquam officia tempora quibusdam at neque recusandae consectetur
				quidem? Corporis fugit beatae quas eum architecto! Quasi consectetur error recusandae.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae reiciendis totam aliquam officia tempora quibusdam at neque recusandae consectetur
				quidem? Corporis fugit beatae quas eum architecto! Quasi consectetur error recusandae.
			</p>
		</div>
		<img src="/images/Sodego-logo.svg" class="col-span-3 w-full" alt="Logo Sodego" loading="lazy" />

		<div class="divider col-span-12"></div>
		<div class="col-span-3">
			<a class="btn btn-outline w-full mb-4" target="_blank" rel="noopener noreferrer" href="/files/project_plan.pdf">
				<Icon src={DocumentText} size="16" />
				<span>Project plan</span>
			</a>
			<a class="btn btn-outline w-full mb-4" target="_blank" rel="noopener noreferrer" href="/files/project_plan.pdf">
				<Icon src={DocumentText} size="16" />
				<span>Project plan</span>
			</a><!-- TODO -->
			<a class="btn btn-outline w-full" target="_blank" rel="noopener noreferrer" href="/files/project_plan.pdf">
				<Icon src={DocumentText} size="16" />
				<span>Project plan</span>
			</a><!-- TODO -->
		</div>
		<div class="col-span-9">
			<p class="col-span-12">
				Hieronder zie je een demo video van een 3d render die ik aan het begin van mijn stage gemaakt heb om een beter beeld te geven van de opstelling tijdens
				een tentoonstelling
			</p>
			<iframe
				class="w-full max-w-md aspect-video"
				loading="lazy"
				src="https://www.youtube-nocookie.com/embed/naAPv_sWtGg?si=UcBzeCX4NuD180wP"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	</div>
</div>
