import { Component, Database, Shield, Code, Server, Container, Activity, FileText, Users, Wrench } from 'lucide-react';

export const sidebarNav = [
  {
    title: 'Getting Started',
    icon: <Component className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Introduction',
        href: '/docs/getting-started/introduction',
      },
      {
        title: 'Installation',
        href: '/docs/getting-started/installation',
      },
      {
        title: 'Quick Start',
        href: '/docs/getting-started/quick-start',
      },
    ],
  },
  {
    title: 'Core Framework',
    icon: <Code className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Application Structure',
        href: '/docs/core/application',
      },
      {
        title: 'Configuration',
        href: '/docs/core/configuration',
      },
      {
        title: 'Middleware Stack',
        href: '/docs/core/middleware',
      },
      {
        title: 'Utilities',
        href: '/docs/core/utilities',
      },
      {
        title: 'WebSocket & gRPC',
        href: '/docs/core/websocket-grpc',
      },
    ],
  },
  {
    title: 'CLI Commands',
    icon: <Wrench className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'CLI Overview',
        href: '/docs/cli/overview',
      },
      {
        title: 'Docker & Services',
        href: '/docs/cli/docker-services',
      },
    ],
  },
  {
    title: 'Database',
    icon: <Database className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Models & Relationships',
        href: '/docs/database/models',
      },
      {
        title: 'Migrations',
        href: '/docs/database/migrations',
      },
      {
        title: 'Seeders',
        href: '/docs/database/seeders',
      },
    ],
  },
  {
    title: 'Authentication',
    icon: <Shield className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'JWT Tokens',
        href: '/docs/authentication/jwt',
      },
      {
        title: 'RBAC',
        href: '/docs/authentication/rbac',
      },
    ],
  },
  {
    title: 'API Development',
    icon: <Server className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Request Validation',
        href: '/docs/api/validation',
      },
      {
        title: 'Swagger Documentation',
        href: '/docs/api/swagger',
      },
    ],
  },
  {
    title: 'Monitoring',
    icon: <Activity className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Overview',
        href: '/docs/monitoring/overview',
      },
      {
        title: 'Health Checks',
        href: '/docs/monitoring/health',
      },
    ],
  },
  {
    title: 'Deployment',
    icon: <Container className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Docker',
        href: '/docs/deployment/docker',
      },
      {
        title: 'Kubernetes',
        href: '/docs/deployment/kubernetes',
      },
    ],
  },
  {
    title: 'Contributing',
    icon: <Users className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Testing',
        href: '/docs/contributing/testing',
      },
    ],
  },
];