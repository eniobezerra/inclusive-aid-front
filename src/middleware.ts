import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Lista de rotas que requerem onboarding completo
const protectedRoutes = ["/dashboard", "/profile", "/settings"];

// Lista de rotas do onboarding
const onboardingRoutes = [
  "/onboarding",
  "/onboarding/disability",
  "/onboarding/accessibility",
  "/onboarding/preferences",
  "/onboarding/complete",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar se o onboarding está completo
  const onboardingComplete = request.cookies.get("onboardingComplete")?.value === "true";

  // Se o usuário tentar acessar uma rota protegida sem completar o onboarding
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !onboardingComplete) {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  // Se o usuário tentar acessar o onboarding após completá-lo
  if (onboardingRoutes.some((route) => pathname.startsWith(route)) && onboardingComplete) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Se o usuário estiver no onboarding, garantir que siga a sequência correta
  if (pathname.startsWith("/onboarding")) {
    const currentStep = parseInt(request.cookies.get("onboardingStep")?.value || "1");
    const stepOrder = {
      "/onboarding": 1,
      "/onboarding/disability": 2,
      "/onboarding/accessibility": 3,
      "/onboarding/preferences": 4,
      "/onboarding/complete": 5,
    };

    const requestedStep = stepOrder[pathname as keyof typeof stepOrder] || 1;

    // Se o usuário tentar pular etapas
    if (requestedStep > currentStep + 1) {
      const nextStep = Object.entries(stepOrder).find(
        ([_, step]) => step === currentStep + 1
      )?.[0];
      return NextResponse.redirect(new URL(nextStep || "/onboarding", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
}; 