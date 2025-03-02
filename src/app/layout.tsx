import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ConvexClientProvider } from '@/components/convex-client-provider';
import { ConvexAuthNextjsServerProvider } from '@convex-dev/auth/nextjs/server';
import { JotaiProvider } from '@/components/jotai-provider';
import './globals.css';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { Modals } from '@/components/modals';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sisyphus Academy',
  description: 'A tool that supports school lessons',
  icons: {
    icon: '/diagram-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ConvexClientProvider>
            <JotaiProvider>
              <NuqsAdapter>
                <Toaster />
                <Modals />
                {children}
              </NuqsAdapter>
            </JotaiProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
