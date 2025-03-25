import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/Provider/ThemeProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Note-App",
  description: "A note taking app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
