<script lang="ts">
import Hopper from "$lib/components/hopper-logo/Hopper.svelte";
import type { Eyes, HopperParams } from "$lib/components/hopper-logo/types";

let {
	scale = 1,
	padding = undefined,
	backgroundColor = false,
	shadowLength = 0,
	eyes = undefined,
	...hopperParams
}: {
	scale?: null | number;
	padding?: {
		top?: number;
		right?: number;
		bottom?: number;
		left?: number;
	};
	backgroundColor?: boolean | string;
	shadowLength?: number;
	eyes?: Eyes;
} & Omit<HopperParams, "transform"> = $props();

let _padding = $derived(
	// Ideally, I'd want to be able to pass just a single number for padding on all sides, or for horizontal/vertical.
	// For example: { allSides: 10, right: 5 } --> { top: 10, right: 5, bottom: 10, left: 10 }
	// However, I can't find a way to get this to work with Typescript.
	padding
		? {
				top: padding.top || 0,
				right: padding.right || 0,
				bottom: padding.bottom || 0,
				left: padding.left || 0,
			}
		: { top: 0, right: 0, bottom: 0, left: 0 },
);
let width = $derived(216 + _padding.left + _padding.right);
let height = $derived(200 + _padding.top + _padding.bottom);

let eyeCoords = $derived.by(() => {
	if (!eyes) return;
	const centerY = 80 + _padding.top;
	let pupilY = centerY;
	let pupilX = _padding.left;
	switch (eyes.direction) {
		case "up":
			pupilY -= 10;
			break;
		case "down":
			pupilY += 10;
			break;
		case "right":
			pupilX += 5;
			break;
		case "left":
			pupilX -= 5;
			break;
	}
	return { centerY, pupilY, pupilX };
});
</script>

{#snippet Shadowed()}
  {#if hopperParams.typeOf3D === "gaps"}
    <rect width="100%" height="100%" mask="url(#mask)" fill={hopperParams.fillColor}/>
  {:else}
    <Hopper {...hopperParams}/>
  {/if}
  {#if eyes && eyeCoords}
    {#each [80,136] as xCenter}
      <ellipse cx={xCenter+_padding.left} cy={eyeCoords.centerY} rx="14" ry="20" fill="#fff" stroke-width="1"/>
      <circle cx={xCenter+eyeCoords.pupilX} cy={eyeCoords.pupilY} r="7" fill={eyes.color}/>
    {/each}
  {/if}
{/snippet}

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 {width} {height}"
  width="{scale ? width * scale : undefined}" height="{scale ? height * scale : undefined}"
>
  {#if shadowLength || hopperParams.typeOf3D === "gaps"}
    <defs>
      {#if shadowLength}
        <filter id="shadow" x="0" y="0" filterUnits={hopperParams.typeOf3D === "gaps" ? undefined : "userSpaceOnUse"}>
          <feGaussianBlur in="SourceAlpha" result="blurOut" stdDeviation={shadowLength}/>
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
        </filter>
      {/if}
      {#if hopperParams.typeOf3D === "gaps"}
        <mask id="mask">
          <Hopper {...hopperParams} transform={`translate(${_padding.left} ${_padding.top})`}/>
        </mask>
      {/if}
    </defs>
  {/if}
  {#if backgroundColor}
    <rect width="100%" height="100%" stroke="none"
          fill={typeof(backgroundColor) === "string" ? backgroundColor : "#c41313"}/>
  {/if}
  {#if shadowLength}
    <g filter="url(#shadow)">
      {@render Shadowed()}
    </g>
  {:else}
    {@render Shadowed()}
  {/if}
</svg>

<style>
svg {
  max-width: 100%;
  max-height: 100%;
}
</style>