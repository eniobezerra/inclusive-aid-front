"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";

export default function OnboardingCompletePage() {
  const router = useRouter();

  useEffect(() => {
    // Aqui você pode fazer uma chamada à API para salvar todas as configurações
    // e criar o perfil do usuário
    const saveUserSettings = async () => {
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

        // TODO: Implementar chamada à API para salvar as configurações
        console.log("Salvando configurações:", {
          disabilitySettings,
          accessibilitySettings,
          userPreferences,
        });

        // Limpar localStorage após salvar
        localStorage.removeItem("selectedDisabilities");
        localStorage.removeItem("accessibilitySettings");
        localStorage.removeItem("userPreferences");
      } catch (error) {
        console.error("Erro ao salvar configurações:", error);
      }
    };

    saveUserSettings();
  }, []);

  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  return (
    <OnboardingLayout currentStep={5} totalSteps={5}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center"
        >
          <span className="text-4xl">🎉</span>
        </motion.div>

        <div>
          <h1 className="text-4xl font-bold mb-4">
            Tudo Pronto!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Suas configurações foram salvas com sucesso. Agora você pode começar
            a usar a plataforma com uma experiência personalizada para suas
            necessidades.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">
            O que você pode fazer agora:
          </h2>
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li>Explorar recursos disponíveis</li>
            <li>Conectar-se com outros usuários</li>
            <li>Personalizar ainda mais suas configurações</li>
            <li>Acessar conteúdo adaptado às suas necessidades</li>
          </ul>
        </motion.div>

        <div className="pt-8">
          <button
            onClick={handleGetStarted}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-lg"
          >
            Começar a Usar
          </button>
        </div>
      </motion.div>
    </OnboardingLayout>
  );
} 