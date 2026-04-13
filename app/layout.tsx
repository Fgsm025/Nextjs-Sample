import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Where in the world?",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
