/**
 * auth feature — public API surface.
 *
 * Only export what other features legitimately need.
 * Do NOT export data-layer internals (DTOs, data sources, mappers).
 */

// Domain types (entities, value-objects) consumed by other features
export type { UserEntity, UserStatus } from './domain/entities';
export type { SessionEntity }          from './domain/entities';

// Application hooks — consumed by presentation layer (inside this feature only)
// Export mutations/queries only if another feature needs to trigger auth actions
export { useLogout }     from './application/mutations';
export { useCurrentUser } from './application/queries';

// Navigation
export { AuthNavigator }  from './navigation';
export type { AuthStackParamList, AuthScreenProps } from './navigation';
