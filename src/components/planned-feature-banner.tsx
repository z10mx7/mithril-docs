import React from 'react';

export function PlannedFeatureBanner({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm">
      <p className="font-semibold text-amber-700 dark:text-amber-400">
        Planned feature
      </p>
      <p className="mt-1 text-muted-foreground">
        {children ||
          'This page describes planned or partially implemented functionality. See the framework ROADMAP.md for current status.'}
      </p>
    </div>
  );
}
