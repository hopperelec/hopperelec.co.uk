<script lang="ts">
  import { page } from "$app/stores";
  import LogoText from "$lib/components/LogoText.svelte";
  import { description, title } from "$lib/page-meta";
  import { BRAND_COLOR } from "$lib/constants";
  const links: { [key: string]: string } = {
    Home: "/",
    Projects: "/projects",
  };
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
<nav>
  <ul style="--num-links: {Object.keys(links).length}">
    {#each Object.entries(links) as [label, href]}
      <li>
        {#if $page.url.pathname === href}
          <h1>{label}</h1>
        {:else}
          <a {href}>{label}</a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
<main style="--brand-color: {BRAND_COLOR}"><slot /></main>
<footer><header><LogoText /></header></footer>

<style lang="scss">
  /* --- Colors --- */

  :global(:root) {
    --main-bg-color: #333;
    --secondary-bg-color: #444;
    --main-fg-color: #0f0;
    --border: 2px dashed black;
  }

  :global(body) {
    background-color: var(--secondary-bg-color);
  }

  main, header {
    border: var(--border);
    background-color: var(--main-bg-color);
  }

  main, li {
    font-family: "Segoe UI", Calibri, Arial, sans-serif;
  }

  /* --- Structure --- */

  /* noinspection ALL */
  :global(#app) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    height: 100vh;
  }

  nav, footer {
      flex: 0 1 10vh;
  }

  nav, main {
      width: 90vw;
  }

  main {
    flex: 1 1 auto;
    position: relative;
    overflow-y: auto;
    color: white;
  }

  ul, footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    padding: 5px;
    height: 5vh;
  }

  /* --- Navbar formatting --- */

  ul {
    padding: 0;
    height: 100%;
    list-style: none;
    gap: 5px 5%;
    flex-wrap: wrap;
    align-items: stretch;
  }

  li {
    display: flex;
    align-items: center;
    flex-basis: 0;
    flex-grow: 1;
    font-weight: bold;
  }

  a {
    font-weight: normal;
  }

  h1, a {
    color: var(--main-fg-color);
    background-color: var(--main-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 70%;
    font-size: 3vh;

  /* --- Animated navbar border --- */

    background-image: linear-gradient(90deg, black 50%, transparent 50%),
    linear-gradient(90deg, black 50%, transparent 50%),
    linear-gradient(0deg, black 50%, transparent 50%),
    linear-gradient(0deg, black 50%, transparent 50%);
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-position:
            0 0,
            100% 100%,
            0 100%,
            100% 0;
    background-size:
            8px 2px,
            8px 2px,
            2px 8px,
            2px 8px;
    border: none;
  }

  h1 {
    background-size:
      8px 3px,
      8px 3px,
      3px 8px,
      3px 8px;
  }

  a:hover {
    animation: border-animation calc(25s / var(--num-links)) linear infinite;
  }
  @keyframes border-animation {
    to {
      background-position:
        100% 0,
        0 100%,
        0 0,
        100% 100%;
    }
  }
</style>
