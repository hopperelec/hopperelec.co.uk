<script lang="ts">
import NavBar from "$lib/components/NavBar.svelte";
import Contact from "./Contact.svelte";
import CuttingMatBackground from "./CuttingMatBackground.svelte";
import Hero from "./Hero.svelte";
import Projects from "./Projects.svelte";
</script>

<CuttingMatBackground>
  <NavBar/>
  <main class="navbar-padding">
    <Hero/>
    <Projects/>
    <Contact/>
  </main>
</CuttingMatBackground>

<style lang="scss">
:global(body) {
  overflow-x: hidden;
}

main {
  font-size: max(14px, min(2vw, 2vh));
}
</style>