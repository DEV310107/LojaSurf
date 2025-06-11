#📘 Documentação Alhoa Pump

## Informações Gerais

- **Setor de atuação:** Moda e esportes aquáticos / e-commerce
- **Objetivo do Site:**
    - Vender pranchas de surf prontas ou personalizadas
    - Proporcionar uma experiência interativa de design
    - Facilitar o contato com potenciais clientes
- **Indicadores de sucesso:**
    - Número de pranchas vendidas (padrão e personalizadas)
    - Tempo médio de personalização
    - Taxa de conversão (visualização → compra)
    - Engajamento no contato (cliques em WhatsApp, e‑mail, telefone)
- **Público-alvo:**
    - Surfistas iniciantes e avançados
    - Apaixonados por esportes aquáticos
    - Público que valoriza customização visual em produtos
- **Concorrência e Referências:**
    - **ACTC – Casa do Coração**
        - Site institucional com opções de doação única/mensal, NF paulista
        - Sugestão: incorporar modalidades de doação/venda com opções pré-definidas
    - **Amparai**
        - Doações por QR Code, identidade “ai”
        - Pistas para estilo de call-to-action interativo
    - **Amigos do Bem**
        - Doações segmentadas por área, suporte internacional
        - Inspiração: permitir presentes, doações em dinheiro, presentes físicos
    - **Projeto Vida Corrida**
        - Patrocínios (como Nike), apadrinhamento
        - Potencial para parcerias ou kits patrocinados
