/**
 * Feature Flags Configuration
 * Toggle flags here to control feature visibility across the application
 */
export const FEATURE_FLAGS = {
  SEARCH_BAR: false, // Search functionality in header
} as const;

export type FeatureFlag = keyof typeof FEATURE_FLAGS;

/**
 * Const references to feature flag keys for type-safe consumption
 * Import and use these to avoid magic strings at call sites
 */
export const FEATURE_FLAGS_KEYS = {
  SEARCH_BAR: 'SEARCH_BAR' as const,
} satisfies Record<string, FeatureFlag>;

