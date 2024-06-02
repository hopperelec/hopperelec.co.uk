<script lang="ts">
import MonacoViewer from "$lib/components/monaco-viewer/MonacoViewer.svelte";
import type {
	FileType,
	MonacoFile,
} from "$lib/components/monaco-viewer/monaco-types";
import hopperWhiteOutline from "$lib/media/hopper-white-outline.svg";
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
      <img src={hopperWhiteOutline} alt="transparent hopper logo"/>
    </section>
    <section id="projects">
      <MonacoViewer {files} {activeFile}/>
    </section>
    <section id="contact">
      <h2>Contact Me</h2>
    </section>
  </main>
</CuttingMatBackground>

<style lang="scss">
:global(body) {
  overflow-x: hidden;
}

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