"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { useOnboarding } from "@/hooks/useOnboarding";

interface OnboardingContextType {
  disabilitySettings: string[];
  accessibilitySettings: Record<string, any>;
  userPreferences: Record<string, boolean>;
  currentStep: number;
  isComplete: boolean;
  updateDisabilitySettings: (settings: string[]) => void;
  updateAccessibilitySettings: (settings: Record<string, any>) => void;
  updateUserPreferences: (preferences: Record<string, boolean>) => void;
  setCurrentStep: (step: number) => void;
  completeOnboarding: () => Promise<void>;
  resetOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const {
    disabilitySettings,
    accessibilitySettings,
    userPreferences,
    currentStep,
    isComplete,
    updateDisabilitySettings,
    updateAccessibilitySettings,
    updateUserPreferences,
    setCurrentStep,
    completeOnboarding,
    resetOnboarding,
  } = useOnboarding();

  const value = useMemo(
    () => ({
      disabilitySettings,
      accessibilitySettings,
      userPreferences,
      currentStep,
      isComplete,
      updateDisabilitySettings,
      updateAccessibilitySettings,
      updateUserPreferences,
      setCurrentStep,
      completeOnboarding,
      resetOnboarding,
    }),
    [
      disabilitySettings,
      accessibilitySettings,
      userPreferences,
      currentStep,
      isComplete,
      updateDisabilitySettings,
      updateAccessibilitySettings,
      updateUserPreferences,
      setCurrentStep,
      completeOnboarding,
      resetOnboarding,
    ]
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingContext() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error(
      "useOnboardingContext must be used within an OnboardingProvider"
    );
  }
  return context;
}

// Hook auxiliar para verificar se o usuário está no onboarding
export function useOnboardingStatus() {
  const { isComplete, currentStep } = useOnboardingContext();

  const isOnboarding = useCallback(() => {
    return !isComplete;
  }, [isComplete]);

  const isOnboardingStep = useCallback(
    (step: number) => {
      return !isComplete && currentStep === step;
    },
    [isComplete, currentStep]
  );

  return {
    isOnboarding,
    isOnboardingStep,
  };
} 