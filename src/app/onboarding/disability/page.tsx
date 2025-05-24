"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { OnboardingNavigation } from "@/components/onboarding/OnboardingNavigation";
import { useOnboardingContext } from "@/contexts/OnboardingContext";

interface DisabilityOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const disabilityOptions: DisabilityOption[] = [
  {
    id: "visual",
    title: "Deficiência Visual",
    description: "Baixa visão, cegueira ou daltonismo",
    icon: "👁️",
  },
  {
    id: "auditiva",
    title: "Deficiência Auditiva",
    description: "Perda auditiva parcial ou total",
    icon: "👂",
  },
  {
    id: "motora",
    title: "Deficiência Motora",
    description: "Dificuldades de movimento ou coordenação",
    icon: "🖐️",
  },
  {
    id: "cognitiva",
    title: "Deficiência Cognitiva",
    description: "Dificuldades de aprendizado ou processamento",
    icon: "🧠",
  },
  {
    id: "nenhuma",
    title: "Nenhuma Deficiência",
    description: "Continuar sem configurações específicas",
    icon: "✓",
  },
];

export default function DisabilitySelectionPage() {
  const { updateDisabilitySettings } = useOnboardingContext();
  const [selectedDisabilities, setSelectedDisabilities] = useState<string[]>([]);

  const toggleDisability = (id: string) => {
    setSelectedDisabilities((prev) =>
      prev.includes(id)
        ? prev.filter((d) => d !== id)
        : [...prev, id]
    );
  };

  const handleNext = async () => {
    await updateDisabilitySettings(selectedDisabilities);
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
          Selecione suas necessidades
        </h1>
        <p className="text-xl text-muted-foreground">
          Escolha as opções que melhor descrevem suas necessidades. Você pode
          selecionar mais de uma opção.
        </p>
      </div>

      <div className="grid gap-4">
        {disabilityOptions.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleDisability(option.id)}
            className={`p-4 rounded-lg border transition-all ${
              selectedDisabilities.includes(option.id)
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{option.icon}</span>
              <div className="text-left">
                <h3 className="font-semibold">{option.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <OnboardingNavigation
        onNext={handleNext}
        isNextDisabled={selectedDisabilities.length === 0}
      />
    </motion.div>
  );
} 