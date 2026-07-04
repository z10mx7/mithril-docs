'use client';

import React from 'react';
import Link from 'next/link';
import { allDocs } from 'contentlayer/generated';
import SearchDialog from '@/components/search-dialog';
import { sidebarNav } from 'config/sidebar';
import Image from 'next/image';
import {
  SidebarProvider,
  SidebarLayout,
  MainContent,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarHeaderLogo,
  SidebarHeaderTitle,
  NestedLink,
} from '@/components/sidebar';
import { Github } from 'lucide-react';
import { useRouter } from 'next/navigation';

import Header from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/button';
import { useIsMobile } from '@/hooks/use-mobile';

export default function DocsChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <SidebarLayout>
      <SidebarProvider
        defaultOpen={isMobile ? false : true}
        defaultSide="left"
        defaultMaxWidth={280}
        showIconsOnCollapse={true}
      >
        <Sidebar>
          <SidebarHeader>
            <SidebarHeaderLogo
              logo={
                <Image
                  alt="logo"
                  className={'h-auto w-aut dark:invert'}
                  width={100}
                  height={100}
                  src={`/logo.png`}
                />
              }
            />

            <Link href={'/'} className="flex flex-1 gap-3">
              <SidebarHeaderTitle>Mithril</SidebarHeaderTitle>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            {sidebarNav.map((section) => (
              <SidebarMenuItem
                isCollapsable={section.pages && section.pages.length > 0}
                key={section.title}
                label={section.title}
                icon={section.icon}
                defaultOpen={section.defaultOpen}
              >
                {section.pages?.map((page) => (
                  <NestedLink key={page.href} href={page.href}>
                    {page.title}
                  </NestedLink>
                ))}
              </SidebarMenuItem>
            ))}
          </SidebarContent>
        </Sidebar>

        <MainContent>
          <Header className="justify-between py-2">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-bold">Documentation</h1>
            </div>
            <div className="flex gap-2 items-center pr-0 lg:pr-8">
              <SearchDialog searchData={allDocs} />
              <ModeToggle />
              <Button
                onClick={() =>
                  router.push('https://github.com/mithril-framework/mithril')
                }
              >
                <Github className="h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
            </div>
          </Header>
          <main className="overflow-auto p-6">{children}</main>
        </MainContent>
      </SidebarProvider>
    </SidebarLayout>
  );
}
