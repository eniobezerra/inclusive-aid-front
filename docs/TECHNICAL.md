# Documentação Técnica - InclusiveAID

## Arquitetura do Projeto

### 1. Estrutura de Diretórios

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Grupo de rotas de autenticação
│   │   ├── login/          # Página de login
│   │   └── register/       # Página de registro
│   ├── (dashboard)/        # Grupo de rotas do dashboard
│   │   ├── home/          # Dashboard principal
│   │   ├── settings/      # Configurações
│   │   └── accessibility/ # Configurações de acessibilidade
│   ├── onboarding/        # Fluxo de onboarding
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/             # Componentes React
│   ├── providers/         # Provedores de contexto
│   ├── common/           # Componentes comuns
│   ├── forms/            # Componentes de formulário
│   └── accessibility/    # Componentes de acessibilidade
├── styles/                # Estilos adicionais
└── types/                 # Definições TypeScript
```

### 2. Configuração do Next.js

O projeto utiliza o App Router do Next.js 14, que oferece:
- Roteamento baseado em arquivos
- Suporte a layouts aninhados
- Grupos de rotas
- Server Components por padrão
- Streaming e Suspense

### 3. Sistema de Temas

#### 3.1 Implementação

O sistema de temas é implementado usando:
- `next-themes` para gerenciamento de temas
- Variáveis CSS para definição de cores
- Suporte a tema do sistema
- Transições suaves entre temas

```typescript
// src/components/providers/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

#### 3.2 Variáveis de Tema

As variáveis de tema são definidas em `globals.css`:

```css
:root {
  /* Cores base */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  
  /* Cores primárias */
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  
  /* Cores secundárias */
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  
  /* ... outras variáveis ... */
}

.dark {
  /* Sobrescreve variáveis para tema escuro */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... outras variáveis ... */
}
```

### 4. Acessibilidade

#### 4.1 Implementações Atuais

1. **Foco Visível**
```css
:focus-visible {
  @apply outline-none ring-2 ring-primary ring-offset-2 ring-offset-background;
}
```

2. **Alto Contraste**
```css
@media (forced-colors: active) {
  :focus-visible {
    @apply outline-2 outline outline-offset-2 outline-primary;
  }
}
```

3. **Redução de Movimento**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

#### 4.2 Práticas de Acessibilidade

- Uso de elementos semânticos HTML5
- Atributos ARIA quando necessário
- Suporte a navegação por teclado
- Contraste de cores adequado
- Textos alternativos para imagens
- Mensagens de erro acessíveis

### 5. TypeScript

#### 5.1 Configuração

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### 5.2 Tipos Personalizados

```typescript
// src/types/accessibility.ts
export interface AccessibilityPreferences {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: number;
  // ... outros tipos
}

// src/types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  preferences: AccessibilityPreferences;
  // ... outros campos
}
```

### 6. Tailwind CSS

#### 6.1 Configuração

```typescript
// tailwind.config.ts
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores do tema
      },
      // ... outras extensões
    }
  },
  plugins: [require("tailwindcss-animate")],
};
```

#### 6.2 Classes Utilitárias Personalizadas

```css
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .focus-ring {
    @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
  }
}
```

### 7. Formulários e Validação

#### 7.1 React Hook Form + Zod

```typescript
// Exemplo de validação de formulário
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof formSchema>;

function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  
  // ... implementação do formulário
}
```

### 8. Performance

#### 8.1 Otimizações Implementadas

- Server Components por padrão
- Lazy loading de componentes
- Otimização de imagens
- Minificação de CSS/JS
- Caching adequado

#### 8.2 Métricas de Performance

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)

### 9. Segurança

#### 9.1 Implementações

- Validação de dados com Zod
- Sanitização de inputs
- Headers de segurança
- Proteção CSRF
- Rate limiting

### 10. Próximos Passos Técnicos

1. **Autenticação**
   - Implementar NextAuth.js
   - Configurar providers
   - Gerenciar sessões

2. **API Routes**
   - Definir endpoints
   - Implementar handlers
   - Configurar middleware

3. **Estado Global**
   - Implementar gerenciamento de estado
   - Definir stores
   - Configurar persistência

4. **Testes**
   - Configurar Jest
   - Implementar testes unitários
   - Adicionar testes E2E

5. **CI/CD**
   - Configurar GitHub Actions
   - Implementar pipeline
   - Adicionar verificações automáticas 