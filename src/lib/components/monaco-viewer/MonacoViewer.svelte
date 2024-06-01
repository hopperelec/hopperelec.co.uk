<!-- This is not the actual monaco editor; it is just styled to look like it -->

<script lang="ts">
import SvelteMarkdown from "svelte-markdown";
import MonacoFilename from "./MonacoFilename.svelte";
import "svelte-highlight/styles/vs2015.css";
import { Highlight, HighlightSvelte } from "svelte-highlight";
import type { MonacoFile } from "./monaco-types";

export let files: MonacoFile[];
export let activeFile: undefined | MonacoFile = undefined;

$: if (files && !activeFile) {
	activeFile = files.find((file) => file.open);
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
    <p>WORKSPACE</p>
    <ul>
      {#each files as file}
        <li>
          <button type="button" on:click={() => openFile(file)}>
            <MonacoFilename {file}/>
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <div id="editor">
    {#if activeFile}
      {#if activeFile.type === "previewMarkdown"}
        <SvelteMarkdown source={activeFile.contents}/>
      {:else if activeFile.type === "svelte"}
        <HighlightSvelte code={activeFile.contents}/>
      {:else}
        <Highlight language={activeFile.type} code={activeFile.contents}/>
      {/if}
    {/if}
  </div>
</div>

<!-- Override some svelte-highlight styles -->
<svelte:head>
  <style>
    pre {
      margin: 0;
    }
  </style>
</svelte:head>

<style>
  #monaco-container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-auto-rows: 35px 1fr;
    grid-template-columns: minmax(min-content, 300px) 1fr;
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

  button {
    display: block;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    line-height: inherit;
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

  ul {
    list-style: none;
    padding: 0;
  }

  #editor-tabs {
    color: #9d9d9d;
    display: flex;
    border-bottom: var(--border);
    cursor: pointer;

    & > li {
      position: relative;

      /* To prevent jumping when .open border-top is added */
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
        
      & > .select-btn {
        display: flex;
        font-size: 13px;
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
        color: white;
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
    font-size: 13px;
    border-right: var(--border);
    line-height: 22px;

    & > p {
      font-size: 11px;
      font-weight: 700;

      /* Roughly re-create the dropdown icon */
      &::before {
        content: "";
        display: inline-block;
        border: solid white;
        border-width: 0 1px 1px 0;
        height: 6px;
        width: 6px;
        margin-left: 7px;
        margin-right: 7px;
        transform: translateY(-3px) rotate(45deg);
      }
    }

    & > ul > li > button {
      width: 100%;
      height: 100%;
      padding-left: 13px;

      &:hover {
        background-color: #2a2d2e
      }
    }
  }

  #editor {
    background-color: var(--editor-color);
    overflow-y: auto; /* Could be replaced with Monaco scrollbar */
    user-select: text;

    /* FOR MARKDOWN: text-wrap: wrap; */
  }
</style>