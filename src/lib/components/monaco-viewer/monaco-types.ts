import ConfigIcon from "$lib/media/monaco-viewer/icons/config.svg";
import CPPIcon from "$lib/media/monaco-viewer/icons/cpp.svg";
import CSSIcon from "$lib/media/monaco-viewer/icons/css.svg";
import DefaultIcon from "$lib/media/monaco-viewer/icons/default.svg";
import ESLintIcon from "$lib/media/monaco-viewer/icons/eslint.svg";
import GitIcon from "$lib/media/monaco-viewer/icons/git.svg";
import HTMLIcon from "$lib/media/monaco-viewer/icons/html.svg";
import JavaIcon from "$lib/media/monaco-viewer/icons/java.svg";
import JavascriptIcon from "$lib/media/monaco-viewer/icons/javascript.svg";
import JSONIcon from "$lib/media/monaco-viewer/icons/json.svg";
import MavenIcon from "$lib/media/monaco-viewer/icons/maven.svg";
import PHPIcon from "$lib/media/monaco-viewer/icons/php.svg";
import PreviewIcon from "$lib/media/monaco-viewer/icons/preview.svg";
import PythonIcon from "$lib/media/monaco-viewer/icons/python.svg";
import StylelintIcon from "$lib/media/monaco-viewer/icons/stylelint.svg";
import SvelteIcon from "$lib/media/monaco-viewer/icons/svelte.svg";
import TypescriptIcon from "$lib/media/monaco-viewer/icons/typescript.svg";
import WebpackIcon from "$lib/media/monaco-viewer/icons/webpack.svg";
import {
	cpp,
	css,
	java,
	javascript,
	json,
	php,
	python,
	typescript,
	xml,
	yaml,
} from "svelte-highlight/languages";

type HighlightType =
	| "raw"
	| "markdown_preview"
	| "svelte"
	| keyof typeof SVELTE_HIGHLIGHT_LANGUAGES;

export const SVELTE_HIGHLIGHT_LANGUAGES = {
	cpp,
	css,
	html: xml,
	java,
	js: javascript,
	json,
	php,
	py: python,
	ts: typescript,
	xml,
	yml: yaml,
};

export function chooseHighlightType(
	filename: string,
	extension: string,
): HighlightType {
	if (extension === "svelte") return "svelte";
	if (filename.startsWith("Preview ") && extension === "md")
		return "markdown_preview";
	if (extension in SVELTE_HIGHLIGHT_LANGUAGES)
		return extension as keyof typeof SVELTE_HIGHLIGHT_LANGUAGES;
	return "raw";
}

export function chooseFileIcon(filename: string, extension: string) {
	switch (extension) {
		case "cpp":
			return CPPIcon;
		case "css":
			return CSSIcon;
		case "htaccess":
			return ConfigIcon;
		case "gitignore":
			return GitIcon;
		case "html":
			return HTMLIcon;
		case "java":
			return JavaIcon;
		case "js":
			if (filename.startsWith("eslint.")) return ESLintIcon;
			if (filename.startsWith("webpack.")) return WebpackIcon;
			return JavascriptIcon;
		case "json":
			return JSONIcon;
		case "md":
			// Currently, all markdown files are preview
			return PreviewIcon;
		case "php":
			return PHPIcon;
		case "py":
			return PythonIcon;
		case "svelte":
			return SvelteIcon;
		case "ts":
			return TypescriptIcon;
		case "xml":
			// Currently, the only XML file is pom.xml
			return MavenIcon;
		case "yml":
			// Currently, the only YML file is .stylelintrc.yml
			return StylelintIcon;
	}
	return DefaultIcon;
}

export interface MonacoFile {
	highlight_type: HighlightType;
	icon: string;
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
