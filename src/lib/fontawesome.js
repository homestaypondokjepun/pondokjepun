// src/lib/fontawesome.js
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import CSS secara manual
config.autoAddCss = false; // Jangan auto-inject, biar Next.js yang handle
