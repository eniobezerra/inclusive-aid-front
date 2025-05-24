"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingContext } from "@/contexts/OnboardingContext";

interface OnboardingRedirectProps {
  children: React.ReactNode;
}

export function OnboardingRedirect({ children }: OnboardingRedirectProps) {
  const router = useRouter();
  const { isComplete, currentStep } = useOnboardingContext();

  useEffect(() => {
    // Se o onboarding não estiver completo, redirecionar para a etapa atual
    if (!isComplete) {
      const stepRoutes = {
        1: "/onboarding",
        2: "/onboarding/disability",
        3: "/onboarding/accessibility",
        4: "/onboarding/preferences",
        5: "/onboarding/complete",
      };

      const currentRoute = stepRoutes[currentStep as keyof typeof stepRoutes];
      if (currentRoute) {
        router.push(currentRoute);
      }
    }
  }, [isComplete, currentStep, router]);

  // Se o onboarding estiver completo, renderizar os children
  if (isComplete) {
    return <>{children}</>;
  }

  // Enquanto o redirecionamento está acontecendo, mostrar um loading
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-lg text-muted-foreground">
          Carregando suas configurações...
        </p>
      </div>
    </div>
  );
} 