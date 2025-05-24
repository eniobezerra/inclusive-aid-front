import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { OnboardingProvider } from "@/contexts/OnboardingContext";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InclusiveAID - Plataforma de Inclusão Digital",
  description:
    "Uma plataforma web para inclusão digital e acessibilidade, ajudando pessoas com deficiência a navegar e interagir com o mundo digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="h-full">
      <body className={cn(
        inter.className,
        "min-h-full bg-background antialiased",
        "flex flex-col"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OnboardingProvider>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </OnboardingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 