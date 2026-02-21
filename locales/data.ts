export interface Dictionary {
  nav: {
    services: string;
    target: string;
    portfolio: string;
    selectedWorks: string;
    allProjects: string;
    calc: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    quote: string;
    cta: string;
  };
  services: {
    title: string;
    intro1: string;
    intro2: string;
    whatIdoTitle: string;
    whatIdoDesc: string;
    list: string[];
    processTitle: string;
    processDesc: string;
    processSteps: { title: string; desc: string }[];
    pricingTitle: string;
    pricingDesc: string;
    pricingFactors: string;
    pricingListTitle: string;
    pricingList: { label: string; value: string }[];
    pricingCta: string;
    footerTitle: string;
    footerDesc: string;
    footerCta: string;
  };
  target: {
    title: string;
    subtitle: string;
    desc: string;
    cards: { title: string; desc: string }[];
    footer: string;
  };
  portfolio: {
    title: string;
    desc: string;
    clickHint: string;
    open: string;
    readMore: string;
    back: string;
    backToPreview: string;
    spread: string;
    notesTitle: string;
    aboutProject: string;
    format: string;
    empty: string;
    myProjects: string;
  };
  contact: {
    title: string;
    desc: string;
    boxTitle: string;
    boxDesc: string;
    prepTitle: string;
    prepList: { label: string; value: string }[];
    noData: string;
    form: {
      email: string;
      msg: string;
      send: string;
      placeholder: string;
      success: string;
    };
  };
  calculator: {
    title: string;
    subtitle: string;
    intro: string;
    howItWorksTitle: string;
    howItWorksDesc: string;
    ctaHelp: string;
    ctaContact: string;
    ctaPortfolio: string;
    fields: {
      chars: string;
      charsHint: string;
      sheets: string;
      sheetsHint: string;
    };
    options: {
      layout: { label: string; desc: string };
      typesetting: { label: string; desc: string };
      cover: { label: string; desc: string; startingPrice: string };
      epub: { label: string; desc: string; startingPrice: string };
      tables: { label: string; desc: string; unit: string };
      illustrations: { label: string; desc: string; unit: string };
      pdf_access: { label: string; desc: string };
    };
    total: string;
    disclaimer: string;
  };
  footer: {
    rights: string;
    privacy: string;
    cookies: string;
    regulations: string;
  };
  cookie: {
    title: string;
    text: string;
    accept: string;
    decline: string;
    advanced: string;
  };
  legal: {
    returnHome: string;
    tableOfContents: string;
    lastUpdated: string;
  };
}

