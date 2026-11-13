# InfoHub FAMINAS — Estágios

Página de autoatendimento do Núcleo de Práticas e Estágios da FAMINAS. O site reúne orientações sobre as modalidades de estágio, etapas de formalização, dúvidas frequentes e canais oficiais de atendimento em uma interface responsiva.

> **A página inicial é `index.html`, mantida na raiz do repositório** para publicação direta pelo GitHub Pages.

## Conteúdo do site

- **Modalidades de estágio:** diferenças entre estágio obrigatório e não obrigatório.
- **Jornada do estágio:** etapas, documentos, prazos e orientações para formalizar e validar o estágio.
- **Perguntas frequentes:** respostas às principais dúvidas de estudantes.
- **Atendimento e suporte:** telefone, WhatsApp, e-mail e informações de atendimento presencial.
- **Equipe de desenvolvedores:** apresentação dos estudantes responsáveis pelo projeto.

## Tecnologias

- HTML5 semântico
- CSS3 responsivo
- JavaScript nativo com módulos ES
- Google Fonts e Material Symbols para tipografia e ícones

Não é necessário instalar dependências nem executar uma etapa de build. As fontes e os ícones são carregados de serviços externos e precisam de conexão com a internet.

## Estrutura do repositório

```text
.
├── index.html                 # Página inicial; deve permanecer na raiz para o GitHub Pages
├── README.md                  # Apresentação e instruções do projeto
├── assets/
│   └── images/
│       ├── arthur.jpeg        # Foto de integrante da equipe
│       ├── heitor.jpeg        # Foto de integrante da equipe
│       ├── jose.jpeg          # Foto de integrante da equipe
│       └── logo-faminas.png   # Logotipo institucional
├── css/
│   ├── base.css               # Reset, estilos base e utilitários
│   ├── custom.css             # Estilos específicos da página de Estágios
│   ├── layout.css             # Cabeçalho, seções e rodapé
│   ├── modais.css             # Estilos dos modais institucionais
│   └── variables.css          # Tokens de cores, tipografia e espaçamento
├── docs/
│   ├── design-system.md       # Referência visual do projeto
│   ├── reference-layout.html  # Protótipo visual de referência; não é a página publicada
│   └── references/
│       └── faq-source.odt     # Material de referência das perguntas frequentes
└── js/
    ├── app.js                 # Inicialização da aplicação
    └── modal-controller.js    # Comportamento dos modais institucionais
```

## Executar localmente

Clone o repositório:

```bash
git clone https://github.com/ArthurTorresDev/InfoHub-Faminas-Template.git
cd InfoHub-Faminas-Template
```

Inicie um servidor estático na raiz do projeto:

```bash
python3 -m http.server 8000
```

Abra [`http://localhost:8000`](http://localhost:8000) no navegador. Como alternativa, abra a pasta no Visual Studio Code e use a extensão Live Server.

## Publicar no GitHub Pages

1. Envie o projeto para um repositório GitHub.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione a branch de publicação (por exemplo, `main`) e a pasta **`/(root)`**.
5. Salve e aguarde a conclusão da publicação. O endereço será exibido na própria página de configurações do GitHub Pages.

O GitHub Pages serve `index.html` automaticamente quando ele está na raiz selecionada. Mantenha os caminhos relativos dos arquivos (`./css/`, `./js/` e `./assets/`) para que os estilos, scripts e imagens também funcionem quando o site for publicado em um subdiretório.

## Manutenção

- Atualize o conteúdo institucional somente com informações confirmadas pelo setor responsável.
- Preserve `index.html` na raiz e verifique se os caminhos de CSS, JavaScript e imagens permanecem válidos.
- Mantenha os arquivos institucionais de base em `css/`; os estilos específicos desta página ficam em `css/custom.css`.
- Teste a navegação, os modais, os links de contato e o layout em telas de celular e desktop antes de publicar.

## Créditos

Projeto acadêmico de extensão desenvolvido por estudantes de Análise e Desenvolvimento de Sistemas (ADS), na disciplina de Engenharia de Software da FAMINAS.
