<script lang="ts">
import "./button-reset.css";
import MonacoFilename from "$lib/components/monaco-viewer/MonacoFilename.svelte";
import MonacoFolderComponent from "$lib/components/monaco-viewer/MonacoFolder.svelte";
import type {
	MonacoFile,
	MonacoFolder,
} from "$lib/components/monaco-viewer/monaco-types";

export let name: string;
export let folder: MonacoFolder;
export let openFile: (file: MonacoFile) => void;
export let nesting = 1;
</script>

<div id="folder" class:open={folder.open} style:--nesting={nesting} class:root={nesting === 1}>
  <button type="button" on:click={() => folder.open = !folder.open}>{name}</button>
  <ul>
    {#each Object.entries(folder.subFolders) as [subFolderName, subFolder]}
      <li>
        <MonacoFolderComponent name={subFolderName} folder={subFolder} {openFile} nesting={nesting+1}/>
      </li>
    {/each}
    {#each folder.files as file}
      <li>
        <button type="button" on:click={() => openFile(file)}>
          <MonacoFilename {file}/>
        </button>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
li > button {
  width: 100%;
  height: 100%;
  padding-left: calc(5px + var(--nesting) * 8px);
}

button:hover {
  background-color: #2a2d2e;
}

ul {
  display: none;
  list-style: none;
  padding: 0;
}

#folder {
  & > button {
    width: 100%;
    padding-left: calc(var(--nesting) * 8px);
    text-align: left;

    /* Roughly re-create the dropdown icon */
    &::before {
      content: "";
      display: inline-block;
      border: solid #fff;
      border-width: 1px 1px 0 0;
      height: 6px;
      width: 6px;
      margin-left: 7px;
      margin-right: 7px;
      transform: translateY(-3px) rotate(45deg);
    }
  }

  &.root > button {
    font-size: 11px;
    font-weight: 700;
  }

  &.open {
    & > button::before {
      border-width: 0 1px 1px 0;
    }

    & > ul {
      display: block;
    }
  }
}
</style>