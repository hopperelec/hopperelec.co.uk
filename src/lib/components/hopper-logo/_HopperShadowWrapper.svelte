<!-- This is only expected to be used within HopperLogo.svelte, which contains the definition for #shadow -->

<script lang="ts">
export let length = 0;
</script>

{#if length}
  <g filter="url(#shadow)">
    <slot/>
  </g>
{:else}
  <slot/>
{/if}