export const pl: Dictionary = {
  nav: {
    services: "Usługi",
    target: "Dla kogo",
    portfolio: "Portfolio",
    selectedWorks: "Wybrane realizacje",
    allProjects: "Wszystkie projekty",
    calc: "Kalkulator",
    contact: "Kontakt i wycena"
  },
  hero: {
    title: "Twoja opowieść zasługuje na oprawę premium",
    subtitle: "Piszesz porywający kryminał, nastrojową poezję czy epickie sci-fi? Zadbam o to, by forma Twojej książki dorównała jakości treści.",
    desc1: "Oferuję kompleksowe projektowanie okładek oraz precyzyjny skład i łamanie tekstu. Od dopracowanej typografii po techniczne przygotowanie do druku – biorę na siebie cały proces wizualny. Tworzę estetyczne, czytelne układy, które budują autorytet autora i komfort czytelnika.",
    desc2: "Działajmy konkretnie i bez zbędnego dystansu. Mam wolne terminy na najbliższy miesiąc – sprawdźmy, czy pasujemy do siebie projektowo.",
    quote: "Potrzebujesz wycenę? Prześlij krótki opis swojej książki.",
    cta: "Poproś o wycenę"
  },
  services: {
    title: "Kompleksowa oprawa Twojej książki",
    intro1: "Zajmuję się tym, co dzieje się między kropką postawioną przez autora, a gotowym plikiem dla drukarni. Tworzę projekty, które nie tylko przyciągają wzrok na półce, ale przede wszystkim są wygodne w czytaniu.",
    intro2: "Skupiam się na rzemiośle: dopracowanym świetle między wierszami, odpowiednich marginesach i hierarchii, która prowadzi czytelnika przez Twoją historię.",
    whatIdoTitle: "Co dokładnie mogę dla Ciebie zrobić?",
    whatIdoDesc: "Mój zakres prac obejmuje wszystko, co niezbędne, aby Twój maszynopis stał się profesjonalną publikacją.",
    list: [
      "Projektowanie okładek (front, tył i grzbiet) dostosowanych do wymagań technicznych wybranej drukarni.",
      "Profesjonalny skład i łamanie tekstu, (m.in. dbałość o bękarty, szewce i poprawne przenoszenie wyrazów).",
      "Architektura wnętrza: dobór czytelnych czcionek, projektowanie żywej paginy, spisów treści i rozdziałów.",
      "Przygotowanie plików do druku (DTP): ustawienie spadów, marginesów bezpieczeństwa i odpowiednich profili kolorystycznych.",
      "Skład e-booków (EPUB/MOBI) na podstawie gotowego projektu wnętrza."
    ],
    processTitle: "Jak wygląda proces współpracy?",
    processDesc: "Wspólnie przechodzimy przez cztery proste etapy, abyś zawsze wiedział, na czym stoimy:",
    processSteps: [
      { title: "Konsultacja i plan:", desc: "Rozmawiamy o Twoich oczekiwaniach i klimacie książki, wspólnie ustalamy harmonogram, zakres prac i budżet." },
      { title: "Koncepcja okładki:", desc: "Przygotowuję propozycję okładki." },
      { title: "Projekt wnętrza i skład:", desc: "Dobieram czcionki, krój pisma i estetykę tekstu." },
      { title: "Finalizacja:", desc: "Otrzymujesz pliki PDF w standardzie gotowym do druku lub dystrybucji online." }
    ],
    pricingTitle: "Od czego zależy cena?",
    pricingDesc: "Każda książka jest inna, dlatego wyceny zawsze przygotowuję indywidualnie. Nie stosuję sztywnych pakietów.",
    pricingFactors: "Elementy wpływające na ostateczną wycenę: Objętość tekstu, złożoność układu, zakres prac.",
    pricingListTitle: "Cennik orientacyjny:",
    pricingList: [
      { label: "Projekt okładki:", value: "od 350 zł" },
      { label: "Skład wnętrza (beletrystyka):", value: "od 100 zł za arkusz (40 000 znaków ze spacjami, około 22 strony)" },
      { label: "E-book (EPUB3):", value: "od 350 zł" }
    ],
    pricingCta: "Oblicz koszt w kalkulatorze",
    footerTitle: "Nie wiesz, jak oszacować budżet? Skorzystaj z bezpłatnej konsultacji.",
    footerDesc: "Napisz do mnie, opisz swój projekt, a ja przygotuję dla Ciebie niezobowiązującą wycenę w ciągu 24 godzin.",
    footerCta: "Umów rozmowę wstępną"
  },
  target: {
    title: "Tworzysz swoją pierwszą książkę?",
    subtitle: "Przejdźmy przez to razem.",
    desc: "Wiem, że proces wydawniczy może przytłaczać, dlatego stawiam na partnerskie zasady. Nie jestem anonimową agencją – jestem Twoim bezpośrednim wsparciem. Pracuję głównie z autorami niezależnymi i prywatnymi osobami, które szukają kogoś, kto poprowadzi ich za rękę przez techniczne zawiłości przygotowania do druku.",
    cards: [
      { title: "Dla Debiutantów", desc: "Jeśli to Twój pierwszy raz, zadbam o to, by Twój układ gotowy do druku był technicznie perfekcyjne, a proces – jasny i bezstresowy." },
      { title: "Dla Autorów literatury", desc: "Twoja poezja, kryminał czy sci-fi otrzymają oprawę (w tym profesjonalny projekt okładki), która odda ich unikalny charakter." },
      { title: "Dla Wydawców prywatnych", desc: "Tworzę dopracowany skład wnętrza dla projektów, które wymagają intymności i dbałości o detale, nieosiągalnych w masowej produkcji." }
    ],
    footer: "Działamy bez zbędnego formalizmu. Rozmawiamy bezpośrednio, szukamy najlepszych rozwiązań dla Twojego budżetu i wspólnie dopieszczamy każdy detal typografii książki."
  },
  portfolio: {
    title: "Wybrane realizacje",
    desc: "Każda książka to osobna historia. Poniżej znajdziesz przykłady moich prac – od mrocznych kryminałów po minimalistyczną poezję.",
    clickHint: "Kliknij okładkę, aby zajrzeć do środka.",
    open: "Otwórz",
    readMore: "Czytaj więcej",
    back: "Wróć",
    backToPreview: "Wróć do podglądu",
    spread: "Rozkładówka",
    notesTitle: "Notatki projektowe",
    aboutProject: "O projekcie",
    format: "Format",
    empty: "Brak projektów w tej kategorii.",
    myProjects: "Moje projekty"
  },
  contact: {
    title: "Porozmawiajmy o Twojej książce",
    desc: "Masz gotowy tekst, ale nie wiesz, co dalej? A może projekt okładki wydaje Ci się czarną magią? Spokojnie – jestem tu, aby Ci pomóc.",
    boxTitle: "Rozmowa wstępna – jak to wygląda?",
    boxDesc: "Napisz do mnie krótką wiadomość. Bez zobowiązań sprawdzę Twoje potrzeby i ustalimy, jakiej pomocy wymaga skład Twojej publikacji.",
    prepTitle: "Co przygotować do wyceny?",
    prepList: [
      { label: "Gatunek i objętość:", value: "Przybliżona liczba znaków lub stron." },
      { label: "Format i rodzaj wydania:", value: "A5? Oprawa twarda/miękka? E-book?" },
      { label: "Zakres współpracy:", value: "Okładka, skład czy komplet?" },
      { label: "Termin:", value: "Na kiedy potrzebujesz plików?" }
    ],
    noData: "Nie masz tych danych? Napisz, na jakim etapie jesteś.",
    form: {
      email: "Email",
      msg: "Wiadomość",
      placeholder: "Opisz krótko swój projekt...",
      send: "Wyślij wiadomość",
      success: "Zazwyczaj odpowiadam w ciągu kilku godzin."
    }
  },
  calculator: {
    title: "Ile kosztuje wydanie Twojej książki?",
    subtitle: "Oszacuj budżet w minutę.",
    intro: "Cenię Twój czas i transparentność, dlatego przygotowałam prosty kalkulator, który pomoże Ci zorientować się w kosztach współpracy. Choć każdy projekt traktuję indywidualnie, poniższe narzędzie pozwoli Ci poznać realne widełki cenowe.",
    howItWorksTitle: "Jak działa ten kalkulator?",
    howItWorksDesc: "Narzędzie opiera swoje obliczenia na liczbie znaków ze spacjami. Wystarczy, że wpiszesz objętość swojego maszynopisu i zaznaczysz opcje dodatkowe.",
    ctaHelp: "Nie jesteś pewien, którą opcję wybrać w kalkulatorze? Napisz do mnie – chętnie pomogę.",
    ctaContact: "Skontaktuj się w sprawie oferty",
    ctaPortfolio: "Zobacz realizacje",
    fields: {
      chars: "Liczba znaków tekstu",
      charsHint: "(ze spacjami włącznie)",
      sheets: "Liczba arkuszy wydawniczych",
      sheetsHint: "(1 arkusz na każde rozpoczęte 40 000 znaków)"
    },
    options: {
      layout: { label: 'Projekt layoutu', desc: 'Jednorazowa opłata. Projekt układu treści na stronie, doboru typografii, elementów ozdobnych.' },
      typesetting: { label: 'Skład publikacji', desc: '130.00 zł / arkusz wydawniczy. Skład DTP publikacji do druku.' },
      cover: { label: 'Projekt okładki', desc: 'Projekt okładki do druku (przód, tył, grzbiet).', startingPrice: 'Od 600.00 zł' },
      epub: { label: 'Konwersja do ePub/mobi', desc: 'Stworzenie dostępnego pliku ePub, zgodnego z wymogami dystrybutorów.', startingPrice: 'Od 500.00 zł' },
      tables: { label: 'Tabele', desc: '10.00 zł / tabela. Wpisz liczbę tabel w treści publikacji.', unit: 'tabela' },
      illustrations: { label: 'Ilustracje', desc: '10.00 zł / ilustracja. Wpisz ile ilustracji zawiera treść.', unit: 'ilustracja' },
      pdf_access: { label: 'Dostępny plik PDF', desc: 'Dostosowanie pliku do wymagań WCAG (cena orientacyjna dla standardowej publikacji).' },
    },
    total: "Suma szacunkowa",
    disclaimer: "* Podane ceny są cenami netto. Ostateczna wycena może się różnić w zależności od specyfiki projektu."
  },
  footer: {
    rights: "Wszelkie prawa zastrzeżone.",
    privacy: "Polityka Prywatności",
    cookies: "Polityka Cookies",
    regulations: "Regulamin"
  },
  cookie: {
    title: "O prywatności",
    text: "Używamy ciasteczek, aby upewnić się, że Twoje doświadczenie z naszą stroną jest tak płynne i eleganckie jak nasze wydania.",
    accept: "Akceptuję",
    decline: "Odrzuć",
    advanced: "Ustawienia zaawansowane"
  },
  legal: {
    returnHome: "Wróć do strony głównej",
    tableOfContents: "Spis treści",
    lastUpdated: "Ostatnia aktualizacja"
  }
};

