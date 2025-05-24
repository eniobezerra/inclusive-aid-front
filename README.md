# InclusiveAID - Assistente de Inclusão Digital

## 📋 Sobre o Projeto

InclusiveAID é uma plataforma web moderna focada em promover a inclusão digital e acessibilidade para todos os usuários. Desenvolvida com tecnologias atuais e seguindo as melhores práticas de acessibilidade, a plataforma visa tornar a experiência digital mais inclusiva e adaptável às necessidades de cada usuário.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de dados
- **Next Themes** - Gerenciamento de temas (claro/escuro)
- **Framer Motion** - Animações
- **Headless UI** - Componentes acessíveis
- **Lucide React** - Ícones

## 🏗️ Estrutura do Projeto

```
inclusive-aid-front/
├── src/
│   ├── app/                    # Diretório principal do Next.js 13+
│   │   ├── (auth)/            # Rotas de autenticação
│   │   ├── (dashboard)/       # Rotas do dashboard
│   │   ├── onboarding/        # Fluxo de onboarding
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página inicial
│   ├── components/            # Componentes reutilizáveis
│   │   ├── providers/         # Provedores (Theme, Auth, etc)
│   │   ├── common/           # Componentes comuns
│   │   ├── forms/            # Componentes de formulário
│   │   └── accessibility/    # Componentes de acessibilidade
│   ├── styles/               # Estilos adicionais
│   └── types/                # Definições de tipos TypeScript
├── public/                   # Arquivos estáticos
├── docs/                     # Documentação do projeto
│   ├── dev-context/         # Documentos de desenvolvimento
│   └── ui-context/          # Mockups e design
└── package.json             # Dependências e scripts
```

## 🎨 Sistema de Design

O projeto utiliza um sistema de design consistente com:

- **Temas**: Suporte a tema claro e escuro
- **Cores**: Paleta de cores acessível e customizável
- **Tipografia**: Fonte Inter para melhor legibilidade
- **Componentes**: Biblioteca de componentes reutilizáveis
- **Acessibilidade**: Implementação de WCAG 2.1

### Variáveis de Tema

O projeto utiliza variáveis CSS personalizadas para cores e estilos:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... outras variáveis ... */
}
```

## ♿ Recursos de Acessibilidade

- **Foco Visível**: Estilos de foco personalizados para melhor navegação
- **Alto Contraste**: Suporte a modo de alto contraste
- **Redução de Movimento**: Respeita preferências de redução de movimento
- **Semântica HTML**: Uso apropriado de elementos HTML
- **ARIA Labels**: Atributos ARIA quando necessário
- **Navegação por Teclado**: Suporte completo a navegação por teclado

## 🛠️ Configuração do Ambiente

1. **Pré-requisitos**
   - Node.js 18.x ou superior
   - npm 9.x ou superior

2. **Instalação**
   ```bash
   # Clone o repositório
   git clone [URL_DO_REPOSITÓRIO]

   # Instale as dependências
   npm install

   # Inicie o servidor de desenvolvimento
   npm run dev
   ```

3. **Scripts Disponíveis**
   - `npm run dev` - Inicia o servidor de desenvolvimento
   - `npm run build` - Cria a build de produção
   - `npm run start` - Inicia o servidor de produção
   - `npm run lint` - Executa o linter

## 🔧 Configurações Técnicas

### TypeScript
- Configuração estrita para melhor qualidade de código
- Path aliases configurados (@/*)
- Suporte a tipos do Next.js

### Tailwind CSS
- Configuração customizada com tema próprio
- Plugins para animações
- Sistema de cores acessível

### ESLint e Prettier
- Configuração para Next.js
- Regras de acessibilidade
- Formatação consistente de código

## 📱 Responsividade

O projeto é totalmente responsivo, utilizando:
- Design mobile-first
- Breakpoints do Tailwind CSS
- Componentes adaptáveis
- Imagens responsivas

## 🔐 Segurança

- Validação de dados com Zod
- Proteção contra CSRF
- Sanitização de inputs
- Headers de segurança do Next.js

## 🌐 Internacionalização

- Suporte a múltiplos idiomas (inicialmente pt-BR)
- Componentes preparados para i18n
- Formatação de datas e números

## 📈 Próximos Passos

1. Implementação do fluxo de onboarding
2. Sistema de autenticação
3. Dashboard principal
4. Configurações de acessibilidade
5. Integração com backend

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 