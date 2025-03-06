"use client";

import "@stakekit/widget/style.css";
import { SKApp, darkTheme } from "@stakekit/widget";
import { config } from "../../config";

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      theme={{
        ...darkTheme,
        font: {
          body: "var(--sk-font-ibm-plex-sans-condensed)",
        },
        borderRadius: {
          baseContract: {
            primaryButton: "6px",
            secondaryButton: "6px",
          },
        },
        color: {
          ...darkTheme.color,
          background: "rgba(33, 35, 39, 1)",
          modalBodyBackground: "#121415",
          selectValidatorMultiDefaultBackground: "#121415",
          positionsSectionBackgroundColor: "#121415",
          positionsSectionBorderColor: "#121415",

          connectKit: {
            ...darkTheme.color.connectKit,
            modalBackground: "#121415",
            profileForeground: "#121415",
          },

          primaryButtonBackground: "rgba(237, 120, 72, 1)",
          primaryButtonOutline: "rgba(237, 120, 72, 1)",
          primaryButtonHoverBackground: "rgba(237, 120, 72, 0.8)",
          primaryButtonHoverOutline: "rgba(237, 120, 72, 0.8)",
          primaryButtonActiveBackground: "rgba(237, 120, 72, 0.8)",
          primaryButtonActiveOutline: "rgba(237, 120, 72, 0.8)",
          primaryButtonActiveColor: "#000000",
          primaryButtonColor: "#000000",
          primaryButtonHoverColor: "#000000",

          disabledButtonBackground: "rgba(237, 120, 72, 0.8)",
          disabledButtonOutline: "rgba(237, 120, 72, 0.8)",

          tabBorder: "rgba(237, 120, 72, 1)",

          secondaryButtonBackground: "#FFFFFF0D",
          secondaryButtonOutline: "#FFFFFF0D",

          secondaryButtonActiveBackground: "#ffffff1a",
          secondaryButtonActiveOutline: "#ffffff1a",
          secondaryButtonActiveColor: "#EEF0F2",

          secondaryButtonHoverBackground: "#ffffff1a",
          secondaryButtonHoverOutline: "#ffffff1a",
          secondaryButtonHoverColor: "#EEF0F2",

          stakeSectionBackground: "#FFFFFF0D",
          backgroundMuted: "#FFFFFF0D",
          tokenSelectBackground: "#FFFFFF0D",
          positionsSectionDividerColor: "#FFFFFF0D",
          tokenSelectHoverBackground: "#ffffff1a",

          skeletonLoaderBase: "#FFFFFF0D",
          skeletonLoaderHighlight: "#2B2B2B",
          dropdownBackground: "#121415",
          warningBoxBackground: "#FFFFFF0D",
        },
      }}
    />
  );
};
