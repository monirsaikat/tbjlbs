/**
 * features/ barrel — DO NOT import from here inside a feature.
 * Features must import from each other via their own index.ts public API.
 * This barrel exists for cross-cutting consumers (app-level navigation, etc.).
 */
export * from './auth';
export * from './chat';
export * from './contacts';
export * from './groups';
export * from './profile';
export * from './settings';
export * from './calls';
export * from './stories';
export * from './notifications';
