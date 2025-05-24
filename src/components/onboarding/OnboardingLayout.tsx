"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
}

export function OnboardingLayout({
  children,
  currentStep,
  totalSteps,
}: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Barra de progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-secondary">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {children}
        </div>
      </main>

      {/* Navegação */}
      <nav className="fixed bottom-0 left-0 w-full bg-background border-t border-border p-4">
        <div className="container mx-auto max-w-2xl flex justify-between items-center">
          <button
            onClick={() => window.history.back()}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Voltar"
          >
            Voltar
          </button>
          <span className="text-sm text-muted-foreground">
            Passo {currentStep} de {totalSteps}
          </span>
        </div>
      </nav>
    </div>
  );
} 