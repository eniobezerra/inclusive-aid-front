"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { OnboardingNavigation } from "@/components/onboarding/OnboardingNavigation";
import { useOnboardingContext } from "@/contexts/OnboardingContext";

interface AccessibilitySetting {
  id: string;
  title: string;
  description: string;
  type: "toggle" | "select" | "slider";
  options?: { value: string; label: string }[];
  defaultValue: any;
}

const accessibilitySettings: AccessibilitySetting[] = [
  {
    id: "highContrast",
    title: "Alto Contraste",
    description: "Aumenta o contraste entre texto e fundo",
    type: "toggle",
    defaultValue: false,
  },
  {
    id: "fontSize",
    title: "Tamanho da Fonte",
    description: "Ajusta o tamanho do texto",
    type: "select",
    options: [
      { value: "small", label: "Pequeno" },
      { value: "medium", label: "Médio" },
      { value: "large", label: "Grande" },
      { value: "xlarge", label: "Extra Grande" },
    ],
    defaultValue: "medium",
  },
  {
    id: "textSpacing",
    title: "Espaçamento do Texto",
    description: "Ajusta o espaçamento entre letras e linhas",
    type: "slider",
    defaultValue: 1,
  },
  {
    id: "screenReader",
    title: "Leitor de Tela",
    description: "Ativa o leitor de tela integrado",
    type: "toggle",
    defaultValue: false,
  },
  {
    id: "reducedMotion",
    title: "Reduzir Movimento",
    description: "Diminui animações e transições",
    type: "toggle",
    defaultValue: false,
  },
];

export default function AccessibilitySettingsPage() {
  const { updateAccessibilitySettings } = useOnboardingContext();
  const [settings, setSettings] = useState<Record<string, any>>({});

  useEffect(() => {
    // Inicializar configurações com valores padrão
    const defaultSettings = accessibilitySettings.reduce(
      (acc, setting) => ({
        ...acc,
        [setting.id]: setting.defaultValue,
      }),
      {}
    );
    setSettings(defaultSettings);
  }, []);

  const handleSettingChange = (id: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleNext = async () => {
    await updateAccessibilitySettings(settings);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Configurações de Acessibilidade
        </h1>
        <p className="text-xl text-muted-foreground">
          Personalize a experiência de acordo com suas necessidades
        </p>
      </div>

      <div className="space-y-6">
        {accessibilitySettings.map((setting) => (
          <motion.div
            key={setting.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-lg border border-border"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">{setting.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {setting.description}
                </p>
              </div>
              {setting.type === "toggle" && (
                <button
                  onClick={() =>
                    handleSettingChange(setting.id, !settings[setting.id])
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings[setting.id]
                      ? "bg-primary"
                      : "bg-muted"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings[setting.id]
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              )}
              {setting.type === "select" && setting.options && (
                <select
                  value={settings[setting.id]}
                  onChange={(e) =>
                    handleSettingChange(setting.id, e.target.value)
                  }
                  className="rounded-md border border-input bg-background px-3 py-1"
                >
                  {setting.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
              {setting.type === "slider" && (
                <input
                  type="range"
                  min="0.8"
                  max="2"
                  step="0.1"
                  value={settings[setting.id]}
                  onChange={(e) =>
                    handleSettingChange(setting.id, parseFloat(e.target.value))
                  }
                  className="w-32"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <OnboardingNavigation onNext={handleNext} />
    </motion.div>
  );
} 