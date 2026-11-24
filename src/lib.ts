// The deck writes zeros as a slashed Ø (2Ø26, Ø1). Use for display text only.
export const slash = (s: string | number) => String(s).replace(/0/g, 'Ø');
export const num = (n: number) => slash(String(n).padStart(2, '0'));
export const fmtDate = (d: Date) => slash(d.toISOString().slice(0, 10).split('-').reverse().join('.'));
export const backgrounds = ['dusk', 'monolith', 'fog', 'station'] as const;
export type Bg = (typeof backgrounds)[number];
