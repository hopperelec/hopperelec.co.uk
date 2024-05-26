<script lang="ts">
import MonacoViewer from "$lib/components/monaco-viewer/MonacoViewer.svelte";
import {
	EXTS_TO_TYPE,
	type MonacoFile,
} from "$lib/components/monaco-viewer/monaco-types";
import hopperWhiteOutline from "$lib/media/hopper-white-outline.svg";
import { onMount } from "svelte";
import CuttingMatBackground from "./CuttingMatBackground.svelte";
import NavBar from "./NavBar.svelte";

const unimportedFiles = import.meta.glob("$lib/media/monaco-files/*", {
	query: "?raw",
	import: "default",
});
let files: MonacoFile[] = [];

onMount(async () => {
	for (const [path, contents] of Object.entries(unimportedFiles)) {
		const filename = path.slice(path.lastIndexOf("/") + 1);
		files.push({
			type: EXTS_TO_TYPE[filename.slice(filename.lastIndexOf(".") + 1)],
			name: filename,
			contents: (await contents()) as string,
			open: filename === "README.md",
		});
	}
	// biome-ignore lint/correctness/noSelfAssign: Svelte reactivity; add to MonacoViewer
	files = files;
});
</script>

<CuttingMatBackground>
  <NavBar/>
  <main>
    <section>
      <img src={hopperWhiteOutline} alt="transparent hopper logo"/>
    </section>
    <section id="projects">
      <MonacoViewer {files}/>
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