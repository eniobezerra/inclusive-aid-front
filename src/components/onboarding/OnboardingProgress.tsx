"use client";

import { motion } from "framer-motion";
import { useOnboardingContext } from "@/contexts/OnboardingContext";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Bem-vindo",
    description: "Introdução à plataforma",
  },
  {
    number: 2,
    title: "Necessidades",
    description: "Seleção de deficiências",
  },
  {
    number: 3,
    title: "Acessibilidade",
    description: "Configurações de acessibilidade",
  },
  {
    number: 4,
    title: "Preferências",
    description: "Preferências do usuário",
  },
  {
    number: 5,
    title: "Conclusão",
    description: "Finalização do setup",
  },
];

export function OnboardingProgress() {
  const { currentStep } = useOnboardingContext();

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative">
        {/* Barra de progresso */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Etapas */}
        <div className="relative flex justify-between">
          {steps.map((step) => {
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep;

            return (
              <div
                key={step.number}
                className="flex flex-col items-center"
              >
                <motion.div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : isCompleted
                      ? "bg-primary/10 text-primary border-primary"
                      : "bg-background text-muted-foreground border-muted"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isCompleted ? "✓" : step.number}
                </motion.div>
                <div className="mt-2 text-center">
                  <h3
                    className={`text-sm font-medium ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicador de progresso */}
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>
          Etapa {currentStep} de {steps.length}
        </p>
      </div>
    </div>
  );
} 