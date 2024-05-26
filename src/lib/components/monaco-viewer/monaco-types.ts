import PreviewIcon from "$lib/components/monaco-viewer/preview.svg";

export type FileType = "markdown" | "svelte";

export const EXTS_TO_TYPE: { [key: string]: FileType } = {
	svelte: "svelte",
	md: "markdown",
};

export const FILE_ICONS: { [key in FileType]: string } = {
	markdown: PreviewIcon,
	svelte: PreviewIcon,
};

export interface MonacoFile {
	type: FileType;
	name: string;
	contents: string;
	open: boolean;
}
