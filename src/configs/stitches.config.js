import { createStitches } from "@stitches/react";
import { red, teal, grass, blue, cyan } from "@radix-ui/colors";
import spacings from "./stitches/spacing.config";
import media from "./stitches/media.config";

export const { styled, css, keyframes, createTheme } = createStitches({
  prefix: "web-a11y",
  theme: {
    colors: {
      ...red,
      ...teal,
      ...grass,
      ...blue,
      ...cyan,
    },
  },
  media: media,
  utils: {
    ...spacings,
  },
});
