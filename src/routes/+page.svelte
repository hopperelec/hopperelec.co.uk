<script lang="ts">
import HopperIcon from "$lib/components/hopper-logo/HopperIcon.svelte";
import HopperelecText from "$lib/components/hopper-logo/HopperelecText.svelte";
import MonacoViewer from "$lib/components/monaco-viewer/MonacoViewer.svelte";
import type {
	FileType,
	MonacoFile,
} from "$lib/components/monaco-viewer/monaco-types";
import CuttingMatBackground from "./CuttingMatBackground.svelte";
import NavBar from "./NavBar.svelte";

let activeFile: MonacoFile;

const files: MonacoFile[] = Object.entries(
	import.meta.glob("$lib/media/monaco-viewer/virtual-files/*", {
		query: "?raw",
		import: "default",
	}),
).map(([path, contentsPromise]) => {
	const filename = path.slice(path.lastIndexOf("/") + 1);
	const isReadme = filename === "Preview README.md";
	const file: MonacoFile = {
		name: filename,
		type: isReadme
			? "previewMarkdown"
			: (filename.slice(filename.lastIndexOf(".") + 1) as FileType),
		open: isReadme,
	};
	contentsPromise().then((contents) => {
		file.contents = contents as string;
		if (isReadme && !activeFile) activeFile = file;
	});
	return file;
});
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
      <MonacoViewer {files} {activeFile}/>
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
:global(body) {
  overflow-x: hidden;
}

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