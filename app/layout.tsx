import './globals.css';
import type { Metadata } from 'next';
import { HeaderWrapper } from './components/header-wrapper';
import { Footer } from './components/footer';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  return {
    metadataBase: new URL(baseUrl),
    title: 'New Hope Counseling Ltd. | Professional Counseling Services',
    description: 'Professional, compassionate counseling services for individuals, couples, and families. Faith-integrated and evidence-based therapy in Elgin, IL.',
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    openGraph: {
      title: 'New Hope Counseling Ltd.',
      description: 'Professional, compassionate counseling services for individuals, couples, and families.',
      images: ['/og-image.png'],
      type: 'website',
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className="bg-slate_blue-50 text-slate_blue-800 min-h-screen flex flex-col">
        <HeaderWrapper />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
