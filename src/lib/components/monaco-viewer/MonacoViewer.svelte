<!-- This is not the actual monaco editor; it is just styled to look like it -->

<script lang="ts">
import SvelteMarkdown from "svelte-markdown";
import MonacoFilename from "./MonacoFilename.svelte";
import "svelte-highlight/styles/vs2015.css";
import MonacoFolderComponent from "$lib/components/monaco-viewer/MonacoFolder.svelte";
import { Highlight, HighlightSvelte } from "svelte-highlight";
import {
	type MonacoFile,
	type MonacoFolder,
	SVELTE_HIGHLIGHT_LANGUAGES,
} from "./monaco-types";

export let files: MonacoFile[];
export let activeFile: undefined | MonacoFile = undefined;

let rootFolder: MonacoFolder = {
	files: [],
	subFolders: {},
	open: true,
};

$: for (const file of files) {
	let folder = rootFolder;
	for (const pathFolder of file.path.split("/").slice(0, -1)) {
		if (pathFolder in folder.subFolders) {
			folder = folder.subFolders[pathFolder];
		} else {
			folder.subFolders[pathFolder] = folder = {
				files: [],
				subFolders: {},
				open: false,
			};
		}
		if (file.open) folder.open = true;
	}
	folder.files.push(file);
}

function openFile(file: MonacoFile) {
	file.open = true;
	activeFile = file;
}

function closeFile(file: MonacoFile) {
	file.open = false;
	if (file === activeFile) {
		activeFile = files.find((file) => file.open);
	} else {
		// biome-ignore lint/correctness/noSelfAssign: Trigger reactivity
		files = files;
	}
}
</script>

<div id="monaco-container">
  <div id="explorer-header">
    <h3>EXPLORER</h3>
    <span>⋯</span>
  </div>
  <ul id="editor-tabs">
    {#each files as file}
      {#if file.open}
        <li class:open={file === activeFile}>
          <button
            type="button"
            on:click={() => activeFile = file}
            class="select-btn"
          ><MonacoFilename {file}/></button>
          <button
            type="button"
            on:click={() => closeFile(file)}
            class="close-btn"
          >✕</button>
        </li>
      {/if}
    {/each}
  </ul>
  <div id="explorer">
    <MonacoFolderComponent name="WORKSPACE" folder={rootFolder} {openFile}/>
  </div>
  <div id="editor"
       class:markdown={activeFile && activeFile.highlight_type === "markdown_preview"}
       class:raw={activeFile && activeFile.highlight_type === "raw"}
  >
    {#if activeFile}
      {#if activeFile.highlight_type === "raw"}
        {activeFile.contents}
      {:else if activeFile.highlight_type === "markdown_preview"}
        <SvelteMarkdown source={activeFile.contents}/>
      {:else if activeFile.highlight_type === "svelte"}
        <HighlightSvelte code={activeFile.contents}/>
      {:else}
        <Highlight language={SVELTE_HIGHLIGHT_LANGUAGES[activeFile.highlight_type]} code={activeFile.contents}/>
      {/if}
      <!--
        I also want to add line numbers, but it's hard to integrate this with highlight-svelte.
        highlight-svelte has a <LineNumbers/> element, but it's styling doesn't match VSCode's at all
        meaning I'd basically need to re-write it all.
      -->
    {/if}
  </div>
</div>

<!-- Override some svelte-highlight styles -->
<svelte:head>
  <style>
    /* stylelint-disable csstools/use-nesting */
    #editor > pre {
      margin: 0;
      height: calc(100% - 22px);
    }

    #editor > pre > code {
      height: 100%;
      padding: 0 !important;
      background: none;
    }
    /* stylelint-enable csstools/use-nesting */
  </style>
</svelte:head>

<style>
#monaco-container {
  height: 100%;
  overflow-x: auto;
  display: grid;
  grid-auto-rows: 35px 1fr;
  grid-template-columns: 300px 1fr;
  background-color: #181818;
  user-select: none;
  font-family: "Segoe WPC", "Segoe UI", sans-serif;
  color: #ccc;
  border-top: var(--border);
  border-bottom: var(--border);
  text-wrap: nowrap;
  text-overflow: ellipsis;
  --border: 1px solid #2b2b2b;
  --editor-color: #1f1f1f;
}

h3, span {
  font-weight: 400;
}

#explorer-header {
  line-height: 35px;
  padding: 0 8px;
  display: flex;
  border-right: var(--border);

  h3 {
    flex: 1;
    font-size: 11px;
    padding-left: 12px;
  }

  span {
    float: right;
    padding-right: 9px;
    font-size: 16px;
  }
}

button {
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 13px;
  font-family: inherit;
}

#editor-tabs {
  color: #9d9d9d;
  display: flex;
  border-bottom: var(--border);
  cursor: pointer;
  min-width: 500px;
  list-style: none;
  padding: 0;
  overflow: auto hidden; /* The horizontal scrollbar is too thick, but it's better than the entire viewer scrolling */

  & > li {
    position: relative;

    /* To prevent jumping when .open border-top is added */
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    & > .select-btn {
      display: flex;
      line-height: 35px;
      border-right: var(--border);
      padding-left: 10px;
      padding-right: 28px; /* Space for close button */
    }

    & > .close-btn {
      position: absolute;
      top: 8px;
      right: 4px;
      width: 20px;
      height: 20px;
      border-radius: 5px;
      visibility: hidden;
      font-weight: 500;

      &:hover {
        background-color: #313232;
      }
    }

    &.open {
      color: #fff;
      border-top-color: #0078d4;
    }

    &.open, &:hover {
      & > .select-btn {
        /*
          This also hides the bottom border.
          This is unwanted for hovering, but I'm unsure how to fix that.
        */
        background-color: var(--editor-color);
      }

      & > .close-btn {
        visibility: visible;
      }
    }
  }
}

#explorer {
  border-right: var(--border);
  line-height: 22px;
  overflow-y: auto;
}

#editor {
  background-color: var(--editor-color);
  overflow-y: auto; /* Could be replaced with Monaco scrollbar */
  user-select: text;
  font-size: 14px;

  /*
    22px on top for breadcrumbs
    68px on left for line numbers
  */
  padding: 22px 0 0 68px;

  &.markdown, &.raw {
    text-wrap: wrap;
  }

  &.markdown {
    padding: 14px 52px;
  }
}
</style>