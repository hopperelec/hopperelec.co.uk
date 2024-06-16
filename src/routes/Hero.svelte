<script lang="ts">
import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
import HopperelecText from "$lib/components/hopper-logo/HopperelecText.svelte";
import { slide } from "svelte/transition";

import JDASticker from "$lib/media/hero/stickers/hopperelec/jda.svg";
import PaperMCSticker from "$lib/media/hero/stickers/hopperelec/papermc.svg";
import PythonSticker from "$lib/media/hero/stickers/hopperelec/python.svg";
import SvelteSticker from "$lib/media/hero/stickers/hopperelec/svelte.svg";

const rollingText: [
	string, // verb
	string?, // noun
	string?, // connective
	{ text: string; color: string }?, // styled noun
][] = [
	["make", "websites", "with", { text: "HTML", color: "#f16524" }],
	["make", "websites", "with", { text: "Svelte", color: "#ff3C00" }],
	["make", "websites", "with", { text: "CSS", color: "#306af1" }],
	["make", "websites", "with", { text: "SCSS", color: "#cf6c9c" }],
	["make", "websites", "with", { text: "Javascript", color: "#f0db4f" }],
	["make", "websites", "with", { text: "Typescript", color: "#377cc8" }],
	["make", "websites", "with", { text: "PHP", color: "#7b7fb5" }],
	["code", "stuff", "with", { text: "Python", color: "yellow" }],
	["make", "a Discord bot", "with", { text: "Java", color: "#5382a1" }],
	["develop", "Minecraft plugins", "with", { text: "Java", color: "#5382a1" }],
	["contribute to", "open-source"],
	["stream", "Bedwars", "on", { text: "YouTube", color: "red" }],
	["make", undefined, undefined, { text: "Minecraft servers", color: "lime" }],
	["host", undefined, undefined, { text: "Minecraft servers", color: "lime" }],
	[
		"administrate",
		undefined,
		undefined,
		{ text: "Minecraft servers", color: "lime" },
	],
];
function changeRollingText() {
	let choice = Math.floor(Math.random() * (rollingText.length - 1));
	i = choice >= i ? choice + 1 : choice; // Don't pick same one
}
let i: number;
changeRollingText();
setInterval(changeRollingText, 6000);
</script>

<section id="hero">
  <div id="stickers">
    <img src={SvelteSticker} alt="Svelte logo" style:top="15%" style:right="20%"/>
    <img src={PythonSticker} alt="Python logo" style:top="60%" style:left="10%"/>
    <img src={PaperMCSticker} alt="PaperMC logo" style:top="20%" style:left="25%"/>
    <img src={JDASticker} alt="JDA logo" style:top="70%" style:right="15%"/>
  </div>
  <HopperIcon fillColor="#646464" outlineColor="#fff" outlineWidth={6} typeOf3D="stroke" padding={{top: 3, right: 3, bottom: 3, left: 3}} scale={null}/>
  <p>Hi, I'm <span class="name-img"><HopperelecText/></span>. I</p>
  {#key i}
    <p id="rolling-text" transition:slide={{duration: 2000}}>
      <span class="verb">{rollingText[i][0]}</span>
      {#if rollingText[i][1]}
        <span class="noun">{rollingText[i][1]}</span>
      {/if}
      {#if rollingText[i][2]}
        <span class="connective">{rollingText[i][2]}</span>
      {/if}
      {#if rollingText[i][3]}
        <span style:color={rollingText[i][3]?.color}>{rollingText[i][3]?.text}</span>
      {/if}
    </p>
  {/key}
</section>

<svelte:head>
  <style>
    /* HopperIcon */
    section > svg {
      max-width: 33%;
      max-height: 33%;
      padding-bottom: min(20px, 3%);
      filter: drop-shadow(0 0 32px black);
    }
  </style>
</svelte:head>

<style>
section {
  position: relative;
  height: 80vh;
  padding: 1.05em 15px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}

.name-img {
  display: inline-block;
  height: 1em;
  vertical-align: text-top;
}

.noun {
  color: #fff;
}

.verb, .connective {
  color: #aaa;
}

#stickers > img {
  opacity: 0.3;
  position: absolute;
  max-width: 25%;
  max-height: 25%;
  filter: drop-shadow(0 0 8px black);

  @media (aspect-ratio < 1) {
    display: none;
  }
}
</style>
