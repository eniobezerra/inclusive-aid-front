"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useOnboardingContext } from "@/contexts/OnboardingContext";

interface OnboardingNavigationProps {
  onNext?: () => void;
  onBack?: () => void;
  nextLabel?: string;
  backLabel?: string;
  showBack?: boolean;
  showNext?: boolean;
  isNextDisabled?: boolean;
  isNextLoading?: boolean;
}

export function OnboardingNavigation({
  onNext,
  onBack,
  nextLabel = "Continuar",
  backLabel = "Voltar",
  showBack = true,
  showNext = true,
  isNextDisabled = false,
  isNextLoading = false,
}: OnboardingNavigationProps) {
  const router = useRouter();
  const { currentStep, setCurrentStep } = useOnboardingContext();

  const handleNext = async () => {
    if (onNext) {
      await onNext();
    }

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    const stepRoutes = {
      1: "/onboarding",
      2: "/onboarding/disability",
      3: "/onboarding/accessibility",
      4: "/onboarding/preferences",
      5: "/onboarding/complete",
    };

    const nextRoute = stepRoutes[nextStep as keyof typeof stepRoutes];
    if (nextRoute) {
      router.push(nextRoute);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }

    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);

    const stepRoutes = {
      1: "/onboarding",
      2: "/onboarding/disability",
      3: "/onboarding/accessibility",
      4: "/onboarding/preferences",
      5: "/onboarding/complete",
    };

    const prevRoute = stepRoutes[prevStep as keyof typeof stepRoutes];
    if (prevRoute) {
      router.push(prevRoute);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t">
      {showBack && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBack}
          className="px-6 py-2 border border-input rounded-md hover:bg-accent transition-colors"
          disabled={currentStep === 1}
        >
          {backLabel}
        </motion.button>
      )}

      {showNext && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNext}
          disabled={isNextDisabled || isNextLoading}
          className={`px-6 py-2 rounded-md transition-colors ${
            isNextDisabled || isNextLoading
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {isNextLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              <span>Carregando...</span>
            </div>
          ) : (
            nextLabel
          )}
        </motion.button>
      )}
    </div>
  );
} 