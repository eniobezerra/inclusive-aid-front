import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { OnboardingProvider } from "@/contexts/OnboardingContext";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OnboardingProvider>{children}</OnboardingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 