/**
 * A brief, generic warm-neutral sweep, not the brand-glow shadow vocabulary
 * — a loading placeholder is not a filled brand surface, it's the absence
 * of content. See `docs/specs/design-system/01-tokens.md#motion-tokens` for
 * `--animate-shimmer` and why it's allowed to loop.
 */
const shimmer =
  "animate-shimmer bg-[length:200%_100%] bg-[linear-gradient(100deg,var(--color-surface-muted)_25%,color-mix(in_srgb,var(--color-brand-secondary)_10%,var(--color-surface-muted))_50%,var(--color-surface-muted)_75%)]";

/**
 * Loading placeholder for `OrganizationCard`, matched box-for-box so the
 * grid doesn't reflow when real cards swap in: same outer rounding, border,
 * shadow and padding, same `aspect-16/9` cover slot, same 3-column stat
 * rule at the bottom.
 *
 * `aria-hidden` throughout — `DirectoryToolbar`'s `aria-live` result count
 * already tells a screen reader a fetch is in flight
 * (`"Loading organizations"`); this is a purely visual stand-in, not a
 * second, competing announcement.
 */
const OrganizationCardSkeleton = () => (
  <div
    aria-hidden="true"
    className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-secondary/8 bg-white shadow-[0_2px_18px_-14px_var(--color-brand-secondary)]"
  >
    <div className={`aspect-16/9 shrink-0 ${shimmer}`} />

    <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
      <div className={`h-5 w-3/4 rounded-full ${shimmer}`} />

      <div className="flex flex-col gap-2">
        <div className={`h-3.5 w-full rounded-full ${shimmer}`} />
        <div className={`h-3.5 w-2/3 rounded-full ${shimmer}`} />
      </div>

      <div className={`h-3 w-2/5 rounded-full ${shimmer}`} />

      <div className="mt-auto grid grid-cols-3 gap-2 border-t border-border-subtle pt-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <div className={`h-2.5 w-4/5 rounded-full ${shimmer}`} />
            <div className={`h-3.5 w-3/5 rounded-full ${shimmer}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OrganizationCardSkeleton;
