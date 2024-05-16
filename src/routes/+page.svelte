<script>
import CuttingMatBackground from "./CuttingMatBackground.svelte";
import NavBar from "./NavBar.svelte";
</script>

<CuttingMatBackground>
  <NavBar/>
  <main>
    <section>
      <enhanced:img src="$lib/media/hopper-white-outline.svg" alt="transparent hopper logo"/>
    </section>
    <section id="projects">
      <p>This will be a Monaco editor</p>
    </section>
    <section id="contact">
      <h2>Contact Me</h2>
    </section>
  </main>
</CuttingMatBackground>

<style lang="scss">
section:first-child {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 32px black);

  & > img {
    max-width: 50%;
    max-height: 50%;
  }
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