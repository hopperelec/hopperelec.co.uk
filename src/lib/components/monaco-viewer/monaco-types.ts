import PreviewIcon from "$lib/media/monaco-viewer/icons/preview.svg";
import SvelteIcon from "$lib/media/monaco-viewer/icons/svelte.svg";

export type FileType = "previewMarkdown" | "svelte";

export const FILE_ICONS: { [key: string]: string } = {
	previewMarkdown: PreviewIcon,
	svelte: SvelteIcon,
};

export interface MonacoFile {
	type: FileType;
	name: string;
	contents: string;
	open: boolean;
}
