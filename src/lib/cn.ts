/** Tiny classname joiner -- no clsx/tailwind-merge dependency needed for a
 * site this size; falsy values are dropped, everything else is joined. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
