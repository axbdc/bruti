export type Lang = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      story: "História",
      menu: "Menu",
      instagram: "Instagram",
      reserve: "Reservar",
      visit: "Visitar",
    },
    hero: {
      tagline: "Muito mais do que Pizza!",
      ctaMenu: "Ver Menu",
      ctaReserve: "Reservar Mesa",
      scroll: "Rolar",
    },
    story: {
      eyebrow: "A Nossa História",
      title: "Tradição italiana,\nmão lisboeta.",
      body: [
        "No coração de Lisboa, o Bruti celebra a cozinha italiana autêntica com o respeito de quem a vive. Uma pizzaria e restaurante onde a pizza napolitana — de massa longa fermentação e cozedura em forno de lenha — é apenas o começo.",
        "Trabalhamos com produtores italianos selecionados e peixe fresco da costa portuguesa. Servimos clássicos com alma, pasta fresca feita na casa todos os dias e uma carta de vinhos que cruza regiões italianas com terroirs nacionais.",
        "Uma mesa. Uma garrafa de tinto. A conversa que se estende sem pressa.",
      ],
      signature: "A equipa Bruti",
    },
    menuDrawer: {
      title: "O Nosso Menu",
      subtitle: "Cozinha napolitana e clássicos italianos confecionados diariamente.",
      close: "Fechar menu",
      add: "Adicionar",
    },
    instagram: {
      eyebrow: "Instagram",
      title: "Siga-nos\n@pizzeriabruti",
      body: "Acompanhe bastidores, novos pratos e a vida do restaurante. Saiba o que sai do forno, da cozinha e da garrafeira antes de todos.",
      cta: "Ver mais no Instagram",
      placeholder: "Placeholder do widget Behold — substituir pelo snippet em src/components/InstagramSection.tsx",
    },
    reserve: {
      eyebrow: "Reservas",
      titlePre: "A sua mesa ",
      titleAccent: "à sua espera.",
      body: "As reservas online são geridas em tempo real pelo nosso parceiro Dig-In. Escolha o dia, a hora e o número de pessoas — confirmamos em segundos.",
      cta: "Reservar Mesa",
      via: "Reservas geridas via Dig-In",
      alternative: "Em alternativa",
      callLabel: "Chamar",
      cards: [
        {
          title: "Grupos",
          body: "Reservas até 12 pessoas online. Para grupos maiores, contacte-nos.",
        },
        {
          title: "Eventos Privados",
          body: "Aluguer integral do espaço para celebrações.",
        },
        {
          title: "Política",
          body: "Cancelamento gratuito até 4h antes da reserva.",
        },
      ],
    },
    visit: {
      eyebrow: "Visitar",
      title: "Avenida José Malhoa 14B, Lisboa",
      phoneLabel: "Telefone",
      hoursTitle: "Horário",
      hours: [
        "2ª a Sábado · 12:00 — 15:30",
        "2ª a Sábado · 19:00 — 23:00",
        "Encerrado ao domingo",
      ],
      mapCta: "Abrir no Google Maps",
    },
    footer: {
      tagline: "Pizzeria & Restaurante · Lisboa",
      rights: "Todos os direitos reservados.",
      credits: "Concebido com cuidado.",
      address: "Avenida José Malhoa 14B, 1070-159 Lisboa",
    },
  },
  en: {
    nav: {
      story: "Story",
      menu: "Menu",
      instagram: "Instagram",
      reserve: "Reserve",
      visit: "Visit",
    },
    hero: {
      tagline: "Much more than Pizza!",
      ctaMenu: "View Menu",
      ctaReserve: "Book a Table",
      scroll: "Scroll",
    },
    story: {
      eyebrow: "Our Story",
      title: "Italian tradition,\nLisbon hands.",
      body: [
        "In the heart of Lisbon, Bruti celebrates authentic Italian cuisine with the reverence of those who live it. A pizzeria and restaurant where Neapolitan pizza — long-fermented dough, wood-fired — is only the beginning.",
        "We work with selected Italian producers and fresh fish from the Portuguese coast. We serve soulful classics, fresh house-made pasta every day and a wine list that bridges Italian regions with native terroirs.",
        "One table. A bottle of red. The conversation that lingers.",
      ],
      signature: "The Bruti team",
    },
    menuDrawer: {
      title: "Our Menu",
      subtitle: "Neapolitan cooking and Italian classics prepared daily.",
      close: "Close menu",
      add: "Add",
    },
    instagram: {
      eyebrow: "Instagram",
      title: "Follow us\n@pizzeriabruti",
      body: "Follow behind-the-scenes, new dishes and restaurant life. See what comes out of the oven, kitchen and cellar before anyone else.",
      cta: "See more on Instagram",
      placeholder: "Behold widget placeholder — replace with snippet in src/components/InstagramSection.tsx",
    },
    reserve: {
      eyebrow: "Reservations",
      titlePre: "Your table ",
      titleAccent: "awaits.",
      body: "Online reservations are managed in real time by our partner Dig-In. Choose the day, time and party size — we confirm in seconds.",
      cta: "Book a Table",
      via: "Reservations managed via Dig-In",
      alternative: "Alternatively",
      callLabel: "Call",
      cards: [
        {
          title: "Groups",
          body: "Reservations up to 12 people online. For larger groups, contact us.",
        },
        {
          title: "Private Events",
          body: "Full venue hire for celebrations.",
        },
        {
          title: "Policy",
          body: "Free cancellation up to 4h before your reservation.",
        },
      ],
    },
    visit: {
      eyebrow: "Visit",
      title: "Avenida José Malhoa 14B, Lisbon",
      phoneLabel: "Phone",
      hoursTitle: "Hours",
      hours: [
        "Mon — Sat · 12:00 — 15:30",
        "Mon — Sat · 19:00 — 23:00",
        "Closed Sundays",
      ],
      mapCta: "Open on Google Maps",
    },
    footer: {
      tagline: "Pizzeria & Ristorante · Lisbon",
      rights: "All rights reserved.",
      credits: "Designed with care.",
      address: "Avenida José Malhoa 14B, 1070-159 Lisbon",
    },
  },
};
