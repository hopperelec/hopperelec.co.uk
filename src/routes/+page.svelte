<script>
import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
import CuttingMatBackground from "./CuttingMatBackground.svelte";
import NavBar from "./NavBar.svelte";
</script>

<CuttingMatBackground>
  <NavBar/>
  <main>
    <section>
      <HopperIcon fillColor="#646464" outlineColor="#fff" outlineWidth={6} typeOf3D="stroke" padding={{top: 3, right: 3, bottom: 3, left: 3}}/>
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
      width: 50%;
      height: 50%;
    }
  </style>
</svelte:head>

<style lang="scss">
section:first-child {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 32px black);
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