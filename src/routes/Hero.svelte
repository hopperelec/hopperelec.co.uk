<script>
import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
import HopperelecText from "$lib/components/hopper-logo/HopperelecText.svelte";
</script>

<section id="hero">
  <HopperIcon fillColor="#646464" outlineColor="#fff" outlineWidth={6} typeOf3D="stroke" padding={{top: 3, right: 3, bottom: 3, left: 3}} scale={null}/>
  <p>
    Hi, I'm <span class="name-img"><HopperelecText/></span><br>
    <!-- Verb and noun will be slots, these are just examples -->
    I <span class="verb">code websites</span> in <span class="noun svelte">Svelte</span>
  </p>
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

.verb {
  color: #aaa;
}

.noun.svelte {
  color: #FF3C00;
}
</style>