<script lang="ts">
import type { MonacoFile } from "./monaco-types";

let { file }: { file: MonacoFile } = $props();
</script>

<div style:--icon={`url("${file.icon}")`}>
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