import { STORAGE_KEYS } from "@/lib/storage/keys";
import {
  readEnvelope,
  removeStorageItem,
  type StorageLike,
  writeEnvelope,
} from "@/lib/storage/safeStorage";
import type { UserSettings } from "@/types";

export const DEFAULT_SETTINGS: UserSettings = {
  soundsEnabled: true,
  animationsEnabled: true,
  language: "cs",
};

export function getSettings(storage?: StorageLike | null): UserSettings {
  return readEnvelope(STORAGE_KEYS.settings, DEFAULT_SETTINGS, storage);
}

export function saveSettings(
  settings: UserSettings,
  storage?: StorageLike | null,
): boolean {
  return writeEnvelope(STORAGE_KEYS.settings, settings, storage);
}

export function resetSettings(storage?: StorageLike | null): boolean {
  return removeStorageItem(STORAGE_KEYS.settings, storage);
}
