<script lang="ts">
import Contact from "./Contact.svelte";
import CuttingMatBackground from "./CuttingMatBackground.svelte";
import Hero from "./Hero.svelte";
import NavBar from "./NavBar.svelte";
import Projects from "./Projects.svelte";
</script>

<NavBar/>
<CuttingMatBackground>
  <div id="navbar-padding"></div>
  <main>
    <Hero/>
    <Projects/>
    <Contact/>
  </main>
</CuttingMatBackground>


<style lang="scss">
:global(body) {
  overflow-x: hidden;
}

#navbar-padding {
  height: 3.75em;
}

main {
  font-size: max(14px, min(2vw, 2vh));
}
</style>