<script lang="ts">
</script>

<div class="cont flex w-full">
	<div class="mockup-code w-11/12 text-sm m-auto max-w-96 sm:text-lg sm:max-w-md md:text-2xl md:max-w-xl">
		<pre data-prefix="$"><code class="text-blue-300">./welkom.sh</code></pre>
		<pre data-prefix=">"><code class="text-orange-300">Hallo, ik ben Tibo Vermunicht</code></pre>
		<pre data-prefix=">"><code class="text-orange-300">Welkom op mijn portfolio</code></pre>
	</div>
</div>

<style lang="postcss">
	.cont {
		min-height: calc(100vh - 64px);
		background-image: url(/images/background_dark_4k.webp);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.mockup-code::before {
		box-shadow:
			16px 0 red,
			32px 0 orange,
			48px 0 green;
		height: 10px;
		width: 10px;
		opacity: 40%;

		@media (width >= 48rem) {
			box-shadow:
				25px 0 red,
				50px 0 orange,
				75px 0 green;
			height: 16px;
			width: 16px;
		}

		@media (width >= 40rem) {
			box-shadow:
				20px 0 red,
				40px 0 orange,
				60px 0 green;
			height: 12px;
			width: 12px;
		}
	}
</style>
