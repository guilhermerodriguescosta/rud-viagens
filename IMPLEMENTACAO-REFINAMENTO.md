# Refinamento da Rud Viagens — revisão local

Publicação desta revisão autorizada pelo usuário em 06/10/2026, sem aguardar os depoimentos. Os relatos reais serão incluídos em uma atualização posterior.

## Depoimentos para atualização posterior

- Receber de 3 a 6 depoimentos com texto e identificação aprovados para uso no site. Fotos são opcionais e também precisam de autorização.
- Inserir a seção “Quem viajou com a Rud Viagens” no ponto marcado em `index.html`, entre Experiências reais e Serviços, usando elementos `blockquote` e identificação do autor.
- Revisar os depoimentos e o conjunto da página no computador e no celular antes de publicar.

Não foram criados depoimentos fictícios nem uma seção vazia visível aos visitantes.

## Etapa posterior

CNPJ, e-mail institucional e textos aprovados de Privacidade e Termos ainda não foram fornecidos. O rodapé apresenta somente WhatsApp e Instagram confirmados, sem links vazios.

## Critérios editoriais

- Home sem preços; investimento de R$ 800 somente na página da consultoria.
- Planejamento incluído na contratação; atendimento online.
- Suporte durante viagens pelo WhatsApp com disponibilidade combinada antes do embarque.
- Acompanhamento individual da consultoria nas primeiras compras, primeira transferência e primeira emissão, sem prazo fixo e sem promessa de atendimento permanente.
- Experiências personalizáveis: duração sugerida, datas e inclusões confirmadas na proposta.
- Fotos de experiências reais selecionadas do acervo identificado em `assets/galerias/CREDITOS.md`; registros de origem e atribuição preservados nos arquivos de referência. Links de créditos removidos da home e das seis páginas de experiências a pedido do usuário.
- CSS da revisão em arquivo separado, carregado apenas na home, consultoria e experiências terrestres. Páginas de Cruzeiros preservadas.

## Verificações realizadas

- Home: sete cards, nove serviços, quatro etapas e todos os CTAs de WhatsApp com o número configurado.
- Home, seis destinos, consultoria e Cruzeiros: sem rolagem horizontal nos viewports de 1680 e 390 px; home e consultoria também verificadas em 320 px.
- Menu móvel abre e fecha após selecionar uma seção; contatos flutuantes são ocultados enquanto o menu está aberto.
- FAQ abre a resposta do planejamento; galeria da Chapada Diamantina abre, avança de 1 para 2 de 12 fotos e fecha.
- Estrutura HTML, títulos principais, arquivos de imagens, links locais, âncoras, codificação e nome da agência conferidos nas oito páginas modificadas.
- Arquivos de Cruzeiros, dados das companhias e CSS original comparados com HEAD e preservados. A única mudança no JavaScript compartilhado mantém os contatos do rodapé na home, dentro da condição que exclui páginas de roteiros.
- `git diff --check` concluído sem erros de whitespace. Publicação autorizada após a revisão local.
