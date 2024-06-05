<script lang="ts">
import { description, title } from "$lib/page-meta";

/* This site also uses Typescript, although my first experience with Typescript was for chat-analytics */
const CHAT_ANALYTICS_GITHUB = "https://github.com/mlomb/chat-analytics";
</script>

<svelte:head>
  <title>{$title || "website"}</title>
  <meta name="description" content={$description} />
</svelte:head>

<main>
  <p>Svelte is the language I used to make the very site you are looking at!</p>
  <p>Specifically, I use SvelteKit, which uses Vite to handle things like bundling.</p>
  <p>
    I first tried SvelteKit for my A Level computer science coursework as part my project
    <a href="https://github.com/hopperelec/DefinitionDash">"Definition Dash"</a>
  </p>
</main>

<style lang="scss">
/* These sites are also where I first got experience with SCSS, a CSS pre-processor */

main {
  height: 100%;
  background-color: #aaa;
  color: #fff;

  & a {
    text-decoration: none;
  }
}
</style>