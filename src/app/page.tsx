"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { OnboardingRedirect } from "@/components/onboarding/OnboardingRedirect";

export default function HomePage() {
  const router = useRouter();

  return (
    <OnboardingRedirect>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 max-w-2xl"
        >
          <h1 className="text-5xl font-bold">
            Bem-vindo ao{" "}
            <span className="text-primary">InclusiveAID</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Uma plataforma inclusiva que ajuda pessoas com deficiência a
            navegar e interagir com o mundo digital de forma mais acessível e
            independente.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/onboarding")}
              className="p-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Começar Agora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/about")}
              className="p-4 rounded-lg border border-input hover:bg-accent transition-colors"
            >
              Saiba Mais
            </motion.button>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Acessibilidade</h3>
              <p className="text-sm text-muted-foreground">
                Recursos adaptados para diferentes necessidades
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Inclusão</h3>
              <p className="text-sm text-muted-foreground">
                Plataforma pensada para todos os usuários
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold mb-2">Inovação</h3>
              <p className="text-sm text-muted-foreground">
                Tecnologias assistivas de ponta
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </OnboardingRedirect>
  );
} 