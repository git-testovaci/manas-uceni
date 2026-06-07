import type { StorageEnvelope } from "@/types";
import { STORAGE_VERSION } from "@/lib/storage/keys";

export type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

export function getBrowserStorage(): StorageLike | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function safeJsonParse<T>(value: string | null): T | null {
  if (value === null) {
    return null;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

export function createEnvelope<T>(data: T): StorageEnvelope<T> {
  return {
    version: STORAGE_VERSION,
    updatedAt: new Date().toISOString(),
    data,
  };
}

export function readEnvelope<T>(
  key: string,
  fallback: T,
  storage?: StorageLike | null,
): T {
  const activeStorage = storage ?? getBrowserStorage();
  if (!activeStorage) {
    return fallback;
  }

  try {
    const raw = activeStorage.getItem(key);
    const parsed = safeJsonParse<StorageEnvelope<T>>(raw);

    if (!parsed || typeof parsed !== "object") {
      return fallback;
    }

    if (parsed.version !== STORAGE_VERSION) {
      return fallback;
    }

    if (parsed.data === undefined || parsed.data === null) {
      return fallback;
    }

    return parsed.data;
  } catch {
    return fallback;
  }
}

export function writeEnvelope<T>(
  key: string,
  data: T,
  storage?: StorageLike | null,
): boolean {
  const activeStorage = storage ?? getBrowserStorage();
  if (!activeStorage) {
    return false;
  }

  try {
    const envelope = createEnvelope(data);
    activeStorage.setItem(key, JSON.stringify(envelope));
    return true;
  } catch {
    return false;
  }
}

export function removeStorageItem(
  key: string,
  storage?: StorageLike | null,
): boolean {
  const activeStorage = storage ?? getBrowserStorage();
  if (!activeStorage) {
    return false;
  }

  try {
    activeStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}
