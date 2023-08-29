import { UNSPLASH_API_KEY } from "$env/static/private";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { createApi } from "unsplash-js";
import type { Random } from "unsplash-js/dist/methods/photos/types";

const unsplash = createApi({
  accessKey: UNSPLASH_API_KEY,
});

export const load: PageServerLoad = async () => {
  try {
    const result = await unsplash.photos.getRandom({
      orientation: "landscape",
      topicIds: ["wallpapers", "travel", "nature"],
    });

    if (result.errors) {
      throw error(500, result.errors.join(","));
    }
    return { image: result.response as Random };
  } catch (e) {
    throw error(500, e as Error);
  }
};
