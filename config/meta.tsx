export const meta = {
  metadataBase: new URL('https://Mithril.vercel.app'),
  title: 'Mithril - Documentation  ',
  description:
    'A customizable Open Source documentation template built with Next.js',
  authors: [{ name: 'z10mx7' }],
  keywords: [
    'Mithril',
    'documentation  ',
    'template',
    'Next.js',
    'React',
    'JavaScript',
  ],
  publisher: 'z10mx7',
  creator: 'z10mx7',
  openGraph: {
    type: 'website',
    title: 'Mithril - Documentation  ',
    description:
      'A customizable open-source documentation   built with Next.js.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Mithril Documentation  ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // Type of Twitter card
    title: 'Mithril - Documentation', // Twitter card title
    description:
      'A customizable open-source documentation template built with Next.js.', // Twitter card description
    images: ['/og_image.png'], // Image used in the Twitter card
    creator: '@z10mx7', // Twitter handle of the content creator (optional)
  },
  // SEO Enhancements
  alternates: {
    canonical: 'https://mithril-docs-nine.vercel.app', // Set the canonical URL
  },
  robots: 'index, follow', // Allows search engines to index and follow links
  // Optional: Hreflang for multilingual content (if applicable)
  hreflang: {
    en: 'https://mithril-docs-nine.vercel.app', // English version URL
    // Add more hreflang if you have other languages (example: Spanish)
    // "es": "https://mithril-docs-nine.vercel.app/es",
  },
};
