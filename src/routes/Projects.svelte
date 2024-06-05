<script lang="ts">
import MonacoViewer from "$lib/components/monaco-viewer/MonacoViewer.svelte";
import {
	type MonacoFile,
	chooseFileIcon,
	chooseHighlightType,
} from "$lib/components/monaco-viewer/monaco-types.js";

let activeFile: MonacoFile;

const PATH_REGEX = RegExp(/\/virtual-files\/(.*?)([^\/]+?(\.([^\/.]+))?)$/);
const files: MonacoFile[] = Object.entries(
	import.meta.glob("$lib/media/monaco-viewer/virtual-files/**/*", {
		query: "?raw",
		import: "default",
	}),
).map(([originalPathFilename, contentsPromise]) => {
	let [trimmedPathFilename, virtualPath, filename, _, extension] =
		PATH_REGEX.exec(originalPathFilename) as RegExpExecArray;
	// SvelteKit prevents importing files ending with "server.ts", so I add an underscore to the filenames
	filename = filename.replace(/_server\.ts$/, "server.ts"); // Remove that underscore, if it exists
	const file: MonacoFile = {
		name: filename,
		path: virtualPath,
		highlight_type: chooseHighlightType(filename, extension),
		icon: chooseFileIcon(filename, extension),
		open: trimmedPathFilename === "/virtual-files/Preview README.md",
	};
	contentsPromise().then((contents) => {
		file.contents = contents as string;
		if (file.open && !activeFile) activeFile = file;
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