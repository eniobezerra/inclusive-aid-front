"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";

interface PreferenceOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const preferenceOptions: PreferenceOption[] = [
  {
    id: "notifications",
    title: "Notificações",
    description: "Receber alertas e atualizações importantes",
    icon: "🔔",
  },
  {
    id: "emailUpdates",
    title: "Atualizações por Email",
    description: "Receber novidades e dicas por email",
    icon: "📧",
  },
  {
    id: "darkMode",
    title: "Modo Escuro",
    description: "Usar tema escuro por padrão",
    icon: "🌙",
  },
  {
    id: "location",
    title: "Compartilhar Localização",
    description: "Permitir acesso à localização para recursos próximos",
    icon: "📍",
  },
];

export default function PreferencesPage() {
  const router = useRouter();
  const [preferences, setPreferences] = useState<Record<string, boolean>>({});

  const togglePreference = (id: string) => {
    setPreferences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleContinue = () => {
    // Salvar preferências no localStorage
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
    router.push("/onboarding/complete");
  };

  return (
    <OnboardingLayout currentStep={4} totalSteps={5}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Preferências do Usuário
          </h1>
          <p className="text-xl text-muted-foreground">
            Personalize sua experiência na plataforma
          </p>
        </div>

        <div className="grid gap-4">
          {preferenceOptions.map((option) => (
            <div
              key={option.id}
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <h3 className="font-semibold">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => togglePreference(option.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences[option.id] ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences[option.id]
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 flex justify-center gap-4">
          <button
            onClick={() => router.back()}
            className="px-8 py-3 border border-input rounded-md hover:bg-accent transition-colors"
          >
            Voltar
          </button>
          <button
            onClick={handleContinue}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Continuar
          </button>
        </div>
      </motion.div>
    </OnboardingLayout>
  );
} 