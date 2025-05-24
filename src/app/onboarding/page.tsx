"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { OnboardingNavigation } from "@/components/onboarding/OnboardingNavigation";

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
        >
          <span className="text-4xl">👋</span>
        </motion.div>

        <div>
          <h1 className="text-4xl font-bold mb-4">
            Bem-vindo ao InclusiveAID
          </h1>
          <p className="text-xl text-muted-foreground">
            Vamos configurar sua experiência personalizada para tornar sua
            jornada digital mais acessível e inclusiva.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">
            O que você vai configurar:
          </h2>
          <ul className="space-y-3 text-left">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                1
              </span>
              <span>Selecionar suas necessidades específicas</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                2
              </span>
              <span>Ajustar configurações de acessibilidade</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                3
              </span>
              <span>Personalizar suas preferências</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                4
              </span>
              <span>Começar a usar a plataforma</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <OnboardingNavigation
        nextLabel="Começar Configuração"
        showBack={false}
      />
    </motion.div>
  );
} 