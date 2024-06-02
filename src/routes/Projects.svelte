<script lang="ts">
import MonacoViewer from "$lib/components/monaco-viewer/MonacoViewer.svelte";
import type {
	FileType,
	MonacoFile,
} from "$lib/components/monaco-viewer/monaco-types.js";

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

<section id="projects">
  <MonacoViewer {files} {activeFile}/>
</section>

<style>
section {
  height: 90vh;
  box-shadow: 0 0 10vh 32px black;
  margin-top: 10vh;
  z-index: 1;
  position: relative;
}
</style>