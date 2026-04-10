import type { Metadata } from "next";
import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Webstacks Next.js CodeSubmit",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
