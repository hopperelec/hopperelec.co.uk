<script lang="ts">
  import { description, title } from "$lib/page-meta";
  import { BRAND_COLOR } from "$lib/constants";
</script>

<svelte:head>
  <title>{$title || "website"}</title>
  <meta name="description" content={$description} />
  <meta property="og:description" content={$description} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_GB" />
  <meta name="msapplication-TileColor" content={BRAND_COLOR} />
  <meta name="theme-color" content={BRAND_COLOR} />
</svelte:head>

<slot />
