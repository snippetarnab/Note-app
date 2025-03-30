import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/Provider/ThemeProvider";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Appsidebar";
import NoteProvider from "@/Provider/NoteProvider";


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
          <NoteProvider>
            <SidebarProvider>
              <AppSidebar />
              <div className="flex min-h-screen flex-col w-full">
                <Header />
                <main className="felx items-center justify-center flex-1 flex-col px-4 pt-10 xl:px-8">
                  {children}
                </main>
              </div>
            </SidebarProvider>
            <Toaster richColors />
          </NoteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
