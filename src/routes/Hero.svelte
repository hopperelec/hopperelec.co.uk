<script lang="ts">
import CameronFace from "$lib/components/CameronFace.svelte";
import CameronText from "$lib/components/CameronText.svelte";
import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
import HopperelecText from "$lib/components/hopper-logo/HopperelecText.svelte";
import HeHimSticker from "$lib/media/hero/stickers/cameron/he-him.svg";
import MaleSticker from "$lib/media/hero/stickers/cameron/male.svg";
import JDASticker from "$lib/media/hero/stickers/hopperelec/jda.svg";
import PaperMCSticker from "$lib/media/hero/stickers/hopperelec/papermc.svg";
import PythonSticker from "$lib/media/hero/stickers/hopperelec/python.svg";
import SvelteSticker from "$lib/media/hero/stickers/hopperelec/svelte.svg";
import { fade, slide } from "svelte/transition";

let width: number;
let height: number;
$: opacity = 0.2 * Math.min(1.3, width / height) ** 2;

let hopperelecMode = true;

type RollingText = [
	string, // verb
	string?, // noun
	string?, // connective
	{ text: string; color: string }?, // styled noun
];

const HopperelecRollingText: RollingText[] = [
	["make", "websites", "with", { text: "HTML", color: "#f16524" }],
	["make", "websites", "with", { text: "Svelte", color: "#ff3C00" }],
	["make", "websites", "with", { text: "CSS", color: "#306af1" }],
	["make", "websites", "with", { text: "SCSS", color: "#cf6c9c" }],
	["make", "websites", "with", { text: "Javascript", color: "#f0db4f" }],
	["make", "websites", "with", { text: "Typescript", color: "#377cc8" }],
	["make", "websites", "with", { text: "PHP", color: "#7b7fb5" }],
	["code", "stuff", "with", { text: "Python", color: "#ff0" }],
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

const timeSinceBorn = new Date(
	new Date().getTime() - new Date("06/08/06").getTime(),
);
const CameronRollingText: RollingText[] = [
	["am", "autistic"],
	["am a", "cool guy"],
	["am from", "the UK"],
	[
		// Doesn't use correct timezone
		"am",
		`${timeSinceBorn.getFullYear() - 1970} years old`,
		undefined,
		timeSinceBorn.getDate() === 1 && timeSinceBorn.getMonth() === 0
			? { text: "today! 🎉", color: "#ff0" } // Emoji is too big, but I'm calling this a feature
			: undefined,
	],
	["go by", "he/him"],
	["have spent", "over 1000 hours coding"],
	["watch", "a lot", "of", { text: "YouTube", color: "red" }],
	["listen to", "Good Kid"],
	["listen to", "Men I Trust"],
	["listen to", "Crywank"],
	["listen to", "HOME"],
	["listen to", "TheFatRat"],
	["listen to", "Alan Walker"],
	["listen to", "Exyl"],
];

function changeRollingText() {
	const options = hopperelecMode ? HopperelecRollingText : CameronRollingText;
	let numOptions = options.length;
	if (currentRollingTextI) numOptions--;
	let choice = Math.floor(Math.random() * numOptions);
	currentRollingTextI = currentRollingTextI
		? choice >= currentRollingTextI
			? choice + 1 // Don't pick same one
			: choice
		: choice;
	currentRollingText = options[currentRollingTextI];
}
let currentRollingTextI: number | undefined;
let currentRollingText: RollingText;
changeRollingText();
let rollingTextInterval = setInterval(changeRollingText, 6000);

function switchMode() {
	hopperelecMode = !hopperelecMode;
	clearTimeout(rollingTextInterval);
	rollingTextInterval = setInterval(changeRollingText, 6000);
	currentRollingTextI = undefined;
	changeRollingText();
}
</script>

<section id="hero" bind:clientWidth={width} bind:clientHeight={height}>
  {#key hopperelecMode}
    <div
      id="transition-container" transition:fade
      class:hopperelec-mode={hopperelecMode} class:cameron-mode={!hopperelecMode}
    >
      <div id="stickers" style:opacity={opacity > 0.1 ? opacity : 0}>
        {#if hopperelecMode}
          <img src={SvelteSticker} alt="Svelte logo" style:top="15%" style:right="20%"/>
          <img src={PythonSticker} alt="Python logo" style:top="60%" style:left="10%"/>
          <img src={PaperMCSticker} alt="PaperMC logo" style:top="20%" style:left="25%"/>
          <img src={JDASticker} alt="JDA logo" style:top="70%" style:right="15%"/>
        {:else}
          <!-- TODO: Good Kid logo, waiting on permission and potentially an official vector -->
          <enhanced:img
            class:sticker={true}
            src="$lib/media/hero/stickers/cameron/fidget-rings.webp?brightness=0.55&effort=max"
            alt="Three green glow-in-the-dark magnetic fidget rings"
            style:top="75%" style:left="25%"
          />
          <enhanced:img
            class:sticker={true}
            src="$lib/media/hero/stickers/cameron/autism.webp?effort=max"
            alt="Rainbow infinity (autism symbol)"
            style:top="65%" style:right="15%"
          />
          <enhanced:img
            class:sticker={true}
            src="$lib/media/hero/stickers/cameron/minecraft.webp?effort=max"
            alt="Minecraft grass block"
            style:top="50%" style:left="10%"
          />
          <img src={MaleSticker} alt="Blue male symbol" style:top="15%" style:left="20%"/>
          <img src={HeHimSticker} alt="'he him' in a speech bubble" style:top="25%" style:right="10%"/>
        {/if}
      </div>
      <div id="centered-container">
        <button type="button" on:click={switchMode} title={"Switch to "+(hopperelecMode ? 'Cameron' : 'hopperelec')+" mode"}>
          {#if hopperelecMode}
            <HopperIcon fillColor="#646464" outlineColor="#fff" outlineWidth={6} typeOf3D="stroke" padding={{top: 3, right: 3, bottom: 3, left: 3}} scale={null}/>
          {:else}
            <CameronFace/>
            <!-- TODO: bonked face - I already have a frowning face, but wanting a good hammer PNG -->
          {/if}
        </button>
        <p>
          <span>
            <span>Hi, I'm</span>
            <span class="name-img">
              {#if hopperelecMode}
                <HopperelecText/>
              {:else}
                <CameronText color="#fff" thickness={130}/>
              {/if}
            </span>
            <span>. I</span>
          </span>
          {#key currentRollingTextI}
            <span id="rolling-text" transition:slide={{duration: 2000}}>
              <span class="verb">{currentRollingText[0]}</span>
              {#if currentRollingText[1]}
                <span class="noun">{currentRollingText[1]}</span>
              {/if}
              {#if currentRollingText[2]}
                <span class="connective">{currentRollingText[2]}</span>
              {/if}
              {#if currentRollingText[3]}
                <span style:color={currentRollingText[3]?.color}>{currentRollingText[3]?.text}</span>
              {/if}
            </span>
          {/key}
        </p>
      </div>
    </div>
  {/key}
</section>

<!-- TODO: center images should scale down to fit inside of #transition-container -->
<style>
section {
  position: relative;
  height: 80vh;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}

#transition-container {
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 15px 15px 0;
  box-sizing: border-box;
}

/* For aligning text under cameron-face */
#centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
}

button {
  padding-bottom: min(20px, 3%);
  filter: drop-shadow(0 0 32px #000);
  cursor: pointer;

  .hopperelec-mode & {
    height: 20em;
    width: 50%;
  }

  .cameron-mode & {
    height: 40em;
    width: 80%;
  }
}

p {
  /* These are required for the transition to work */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  /* Hide whitespace surrounding name-img */
  & > :first-child {
    display: flex;

    & > span {
      padding: 0 .3em;
      white-space: nowrap;

      &.name-img {
        padding-right: 0;

        & + * {
          padding-left: 0;
        }
      }
    }
  }

  @media (width > 700px) { /* When 2vw is greater than 14px, the minimum font size */
    /* Show text partially over hair of cameron-face */
    .cameron-mode & {
      position: absolute;
      bottom: 20%;
    }
  }
}

.name-img {
  vertical-align: text-top;
  display: inline-block;
  height: 1em;
}

.noun {
  color: #fff;
}

.verb, .connective {
  color: #aaa;
}

.sticker, #stickers > img {
  position: absolute;
  max-width: 25%;
  max-height: 25%;
  width: auto;
  height: auto;
  filter: drop-shadow(0 0 8px #000);
}
</style>
