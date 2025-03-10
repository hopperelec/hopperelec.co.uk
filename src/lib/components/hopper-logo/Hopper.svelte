<script lang="ts">
import type { HopperParams } from "$lib/components/hopper-logo/types";

let params: HopperParams = $props();

let strokeColor: string | undefined = $derived.by(() => {
	if (params.typeOf3D === "gaps") return "#000";
	if (params.outlineColor) return params.outlineColor;
	if (params.outlineWidth || params.typeOf3D === "stroke") return "#000";
});
</script>

<g
  transform={params.transform}
  fill={params.fillColor}
  stroke={strokeColor}
  stroke-width={params.outlineWidth || (params.typeOf3D === "none" ? undefined : 10)}
>
  <path
    d="m108 0 108 54 0 49-54 27 0 22-27 14 0 21-27 13-26-13 0-21-28-14 0-22L0 103 0 54Z"
    fill={params.typeOf3D === "gaps" ? "#fff" : params.fillColor}
  />
  {#if params.typeOf3D !== "none"}
    <path fill="none" d="m82 166 26 13 27-13M54 130l54 27 54-27M0 54l108 54L216 54M49 78.5 108 49l59 29.5M108 0l0 49m0 151 0-92"/>
  {/if}
</g>