import React from 'react';
import Link from 'next/link';

export type StatusLevel = 'shipped' | 'beta' | 'planned';

const styles: Record<
  StatusLevel,
  { label: string; className: string; hint: string }
> = {
  shipped: {
    label: 'Shipped',
    className:
      'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    hint: 'Available in the current release and covered by tests.',
  },
  beta: {
    label: 'Beta',
    className: 'border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-400',
    hint: 'Available, but the API may still change before 2.0.',
  },
  planned: {
    label: 'Planned',
    className:
      'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400',
    hint: 'Not implemented yet. Code on this page describes the intended design.',
  },
};

/** Inline status pill, e.g. <Status value="beta" /> in a table cell. */
export function Status({ value }: { value: StatusLevel }) {
  const s = styles[value];
  return (
    <span
      title={s.hint}
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${s.className}`}
    >
      {s.label}
    </span>
  );
}

/** Page-level status banner shown under the title. */
export function PageStatus({
  value,
  children,
}: {
  value: StatusLevel;
  children?: React.ReactNode;
}) {
  const s = styles[value];
  return (
    <div
      className={`my-4 flex flex-wrap items-start gap-3 rounded-lg border px-4 py-3 text-sm ${s.className}`}
    >
      <Status value={value} />
      <span className="text-muted-foreground">
        {children || s.hint}{' '}
        <Link className="underline" href="/docs/getting-started/feature-status">
          Feature status
        </Link>
      </span>
    </div>
  );
}
