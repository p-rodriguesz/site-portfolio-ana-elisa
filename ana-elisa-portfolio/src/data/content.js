// ─── Informações pessoais ───────────────────────────────────────────────────
export const profile = {
  name: "Ana Elisa Alves",
  title: "Fashion Designer",
  location: "Brasília, DF",
  email: "anaelisasantos368@gmail.com", // substitua pelo e-mail real
  phone: "(61) 99613-1810",
  tagline: "FASHION IS A SELF-TRANSLATION",
  about: (
      <>
        <strong>Ana Elisa, 18 anos</strong>
        <br /><br />
        Estudante de Design de Moda no IESB com foco em criação de coleções conceituais e desenvolvimento de identidade visual. Apaixonada por transformar referências culturais e artísticas em peças que comunicam narrativas únicas.
      </>
  ),


  tags: [
    "Design de Moda",
    "Criação de Coleções",
    "Ilustração de Moda",
    "Pesquisa de Tendências",
    "Desenvolvimento de Produto",
  ],
};

// ─── Coleções ────────────────────────────────────────────────────────────────
// Substitua os src pelas suas imagens reais em /public/images/
export const collections = [
  {
    id: "colecao-01",
    title: "A PERSUASÃO DE DRAMA EM FLOR",          // substitua pelo nome real
    subtitle: "DRAMA EM FLOR",  // substitua pelo subtítulo real
    description: `Inspirada no barroco, esta coleção explora a dramaticidade, o excesso e o contraste como linguagem estética, traduzindo a natureza em sua forma mais intensa e emocional. Paisagens exuberantes e movimentos orgânicos servem como ponto de partida para silhuetas expressivas, volumes marcantes e jogos de luz e sombra.

A coleção propõe um diálogo entre arte, natureza e emoção, onde o vestuário se torna uma extensão da paisagem, denso, poético e profundamente sensorial.

Composta por peças que evocam a opulência barroca, com detalhes como corsets estruturados, saias volumosas e aplicações de flores. As linhas curvas, as texturas ricas e a paleta vibrante remetem a um jardim em expansão, onde cada peça é uma expressão da natureza em sua forma mais intensa e emocional.`,
    moodboard: "/images/moodboard-01.svg",   // placeholder
    croquis:   "/images/croquis-01.svg",     // placeholder
    looks: [
      {
        id: "look-01",
        title: "LOOK CONFECCIONADO PARA PASSARELA",
        description: `A peça traz uma releitura contemporânea do barroco, inspirada em suas paisagens exuberantes e na teatralidade das formas orgânicas. O corset estruturado, adornado por rosas volumosas, dialoga com a opulência barroca, enquanto a saia marcada por arabescos dourados e flores aplicadas remete ao crescimento sinuoso da natureza.

As linhas curvas, as texturas ricas e a paleta vibrante evocam um jardim em expansão, criando uma composição que celebra a beleza dramática e ornamental desse período artístico. Arames envolvidos com fita floral complementam o acessório dos braços.`,
        materials: (
            <>
         <div>
           <strong style={{ display: "block" }}>Conceito:</strong>
        <span>Barroco • Natureza • Luz e Claro</span>
         </div>
         <br/>
            <div>
              <strong style={{ display: "block" }}>Materiais:</strong>
              <span>Cetim Bucol • Fita de Gorgurão • Botões Pérola</span>
            </div>
         </>
        ),
        image: "/images/look-01.svg",        // placeholder
      },
      {
        id: "look-02",
        title: "SEGUNDO LOOK CRIADO",
        description: `Esse segundo look faz parte da minha segunda coleção, apresentada em outro desfile. Nesse trabalho, tivemos que desenvolver, em dupla, uma peça inspirada no Surrealismo, com elementos relacionados aos sonhos e a temas psicodélicos. Tivemos também influências como Alice no País das Maravilhas para a realização desse look.

O look apresenta um visual conceitual e impactante, misturando a leveza da organza com a estrutura do crepe. O destaque criativo fica para a aplicação de cartas de baralho na saia, que trazem movimento e narrativa à peça. O acabamento une o brilho do strass ao peso das correntes de metal, com elásticos garantindo o ajuste ao corpo.`,
        materials: (
            <>
              <div>
                <strong style={{ display: "block" }}>Conceito:</strong>
                <span>Surrealismo • Psicodelia • Alice no País das Maravilhas</span>
              </div>
              <br/>
              <div>
                <strong style={{ display: "block" }}>Materiais:</strong>
                <span>Organza • Correntes de Metal • Strass • Tecido Crepe • Cartas de Baralho</span>
              </div>
            </>
        ),

        image: "/images/look-02.svg",        // placeholder
      },
    ],
  },
  // Adicione mais coleções seguindo o mesmo padrão acima
];

// ─── Experiências ────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: "DF FASHION WEEK",
    title: "DF FASHION WEEK",
    period: "2025 – 2025",
    description: "Trabalhei no backstage do primeiro Distrito Federal Fashion Week, " +
        "contribuindo para a " +
        "produção e organização de um dos maiores eventos de moda de Brasília.",
  },
  {
    id: "METRÓPOLES CATWALK",
    title: "METRÓPOLES CATWALK",
    period: "2025 – 2025",
    description: "Participação ativa no backstage do Metrópoles Catwalk, " +
        "auxiliando na coordenação de " +
        "desfiles e styling durante o evento.",
  },
  {
    id: "EVENTOS UNB",
    title: "EVENTOS UNB",
    period: "2025 – 2025",
    description: "Colaboração em eventos de moda realizados na Universidade de Brasília, " +
        "ampliando conhecimento sobre a indústria da moda.",
  },
  {
    id: "I ENCONTRO DE MODA",
    title: "I ENCONTRO DE MODA",
    period: "2025 – 2025",
    description: "Participação como aluna no I Encontro " +
        " Moda de Brasília (UNB), com carga horária de 20 horas.",
  },
];

// ─── Certificados ────────────────────────────────────────────────────────────
export const certificates = [
  {
    id: "cert-01",
    title: "Nome do Certificado",
    image: "/images/certificado-01.svg",    // placeholder
  },
  {
    id: "cert-02",
    title: "Nome do Certificado",
    image: "/images/certificado-02.svg",    // placeholder
  },
];
