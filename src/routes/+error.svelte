<script>
  import { title } from "$lib/title";
  import { page } from "$app/stores";

  title.set("Error " + $page.status);
</script>

<div>
  <h1>An error has occurred!</h1>
  <h2>{$page.status}: {$page.error?.message}</h2>
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    font-size: 64px;
    font-weight: bold;
    color: white;
  }
</style>
