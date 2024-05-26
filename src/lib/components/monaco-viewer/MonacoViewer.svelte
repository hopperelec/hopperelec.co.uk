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
          <div><MonacoFilename {file}/></div>
        </li>
      {/if}
    {/each}
  </ul>
  <div id="explorer">
    <ul>
      {#each files as file}
        <li>
          <MonacoFilename {file}/>
        </li>
      {/each}
    </ul>
  </div>
  <div id="editor">
    {#if activeFile}
      {#if activeFile.type === "markdown"}
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
    line-height: 35px;
    border-bottom: var(--border);

    & > li {
      font-size: 13px;
      border-right: var(--border);
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

      &.open {
        color: white;
        border-top-color: #0078d4;
        background-color: var(--editor-color);

        /* Messy way of partially removing border from #editor-tabs */
        &::after {
          display: block;
          content: "";
          margin-top: -2px;
          height: 2px;
          background-color: var(--editor-color);
        }
      }

      & > div {
        margin-left: 10px;
        margin-right: 28px; /* Will be X later */
      }
    }
  }

  #explorer {
    font-size: 13px;
    border-right: var(--border);
    line-height: 22px;
  }

  #editor {
    background-color: var(--editor-color);
    overflow-y: auto; /* Could be replaced with Monaco scrollbar */
    user-select: text;

    /* FOR MARKDOWN: text-wrap: wrap; */
  }
</style>