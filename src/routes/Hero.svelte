<script lang="ts">
import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
import HopperelecText from "$lib/components/hopper-logo/HopperelecText.svelte";
import { slide } from "svelte/transition";

type STYLED_TEXT = { text: string; color: string };
const rollingText: [
	string, // verb
	string?, // noun
	string?, // connective
	STYLED_TEXT?, // styled noun
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
	[
		"make",
		undefined,
		undefined,
		{ text: "Minecraft servers", color: "lime" },
	],
	[
		"administrate",
		undefined,
		undefined,
		{ text: "Minecraft servers", color: "lime" },
	],
	[
		"administrate",
		undefined,
		undefined,
		{ text: "Minecraft servers", color: "lime" },
	],
];
function changeRollingText() {
	let choice: number;
	do choice = Math.floor(Math.random() * rollingText.length);
	while (choice === i);
	i = choice;
	// Setting a variable causes Svelte to respond reactively even if it didn't change
	// So I check if these changed manually before setting them
	if (verb !== rollingText[i][0]) verb = rollingText[i][0];
	if (noun !== rollingText[i][1]) noun = rollingText[i][1];
	if (connective !== rollingText[i][2]) connective = rollingText[i][2];
	if (styled !== rollingText[i][3]) styled = rollingText[i][3];
}
let i: number;
let verb: string;
let noun: string | undefined;
let connective: string | undefined;
let styled: STYLED_TEXT | undefined;
changeRollingText();
setInterval(changeRollingText, 5000);
</script>

<section id="hero">
  <HopperIcon fillColor="#646464" outlineColor="#fff" outlineWidth={6} typeOf3D="stroke" padding={{top: 3, right: 3, bottom: 3, left: 3}} scale={null}/>
  <p>Hi, I'm <span class="name-img"><HopperelecText/></span>. I</p>
  <span id="rolling-text">
    <!-- I want these to be inline, along with the "I", but I can't get that to work with transitions -->
    {#key verb}
      <div class="verb" transition:slide={{duration: 3000}}>{verb}</div>
    {/key}
    {#key noun}
      <div class="noun" transition:slide={{duration: 3000}}>{noun || ''}</div>
    {/key}
    {#key connective}
      <div class="connective" transition:slide={{duration: 3000}}>{connective || ''}</div>
    {/key}
    {#key styled}
      <div style:color={styled?.color} transition:slide={{duration: 3000}}>{styled?.text || ''}</div>
    {/key}
  </span>
</section>

<svelte:head>
  <style>
    /* HopperIcon */
    section > svg {
        max-width: 50%;
        max-height: 50%;
        padding-bottom: 20px;
    }
  </style>
</svelte:head>

<style>
section {
  height: 80vh;
  padding: 1.05em 15px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  filter: drop-shadow(0 0 32px black);
  font-family: "Courier New", Courier, monospace;
  font-size: 3.5em;
  font-weight: bold;
  text-align: center;
}

.name-img {
  display: inline-block;
  height: 1em;
  vertical-align: text-top;
}

.verb, .noun {
  color: #fff;
}

.connective {
  color: #aaa;
}
</style>
