<script lang="ts">
import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
import type { EYES, TYPE_OF_3D } from "$lib/components/hopper-logo/types";

export let textFillColor = "#fff";
export let hopper:
	| undefined
	| {
			fillColor?: string;
			outlineColor?: string;
			typeOf3D?: TYPE_OF_3D;
			eyes?: EYES;
	  } = undefined;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.5 8" fill={textFillColor} height="1em">
  <defs>
    <mask id="matrix">
      <rect id="letterRect" fill="#fff" width="4" height="8"/>
      <path fill="none" stroke="#000" d="M1 0V8L4 5 0 1 1 0 4 3 0 7 1 8M3 0V8L0 5 4 1 3 0 0 3 4 7 3 8M2 1V7" stroke-width=".2"/>
    </mask>
  </defs>
  <path id="letterH" mask="url(#matrix)" d="M0 1 1 2V4L3 2V0L4 1V5L3 6V4L1 6V8L0 7"/>
  <path id="letterO" mask="url(#matrix)" transform="translate(4.5)" d="M2 1 1 0 0 1V7L1 8 3 6V2ZL3 0 4 1V7L3 8 1 6V2"/>
  <path id="letterP" mask="url(#matrix)" transform="translate(9)" d="M2 1 1 0 0 1V7L1 8V6L3 4 3 2ZL3 0 4 1V5L3 6 1 4V2"/>
  <use href="#letterP" x="4.5"/>
  <path id="letterE" mask="url(#matrix)" transform="translate(18)" d="M1 0 3 2 4 1 3 0 1 2V4L2 3 3 4 2 5 1 4V6L3 8 4 7 3 6 1 8 0 7V1"/>
  {#if hopper}
    <g id="letterR" transform="translate(22.5)" mask="url(#hopperMask)">
      <path mask="url(#matrix)" d="M2 1 1 2V4L2 5 3 4V2ZL3 0 4 1V5L3 6 4 7 3 8 1 6V8L0 7V1L1 0"/>
      <!-- Translation and scale are poorly hard-coded -->
      <g transform="translate(1.05 0.93) scale(0.0089 0.0199)">
        <HopperIcon fillColor={hopper.fillColor} outlineWidth={10} typeOf3D="gaps"/>
      </g>
    </g>
  {:else}
    <path id="letterR" mask="url(#matrix)" transform="translate(22.5)" d="M2 1 1 2V4L2 5 3 4V2ZL3 0 4 1V5L3 6 4 7 3 8 1 6V8L0 7V1L1 0"/>
  {/if}
  <use href="#letterE" x="9"/>
  <path id="letterL" mask="url(#matrix)" transform="translate(31.5)" d="M1 0V6L3 8 4 7 3 6 1 8 0 7V1"/>
  <use href="#letterE" x="18"/>
  <path id="letterC" mask="url(#matrix)" transform="translate(40.5)" d="M1 0 3 2 4 1 3 0 1 2V6L3 8 4 7 3 6 1 8 0 7V1"/>
</svg>