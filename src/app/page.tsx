import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mithril Framework Documentation",
  description: "A batteries-included web framework for Go built on Fiber v2 with Laravel/Django-inspired features",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <span className="text-blue-600">Mithril</span>
              </h1>

        <p className="mt-3 text-2xl">
          A batteries-included web framework for Go
        </p>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl">
          Built on Fiber v2 with Laravel/Django-inspired features including artisan-like CLI, 
          GORM migrations, auto-generated Swagger documentation, module system, comprehensive auth, 
          multi-database support, and production deployment tools.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/docs/getting-started/introduction"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
          </a>
          <a
            href="/docs/getting-started/installation"
            className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Installation
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🚀 Quick Start</h3>
            <p className="text-gray-600">
              Get up and running with Mithril in minutes. Create your first project and start building.
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🛠️ Powerful CLI</h3>
            <p className="text-gray-600">
              Artisan-like CLI with 50+ commands for project management, code generation, and deployment.
              </p>
            </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🔐 Production Ready</h3>
            <p className="text-gray-600">
              Built-in authentication, monitoring, Docker support, and Kubernetes manifests.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}