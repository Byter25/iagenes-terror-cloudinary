import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

export const images = defineCollection({
  loader: cldAssetsLoader({
    limit: 1200,
    folder: "replaceBackground",
  }),
});

export const collections = { images };
