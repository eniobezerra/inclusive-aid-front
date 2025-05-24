"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOnboardingContext } from "@/contexts/OnboardingContext";

interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
  duration?: number;
}

interface OnboardingNotificationProps {
  notifications: Notification[];
  onDismiss: (id: string) => void;
}

const notificationStyles = {
  info: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  success: "bg-green-500/10 text-green-500 border-green-500/20",
  warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  error: "bg-red-500/10 text-red-500 border-red-500/20",
};

const icons = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
};

export function OnboardingNotification({
  notifications,
  onDismiss,
}: OnboardingNotificationProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className={`p-4 rounded-lg border ${notificationStyles[notification.type]} shadow-lg max-w-sm`}
          >
            <div className="flex items-start gap-3">
              <span className="text-lg">{icons[notification.type]}</span>
              <p className="flex-1 text-sm">{notification.message}</p>
              <button
                onClick={() => onDismiss(notification.id)}
                className="text-current hover:opacity-70 transition-opacity"
              >
                ✕
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Hook para gerenciar notificações
export function useOnboardingNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { currentStep } = useOnboardingContext();

  const addNotification = (notification: Omit<Notification, "id">) => {
    const id = Math.random().toString(36).substring(7);
    setNotifications((prev) => [...prev, { ...notification, id }]);

    if (notification.duration) {
      setTimeout(() => {
        dismissNotification(id);
      }, notification.duration);
    }
  };

  const dismissNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  // Notificações automáticas baseadas no passo atual
  useEffect(() => {
    const stepNotifications: Record<number, Notification> = {
      1: {
        type: "info",
        message:
          "Bem-vindo ao InclusiveAID! Vamos configurar sua experiência personalizada.",
        duration: 5000,
      },
      2: {
        type: "info",
        message:
          "Selecione as opções que melhor descrevem suas necessidades. Você pode selecionar mais de uma opção.",
        duration: 5000,
      },
      3: {
        type: "info",
        message:
          "Ajuste as configurações de acessibilidade de acordo com suas preferências.",
        duration: 5000,
      },
      4: {
        type: "info",
        message:
          "Escolha suas preferências para personalizar ainda mais sua experiência.",
        duration: 5000,
      },
      5: {
        type: "success",
        message:
          "Parabéns! Sua configuração inicial está completa. Você pode alterar essas configurações a qualquer momento.",
        duration: 5000,
      },
    };

    const notification = stepNotifications[currentStep];
    if (notification) {
      addNotification(notification);
    }
  }, [currentStep]);

  return {
    notifications,
    addNotification,
    dismissNotification,
  };
} 