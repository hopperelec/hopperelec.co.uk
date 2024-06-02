<script lang="ts">
import { FILE_ICONS, type MonacoFile } from "./monaco-types";

export let file: MonacoFile;
</script>

<div style:--icon={`url("${FILE_ICONS[file.type]}")`}>
  <h4>{file.name}</h4>
</div>

<style lang="scss">
div {
  display: flex;

  &::before {
    content: "";
    width: 16px;
    padding-right: 6px;
    background-image: var(--icon);
    background-position-y: 50%;
    background-repeat: no-repeat;
  }
}

h4 {
  font-weight: 400;
}
</style>