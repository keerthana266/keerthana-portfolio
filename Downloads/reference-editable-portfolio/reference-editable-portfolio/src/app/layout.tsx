import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Keerthana's Portfolio",
  description: 'Dasari Keerthana — Computer Science, AI/ML and software engineering portfolio.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
