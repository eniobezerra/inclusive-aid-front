"use client";

import { OnboardingNotification, useOnboardingNotifications } from "@/components/onboarding/OnboardingNotification";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { notifications, dismissNotification } = useOnboardingNotifications();

  return (
    <div className="min-h-screen bg-background">
      {/* Header com logo */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-primary">
              InclusiveAID
            </a>
            <div className="text-sm text-muted-foreground">
              Configuração Inicial
            </div>
          </div>
        </div>
      </header>

      {/* Barra de progresso */}
      <div className="border-b bg-muted/5">
        <div className="container mx-auto px-4 py-6">
          <OnboardingProgress />
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} InclusiveAID. Todos os direitos
              reservados.
            </p>
            <p className="mt-1">
              Sua privacidade é importante para nós.{" "}
              <a
                href="/privacy"
                className="text-primary hover:underline"
              >
                Política de Privacidade
              </a>
            </p>
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