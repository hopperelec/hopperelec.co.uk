import { writable } from "svelte/store";
import { SITE_NAME } from "$lib/constants";

function createTitle() {
  const { subscribe, set } = writable(SITE_NAME);

  return {
    subscribe,
    set: (value: string) => {
      set(`${SITE_NAME} | ${value}`);
    },
  };
}
export const title = createTitle();
