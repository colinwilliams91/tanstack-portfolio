import { FEATURE_FLAGS, type FeatureFlag } from "~/constants/feature-flags";

/**
 * Hook to check if a feature flag is enabled
 * 
 * @param flag - Feature flag key from FEATURE_FLAGS
 * @returns boolean indicating if the feature is enabled
 * 
 * @example
 * const isSearchEnabled = useFeatureFlag('SEARCH_BAR');
 */
export function useFeatureFlag(flag: FeatureFlag): boolean {
  return FEATURE_FLAGS[flag];
}
