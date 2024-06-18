<script lang="ts">
import CameronText from "$lib/components/CameronText.svelte";
import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
import HopperelecText from "$lib/components/hopper-logo/HopperelecText.svelte";
import HeHimSticker from "$lib/media/hero/stickers/cameron/he-him.svg";
import MaleSticker from "$lib/media/hero/stickers/cameron/male.svg";
import MinecraftSticker from "$lib/media/hero/stickers/cameron/minecraft.webp";
import JDASticker from "$lib/media/hero/stickers/hopperelec/jda.svg";
import PaperMCSticker from "$lib/media/hero/stickers/hopperelec/papermc.svg";
import PythonSticker from "$lib/media/hero/stickers/hopperelec/python.svg";
import SvelteSticker from "$lib/media/hero/stickers/hopperelec/svelte.svg";
import { fade, slide } from "svelte/transition";

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

let hopperelecMode = true;
</script>

<section id="hero">
  {#key hopperelecMode}
    <div id="transition-container" transition:fade>
      <div id="stickers">
        {#if hopperelecMode}
          <img src={SvelteSticker} alt="Svelte logo" style:top="15%" style:right="20%"/>
          <img src={PythonSticker} alt="Python logo" style:top="60%" style:left="10%"/>
          <img src={PaperMCSticker} alt="PaperMC logo" style:top="20%" style:left="25%"/>
          <img src={JDASticker} alt="JDA logo" style:top="70%" style:right="15%"/>
        {:else}
          <!-- TODO: Good Kid logo, waiting on permission and potentially an official vector -->
          <!-- TODO: Rainbow infinity (autism symbol), waiting on higher quality versions -->
          <enhanced:img
            class:sticker={true}
            src="$lib/media/hero/stickers/cameron/fidget-rings.webp?brightness=0.55"
            alt="Three green glow-in-the-dark magnetic fidget rings"
            style:top="20%" style:right="25%"
          />
          <img src={MinecraftSticker} alt="Minecraft grass block" style:top="70%" style:left="15%"/>
          <img src={MaleSticker} alt="Blue male symbol" style:top="15%" style:left="20%"/>
          <img src={HeHimSticker} alt="'he him' in a speech bubble" style:top="65%" style:right="20%"/>
        {/if}
      </div>
      <button type="button" on:click={() => {hopperelecMode = !hopperelecMode}} title={"Switch to "+(hopperelecMode ? 'Cameron' : 'hopperelec')+" mode"}>
        {#if hopperelecMode}
          <HopperIcon fillColor="#646464" outlineColor="#fff" outlineWidth={6} typeOf3D="stroke" padding={{top: 3, right: 3, bottom: 3, left: 3}} scale={null}/>
        {:else}
          My face (PLACEHOLDER)
          <!-- TODO: Get good photo (mostly referring to the cropping lol) -->
        {/if}
      </button>
      <p>
        <span>Hi, I'm</span>
        <span class="name-img">
          {#if hopperelecMode}
            <HopperelecText/>
          {:else}
            <CameronText color="#fff" thickness={130}/>
          {/if}
        </span>
        <span>. I</span>
      </p>
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
    </div>
  {/key}
</section>

<svelte:head>
  <style>
    button > * {
      height: 100%;
      width: 100%;
    }
  </style>
</svelte:head>

<style>
section {
  position: relative;
  height: 80vh;
  padding: 1.05em 15px 0;
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}

#transition-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

button {
  max-width: 33%;
  max-height: 33%;
  padding-bottom: min(20px, 3%);
  filter: drop-shadow(0 0 32px black);
  cursor: pointer;
}

/* Hide whitespace surrounding name-img */
p {
  display: flex;

  & > span {
    padding: 0 .3em;
  }
}

.name-img {
  vertical-align: text-top;
  display: inline-block;
  height: 1em;
  padding-right: 0;

  & + * {
    padding-left: 0;
  }
}

.noun {
  color: #fff;
}

.verb, .connective {
  color: #aaa;
}

.sticker, #stickers > img {
  opacity: 0.3;
  position: absolute;
  max-width: 25%;
  max-height: 25%;
  width: auto;
  filter: drop-shadow(0 0 8px black);

  @media (aspect-ratio < 1) {
    display: none;
  }
}
</style>
