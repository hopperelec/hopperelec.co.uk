<script lang="ts">
  import { page } from "$app/stores";
  import LogoText from "$lib/components/LogoText.svelte";
  import { title } from "$lib/title";
  import { BRAND_COLOR } from "$lib/constants";
  const links: { [key: string]: string } = {
    Home: "/",
  };
</script>

<svelte:head>
  <title>{$title || "website"}</title>
  <meta name="msapplication-TileColor" content={BRAND_COLOR} />
  <meta name="theme-color" content={BRAND_COLOR} />
</svelte:head>
<nav>
  <ul>
    {#each Object.entries(links) as [label, href]}
      {#if $page.url.pathname === href}
        <li class="active">{label}</li>
      {:else}
        <li><a {href}>{label}</a></li>
      {/if}
    {/each}
  </ul>
</nav>
<main style="--brand-color: {BRAND_COLOR}"><slot /></main>
<footer><header><LogoText /></header></footer>

<style>
  /* Colors */
  :global(:root) {
    --main-bg-color: #333;
    --secondary-bg-color: #444;
    --main-fg-color: #0f0;
    --border: 2px dashed black;
  }

  :global(body) {
    background-color: var(--secondary-bg-color);
  }

  main, header, li {
    border: var(--border);
    background-color: var(--main-bg-color);
  }

  main, li {
    font-family: "Segoe UI", Calibri, Arial, sans-serif;
  }

  /* Structure */
  main {
    width: 90vw;
    height: 80vh;
    margin: 10vh 5vw;
    position: fixed;
    overflow-y: auto;
    color: white;
  }

  ul, footer {
    width: 100%;
    height: 10vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer {
    bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  /* Navbar formatting */
  nav {
    @media (width <= 620px) {
          flex-wrap: wrap;
      }
  }

  li, a {
      color: var(--main-fg-color);
      display: inline-flex;
      align-items: center;
      justify-content: center;
  }

  a {
      width: 100%;
      height: 100%;
      font-weight: normal;
  }

  li {
      height: 50%;
      flex-basis: 0;
      flex-grow: 1;
      margin: 0 5vw;
      font-size: 3vh;
      font-weight: bold;
      @media (width <= 1050px) {
          margin-left: 4px;
          margin-right: 4px;
      }

  /* Animated navbar border */
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

  .active {
    background-size:
      8px 3px,
      8px 3px,
      3px 8px,
      3px 8px;
  }

  li:not(.active):hover {
    animation: border-animation 5s linear infinite;
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
