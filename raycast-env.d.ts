/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Overseerr Address - The base URL of your Overseerr instance (e.g., http://localhost:5055) */
  "OVERSEERR_API_ADDRESS": string,
  /** Overseerr API Key - API Key from Overseerr (Overseerr → Settings → API Key) */
  "OVERSEERR_API_KEY": string,
  /** TMDB API Key - Your TMDB API Key (TMDB → Settings → API → API Key) */
  "TMDB_KEY": string,
  /** TMDB Language - e.g., ko (Korean), ja, etc. (Default: en) */
  "TMDB_LANGUAGE"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {}
  /** Preferences accessible in the `pending` command */
  export type Pending = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {}
  /** Arguments passed to the `pending` command */
  export type Pending = {}
}

