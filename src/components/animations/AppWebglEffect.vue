<template>
  <Curtains id="CurtainsCanvas" :params="curtainsParams">
    <SimplePlane />
  </Curtains>
  <!-- https://codesandbox.io/s/vue-curtains-simple-plane-l7mn1j?file=/src/components/SimplePlane.vue:0-4535 -->
</template>

<script>
import { Curtains } from "vue-curtains";
import SimplePlane from "./AppCurtain";

export default {
  name: "App",
  components: {
    Curtains,
    SimplePlane,
  },
  setup() {
    const curtainsParams = {
      pixelRatio: window.devicePixelRatio,
    };

    return {
      curtainsParams,
    };
  },
};
</script>

<style>
#CurtainsCanvas {
  position: fixed; top: 0;left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
</style>
