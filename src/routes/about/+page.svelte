<script>
  import { goto } from "$app/navigation";
  import CameronFace from "$lib/components/CameronFace.svelte";
  import CameronText from "$lib/components/CameronText.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
  import HopperelecText from "$lib/components/hopper-logo/HopperelecText.svelte";
</script>

<div id="page-container">
  <NavBar/>
  <main>
    <span>
      When you refer to "hopperelec", you're actually referring to one of two things. Either:
      <ul>
        <li>My online portfolio, primarily from my GitHub</li>
        <li>Me, Cameron Johnston, and my username</li>
      </ul>
      So, this about section is split into two parts, corresponding to each of the above.
    </span>
    <div id="buttons">
      <button id="hopperelec-button" type="button" onclick={() => goto("hopperelec")}>
        <div class="icon">
          <HopperIcon fillColor="#646464" outlineColor="#fff" outlineWidth={6} typeOf3D="stroke" padding={{top: 3, right: 3, bottom: 3, left: 3}} scale={null}/>
        </div>
        <div class="text">
          <HopperelecText/>
        </div>
      </button>
      <button id="cameron-button" type="button" onclick={() => goto("cameron")}>
        <div class="icon">
          <CameronFace/>
        </div>
        <div class="text">
          <CameronText color="#fff" thickness={100}/>
        </div>
      </button>
    </div>
  </main>
</div>

<style>
#page-container {
  min-height: 100vh;
  background: #333;
  color: #fff;
}

main {
  padding: .5em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

button {
  font-size: 3em;
  margin: .5em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  filter: drop-shadow(0 0 8px #000);

  &:hover {
    filter: drop-shadow(0 0 16px #000);
  }
}

.icon {
  width: 6em;

  #cameron-button > & {
    height: 8.4em; /* Hard-coded */
  }
}

#cameron-button {
  position: relative;

  & > .text {
    width: 100%;
    position: absolute;
    bottom: 0.8em;
  }
}
</style>