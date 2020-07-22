import firebase from "firebase/app";
import "firebase/auth";

import styles from "./config.scss";

import { CUSTOM_STRING } from "./configurations/strings.js";
import { PAGES } from "./configurations/pages.js";
import { PHOTO_FIELDS } from "./configurations/photo_fields.js";

const ENV_CONFIG =
  process.env.NODE_ENV === "production"
    ? require("./configurations/config.prod.json")
    : require("./configurations/config.dev.json");

function getStats(geojson, dbStats) {
  return (dbStats && dbStats.published) || 0;
};

export default {
  ...ENV_CONFIG,
  CUSTOM_STRING,
  MAX_IMAGE_SIZE: 2048,
  THEME: {
    palette: {
      primary: { main: styles.primary },
      secondary: { main: styles.secondary },
    },
    spacing: 10,
  },
  MAP_SOURCE: "mapbox://styles/mapbox/outdoors-v9",
  MAP_ATTRIBUTION: "Open Street Map & Mapbox",
  MAPBOX_TOKEN:
    "pk.eyJ1Ijoic2Ftc2FtbXVycGh5IiwiYSI6ImNqN2hkdmd0NDFoNGoyd28ycXNha2gwNngifQ.3m5UZyo8_nhxg-s2-tHe8Q",
  PHOTO_ZOOMED_FIELDS: {
    updated: (s) => new Date(s).toDateString(),
    description: (s) => s,
    notes: (s) => s,
  },
  ZOOM: 6,
  ZOOM_FLYTO: 15,
  CENTER: [148.48479462984665, -33.00426742350881],
  PHOTO_FIELDS,
  PAGES,
  CUSTOM_PAGES: [],
  getStats,
  SECURITY: {
    UPLOAD_REQUIRES_LOGIN: true,
  },
  MODERATING_PHOTOS: 15,
  LEADERBOARD_FIELD: {
    label: "Uploads",
    field: "uploaded",
    displayedUsers: 20,
  },
  USER: {
    SIGN_IN_OPTIONS: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    ENABLE_GRAVATAR_PROFILES: true, //To update user-profile from Gravatar, value: true or false.
  },
};
