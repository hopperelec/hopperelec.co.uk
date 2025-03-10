<script lang="ts">
import MonacoFilename from "$lib/components/monaco-viewer/MonacoFilename.svelte";
import MonacoFolderComponent from "$lib/components/monaco-viewer/MonacoFolder.svelte";
import type {
	MonacoFile,
	MonacoFolder,
} from "$lib/components/monaco-viewer/monaco-types";

let {
	name,
	folder = $bindable(),
	openFile,
	nesting = 1,
}: {
	name: string;
	folder: MonacoFolder;
	openFile: (file: MonacoFile) => void;
	nesting?: number;
} = $props();
</script>

<div id="folder" class:open={folder.open} style:--nesting={nesting} class:root={nesting === 1}>
  <button type="button" onclick={() => folder.open = !folder.open}>{name}</button>
  <ul>
    {#each Object.entries(folder.subFolders) as [subFolderName, subFolder]}
      <li>
        <MonacoFolderComponent name={subFolderName} folder={subFolder} {openFile} nesting={nesting+1}/>
      </li>
    {/each}
    {#each folder.files as file}
      <li>
        <button type="button" onclick={() => openFile(file)}>
          <MonacoFilename {file}/>
        </button>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
button {
  display: block;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  line-height: inherit;
  font-size: 13px;
  font-family: inherit;

  li > & {
    width: 100%;
    height: 100%;
    padding-left: calc(5px + var(--nesting) * 8px);
  }

  &:hover {
    background-color: #2a2d2e;
  }
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