import "@fontsource/ibm-plex-sans-condensed/400.css";
import "@fontsource/ibm-plex-sans-condensed/500.css";
import "@fontsource/ibm-plex-sans-condensed/600.css";
import "@fontsource/ibm-plex-sans-condensed/700.css";
import "./styles/global.css";
import "./app/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import { layoutContainer } from "./app/style.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("App root element not found");
}

document.body.className = layoutContainer;

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
