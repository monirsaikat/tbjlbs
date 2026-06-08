/** Nullable<T> — value that can be T or null (never undefined) */
export type Nullable<T> = T | null;

/** Optional<T> — value that can be T or undefined */
export type Optional<T> = T | undefined;

/** DeepReadonly — recursively marks all properties readonly */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/** Prettify — flattens intersection types for better IDE hover readability */
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

/** ID — branded string type for entity identifiers */
export type ID = string & { readonly __brand: 'ID' };

export const toID = (value: string): ID => value as ID;

/** Timestamp — ISO 8601 date string */
export type Timestamp = string & { readonly __brand: 'Timestamp' };

/** MediaType — supported media mime categories */
export type MediaMimeCategory = 'image' | 'video' | 'audio' | 'document';

/** UploadStatus — tracks file upload lifecycle */
export type UploadStatus = 'idle' | 'uploading' | 'success' | 'failed';
