// --- MAIN PORTFOLIO (Selected Works / Carousel) ---
export interface Spread {
  leftSrc: string;
  rightSrc: string;
}

export interface BookProject {
  id: string;
  title: string;
  author?: string;
  category: string;
  coverSrc: string;
  spreads: Spread[];
  designNotes: string; 
}

export const getPortfolioData = (lang: 'pl' | 'en'): BookProject[] => {
  if (lang === 'en') {
    return [
      {
        id: "01",
        title: "Gruba Tańczy",
        author: "Dominik Bielicki",
        category: "Poems",
        coverSrc: "https://storage.googleapis.com/ekreacje-assets/1_cover.png", 
        spreads: [
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/1.1_page.png",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/1.2_page.png",
          }
        ],
        designNotes: `My attempts with poetry
This project tested how I handle a very sparing form. Poetry is a challenge, both typographically and technically. I wanted to create a place where the poem simply has "space to be".
The hardest part was sensing how much text to fit on one page so it wouldn't seem empty but also not overcrowded. A further step was my first attempt to transfer these poems to EPUB format.
I used simple solutions that seemed most natural:
Poem on a separate page: This gives each title its own moment of attention, allowing the reader time to calmly transition to the next thought.
Dark accent: In one place, I decided to place a monochromatic forest graphic on a full page next to a dark background for the adjacent text.
Font: I chose a classic serif typeface associated with elegance. I also added more leading to give the piece breath.
The result is a clean and orderly layout.
In the cover design, I focused on minimalism, geometry, and repetition. Dark colors and a central typographic block give the whole a raw, elegant character consistent with the sparing form of the interior.`
      },
      {
        id: "02",
        title: "Fairy Tales",
        author: "Hans Christian Andersen",
        category: "Fantasy",
        coverSrc: "https://storage.googleapis.com/ekreacje-assets/2.2_cover.png",
        spreads: [
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/2.1_page.png",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/2.2_page.png",
          }
        ],
        designNotes: `The goal was to create an original edition of H.C. Andersen's tales, departing from typically childish, richly illustrated editions. I focused on a slightly older audience. My priority was purity of form and elegance, allowing the content to resonate without distracting the reader with unnecessary ornaments.
I wanted to maintain modern minimalism and a design for a multi-page narrative that retains lightness and readability. I also had to decide whether the cover would operate with a literal image or rather with atmosphere and color.
I chose classic serif typography, giving the publication a dignified character.
Page Architecture: The interior is characterized by a large amount of "white space", ensuring text blocks don't overwhelm. I used wide margins and thoughtful leading, increasing comfort for long reading sessions.
Illustrative Minimalism: I resigned from illustrating pages, introducing only graphic accents at chapter titles.
Navigation: A header with the tale's title and distinct page numbering were integrated discreetly, complementing the layout composition.
Ultimately, I developed two cover concepts:
1/ Basic version: Deep bottle green combined with a red stripe and gold letter embellishments. This design defends itself with material structure and color play, suggesting an exclusive collector's edition.
2/ Alternative version: Navy blue binding with a centrally placed illustration in a decorative frame, referencing the cool climate of the tales.`
      },
      {
        id: "03",
        title: "Doctor Dolittle",
        author: "Hugh Lofting",
        category: "Novel",
        coverSrc: "https://storage.googleapis.com/ekreacje-assets/3_cover.png",
        spreads: [
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/3.1_page.png",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/3.2_page.png",
          }
        ],
        designNotes: `Dr. Dolittle and His Animals - Hugh Lofting
I wanted to create an edition of "Doctor Dolittle" combining classic elegance with the needs of a younger reader - a clean, transparent design light enough that the typography itself encourages following the heroes' adventures. I focused on minimalism, where text layout and carefully selected typefaces build the world presented in the book.
The biggest design challenge was creating an attractive publication for children while completely resigning from illustrations. So the text wouldn't seem "too adult" or boring, I shifted the burden of visual narrative to white space, proportions, and typographic details.
To facilitate reading and not tire young eyes, I introduced several solutions:
Reading Comfort: I increased the font size and leading so younger readers could easily find themselves in the denser narrative.
Typography: As a base, I chose a readable, classic serif typeface. For contrast, chapter titles were set in decorative, calligraphic script. This introduces an element of magic and "old style".
Initials: Large, decorative initials at the start of chapters serve as visual signposts and decoration.
I designed the cover in a retro spirit, in cream tones, with a centrally placed illustration and classic lettering. It references the aesthetics of old editions, inspiring trust and sentiment.`
      },
    ];
  }
  
  // Default PL
  return [
    {
      id: "01",
      title: "Gruba Tańczy",
      author: "Dominik Bielicki",
      category: "Wiersze",
      coverSrc: "https://storage.googleapis.com/ekreacje-assets/1_cover.png", 
      spreads: [
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/1.3_page.png",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/1.4_page.png",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/1.5_page.png",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/1.6_page.png",
        }
      ],
      designNotes: `Moje próby z poezją
to koncepcyjny projekt, w którym chciałam sprawdzić, jak poradzę sobie z bardzo oszczędną formą. Poezja jest wyzwaniem, zarówno pod względem typograficznym, jak i technicznym. Chciałam stworzyć miejsce, w którym wiersz ma po prostu „miejsce do bycia”.
Najtrudniejsze było dla mnie wyczucie, ile tekstu zmieścić na jednej stronie, żeby nie wydawała się pusta, a jednocześnie nie była przeładowana. Kolejnym krokiem była moja pierwsza próba przeniesienia tych wierszy do formatu EPUB. 
W projekcie zastosowałam proste rozwiązania, które wydawały mi się najbardziej naturalne:
Wiersz na osobnej stronie: Dzięki temu każdy tytuł ma swój własny moment uwagi. To daje czytelnikowi czas na spokojne przejście do kolejnej myśli.
Ciemny akcent: W jednym miejscu zdecydowałam się umieścić na całej stronie monochromatyczną grafikę lasu w sąsiedztwie ciemnego tła dla tekstu obok.
Font: Wybrałam klasyczny krój szeryfowy, bo kojarzy mi się z elegancją. Dodałam też więcej odstępu między wierszami, aby utwór miał oddech.
W efekcie powstał czysty i uporządkowany skład.
W projekcie okładek postawiłam na minimalizm, geometrię i powtarzalność. Ciemna kolorystyka oraz centralny blok typograficzny mają nadawać całości surowy, elegancki charakter, spójny z oszczędną formą składu wnętrza.`
    },
    {
      id: "02",
      title: "Baśnie",
      author: "Hans Christian Andersen",
      category: "Fantasy",
      coverSrc: "https://storage.googleapis.com/ekreacje-assets/2.2_cover.png",
      spreads: [
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/2.0_page.png",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/2.0.1_page.png",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/2.1_page.png",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/2.2_page.png",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/2.3_page.png",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/2.4_page.png",
        }
      ],
      designNotes: `Celem projektu było stworzenie autorskiej edycji Baśni H.C. Andersena, która odbiega od typowo dziecięcych, bogato ilustrowanych wydań. Skupiłam się na odbiorcy nieco starszym. Moim priorytetem była czystość formy i elegancja, pozwalająca wybrzmieć treści bez rozpraszania czytelnika zbędnymi ozdobnikami.
Zależało mi na zachowaniu nowoczesnego minimalizmu i projekcie dla wielostronicowej narracji, który zachowa lekkość i czytelność. Musiałam również zdecydować, czy okładka będzie operować dosłownym obrazem, czy raczej klimatem i kolorem.
Postawiłam na klasyczną typografię szeryfową, która nadaje publikacji dostojny charakter.
Architektura strony: Wnętrze charakteryzuje się dużą ilością "światła", co sprawia, że bloki tekstu nie przytłaczają. Zastosowałam szerokie marginesy i przemyślaną interlinię, co zwiększa komfort długiego czytania.
Minimalizm ilustracyjny: Zrezygnowałam z ilustrowania stron, wprowadziłam jedynie akcenty graficzne przy tytułach rozdziałów.
Nawigacja: Pagina górna z tytułem baśni oraz wyraźna numeracja stron zostały wkomponowane w sposób dyskretny, dopełniając kompozycję layoutu.
Ostatecznie opracowałam dwie koncepcje okładki:
1/ Wersja podstawowa: Głęboka, butelkowa zieleń połączona z czerwonym pasem i złotymi uszlachetnieniami liter. To projekt, który broni się strukturą materiału i grą kolorów, sugerując ekskluzywne wydanie kolekcjonerskie.
2/ Wersja alternatywna: Granatowa oprawa z centralnie umieszczoną ilustracją w ozdobnej ramie, nawiązująca do chłodnego klimatu baśni.`
    },
    {
      id: "03",
      title: "Doktor Dolittle i jego zwierzęta",
      author: "Hugh Lofting",
      category: "Powieść",
      coverSrc: "https://storage.googleapis.com/ekreacje-assets/3_cover.png",
      spreads: [
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/3.0_page.png",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/3.1_page.png",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/3.2_page.png",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/3.3_page.png",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/3.4_page.png",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/3.5_page.png",
        }
      ],
      designNotes: `Zależało mi, aby stworzyć edycję „Doktora Dolittle”, która łączyłaby klasyczną elegancję z potrzebami młodszego czytelnika - czyli projekcie czystym, przejrzystym i na tyle lekkim w odbiorze, by sama typografia zachęcała do śledzenia przygód bohaterów. Postawiłam na minimalizm, w którym to układ tekstu i starannie dobrane kroje pisma budują przedstawiony w książce świat.
Największym wyzwaniem projektowym było stworzenie atrakcyjnej publikacji dla dzieci przy całkowitej rezygnacji z ilustracji. By tekst nie wydawał się „zbyt dorosły” lub nużący przeniosłam ciężar narracji wizualnej na światło, proporcje i detale typograficzne.
Aby ułatwić lekturę i nie przemęczać wzroku młodego odbiorcy, wprowadziłam kilka rozwiązań:
Komfort czytania: Zwiększyłam stopień pisma oraz interlinię, aby młodszy czytelnik łatwiej odnalazł się w gęstszej narracji.
Typografia: Jako bazę wybrałam czytelny, klasyczny krój szeryfowy. Dla kontrastu, tytuły rozdziałów zostały złożone dekoracyjnym, kaligraficznym pismem. Ten zabieg wprowadza element magii i „dawnego stylu”.
Inicjały: Zastosowanie dużych, ozdobnych inicjałów na początku rozdziałów służy jako wizualny drogowskaz i dekoracja.
Okładkę zaprojektowałam w duchu retro, w kremowej tonacji, z centralnie umieszczoną ilustracją i klasycznym liternictwem. Nawiązuje do estetyki dawnych wydań, budząc zaufanie i sentyment.`
    },
  ];
};

