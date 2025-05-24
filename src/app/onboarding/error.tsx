"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log do erro para monitoramento
    console.error("Erro no onboarding:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
          <span className="text-2xl">⚠️</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">
            Ops! Algo deu errado
          </h1>
          <p className="text-muted-foreground">
            Não foi possível carregar a página do onboarding. Por favor, tente
            novamente ou entre em contato com o suporte se o problema persistir.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => reset()}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Tentar Novamente
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-full px-4 py-2 border border-input rounded-md hover:bg-accent transition-colors"
          >
            Voltar para o Início
          </button>
        </div>

        {error.digest && (
          <p className="text-xs text-muted-foreground">
            Código do erro: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
} 