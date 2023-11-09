<script lang="ts">
  import { writable } from "svelte/store";
  import Typewriter from "svelte-typewriter";

  interface Slide {
    caption?: string;
    captionLink?: string;
    backgroundImg?: string;
    altText?: string;
  }
  const slides: Slide[] = [
    {
      caption: "Example caption-only 📝 slide",
    },
    {
      captionLink: "link1",
    },
    {
      backgroundImg:
        "https://placehold.co/1388x780.png?text=Example%20Slide%202",
      altText: 'Placeholder image with text reading "Example Slide 3"',
    },
    {
      caption: "Example caption with link 🤯 slide",
      captionLink: "link2",
    },
    {
      caption: "Example image caption 🤯 slide",
      backgroundImg: "https://placehold.co/1388x780.png",
    },
    {
      captionLink: "link3",
      backgroundImg:
        "https://placehold.co/1388x780.png?text=Example%20Slide%206",
    },
    {
      caption: "All together! 💥",
      captionLink: "link4",
      backgroundImg: "https://placehold.co/1388x780.png",
      altText: "1388x780 placeholder image",
    },
  ];

  function createCurrSlideNo() {
    const { subscribe, set } = writable(0);
    return {
      subscribe,
      set: (value: number) => {
        set(value);
        clearTimeout(autoSlide);
        autoSlide = setTimeout(() => $currSlideNo++, 10000);
      },
    };
  }
  let currSlideNo = createCurrSlideNo();
  let currSlide: Slide;
  let n: number;
  $: n = slides.length;
  $: currSlide = slides[(($currSlideNo % n) + n) % n];
  let autoSlide: NodeJS.Timeout;
</script>

<svelte:head>
  {#each slides as slide}
    {#if slide.backgroundImg}
      <link rel="preload" as="image" href={slide.backgroundImg} />
    {/if}
  {/each}
</svelte:head>

{#if currSlide.backgroundImg}
  <img src={currSlide.backgroundImg} alt={currSlide.altText} />
{/if}
<div id="overlay">
  <h2 class="horCenter">My most recent projects include...</h2>
  {#if currSlide.caption || currSlide.captionLink}
    <div id="caption" class="center">
      <Typewriter>
        {#if currSlide.captionLink}
          <a href={currSlide.captionLink}>{currSlide.caption || "🔗"}</a>
        {:else}
          <h3>{currSlide.caption}</h3>
        {/if}
      </Typewriter>
    </div>
  {/if}
  <button
    id="prevButton"
    title="Previous slide"
    class="verCenter"
    on:click={() => $currSlideNo--}
    type="button"
  />
  <button
    id="nextButton"
    title="Next slide"
    class="verCenter"
    on:click={() => $currSlideNo++}
    type="button"
  />
  <div id="positions" class="horCenter">
    {#each slides as slide, slideNo}
      {#if slide === currSlide}
        <button class="checked">◉</button>
      {:else}
        <button on:click={() => ($currSlideNo = slideNo)}>◎</button>
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: blur(6px);
  }

  #overlay > * {
    position: absolute;
    padding: 10px;
    background-color: var(--main-bg-color);
    border: var(--border);
    color: var(--main-fg-color);
    font-size: 48px;
  }

  .center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .horCenter {
    left: 50%;
    transform: translate(-50%, 0);
  }
  .verCenter {
    top: 50%;
    transform: translate(0, -50%);
  }

  h2 {
    border-top: none !important;
    border-radius: 0 0 10px 10px;
  }

  #caption {
    color: white;
    border-radius: 10px;
    font-family: Arial, sans-serif;

    /* +layout.svelte makes all a tags yellow by default */
    & a {
      color: white;
    }
  }

  #prevButton {
    border-left: none;
    border-radius: 0 10px 10px 0;
    &::before {
      content: "⮜";
    }
  }
  #nextButton {
    border-right: none;
    border-radius: 10px 0 0 10px;
    right: 0;
    &::before {
      content: "⮞";
    }
  }
  #prevButton, #nextButton {
    padding: 10px 20px;
    transition: padding 0.5s linear;
    text-align: center;
    cursor: pointer;

    &:hover {
      padding: 10px 30px;
    }
  }

  #positions {
    border-bottom: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    bottom: 0;
    font-size: 24px;
    transition: padding-bottom 0.5s linear;

    & button {
      font-size: inherit;
      padding: 4px;
      background: none;
      border: none;
      color: inherit;

      /*noinspection CssUnusedSymbol*/
      &:not(.checked) {
        cursor: pointer;
      }
    }

    &:hover {
      padding-bottom: 15px;
    }
  }
</style>
