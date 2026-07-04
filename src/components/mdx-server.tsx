import React from 'react';
import { getMDXComponent } from '@contentlayer2/core/client';
import clsx from 'clsx';
import Link from 'next/link';
import { Note } from '@/components/note';
import { PlannedFeatureBanner } from '@/components/planned-feature-banner';

const components = {
  h1: ({ className, ...children }: React.HTMLAttributes<HTMLElement>) => (
    <h1
      className={`text-3xl font-semibold mt-3 mb-3 ${className}`}
      {...children}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <Link
      href={`#${props.id}`}
      className={'cursor-pointer group relative items-center w-fit'}
    >
      <h2
        className={`flex text-2xl hover:underline font-semibold mt-8 mb-4 gap-1 ${className}`}
        {...props}
      >
        {props.children}
        <span className="text-2xl text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
          #
        </span>
      </h2>
    </Link>
  ),
  h3: ({ className, ...children }: React.HTMLAttributes<HTMLElement>) => (
    <h3
      className={`text-xl font-semibold mt-6 mb-3 ${className}`}
      {...children}
    />
  ),
  h4: ({ className, ...children }: React.HTMLAttributes<HTMLElement>) => (
    <h4
      className={`text-lg font-semibold mt-6 mb-3 ${className}`}
      {...children}
    />
  ),
  p: ({ className, ...children }: React.HTMLAttributes<HTMLElement>) => (
    <p className={`my-4 leading-7 ${className}`} {...children} />
  ),
  a: ({ className, ...children }: React.HTMLAttributes<HTMLElement>) => (
    <a
      className={`text-primary underline underline-offset-4 ${className}`}
      {...children}
    />
  ),
  ul: ({ className, ...children }: React.HTMLAttributes<HTMLElement>) => (
    <ul className={`list-disc pl-6 my-4 ${className}`} {...children} />
  ),
  ol: ({ className, ...children }: React.HTMLAttributes<HTMLElement>) => (
    <ol className={`list-decimal pl-6 my-4 ${className}`} {...children} />
  ),
  li: ({ className, ...children }: React.HTMLAttributes<HTMLElement>) => (
    <li className={`mb-2 ${className}`} {...children} />
  ),
  blockquote: ({
    className,
    ...children
  }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={`border-l-4 border-muted-foreground pl-4 italic my-4 ${className}`}
      {...children}
    />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={`my-4 md:my-8 ${className}`} {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-x-auto">
      <table
        className={clsx(
          'w-full text-sm border-collapse border rounded-lg outline-1 outline-border outline-offset-[-1px] overflow-hidden',
          className
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={clsx('border', className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={clsx(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={clsx(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={clsx(
        'my-4 overflow-x-auto rounded-lg border bg-muted p-4 text-sm',
        className
      )}
      {...props}
    />
  ),
  code: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={clsx(
        className?.includes('language-')
          ? 'block font-mono text-sm whitespace-pre'
          : 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  Note,
  PlannedFeatureBanner,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = getMDXComponent(code, { style: 'default' });
  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
