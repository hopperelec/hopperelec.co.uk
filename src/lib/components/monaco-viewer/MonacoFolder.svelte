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

<p>{name}</p>
<ul style:--nesting={nesting}>
  {#each Object.entries(folder.subFolders) as [subFolderName, subFolder]}
    <MonacoFolderComponent name={subFolderName} folder={subFolder} {openFile} nesting={nesting+1}/>
  {/each}
  {#each folder.files as file}
    <li>
      <button type="button" on:click={() => openFile(file)}>
        <MonacoFilename {file}/>
      </button>
    </li>
  {/each}
</ul>

<style lang="scss">
ul {
  list-style: none;
  padding: 0;

  & > li > button {
    width: 100%;
    height: 100%;
    padding-left: calc(5px + var(--nesting) * 8px);

    &:hover {
        background-color: #2a2d2e
    }
  }
}

p {
  font-size: 11px;
  font-weight: 700;
  padding-left: calc(var(--nesting) * 8px);

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
</style>