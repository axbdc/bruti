export type DietLabel = "Vegetariano" | "Vegan" | "Sem glúten" | "Picante";

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  extras?: { label: string; price: string }[];
  labels?: DietLabel[];
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    items: [
      {
        name: "Burrata Pugliese",
        price: "16,00",
        description:
          "Burrata cremosa com tomate coração de boi, manjericão fresco, pão da casa tostado e redução de balsâmico envelhecido.",
        labels: ["Vegetariano"],
      },
      {
        name: "Vitello Tonnato",
        price: "18,50",
        description:
          "Vitela tenra fatiada finamente com creme de atum, alcaparras e limão siciliano.",
      },
      {
        name: "Carpaccio di Manzo",
        price: "19,00",
        description:
          "Lombo de novilho, rúcula selvagem, parmigiano reggiano 24 meses, azeite trufado.",
        extras: [{ label: "Adicionar burrata", price: "+ 4,00" }],
      },
      {
        name: "Melanzane alla Parmigiana",
        price: "14,50",
        description:
          "Beringela em camadas com molho de tomate San Marzano, mozzarella fior di latte e parmigiano.",
        labels: ["Vegetariano"],
      },
    ],
  },
  {
    id: "pizze",
    title: "Pizzas Napolitanas",
    items: [
      {
        name: "Margherita D.O.P.",
        price: "13,50",
        description:
          "Tomate San Marzano, mozzarella fior di latte, manjericão fresco, azeite virgem-extra.",
        labels: ["Vegetariano"],
      },
      {
        name: "Margherita con Bufala",
        price: "16,00",
        description:
          "Tomate San Marzano, mozzarella di bufala D.O.P., manjericão e azeite do sul.",
        labels: ["Vegetariano"],
      },
      {
        name: "Diavola",
        price: "15,50",
        description:
          "Tomate, mozzarella, salame picante italiano, nduja calabresa, mel de castanheiro.",
        labels: ["Picante"],
      },
      {
        name: "Prosciutto & Funghi",
        price: "16,50",
        description:
          "Tomate, mozzarella, presunto di Parma 24 meses, cogumelos salteados, trufa negra.",
      },
      {
        name: "Quattro Formaggi",
        price: "16,00",
        description:
          "Mozzarella, gorgonzola dolce, taleggio, parmigiano reggiano e nozes tostadas.",
        labels: ["Vegetariano"],
        extras: [{ label: "Adicionar mel trufado", price: "+ 2,00" }],
      },
      {
        name: "Tartufo Nero",
        price: "22,00",
        description:
          "Base bianca com mozzarella, stracciatella, cogumelos porcini, trufa negra fresca laminada.",
        labels: ["Vegetariano"],
      },
      {
        name: "Bruti Special",
        price: "19,50",
        description:
          "Tomate San Marzano, mozzarella di bufala, nduja, rúcula selvagem, lascas de parmigiano.",
        labels: ["Picante"],
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta & Risotti",
    items: [
      {
        name: "Tagliatelle al Tartufo Nero",
        price: "24,00",
        description:
          "Massa fresca artesanal, manteiga noisette, parmigiano e trufa negra fresca laminada.",
        labels: ["Vegetariano"],
      },
      {
        name: "Carbonara Romana",
        price: "17,50",
        description:
          "Esparguete, guanciale crocante, ovos de campo, pecorino romano D.O.P. e pimenta preta.",
      },
      {
        name: "Risotto ai Frutti di Mare",
        price: "23,00",
        description:
          "Arroz carnaroli com camarão, vieiras, lulas, amêijoas e bisque cremoso de marisco.",
      },
      {
        name: "Lasagna della Nonna",
        price: "18,00",
        description:
          "Ragu bolonhês cozinhado 6 horas, béchamel de noz-moscada, parmigiano 24 meses.",
      },
      {
        name: "Ravioli di Zucca",
        price: "19,50",
        description:
          "Ravioli artesanal de abóbora e amaretti, manteiga de salva, amêndoa crocante.",
        labels: ["Vegetariano"],
      },
    ],
  },
  {
    id: "dolci",
    title: "Sobremesas",
    items: [
      {
        name: "Tiramisù della Casa",
        price: "9,00",
        description:
          "Mascarpone cremoso, biscoitos savoiardi embebidos em espresso, cacau em pó.",
        labels: ["Vegetariano"],
      },
      {
        name: "Panna Cotta ai Frutti di Bosco",
        price: "8,50",
        description:
          "Nata cozida em baunilha de Madagáscar, compota caseira de frutos silvestres.",
        labels: ["Vegetariano", "Sem glúten"],
      },
      {
        name: "Cannoli Siciliani",
        price: "9,00",
        description:
          "Massa crocante recheada com ricota de ovelha, pistácio, laranja cristalizada.",
        labels: ["Vegetariano"],
      },
      {
        name: "Affogato al Caffè",
        price: "7,50",
        description:
          "Gelado artesanal de fior di latte afogado em espresso duplo e amaretto.",
        labels: ["Vegetariano", "Sem glúten"],
      },
    ],
  },
  {
    id: "bevande",
    title: "Cocktails & Vinhos",
    items: [
      {
        name: "Negroni Classico",
        price: "12,00",
        description:
          "Gin, Campari, vermute tinto rosso. Mexido, servido sobre pedra grande, casca de laranja.",
      },
      {
        name: "Aperol Spritz",
        price: "9,00",
        description:
          "Aperol, prosecco DOC, água gaseificada, rodela de laranja.",
      },
      {
        name: "Espresso Martini",
        price: "13,00",
        description:
          "Vodka, espresso duplo, licor de café, xarope de baunilha. Batido, servido frio.",
      },
      {
        name: "Amaro Montenegro",
        price: "7,00",
        description:
          "Servido fresco como digestivo. Notas de especiarias e laranja.",
      },
      {
        name: "Selezione di Vini",
        price: "da taça",
        description:
          "Escolha rotativa de vinhos italianos e portugueses em taça. Consultar o nosso staff.",
      },
    ],
  },
];
