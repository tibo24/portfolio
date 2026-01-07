<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, GLTF } from '@threlte/extras';

</script>

<T.PerspectiveCamera makeDefault position={[0, 9, -8]}>
	<OrbitControls />
</T.PerspectiveCamera>
<T.AmbientLight color={0x969696} />
<T.SpotLight position={[0, 10, 0]} intensity={200} />
<T.SpotLight position={[0, 6, -8]} intensity={20} />
<T.SpotLight position={[0, 4, 3]} intensity={10} />
<T.SpotLight position={[-2, -7, 2]} intensity={30} />
<GLTF url="/models/fan-pcb.gltf" />
