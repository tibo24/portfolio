<script>
	import { tools } from '$lib/constants/tools';
	import { modals } from '$lib/stores';
	import { Canvas } from '@threlte/core';
	import FanScene from './scenes/FanScene.svelte';

	import Highlight from 'svelte-highlight';
	import arduino from 'svelte-highlight/languages/arduino';
	import vbnet from 'svelte-highlight/languages/vbnet';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	let code_serial_start = `char serial_command_buffer_[32];
SerialCommands serial_commands_(&Serial, serial_command_buffer_, sizeof(serial_command_buffer_), "\\r\\n", " ");
SerialCommand cmd_switch_("SWITCH", cmd_switch);
SerialCommand cmd_pwm_("PWM", cmd_pwm);`;

	let code_serial_read = `Private _serialPort As New SerialPort()
_serialPort.PortName = "COM3"
_serialPort.BaudRate = 9600
...

AddHandler _serialPort.DataReceived, AddressOf DataReceivedHandler
_serialPort.Open()

' Read data in DataReceivedHandler
Dim inData As String = serialPort.ReadLine()

' Send data
_serialPort.Write($"SWITCH {btn.Tag} ON" & vbCrLf)`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

{#if $modals.fan_sturing}
	<div class="modal modal-open top-7">
		<div class="modal-box max-w-5xl px-4 md:px-12 max-h-10/12">
			<h2 class="font-bold text-3xl text-center mb-8">Fan sturing</h2>
			<p class="mb-4">
				Tijdens mijn stage kreeg ik naast mijn hoofdopdracht ook een extra side-project toegewezen: het ontwerken en realiseren van een passende printplaat voor
				de aansturing van 15 ventilatoren. Deze ventilatoren worden gebruikt voor de controle van luchtdruk in een kleine ruimte. De aansturing moet gebeuren
				met een Arduino Nano Every die via seriële communicatie de sturing van de ventilatoren doet.
			</p>
			<h4 class="text-xl font-bold mb-2 mt-6">Hardwareontwerp</h4>
			<p class="mb-4">De printplaat moet ondersteuning bieden voor drie soorten ventilatoren:</p>
			<ul class="list-inside list-disc">
				<li>6 DC-fans</li>
				<li>6 PWM-fans</li>
				<li>3 PWM-fans met tachometer-uitlezing</li>
			</ul>
			<p class="my-4">
				Elk van deze soort wordt als een groep geschakeld via relais, ook de PWM-aansturing worden per groep aangestuurd. Enkel de drie tach-signalen worden
				individueel uitgelezen.
			</p>
			<p class="mb-4">
				Het schema en de PCB zijn ontworpen zonder testmogelijkheden, waardoor de printplaat volledig 'blind' besteld moest worden. Dit zorgde voor een
				interessante uitdaging tijdens de realisatie.
			</p>

			<div class="divider"></div>

			<h2 class="text-3xl font-bold mb-2 mt-6">Schema</h2>
			<img src="/images/fan-sturing/schema.webp" alt="Volledig schema" class="w-full rounded-2xl" />
			<div class="-mx-4 mt-2">
				<div class="join join-vertical mt-4 w-full">
					<div class="collapse collapse-arrow join-item bg-base-200 border-base-300 border w-full">
						<input type="checkbox" />
						<div class="collapse-title font-semibold">Relais</div>
						<div class="collapse-content md:flex md:gap-2">
							<div>
								<p class="text-sm">
									Hier is een voorbeeld hoe de aansturing van de relais wordt gedaan. Dit is de aansturing van één relais en is dus drie keer aanwezig.
								</p>
								<p class="text-sm mt-2">
									PIN_RL1 is aangesloten op de Arduino en aangezien het signaal van de Arduino niet krachtig genoeg is om de relais aan te sturen, wordt een
									NPN-transistor gebruikt die als schakelaar werkt.
								</p>
								<h5 class="text-sm font-bold mt-4">Componenten:</h5>
								<table class="table table-sm">
									<tbody>
										<tr>
											<td>K1 (Omron G5V-1)</td>
											<td>Relais dat een extern circuit schakelt. De spoel wordt gevoed met +5V en geactiveerd via Q3.</td>
										</tr>
										<tr>
											<td>Q3 (BC337)</td>
											<td>NPN-transistor die als schakelaar werkt. Wordt geactiveerd door PIN_RL1 en verbindt de relais-coil met GND.</td>
										</tr>
										<tr>
											<td>D1 (1N4148)</td>
											<td>Flyback-diode die spanningspieken opvangt bij het uitschakelen van de relais.</td>
										</tr>
										<tr>
											<td>C2 (0.1μF)</td>
											<td>Condensator parallel aan D1, dempt snelle spanningspieken en ruis.</td>
										</tr>
										<tr>
											<td>R5 (1kΩ)</td>
											<td>Basisweerstand voor Q3, beperkt de stroom vanuit PIN_RL1.</td>
										</tr>
										<tr>
											<td>R6 & R7 (10kΩ)</td>
											<td>Pull-down netwerk dat de basis van Q3 laag houdt als PIN_RL1 zweeft, voorkomt ongewenste inschakeling.</td>
										</tr>
									</tbody>
								</table>
							</div>
							<img src="/images/fan-sturing/schema-relay.webp" alt="Schema relais" class="max-w-xs w-full h-full rounded-2xl md:col-span-4" />
						</div>
					</div>
					<div class="collapse collapse-arrow join-item bg-base-200 border-base-300 border mt-6 -mx-4">
						<input type="checkbox" />
						<div class="collapse-title font-semibold">PWM</div>
						<div class="collapse-content md:flex md:gap-2">
							<div>
								<p class="text-sm">
									Volgend voorbeeld toont hoe de PWM-sturing is opgebouwd. Dit schema betreft de aansturing van één PWM-signaal en komt dus twee keer voor.
								</p>
								<p class="text-sm mt-2">PIN_PWM1 is verbonden met een PWM-pin van de Arduino. Via een MOSFET wordt de belasting op de Arduino beperkt.</p>
								<h5 class="text-sm font-bold mt-4">Componenten:</h5>
								<table class="table table-sm">
									<tbody>
										<tr>
											<td>Q1 (IRLZ44N)</td>
											<td>N-channel MOSFET die de belasting schakelt.</td>
										</tr>
										<tr>
											<td>R1 (100Ω)</td>
											<td>Weestand om de inschakelstroom te beperken</td>
										</tr>
										<tr>
											<td>R2 (10kΩ)</td>
											<td>Pull-down weestand die ongewenste geleiding voorkomt.</td>
										</tr>
									</tbody>
								</table>
							</div>
							<img src="/images/fan-sturing/schema-pwm.webp" alt="Schema pwm" class="max-w-2xs w-full h-full rounded-2xl" />
						</div>
					</div>
					<div class="collapse collapse-arrow join-item bg-base-200 border-base-300 border mt-6 -mx-4">
						<input type="checkbox" />
						<div class="collapse-title font-semibold">Aansluitingen ventilatoren</div>
						<div class="collapse-content md:flex md:gap-2">
							<div>
								<p class="text-sm">
									Volgend schema toont een voorbeeld van hoe de connectoren voor de ventilatoren zijn aangesloten. Voor elke aansluiting wordt er één
									representatief voorbeeld weergegeven.
								</p>
								<p class="text-sm mt-2">RELAY wordt verbonden met de uitgang van de relais contact.</p>
								<p class="text-sm mt-2">PWM wordt verbonden met de mosfet die de het PWM-signaal regelt.</p>
								<p class="text-sm mt-2">TACH is verbonden met de Arduino pin.</p>
								<h5 class="text-sm font-bold mt-4">Componenten:</h5>
								<table class="table table-sm">
									<tbody>
										<tr>
											<td>D1,D4 & D7 (1N5819)</td>
											<td>Flyback-diode die spanningspieken opvangt bij het uitschakelen van de relais.</td>
										</tr>
										<tr>
											<td>R16 (10kΩ)</td>
											<td>Pull-up weestand voor het tach-signaal.</td>
										</tr>
									</tbody>
								</table>
							</div>
							<img src="/images/fan-sturing/schema-output.webp" alt="Schema output" class="max-w-56 w-full h-full rounded-2xl" />
						</div>
					</div>
				</div>
			</div>

			<div class="divider"></div>

			<h2 class="text-3xl font-bold mb-2 mt-6">PCB</h2>
			<p class="mb-4">
				De vorm van de printplaat is bepaald door de beperkte beschikbare ruimte. Daarom zijn de kleine SMD-componenten aan de onderzijde van de PCB geplaatst,
				zodat een compactere lay-out kon worden gerealiseerd.
			</p>
			<div class="-mx-4 mt-2">
				<div class="join join-vertical w-full">
					<div class="collapse collapse-arrow join-item bg-base-200 border-base-300 border">
						<input type="checkbox" />
						<div class="collapse-title font-semibold">Toon PCB-traces</div>
						<div class="collapse-content">
							<img src="/images/fan-sturing/pcb-traces.webp" alt="PCB traces" class="w-full" />
						</div>
					</div>
					<div class="collapse collapse-arrow join-item bg-base-200 border-base-300 border">
						<input type="checkbox" />
						<div class="collapse-title font-semibold">Toon 3d-model van PCB</div>
						<div class="collapse-content">
							<div class="w-full aspect-square max-h-96 max-w-96">
								<Canvas>
									<FanScene />
								</Canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p class="mb-4 mt-4">
				Na het solderen van alle componenten op de printplaat, kon voor het eerst getest worden of dit werkte. Hier botste ik tegen een probleem dat ik de
				relais niet gestuurd kreeg. Na grondig uitzoeken ben ik er op uit gekomen dat de pulldown die aan de collector van de BC337 transistoren staat, niet
				nodig is en voorkomt dat de relais geschakeld wordt. Dit heb ik opgelost door de weerstand te vervangen door een kopere brug. Na deze wijziging werkt
				volledig.
			</p>
			<img src="/images/fan-sturing/pcb.webp" alt="Gesoldeerde PCB" class="w-full max-h-96 object-contain rounded-2xl" />

			<div class="divider"></div>

			<h2 class="text-3xl font-bold mb-2 mt-6">Arduino code</h2>
			<p class="mb-4">
				De Arduino ontvangt via seriële communicatie commando's die gebruikt worden om de aansturing van de relais en PWM-signalen. Daarnaast stuurt deze ook
				elke seconde de status van alle relais, de waarde van de PWM-signalen en de uitgelezen tachometer waarden.
			</p>
			<p class="mb-4">Hieronder zie je voorbeeld code hoe de seriele commando's gelezen worden en hoe deze geactiveerd worden.</p>
			<Highlight language={arduino} code={code_serial_start} />
			<p class="mt-4 mb-2">Dit laat toe dat de volgende commando's gebruikt kunnen worden voor de aansturing:</p>
			<p class="my-1 ms-4 rounded-md px-2 bg-base-300 w-max"><code>{'SWITCH <ALL|1|2|3> <ON|OFF|HIGH|LOW>'}</code></p>
			<p class="my-1 ms-4 rounded-md px-2 bg-base-300 w-max"><code>{'PWM <ALL|1|2> <0-255>'}</code></p>

			<div class="divider"></div>
			<h2 class="text-3xl font-bold mb-2 mt-6">VB.Net-applicatie</h2>
			<p class="mb-4">Als demo heb ik een eenvoudige VB.Net-applicatie ontwikkeld die de ventilatoren aanstuurt via seriële communicatie.</p>
			<p class="mb-4">
				In het scherm staan bovenaan knoppen waarmee de relais die de groepen aansturen mee kan bedient worden. Bij de eerste twee groepen staat een trackbar
				onder waarmee je de PWM-waarde van 0 to 255 kan instellen en een knop om deze waarde door te sturen.
			</p>
			<p class="mb-4">
				Bovenaan het scherm bevinden zich knoppen om de relais te bedienen die de verschillende groepen schakelen. Voor de eerste twee groepen is er een
				trackbar voorzien waarmee de PWM-waarde van 0 tot 255 kan worden ingesteld, samen met een knop om deze waarde door te sturen
			</p>
			<p class="mb-4">Links staat een ListView waarin de ingelezen waarden worden weergegeven.</p>
			<p class="mb-4">
				De applicatie is bewust eenvoudig gehouden en beperkt in functionaliteit, aangezien er geen specifieke vereisten waren voor de gewenste mogelijkheden.
			</p>
			<img src="/images/fan-sturing/vbnet-form.webp" alt="Demo form" class="w-full max-h-96 object-contain rounded-2xl" />
			<p class="my-4">Onderstaande code geeft een voorbeeld hoe de seriële communicatie kan aangepakt worden.</p>
			<Highlight code={code_serial_read} language={vbnet} />

			<div class="divider"></div>

			<h2 class="text-3xl font-bold mb-2 mt-6">Conclusie</h2>
			<p class="mb-4">
				Dit project vormde een interessante uitdaging, aangezien het schema en de PCB volledig op basis van research zijn ontworpen. Ondanks één kleine fout —
				die eenvoudig kan worden opgelost door op de bestaande printplaten een koperen brug te solderen in plaats van de voorziene weerstand — is het ontwerp
				uiteindelijk succesvol gebleken. Bovendien was het fijn om opnieuw met elektronica bezig te zijn.
			</p>

			<div>
				<div class="md:col-span-2"></div>
				<div class="md:col-span-3">
					<h4 class="text-xl font-bold mb-2 mt-6">Technologieën</h4>
					<div class="flex gap-4">
						{#each [tools.Arduino, tools.PCB, tools.VBNet] as t}
							<div class="flex">
								<img src={t.src} alt="{t.text} icon" class="h-5" />
								<span class="ms-1">{t.text}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="modal-action">
				<button class="btn btn-soft" onclick={() => ($modals.fan_sturing = false)}>Sluiten</button>
			</div>
		</div>
	</div>
{/if}
