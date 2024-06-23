<script lang="ts">
import { BRAND_COLOR } from "$lib/constants";
import { description, title } from "$lib/page-meta";
</script>

<svelte:head>
  <title>{$title || "website"}</title>
  <meta name="description" content={$description}/>
  <meta property="og:description" content={$description}/>
  <meta property="og:type" content="website"/>
  <meta property="og:locale" content="en_GB"/>
  <meta name="theme-color" content={BRAND_COLOR}/>
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color={BRAND_COLOR}>
</svelte:head>

<slot/>
