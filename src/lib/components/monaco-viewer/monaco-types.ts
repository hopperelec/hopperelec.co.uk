import DefaultIcon from "$lib/media/monaco-viewer/icons/default.svg";
import PreviewIcon from "$lib/media/monaco-viewer/icons/preview.svg";
import PythonIcon from "$lib/media/monaco-viewer/icons/python.svg";
import SvelteIcon from "$lib/media/monaco-viewer/icons/svelte.svg";
import { type LanguageType, python } from "svelte-highlight/languages";

export const SVELTE_HIGHLIGHT_LANGUAGES: {
	[key: string]: LanguageType<string>;
} = {
	py: python,
};

export const FILE_ICONS: { [key: string]: string } = {
	_default: DefaultIcon,
	previewMarkdown: PreviewIcon,
	svelte: SvelteIcon,
	py: PythonIcon,
};

export interface MonacoFile {
	type: string;
	name: string;
	path: string;
	contents?: string;
	open: boolean;
}

export type MonacoFolder = {
	files: MonacoFile[];
	subFolders: { [key: string]: MonacoFolder };
	open: boolean;
};
