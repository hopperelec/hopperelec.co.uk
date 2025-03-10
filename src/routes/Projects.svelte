<script lang="ts">
import MonacoViewer from "$lib/components/monaco-viewer/MonacoViewer.svelte";
import {
	type MonacoFile,
	chooseFileIcon,
	chooseHighlightType,
} from "$lib/components/monaco-viewer/monaco-types.js";

const PATH_REGEX = RegExp(/\/virtual-files\/(.*?)([^\/]+?(\._?([^\/.]+))?)$/);
const files: MonacoFile[] = Object.entries(
	import.meta.glob("$lib/media/monaco-viewer/virtual-files/**/*", {
		query: "?raw",
		import: "default",
	}),
).map(([originalPathFilename, contentsPromise]) => {
	let [trimmedPathFilename, virtualPath, filename, _, extension] =
		PATH_REGEX.exec(originalPathFilename) as RegExpExecArray;
	// SvelteKit prevents importing some files, so I add an underscore next to the dot in the filenames
	filename = filename.replace(/_?\._?/, "."); // Remove that underscore, if it exists
    let contents = $state("");
	const file: MonacoFile = {
		name: filename,
		path: virtualPath,
		highlight_type: chooseHighlightType(filename, extension),
		icon: chooseFileIcon(filename, extension),
		open: trimmedPathFilename === "/virtual-files/Preview README.md",
        contents: () => contents,
	};
	contentsPromise().then((newContents) => {
		contents = newContents as string;
	});
	return file;
});
</script>

<section id="projects">
  <MonacoViewer {files}/>
</section>

<style>
section {
  height: 90vh;
  box-shadow: 0 0 10vh 32px #000;
  margin-top: 10vh;
  z-index: 1;
  position: relative;
}
</style>