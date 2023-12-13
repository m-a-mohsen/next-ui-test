import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex min-h-screen flex-col ">
            <Navbar />
            <main className="flex grow">{children}</main>
            <footer className="flex w-full items-center justify-center py-3">
              <span className="text-default-600">
                ©2023 Open Tech Camp. Made with 💙 in Berlin, by&nbsp;
              </span>
              <p className="text-primary">m-a-mohsen</p>
              <span className="text-default-600">.</span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
