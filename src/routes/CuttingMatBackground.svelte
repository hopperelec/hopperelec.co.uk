<script>
  import CuttingMat from "$lib/media/cutting-mat.webp?enhanced&effort=max&brightness=0.8";
  // enhanced-img is intended to be used via the <enhanced:img> component;
  // however, I needed to use the image via CSS, so this is an unconventional usage,
  // hence the error and warnings
</script>

<div id="cutting-mat" style:--img="url({CuttingMat.img.src})">
  <slot />
</div>

<style lang="scss">
    #cutting-mat {
        background: #209569 var(--img) repeat;
        background-size: 2cm;
        width: 100%;
        min-height: 100%;
        color: white;
    }
</style>