export const en: Dictionary = {
  nav: {
    services: "Services",
    target: "For whom",
    portfolio: "Portfolio",
    selectedWorks: "Selected Works",
    allProjects: "All Projects",
    calc: "Calculator",
    contact: "Contact & Quote"
  },
  hero: {
    title: "Your story deserves a premium setting",
    subtitle: "Writing a gripping thriller, atmospheric poetry, or epic sci-fi? I'll ensure your book's form matches the quality of its content.",
    desc1: "I offer comprehensive cover design and precise text typesetting. From refined typography to technical print preparation – I handle the entire visual process. I create aesthetic, readable layouts that build author authority and reader comfort.",
    desc2: "Let's act specifically and without unnecessary distance. I have availability for the next month – let's check if we are a good design match.",
    quote: "Need a quote? Send a short description of your book.",
    cta: "Request a quote"
  },
  services: {
    title: "Comprehensive book design",
    intro1: "I handle everything that happens between the last dot typed by the author and the final file for the print house. I create designs that not only catch the eye on the shelf but are primarily comfortable to read.",
    intro2: "I focus on craft: refined leading, appropriate margins, and hierarchy that guides the reader through your story.",
    whatIdoTitle: "What exactly can I do for you?",
    whatIdoDesc: "My scope of work covers everything necessary for your manuscript to become a professional publication.",
    list: [
      "Cover design (front, back, spine) adapted to the technical requirements of the selected print house.",
      "Professional text typesetting (including attention to widows, orphans, and correct hyphenation).",
      "Interior architecture: selection of readable fonts, designing headers, table of contents, and chapters.",
      "Print file preparation (DTP): setting bleeds, safety margins, and appropriate color profiles.",
      "E-book composition (EPUB/MOBI) based on the finished interior design."
    ],
    processTitle: "What does the cooperation process look like?",
    processDesc: "We go through four simple stages together so you always know where we stand:",
    processSteps: [
      { title: "Consultation & Plan:", desc: "We discuss your expectations and the book's vibe, jointly setting the schedule, scope, and budget." },
      { title: "Cover Concept:", desc: "I prepare a cover proposal." },
      { title: "Interior Design & Typesetting:", desc: "I select fonts, typefaces, and text aesthetics." },
      { title: "Finalization:", desc: "You receive PDF files ready for print or online distribution." }
    ],
    pricingTitle: "What determines the price?",
    pricingDesc: "Every book is different, so I always prepare quotes individually. I don't use rigid packages.",
    pricingFactors: "Elements influencing the final quote: Text volume, layout complexity, scope of work.",
    pricingListTitle: "Indicative pricing:",
    pricingList: [
      { label: "Cover design:", value: "from 350 PLN" },
      { label: "Interior typesetting (fiction):", value: "from 100 PLN per sheet (40,000 characters with spaces, approx. 22 pages)" },
      { label: "E-book (EPUB3):", value: "from 350 PLN" }
    ],
    pricingCta: "Calculate cost in calculator",
    footerTitle: "Not sure how to estimate the budget? Use a free consultation.",
    footerDesc: "Write to me, describe your project, and I will prepare a non-binding quote for you within 24 hours.",
    footerCta: "Book a preliminary call"
  },
  target: {
    title: "Creating your first book?",
    subtitle: "Let's go through it together.",
    desc: "I know the publishing process can be overwhelming, so I focus on partnership. I am not an anonymous agency – I am your direct support. I work mainly with independent authors and private individuals looking for someone to guide them through the technical intricacies of print preparation.",
    cards: [
      { title: "For Debutants", desc: "If this is your first time, I will ensure your print-ready layout is technically perfect and the process clear and stress-free." },
      { title: "For Literature Authors", desc: "Your poetry, thriller, or sci-fi will receive a setting (including professional cover design) that reflects their unique character." },
      { title: "For Private Publishers", desc: "I create refined interior layouts for projects requiring intimacy and attention to detail unattainable in mass production." }
    ],
    footer: "We operate without unnecessary formalism. We talk directly, look for the best solutions for your budget, and refine every detail of the book's typography together."
  },
  portfolio: {
    title: "Selected Works",
    desc: "Every book is a separate story. Below you will find examples of my work – from dark thrillers to minimalist poetry.",
    clickHint: "Click the cover to look inside.",
    open: "Open",
    readMore: "Read more",
    back: "Back",
    backToPreview: "Back to preview",
    spread: "Spread",
    notesTitle: "Design Notes",
    aboutProject: "About the project",
    format: "Format",
    empty: "No projects in this category.",
    myProjects: "My Projects"
  },
  contact: {
    title: "Let's talk about your book",
    desc: "Have a finished text but don't know what's next? Or does cover design seem like black magic? Relax – I'm here to help you.",
    boxTitle: "Preliminary chat – how does it look?",
    boxDesc: "Send me a short message. I'll check your needs without obligation and we'll determine what help your publication's layout requires.",
    prepTitle: "What to prepare for a quote?",
    prepList: [
      { label: "Genre and volume:", value: "Approximate number of characters or pages." },
      { label: "Format and edition type:", value: "A5? Hard/soft cover? E-book?" },
      { label: "Scope of cooperation:", value: "Cover, typesetting, or complete package?" },
      { label: "Deadline:", value: "When do you need the files?" }
    ],
    noData: "Don't have this data? Write what stage you are at.",
    form: {
      email: "Email",
      msg: "Message",
      placeholder: "Briefly describe your project...",
      send: "Send message",
      success: "I usually reply within a few hours."
    }
  },
  calculator: {
    title: "How much does it cost to publish your book?",
    subtitle: "Estimate the budget in a minute.",
    intro: "I value your time and transparency, so I prepared a simple calculator to help you get an idea of cooperation costs. Although I treat every project individually, the tool below will let you know real price ranges.",
    howItWorksTitle: "How does this calculator work?",
    howItWorksDesc: "The tool bases its calculations on the number of characters with spaces. Just enter your manuscript volume and select additional options.",
    ctaHelp: "Not sure which option to choose? Write to me – I'll gladly help.",
    ctaContact: "Contact for offer",
    ctaPortfolio: "See portfolio",
    fields: {
      chars: "Number of characters",
      charsHint: "(including spaces)",
      sheets: "Publishing sheets",
      sheetsHint: "(1 sheet per started 40,000 characters)"
    },
    options: {
      layout: { label: 'Layout Design', desc: 'One-time fee. Design of content layout, typography selection, decorative elements.' },
      typesetting: { label: 'Typesetting', desc: '130.00 PLN / publishing sheet. DTP typesetting for print.' },
      cover: { label: 'Cover Design', desc: 'Print cover design (front, back, spine).', startingPrice: 'From 600.00 PLN' },
      epub: { label: 'E-book Conversion', desc: 'Creation of accessible ePub/mobi file compliant with distributor requirements.', startingPrice: 'From 500.00 PLN' },
      tables: { label: 'Tables', desc: '10.00 PLN / table. Enter the number of tables.', unit: 'table' },
      illustrations: { label: 'Illustrations', desc: '10.00 PLN / illustration. Enter the number of illustrations.', unit: 'illustration' },
      pdf_access: { label: 'Accessible PDF', desc: 'File adjustment to WCAG requirements (indicative price for standard publication).' },
    },
    total: "Estimated Total",
    disclaimer: "* Prices are net. Final quote may vary depending on project specifics."
  },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    cookies: "Cookies Policy",
    regulations: "Regulations"
  },
  cookie: {
    title: "About Privacy",
    text: "We use cookies to ensure your experience with our site is as smooth and elegant as our editions.",
    accept: "Accept",
    decline: "Decline",
    advanced: "Advanced settings"
  },
  legal: {
    returnHome: "Return to home page",
    tableOfContents: "Table of Contents",
    lastUpdated: "Last updated"
  }
};