// --- ALL PROJECTS PAGE DATA (Grid View) ---

export type ProjectCategory = 
  | "Wszystkie"
  | "Fantasy"
  | "Powieść"
  | "Wiersze"
  | "Poems"
  | "Novel"
  | "All"
  | "Inne"
  | "Other";

export const getProjectCategories = (lang: 'pl' | 'en'): { main: ProjectCategory[] } => {
  if (lang === 'en') {
    return {
      main: ["All", "Fantasy", "Novel", "Poems", "Other"]
    };
  }
  return {
    main: ["Wszystkie", "Fantasy", "Powieść", "Wiersze", "Inne"]
  };
};

export interface AllProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  images: string[]; 
}

// NOTE: Categories here must match what is returned by getProjectCategories to filter correctly.
// Since categories are localized, we need to return localized data here too.

export const getAllProjectsData = (lang: 'pl' | 'en'): AllProjectItem[] => {
  const isEn = lang === 'en';
  
  return [
    {
      id: "ap-01",
      title: "Gruba Tańczy",
      category: isEn ? "Poems" : "Wiersze",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_2.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_3.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_4.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_5.1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_6.1.jpg"
      ]
    },
    {
      id: "ap-02",
      title: isEn ? "Fairy Tales" : "Baśnie",
      category: "Fantasy",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_1.png",
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_2.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_3.png",
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_4.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_5.1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_6.png",
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_7.png"
      ]
    },
    {
      id: "ap-03",
      title: isEn ? "Doctor Dolittle" : "Doktor Dolittle i jego zwierzęta",
      category: isEn ? "Novel" : "Powieść",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_dolittle_1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_dolittle_2.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_dolittle_3.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_dolittle_4.1.jpg"
      ]
    },
    {
      id: "ap-04",
      title: isEn ? "Unfiltered" : "Bez filtra",
      category: isEn ? "Other" : "Inne",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_bez_1.png"
      ]
    },
    {
      id: "ap-05",
      title: isEn ? "The Core Elements" : "Kluczowe elementy",
      category: isEn ? "Other" : "Inne",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_kluczowe_1.png",
      ]
    },
    {
      id: "ap-06",
      title: isEn ? "The Scent Collector" : "Kolekcjonerka zapachów",
      category: isEn ? "Novel" : "Powieść",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_kolekcjonerka_1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_kolekcjonerka_2.png",
        "https://storage.googleapis.com/ekreacje-assets/mockup_kolekcjonerka_3.1.jpg"
      ]
    },
    {
      id: "ap-07",
      title: isEn ? "The Company Secrets: Vol. I" : "Sekrety spółki: I",
      category: isEn ? "Other" : "Inne",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_sekrety_1.jpg"
      ]
    },
    {
      id: "ap-08",
      title: isEn ? "The Entangled Mind" : "Splatana myśl",
      category: isEn ? "Other" : "Inne",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_splatana_1.png"
      ]
    },
    {
      id: "ap-09",
      title: isEn ? "The Art of Sketching" : "Sztuka szkicowania",
      category: isEn ? "Other" : "Inne",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_sztuka_1.jpg"
      ]
    },
    {
      id: "ap-10",
      title: isEn ? "Seen on Your Own Terms" : "Widoczna po swojemu",
      category: isEn ? "Other" : "Inne",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_widoczna_1.png"
      ]
    },
    {
      id: "ap-11",
      title: isEn ? "Whats Your Brands Visual Identity?" : "Jaki jest wizualny typ twojej marki?",
      category: isEn ? "Other" : "Inne",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_wizualny_1.png"
      ]
    },
    {
      id: "ap-12",
      title: isEn ? "From Burnout to Breakthrough" : "Od wypalenia do działania",
      category: isEn ? "Other" : "Inne",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_wypalenia_1.png"
      ]
    },
    {
      id: "ap-13",
      title: isEn ? "A Sensory Journey" : "Podróż dla zmysłów",
      category: isEn ? "Other" : "Inne",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_zmyslow_1.jpg"
      ]
    }
  ];
};