type TocPage = {
  title: string;
  href: string;
};

type TocSection = {
  title: string;
  href: string;
  pages?: TocPage[];
};

type TocData = {
  [key: string]: TocSection[];
};

export const TocData: TocData = {
  'getting-started/introduction': [
    {
      title: 'Welcome',
      href: '/docs/getting-started/introduction#welcome-to-mithril',
      pages: [
        {
          title: 'Available Now',
          href: '/docs/getting-started/introduction#available-now',
        },
        {
          title: 'Planned',
          href: '/docs/getting-started/introduction#planned-see-roadmap',
        },
      ],
    },
  ],
  'getting-started/installation': [
    {
      title: 'Install the CLI',
      href: '/docs/getting-started/installation#install-the-cli',
    },
    {
      title: 'Create a Project',
      href: '/docs/getting-started/installation#create-a-project',
    },
  ],
  'getting-started/quick-start': [
    {
      title: 'Create a Project',
      href: '/docs/getting-started/quick-start#create-a-project',
    },
    {
      title: 'Generate CRUD',
      href: '/docs/getting-started/quick-start#generate-crud',
    },
  ],
  'database/models': [
    {
      title: 'Model Conventions',
      href: '/docs/database/models#model-conventions',
    },
    { title: 'Repositories', href: '/docs/database/models#repositories' },
  ],
  'database/migrations': [
    { title: 'CLI Commands', href: '/docs/database/migrations#cli-commands' },
  ],
  'authentication/jwt': [
    { title: 'Endpoints', href: '/docs/authentication/jwt#endpoints' },
    { title: 'Configuration', href: '/docs/authentication/jwt#configuration' },
  ],
  'authentication/rbac': [
    { title: 'ACL CLI', href: '/docs/authentication/rbac#acl-cli' },
  ],
  'cli/overview': [
    { title: 'Project Commands', href: '/docs/cli/overview#project-commands' },
  ],
  'deployment/docker': [
    { title: 'Build Image', href: '/docs/deployment/docker#build-image' },
  ],
  'deployment/kubernetes': [
    { title: 'Resources', href: '/docs/deployment/kubernetes#resources' },
  ],
};