- **Referências visuais e de fluxo:**
    - Links: ACTC, Amparai, Amigos do Bem, Projeto Vida Corrida
    - Acesse o design no Figma:
        
        [**Figma – Aloha Pump Design**](https://www.figma.com/design/l5RVXvREFNmHTFEoYYVaU5/Untitled?node-id=0-1&p=f&t=LuyoZblGo8m6IUI7-0)
        

## Estrutura de Pastas

```markdown
static/
├── img/
│   ├── Documentação.jpg
│   ├── 1.png
│   ├── long.png
├── personalização3.png
├── personalização6_dark.png
├── produto claro 6.png
├── produto dark 6.png
├── social branco 7.png
├── social preto 8.png
├── script/
│   ├── carrossel.js
│   ├── digitador.js
│   ├── menu.js
│   ├── modo_escuro.js
│   ├── personaliza.js
├── style/
│   ├── edit_darkmode.css
│   ├── main.css
│   ├── navbar.css
│   ├── personaliza.css
│   ├── produtos.css
│   ├── social.css
├── templates/
│   ├── personaliza.html
│   ├── produtos.html
│   ├── social.html
├── index.html
```

## Descrição dos Arquivos

### Arquivos HTML

1. **index.html**
    - Descrição: Página inicial do site, contendo o cabeçalho com navegação, seções principais (Menu, Produtos, Personalização, Social) e um carrossel.
    - Funcionalidades:
        - Navegação fixa com menu hamburguer.
        - Carrossel de imagens com botões de navegação.
        - Efeito de digitação no título.
    - Scripts/CSS Vinculados: menu.js, carrossel.js, digitador.js, navbar.css, main.css.
    - Imagem Ilustrativa:
    [Página Inicial](https://github.com/DEV310107/LojaSurf/blob/main/static/img%20Documenta%C3%A7%C3%A3o/1.png)
    Descrição: Captura da página inicial com o texto "Bem Vindo, Aloha Pump" e um surfista em ação.
2. **produtos.html**
    - Descrição: Página de produtos, exibindo uma grade de cards com informações de pranchas (imagens, nomes, descrições e preços).
    - Funcionalidades:
        - Modo escuro alternável.
        - Botões de compra por card.
    - Scripts/CSS Vinculados: modo_escuro.js, edit_darkmode.css, produtos.css.
    - Imagem Ilustrativa:
    [Página de Produtos](https://github.com/DEV310107/LojaSurf/blob/main/static/img%20Documenta%C3%A7%C3%A3o/produto%20dark%205.png)
    Descrição: Captura da página de produtos mostrando uma grade de pranchas com preços e botões de compra.
3. **personaliza.html**
    - Descrição: Página para personalização de pranchas, com formulário interativo.
    - Funcionalidades:
        - Seleção de formato, tamanho, cor e nome.
        - Opção de incluir quilhas.
        - Prévia da prancha personalizada.
        - Modo escuro alternável.
    - Scripts/CSS Vinculados: personaliza.js, modo_escuro.js, edit_darkmode.css, personaliza.css.
    - Imagem Ilustrativa:
    [Página de Personalização - Modo Claro](https://github.com/DEV310107/LojaSurf/blob/main/static/img%20Documenta%C3%A7%C3%A3o/personaliza%C3%A7%C3%A3o%203.png)
    Descrição: Captura da página de personalização em modo claro com formulário preenchido.
    [Página de Personalização - Modo Escuro](https://github.com/DEV310107/LojaSurf/blob/main/static/img%20Documenta%C3%A7%C3%A3o/personaliza%C3%A7%C3%A3o%20dark4.png)
    Descrição: Captura da página de personalização em modo escuro com formulário preenchido.
4. **social.html**
    - Descrição: Página de contato com links para telefone, WhatsApp e e-mail.
    - Funcionalidades:
        - Modo escuro alternável.
        - Links clicáveis para contato.
    - Scripts/CSS Vinculados: modo_escuro.js, alertas_social.js, edit_darkmode.css, social.css.
    - Imagem Ilustrativa:
    [Página de Contato - Modo Escuro](https://github.com/DEV310107/LojaSurf/blob/main/static/img%20Documenta%C3%A7%C3%A3o/social%20preto%208.png)
    Descrição: Captura da página de contato em modo escuro com links de telefone, WhatsApp e e-mail.
    [Página de Contato - Modo Claro](https://github.com/DEV310107/LojaSurf/blob/main/static/img%20Documenta%C3%A7%C3%A3o/social%20branco%207.png)
    Descrição: Captura da página de contato em modo claro com links de telefone, WhatsApp e e-mail.

### Arquivos CSS

1. **navbar.css**
    - Descrição: Estiliza o cabeçalho e a navegação fixa, incluindo animações para o menu hamburguer.
    - Características: Efeito sticky, fundo translúcido, transições animadas.
2. **main.css**
    - Descrição: Estiliza as seções da página inicial, incluindo o carrossel e botões.
    - Características: Fundo escuro, texto centralizado, animação de botões.
3. **produtos.css**
    - Descrição: Estiliza a grade de cards na página de produtos.
    - Características: Layout em grid, hover effects, responsividade.
4. **personaliza.css**
    - Descrição: Estiliza o formulário e a prévia na página de personalização.
    - Características: Design limpo, sombra suave, layout centrado.
5. **social.css**
    - Descrição: Estiliza a seção de contato.
    - Características: Fundo escuro, botões estilizados, hover effects.
6. **edit_darkmode.css**
    - Descrição: Controla o tema escuro para todas as páginas.
    - Características: Alternância de cores de fundo, texto e inputs.

### Arquivos JavaScript

1. **carrossel.js**
    - Descrição: Gerencia o carrossel de imagens na página inicial.
    - Funcionalidades: Navegação manual, efeito de fade.
2. **digitador.js**
    - Descrição: Adiciona efeito de digitação ao título na página inicial.
    - Funcionalidades: Animação de texto caractere por caractere.
3. **menu.js**
    - Descrição: Controla a navegação e o menu hamburguer.
    - Funcionalidades: Scroll suave, toggle do menu, fechamento ao clicar fora.
4. **modo_escuro.js**
    - Descrição: Gerencia o modo escuro.
    - Funcionalidades: Alternância de tema, persistência via localStorage.
5. **personaliza.js**
    - Descrição: Gerencia a prévia da prancha personalizada.
    - Funcionalidades: Atualização dinâmica da prévia com base no formulário.

## Funcionalidades Principais

- Navegação Responsiva: Menu hamburguer que se expande em telas menores.
- Modo Escuro: Alternância entre temas claro e escuro, salva no localStorage.
- Carrossel: Exibição de imagens com navegação manual.
- Personalização: Formulário interativo para criar pranchas personalizadas.
- Produtos: Grade de cards com detalhes de pranchas.
- Contato: Links para comunicação direta.
