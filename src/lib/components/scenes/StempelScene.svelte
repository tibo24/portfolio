<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, GLTF, CameraControls, type CameraControlsRef } from '@threlte/extras';

	let controls = $state<CameraControlsRef>();

	$effect.pre(() => {
		controls?.setLookAt(0, 9, -6, 0, 2, 0);
	});
</script>

<CameraControls bind:ref={controls} />
<T.PerspectiveCamera makeDefault position={[0, 7, -6]}>
	<OrbitControls />
</T.PerspectiveCamera>
<T.AmbientLight color={0x969696} />
<T.SpotLight position={[-3, 10, 10]} intensity={100} />
<T.SpotLight position={[-1, -5, 4]} intensity={10} />
<T.SpotLight position={[7, 7, -2]} intensity={25} />
<GLTF url="/models/stempel.gltf" />
