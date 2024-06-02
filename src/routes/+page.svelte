<script>
import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
import HopperelecText from "$lib/components/hopper-logo/HopperelecText.svelte";
import CuttingMatBackground from "./CuttingMatBackground.svelte";
import NavBar from "./NavBar.svelte";
</script>

<CuttingMatBackground>
  <NavBar/>
  <main>
    <section>
      <HopperIcon fillColor="#646464" outlineColor="#fff" outlineWidth={6} typeOf3D="stroke" padding={{top: 3, right: 3, bottom: 3, left: 3}} scale={null}/>
      <p>
        Hi, I'm <span class="name-img"><HopperelecText/></span><br>
        <!-- Verb and noun will be slots, these are just examples -->
        I <span class="verb">code websites</span> in <span class="noun svelte">Svelte</span>
      </p>
    </section>
    <section id="projects">
      <p>This will be a Monaco editor</p>
    </section>
    <section id="contact">
      <h2>Contact Me</h2>
    </section>
  </main>
</CuttingMatBackground>

<svelte:head>
  <style>
    section:first-child > svg {
      max-width: 50%;
      max-height: 50%;
      padding-bottom: 20px;
    }
  </style>
</svelte:head>

<style lang="scss">
section:first-child {
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

#projects {
  height: 90vh;
  background-color: #1f1f1f;
  box-shadow: 0 0 10vh 32px black;
  margin-top: 10vh;
  z-index: 1;
  position: relative;
}

#contact {
  height: 30vh;
  padding-top: 10vh;
  background-color: #203995;
}
</style>