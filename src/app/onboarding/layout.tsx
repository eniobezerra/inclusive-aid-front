"use client";

import { OnboardingNotification, useOnboardingNotifications } from "@/components/onboarding/OnboardingNotification";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";
import { cn } from "@/lib/utils";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { notifications, dismissNotification } = useOnboardingNotifications();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header com logo */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <a 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            <span className="sr-only">InclusiveAID</span>
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>InclusiveAID</span>
          </a>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-muted-foreground">
              Configuração Inicial
            </span>
          </div>
        </div>
      </header>

      {/* Barra de progresso */}
      <div className="border-b bg-muted/5">
        <div className="container px-4 py-4">
          <OnboardingProgress />
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="flex-1">
        <div className="container flex-1 space-y-8 px-4 py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} InclusiveAID. Todos os direitos reservados.
            </p>
            <nav className="flex gap-4">
              <a
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="/accessibility"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Acessibilidade
              </a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Notificações */}
      <OnboardingNotification
        notifications={notifications}
        onDismiss={dismissNotification}
      />
    </div>
  );
} 