import { IconProps } from "./abstract/index";

/**
 * Icon component that references SVG symbols from the sprite sheet.
 *
 * @param name - The icon name (e.g., 'search', 'moon', 'github')
 * @param className - Additional CSS classes for styling
 * @param props - Any other SVG props (aria-hidden, etc.)
 *
 * @example
 * <Icon name="search" className="w-5 h-5 fill-current" aria-hidden="true" />
 */
export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg className={className} {...props}>
      <use href={`/sprite.svg?v=10#icon-${name}`} />
    </svg>
  );
}
