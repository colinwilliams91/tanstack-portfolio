import { IconProps } from "./abstract/index";
import { CACHE_BUSTER } from "~/constants/cache-buster";

/**
 * Icon component that references SVG symbols from the sprite sheet.
 *
 * @param name - The icon name (e.g., 'search', 'moon', 'github')
 * @param className - Additional CSS classes for styling
 * @param props - Any other SVG props (aria-hidden, etc.)
 *
 * @note The `CACHE_BUSTER` variable forces refresh of browser SVG cache. Bump this value on change.
 *
 * @example
 * <Icon name="search" className="w-5 h-5 fill-current" aria-hidden="true" />
 */
export function Icon({ name, className = "", ...props }: IconProps) {
  return (
    <svg className={className} {...props}>
      <use href={`/sprite.svg?v=${CACHE_BUSTER}#icon-${name}`} />
    </svg>
  );
}
