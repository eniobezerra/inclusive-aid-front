import { useState, useEffect } from "react";

interface OnboardingState {
  disabilitySettings: string[];
  accessibilitySettings: Record<string, any>;
  userPreferences: Record<string, boolean>;
  currentStep: number;
  isComplete: boolean;
}

const initialState: OnboardingState = {
  disabilitySettings: [],
  accessibilitySettings: {},
  userPreferences: {},
  currentStep: 1,
  isComplete: false,
};

export function useOnboarding() {
  const [state, setState] = useState<OnboardingState>(initialState);

  useEffect(() => {
    // Carregar estado do localStorage ao iniciar
    const loadState = () => {
      try {
        const disabilitySettings = JSON.parse(
          localStorage.getItem("selectedDisabilities") || "[]"
        );
        const accessibilitySettings = JSON.parse(
          localStorage.getItem("accessibilitySettings") || "{}"
        );
        const userPreferences = JSON.parse(
          localStorage.getItem("userPreferences") || "{}"
        );
        const currentStep = parseInt(
          localStorage.getItem("onboardingStep") || "1"
        );
        const isComplete = localStorage.getItem("onboardingComplete") === "true";

        setState({
          disabilitySettings,
          accessibilitySettings,
          userPreferences,
          currentStep,
          isComplete,
        });
      } catch (error) {
        console.error("Erro ao carregar estado do onboarding:", error);
      }
    };

    loadState();
  }, []);

  const updateDisabilitySettings = (settings: string[]) => {
    setState((prev) => ({
      ...prev,
      disabilitySettings: settings,
    }));
    localStorage.setItem("selectedDisabilities", JSON.stringify(settings));
  };

  const updateAccessibilitySettings = (settings: Record<string, any>) => {
    setState((prev) => ({
      ...prev,
      accessibilitySettings: settings,
    }));
    localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
  };

  const updateUserPreferences = (preferences: Record<string, boolean>) => {
    setState((prev) => ({
      ...prev,
      userPreferences: preferences,
    }));
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
  };

  const setCurrentStep = (step: number) => {
    setState((prev) => ({
      ...prev,
      currentStep: step,
    }));
    localStorage.setItem("onboardingStep", step.toString());
  };

  const completeOnboarding = async () => {
    try {
      // TODO: Implementar chamada à API para salvar todas as configurações
      const response = await fetch("/api/onboarding/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          disabilitySettings: state.disabilitySettings,
          accessibilitySettings: state.accessibilitySettings,
          userPreferences: state.userPreferences,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar configurações");
      }

      setState((prev) => ({
        ...prev,
        isComplete: true,
      }));

      // Limpar localStorage após salvar
      localStorage.removeItem("selectedDisabilities");
      localStorage.removeItem("accessibilitySettings");
      localStorage.removeItem("userPreferences");
      localStorage.removeItem("onboardingStep");
      localStorage.setItem("onboardingComplete", "true");
    } catch (error) {
      console.error("Erro ao completar onboarding:", error);
      throw error;
    }
  };

  const resetOnboarding = () => {
    setState(initialState);
    localStorage.removeItem("selectedDisabilities");
    localStorage.removeItem("accessibilitySettings");
    localStorage.removeItem("userPreferences");
    localStorage.removeItem("onboardingStep");
    localStorage.removeItem("onboardingComplete");
  };

  return {
    ...state,
    updateDisabilitySettings,
    updateAccessibilitySettings,
    updateUserPreferences,
    setCurrentStep,
    completeOnboarding,
    resetOnboarding,
  };
} 