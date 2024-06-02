<script lang="ts">
import Hopper from "$lib/components/hopper-logo/Hopper.svelte";
import HopperShadowWrapper from "$lib/components/hopper-logo/_HopperShadowWrapper.svelte";
import type {
	EYES,
	HOPPER_PARAMS,
	PADDING,
	TYPE_OF_3D,
} from "$lib/components/hopper-logo/types";

export let scale = 1;
export let padding: PADDING = undefined;
export let backgroundColor: boolean | string = false;
export let fillColor = "#404040";
export let outlineColor: undefined | string = undefined;
export let typeOf3D: TYPE_OF_3D = "none";
export let outlineWidth = 0;
export let shadowLength = 0;
export let eyes: EYES = undefined;

$: hopperParams = {
	outlineWidth,
	typeOf3D,
	fillColor,
	outlineColor,
} as HOPPER_PARAMS;

let width = 216;
let height = 200;
let _padding = { top: 0, right: 0, bottom: 0, left: 0 };
$: if (padding) {
	// Ideally, I'd want to be able to pass just a single number for padding on all sides, or for horizontal/vertical.
	// For example: { allSides: 10, right: 5 } --> { top: 10, right: 5, bottom: 10, left: 10 }
	// However, I can't find a way to get this to work with Typescript.
	_padding = {
		top: padding.top || 0,
		right: padding.right || 0,
		bottom: padding.bottom || 0,
		left: padding.left || 0,
	};
	width = 216 + _padding.left + _padding.right;
	height = 200 + _padding.top + _padding.bottom;
	hopperParams.transform = `translate(${_padding.left} ${_padding.top})`;
}

let eyeCenterY: number;
let eyePupilY: number;
let eyePupilX: number;
$: if (eyes && _padding) {
	eyeCenterY = 80 + _padding.top;
	eyePupilY = eyeCenterY;
	eyePupilX = _padding.left;
	switch (eyes.direction) {
		case "up":
			eyePupilY -= 10;
			break;
		case "down":
			eyePupilY += 10;
			break;
		case "right":
			eyePupilX += 5;
			break;
		case "left":
			eyePupilX -= 5;
			break;
	}
}
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 {width} {height}"
  width="{width * scale}" height="{height * scale}"
>
  {#if shadowLength || typeOf3D === "gaps"}
    <defs>
      {#if shadowLength}
        <filter id="shadow" x="0" y="0" filterUnits={typeOf3D === "gaps" ? undefined : "userSpaceOnUse"}>
          <feGaussianBlur in="SourceAlpha" result="blurOut" stdDeviation={shadowLength}/>
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
        </filter>
      {/if}
      {#if typeOf3D === "gaps"}
        <mask id="mask">
          <Hopper params={hopperParams}/>
        </mask>
      {/if}
    </defs>
  {/if}
  {#if backgroundColor}
    <rect width="100%" height="100%" stroke="none"
          fill={typeof(backgroundColor) === "string" ? backgroundColor : "#c41313"}/>
  {/if}
  <HopperShadowWrapper length={shadowLength}>
    {#if typeOf3D === "gaps"}
      <rect width="100%" height="100%" mask="url(#mask)" fill={fillColor}/>
    {:else}
      <Hopper params={hopperParams}/>
    {/if}
    {#if eyes}
      {#each [80,136] as xCenter}
        <ellipse cx={xCenter+_padding.left} cy={eyeCenterY} rx="14" ry="20" fill="#fff" stroke-width="1"/>
        <circle cx={xCenter+eyePupilX} cy={eyePupilY} r="7" fill={eyes.color}/>
      {/each}
    {/if}
  </HopperShadowWrapper>
</svg>