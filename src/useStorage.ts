import { useEffect, useMemo, useState } from 'react';
import { JSONValue } from './types';
import { dethunkify } from './utils';

export default function useStorage<T extends JSONValue>(
  getStorage: () => Storage | null,
  key: string,
  initialValue: T | (() => T) | null = null,
  errorCallback?: (error: DOMException | TypeError) => void,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const storage = useMemo(() => {
    try {
      // Check if the storage object is defined and available
      // Prior to Firefox 70, localStorage may be null
      return getStorage();
      // eslint-disable-next-line no-empty
    } catch {}
    return null;
  }, [getStorage]);

  const [value, setValue] = useState(() => {
    if (storage) {
      const serializedValue = storage.getItem(key);
      if (serializedValue != null) {
        try {
          return JSON.parse(serializedValue);
        } catch {
          // Backwards compatibility with past stored non-serialized values
          return serializedValue;
        }
      }
    }
    return dethunkify(initialValue);
  });

  useEffect(() => {
    if (storage) {
      try {
        storage.setItem(key, JSON.stringify(value));
      } catch (error) {
        if (errorCallback) errorCallback(error);
      }
    }
  }, [errorCallback, key, storage, value]);

  return [value, setValue];
}
