# Mithril Framework Documentation

This is the official documentation site for the Mithril Framework, built using the [Pinexio](https://github.com/sanjayc208/pinexio) documentation template.

## Overview

Mithril is a batteries-included web framework for Go built on Fiber v2 with Laravel/Django-inspired features. This documentation site provides comprehensive guides, API references, and examples to help you build amazing applications with Mithril.

## Features

- **Modern Documentation**: Built with Next.js 15, Tailwind CSS 4, and MDX
- **Interactive Examples**: Live code examples and demos
- **Search Functionality**: Built-in search for easy navigation
- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Theme**: Toggle between themes
- **Auto-generated Navigation**: Automatic sidebar generation from file structure

## Documentation Structure

The documentation is organized into the following sections:

### Getting Started
- [Introduction](/docs/getting-started/introduction) - Welcome to Mithril
- [Installation](/docs/getting-started/installation) - Install Mithril framework
- [Quick Start](/docs/getting-started/quick-start) - Create your first app

### Core Framework
- [Application Structure](/docs/core/application) - Understanding Mithril architecture
- [Configuration Management](/docs/core/configuration) - Environment-based configuration
- [Dependency Injection](/docs/core/container) - Service container
- [Middleware Stack](/docs/core/middleware) - HTTP middleware

### CLI Commands
- [CLI Overview](/docs/cli/overview) - Complete CLI reference
- [Project Commands](/docs/cli/project) - Project management
- [Database Commands](/docs/cli/database) - Database operations
- [Authentication Commands](/docs/cli/authentication) - Auth management
- [Development Commands](/docs/cli/development) - Development tools
- [Queue Commands](/docs/cli/queue) - Background jobs
- [Storage Commands](/docs/cli/storage) - File management
- [Monitoring Commands](/docs/cli/monitoring) - Health and metrics

### Database
- [Models & Relationships](/docs/database/models) - GORM models
- [Migrations](/docs/database/migrations) - Database migrations
- [Seeders](/docs/database/seeders) - Database seeding
- [Multi-Database Support](/docs/database/multi-database) - Multiple databases

### Authentication
- [JWT Tokens](/docs/authentication/jwt) - JSON Web Tokens
- [Session Management](/docs/authentication/sessions) - Session handling
- [Role-Based Access Control](/docs/authentication/rbac) - RBAC system
- [2FA Support](/docs/authentication/2fa) - Two-factor authentication
- [Email Verification](/docs/authentication/email-verification) - Email verification

### API Development
- [Request Validation](/docs/api/validation) - Schema validation
- [Response Serialization](/docs/api/responses) - Response handling
- [Swagger Documentation](/docs/api/swagger) - Auto-generated docs
- [Pagination](/docs/api/pagination) - API pagination
- [Error Handling](/docs/api/error-handling) - Error responses

### File Storage
- [Storage Overview](/docs/storage/overview) - Storage system
- [S3 Integration](/docs/storage/s3) - AWS S3 support
- [MinIO Support](/docs/storage/minio) - S3-compatible storage
- [Local Storage](/docs/storage/local) - Local file storage
- [File Operations](/docs/storage/operations) - File management

### Background Jobs
- [Queue Overview](/docs/queue/overview) - Queue system
- [Job Definitions](/docs/queue/jobs) - Background jobs
- [Queue Workers](/docs/queue/workers) - Job processing
- [Failed Jobs](/docs/queue/failed-jobs) - Error handling
- [Task Scheduling](/docs/queue/scheduling) - Cron-like scheduling

### Monitoring
- [Health Checks](/docs/monitoring/health) - Application health
- [Prometheus Metrics](/docs/monitoring/metrics) - Metrics collection
- [OpenTelemetry](/docs/monitoring/telemetry) - Distributed tracing
- [Sentry Integration](/docs/monitoring/sentry) - Error tracking
- [System Monitoring](/docs/monitoring/system) - Resource monitoring

### Deployment
- [Docker Deployment](/docs/deployment/docker) - Container deployment
- [Kubernetes](/docs/deployment/kubernetes) - K8s manifests
- [Production Setup](/docs/deployment/production) - Production configuration
- [CI/CD Pipeline](/docs/deployment/cicd) - Continuous integration
- [Environment Configuration](/docs/deployment/environment) - Environment setup

### Examples
- [Basic API](/docs/examples/basic-api) - Simple REST API
- [Web Application](/docs/examples/web-app) - Full-stack web app
- [Authentication System](/docs/examples/auth-system) - Complete auth
- [File Upload](/docs/examples/file-upload) - File management
- [Queue System](/docs/examples/queue-system) - Background jobs
- [WebSocket Chat](/docs/examples/websocket-chat) - Real-time chat
- [GraphQL API](/docs/examples/graphql-api) - GraphQL implementation
- [Microservice](/docs/examples/microservice) - Microservice architecture

### Contributing
- [Contributing Guide](/docs/contributing/guide) - How to contribute
- [Code of Conduct](/docs/contributing/code-of-conduct) - Community guidelines
- [Development Setup](/docs/contributing/development) - Development environment
- [Testing](/docs/contributing/testing) - Testing guidelines

## Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/mithril-framework/mithril-docs.git
cd mithril-docs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Building

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Adding Documentation

1. Create a new `.mdx` file in the appropriate `docs/` subdirectory
2. Add frontmatter with title and description
3. Update the sidebar configuration in `config/sidebar.tsx`
4. The documentation will automatically appear in the navigation

### MDX Features

This documentation site supports:

- **MDX Components**: Use React components in markdown
- **Code Highlighting**: Syntax highlighting for code blocks
- **Interactive Examples**: Live code examples
- **Custom Components**: Reusable documentation components
- **Search**: Built-in search functionality

## Contributing

We welcome contributions to the Mithril documentation! Please see our [Contributing Guide](/docs/contributing/guide) for details.

### Ways to Contribute

- **Documentation**: Improve existing docs or add new sections
- **Examples**: Add more example projects and tutorials
- **Translations**: Translate documentation to other languages
- **Bug Reports**: Report issues with the documentation
- **Feature Requests**: Suggest new documentation features

## License

This documentation is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

- **Mithril Framework**: [https://github.com/mithril-framework/mithril](https://github.com/mithril-framework/mithril)
- **Documentation Site**: [https://mithril-framework.dev](https://mithril-framework.dev)
- **Discord Community**: [https://discord.gg/mithril](https://discord.gg/mithril)
- **GitHub Issues**: [https://github.com/mithril-framework/mithril/issues](https://github.com/mithril-framework/mithril/issues)

---

**Built with ❤️ using Pinexio** - A modern documentation template for Next.js