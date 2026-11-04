import { CSSProperties, PropsWithChildren } from 'react';

// Layout for Overview stories: shows a component's main variations side by side, each with a caption.
// Not a heading, so it doesn't affect the page's heading outline.
const caption: CSSProperties = {
  margin: '0 0 8px',
  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  fontSize: '0.75rem',
  lineHeight: 1.4,
  color: 'var(--variant-caption, #4a4a4a)',
};

export type VariantsProps = {
  /** Caption above the group, e.g. "Disabled". */
  title?: string;
  /** Minimum column width. Columns wrap to fit the screen. */
  minWidth?: string;
  /** Show the group on a dark background, for variants made for dark surfaces. */
  dark?: boolean;
};

/** A row of variations that wraps on small screens. Put `Variant`s inside, or several `Variants` in a `VariantSections`. */
export const Variants = ({ title, minWidth = '200px', dark, children }: PropsWithChildren<VariantsProps>) => (
  <div>
    {!!title && <p style={{ ...caption, fontWeight: 700, fontSize: '0.875rem' }}>{title}</p>}
    <div
      style={
        {
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(min(${minWidth}, 100%), 1fr))`,
          gap: '24px',
          alignItems: 'start',
          // The dark group's captions turn white through the custom property
          ...(dark && { background: '#2a3b5d', padding: '16px', borderRadius: '8px', '--variant-caption': '#fff' }),
        } as CSSProperties
      }
    >
      {children}
    </div>
  </div>
);

/** One variation with its caption. */
export const Variant = ({ label, children }: PropsWithChildren<{ label: string }>) => (
  <div style={{ minWidth: 0 }}>
    <p style={caption}>{label}</p>
    {children}
  </div>
);

/** Stacks several `Variants` groups with space between them. */
export const VariantSections = ({ children }: PropsWithChildren) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>{children}</div>
);
