"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { OnboardingRedirect } from "@/components/onboarding/OnboardingRedirect";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const router = useRouter();

  return (
    <OnboardingRedirect>
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Bem-vindo ao{" "}
                    <span className="text-primary">InclusiveAID</span>
                  </h1>
                  <p className="text-xl text-muted-foreground sm:text-2xl">
                    Uma plataforma inclusiva que ajuda pessoas com deficiência a
                    navegar e interagir com o mundo digital de forma mais acessível e
                    independente.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push("/onboarding")}
                    className={cn(
                      "inline-flex h-12 items-center justify-center rounded-lg px-8",
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                      "transition-colors focus-visible:outline-none focus-visible:ring-2",
                      "focus-visible:ring-primary focus-visible:ring-offset-2"
                    )}
                  >
                    Começar Agora
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push("/about")}
                    className={cn(
                      "inline-flex h-12 items-center justify-center rounded-lg px-8",
                      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                      "transition-colors focus-visible:outline-none focus-visible:ring-2",
                      "focus-visible:ring-primary focus-visible:ring-offset-2"
                    )}
                  >
                    Saiba Mais
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t bg-muted/5 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-8 sm:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Acessibilidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Recursos adaptados para diferentes necessidades
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Inclusão</h3>
                  <p className="text-sm text-muted-foreground">
                    Plataforma pensada para todos os usuários
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Inovação</h3>
                  <p className="text-sm text-muted-foreground">
                    Tecnologias assistivas de ponta
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </OnboardingRedirect>
  );
} 