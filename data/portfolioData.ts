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
      id: "04",
        title: "Ona i On w słowach",
        author: "Ewa Dziubanii-Pniewska",
        category: "Poems",
        coverSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_ok%C5%82adka.jpeg",
        spreads: [
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_1.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_2.jpg",
          },
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_3.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_4.jpg",
          },
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_5.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_6.jpg",
          },
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_7.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_8.jpg",
          }
        ],
        designNotes: `I wanted to create a setting that would be a discreet background for poetry – a clean, subtle edition with enough "breath" to allow each poem to resonate. I focused on minimalism, where the space on the page and careful typography build an intimate atmosphere, encouraging quiet reading.
The biggest design challenge was to create a layout that was almost "invisible", one that would not dominate the content. I wanted the reader to find room for their own emotions.
To emphasize the personal character of the volume, I introduced several solutions:
Space for the word: Each poem received a separate page with wide margins. I used a large amount of "light" and thoughtful leading, giving up on overcrowding the pages in favor of a clean, transparent composition.
Typography: As a base, I chose the classic, elegant serif typeface Cormorant. I highlighted details with the calligraphic script Bickham Script Pro 3, which adds a personal touch to the whole.
Subtle detail: I introduced vertical folios (page numbers) with low color saturation. They constitute a delicate detail that organizes the book's structure without distracting attention during reading.
Color scheme: I distinguished the three parts into which the author divided the volume with colors taken directly from the image on the cover. Thanks to this, the entire publication gained color consistency.
I based the cover design on a painting I received from the author. I wanted to combine classic with modern, so I decided on a clear division of the plane and very sparse typography on a white background. This solution allowed the painting to be fully exposed and gave the publication an elegant yet light character.`
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
        designNotes: `Fairy Tales by Hans Christian Andersen
The goal was to create an original edition of H.C. Andersen's tales, departing from typically childish, richly illustrated editions. I focused on a slightly older audience. My priority was purity of form and elegance, allowing the content to resonate without distracting the reader with unnecessary ornaments.
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
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/3.0.2_page.png",
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
        designNotes: `Dr. Dolittle and His Animals - Hugh Lofting
I wanted to create an edition of "Doctor Dolittle" combining classic elegance with the needs of a younger reader - a clean, transparent design light enough that the typography itself encourages following the heroes' adventures. I focused on minimalism, where text layout and carefully selected typefaces build the world presented in the book.
The biggest design challenge was creating an attractive publication for children while completely resigning from illustrations. So the text wouldn't seem "too adult" or boring, I shifted the burden of visual narrative to white space, proportions, and typographic details.
To facilitate reading and not tire young eyes, I introduced several solutions:
Reading Comfort: I increased the font size and leading so younger readers could easily find themselves in the denser narrative.
Typography: As a base, I chose a readable, classic serif typeface. For contrast, chapter titles were set in decorative, calligraphic script. This introduces an element of magic and "old style".
Initials: Large, decorative initials at the start of chapters serve as visual signposts and decoration.
I designed the cover in a retro spirit, in cream tones, with a centrally placed illustration and classic lettering. It references the aesthetics of old editions, inspiring trust and sentiment.`
      },
      {
      id: "06",
        title: "Sherlock Holmes – The Valley of Fear (white)",
        author: "Arthur Conan Doyle",
        category: "Novel",
        coverSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_ver2.jpg",
        spreads: [
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_5.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_7.jpg",
          },
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_8.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_9.jpg",
          },
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_28.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_29.jpg",
          }
        ],
        designNotes: `Arthur Conan Doyle / Sherlock Holmes – The Valley of Fear (white version)
This is a conceptual project in which I wanted to see how minimalism would work in a classic detective novel. I wanted the reader to immediately get into the rhythm of the text, without elements distracting from the plot.
In the project, I used solutions that seemed most natural for this concept:
Narrative continuity: Chapters follow one another directly - the reading flows uninterrupted, which harmonizes well with the fast-paced action of the novel.
Typography: As a base, I chose Adobe Jenson Pro - a serif typeface with a Renaissance pedigree, warm in reception, which works perfectly in long text. I set the headers in the Orpheus Pro typeface, whose slender proportions bring a pinch of sophistication without overwhelming the calm composition.
Page architecture: The interior is clean and disciplined. The running head and page numbering have been integrated discreetly, without disturbing the overall composition.
I designed the cover in off-white with an illustration of Holmes in the center and serif lettering - Orpheus Pro and Imprint MT Shadow, which bring a touch of sophistication while maintaining elegance through simplicity. This is a version for a reader who looks for order and values the traditional aesthetics of a book.`
      },
      {
      id: "05",
        title: "Sherlock Holmes – The Valley of Fear (red & black)",
        author: "Arthur Conan Doyle",
        category: "Novel",
        coverSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_ver1_2.jpg",
        spreads: [
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_6.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_7.jpg",
          },
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_10.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_11.jpg",
          },
          {
            leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_12.jpg",
            rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_13.jpg",
          }
        ],
        designNotes: `Arthur Conan Doyle / Sherlock Holmes – The Valley of Fear (red and black version)
This is the second instalment of this project, this time with the assumption that the tension present in the plot will be reflected in the page layout itself – before the reader delves into the content.
The selected solutions are intended to strengthen the dark character of the reading:
Narrative: A chapter starting on a separate page acts as a suspension of action, preparing the reader for the next stage of the story.
Page architecture: Selected quotes become a visual interlude between chapters. The frame organizes the composition of the spread and gives it a slightly theatrical character.
Typography: As a base, I chose Minion Pro - a serif typeface that is invisible in long text, allowing the reader to focus on the content. I set the chapter headers in Orpheus Pro, which contrasts well with the calm body text.
I designed the cover in two variants, using the strong and tall Bodega Serif typeface - in deep black with a grey illustration of Holmes - dark, and in intense red, expressive and eye-catching.`
      },
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
      }
    ];
  }
  
  // Default PL
  return [
    {
      id: "04",
      title: "Ona i On w słowach",
      author: "Ewa Dziubanii-Pniewska",
      category: "Wiersze",
      coverSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_ok%C5%82adka.jpeg",
      spreads: [
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_1.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_2.jpg",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_3.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_4.jpg",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_5.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_6.jpg",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_7.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_8.jpg",
        }
      ],
      designNotes: `Chciałam stworzyć oprawę, która byłaby dyskretnym tłem dla poezji – edycję czystą, subtelną i na tyle pełną „oddechu”, by pozwalała każdemu wierszowi wybrzmieć. Postawiłam na minimalizm, w którym to przestrzeń na stronie i staranna typografia budują intymny klimat, zachęcając do spokojnej lektury.
Największym wyzwaniem projektowym było stworzenie układu niemal „niewidocznego”, który nie dominowałby nad treścią. Zależało mi aby czytelnik znalazł miejsce na własne emocje. 
Aby podkreślić osobisty charakter tomiku, wprowadziłam kilka rozwiązań:
Przestrzeń dla słowa: Każdy wiersz otrzymał oddzielną stronę z szerokimi marginesami. Zastosowałam dużą ilość „światła” oraz przemyślaną interlinię, rezygnując z przeładowania stron na rzecz czystej, przejrzystej kompozycji.
Typografia: Jako bazę wybrałam klasyczny, elegancki krój szeryfowy Cormorant. Detale wyróżniłam pismem kaligraficznym Bickham Script Pro 3, który dodaje całości osobistego charakteru.
Subtelny detal: Wprowadziłam pionowe paginy o niskim nasyceniu koloru. Stanowią one delikatny detal, który porządkuje strukturę książki, nie rozpraszając uwagi podczas lektury.
Kolorystyka: Trzy części, na które autorka podzieliła tomik, wyróżniłam barwami zaczerpniętymi bezpośrednio z obrazu na okładce. Dzięki temu cała publikacja zyskała spójność barwną.
Projekt okładki oparłam na obrazie, który otrzymałam od autorki. Zależało mi na połączeniu klasyki z nowoczesnością, dlatego zdecydowałam się na wyraźny podział płaszczyzny i bardzo oszczędną typografię na białym tle. Takie rozwiązanie pozwoliło w pełni wyeksponować malarstwo i nadać publikacji elegancki, a zarazem lekki charakter.`
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
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/3.6_page.png",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/3.7_page.png",
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
    {
      id: "06",
      title: "Sherlock Holmes – Dolina Trwogi (wersja biała)",
      author: "Artur Conan Doyle",
      category: "Powieść",
      coverSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_ver2.jpg",
      spreads: [
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_5.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_7.jpg",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_8.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_9.jpg",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_28.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver2_29.jpg",
        }
      ],
      designNotes: `Artur Conan Doyle / Sherlock Holmes – Dolina Trwogi (wersja biała)
To koncepcyjny projekt, w którym chciałam zobaczyć, jak sprawdzi się minimalizm w klasycznej powieści detektywistycznej. Zależało mi, aby czytelnik od razu wchodził w rytm tekstu, bez elementów odciągających uwagę od fabuły.
W projekcie zastosowałam rozwiązania, które wydawały mi się najbardziej naturalne dla tej koncepcji:
Ciągłość narracji: Rozdziały następują bezpośrednio po sobie - lektura płynie nieprzerwanie, co dobrze współgra z wartką akcją powieści.
Typografia: Jako bazę wybrałam Adobe Jenson Pro - krój szeryfowy o renesansowym rodowodzie, ciepły w odbiorze, który doskonale sprawdza się w długim tekście. Nagłówki złożyłam krojem Orpheus Pro, którego wysmukłe proporcje wnoszą szczyptę wyrafinowania, nie przytłaczając spokojnego składu.
Architektura strony: Wnętrze jest czyste i zdyscyplinowane. Żywa pagina oraz numeracja stron zostały wkomponowane dyskretnie, nie zaburzając całości kompozycji.
Okładkę zaprojektowałam w złamanej bieli z ilustracją Holmesa w centralnej części i szeryfowym liternictwem - Orpheus Pro oraz Imprint MT Shadow, które wnoszą szczyptę wyrafinowania, zachowując jednocześnie elegancję poprzez prostotę. To wersja dla czytelnika, który szuka uporządkowania i ceni sobie tradycyjną estetykę książki.`
    },
    {
      id: "05",
      title: "Sherlock Holmes – Dolina Trwogi (wersja czerwona i czarna)",
      author: "Artur Conan Doyle",
      category: "Powieść",
      coverSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_ver1_2.jpg",
      spreads: [
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_6.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_7.jpg",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_10.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_11.jpg",
        },
        {
          leftSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_12.jpg",
          rightSrc: "https://storage.googleapis.com/ekreacje-assets/SherlockHolmes_DolinaTrwogi_ver1_13.jpg",
        }
      ],
      designNotes: `Artur Conan Doyle / Sherlock Holmes – Dolina Trwogi (wersja czerwona i czarna)
To druga odsłona tego projektu, tym razem z założeniem, że napięcie obecne w fabule znajdzie swoje odbicie już w samym układzie strony – zanim czytelnik zagłębi się w treść.
Wybrane rozwiązania mają wzmocnić mroczny charakter lektury:
Narracja: Rozpoczynający się na oddzielnej stronie rozdział, jest jak zawieszenie akcji, które przygotowuje czytelnika na kolejny etap historii. 
Architektura strony: Wybrane cytaty stają się wizualnym przerywnikiem między rozdziałami. Ramka porządkuje kompozycję rozkładówki i nadaje jej nieco teatralny charakter.
Typografia: Jako bazę wybrałam Minion Pro - krój szeryfowy, który w długim tekście jest niewidoczny, pozwalając czytelnikowi skupić się na treści. Nagłówki rozdziałów złożyłam Orpheus Pro, który dobrze kontrastuje ze spokojnym tekstem głównym.
Okładkę opracowałam w dwóch wariantach, wykorzystując mocny i wysoki krój Bodega Serif - w głębokiej czerni z szarą ilustracją Holmesa - mroczną oraz w intensywnej czerwieni, wyrazistą i przyciągającą wzrok.`
    },
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
    }
  ];
};

// --- ALL PROJECTS PAGE DATA (Grid View) ---

export type ProjectCategory = 
  | "Książki"
  | "Okładki"
  | "Produkty cyfrowe"
  | "Books"
  | "Covers"
  | "Digital products";

export const getProjectCategories = (lang: 'pl' | 'en'): { main: ProjectCategory[] } => {
  if (lang === 'en') {
    return {
      main: ["Books", "Covers", "Digital products"]
    };
  }
  return {
    main: ["Książki", "Okładki", "Produkty cyfrowe"]
  };
};

export interface AllProjectItem {
  id: string;
  title: string;
  author?: string;
  category: ProjectCategory;
  images: string[]; 
  portfolioId?: string; // Optional link to BookProject
}

// NOTE: Categories here must match what is returned by getProjectCategories to filter correctly.
// Since categories are localized, we need to return localized data here too.

export const getAllProjectsData = (lang: 'pl' | 'en'): AllProjectItem[] => {
  const isEn = lang === 'en';
  
  return [
    {
      id: "ap-14",
      title: isEn ? "She and He in Words" : "Ona i On w słowach",
      category: isEn ? "Books" : "Książki",
      portfolioId: "04",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_mockup2.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_mockup3.jpg",
        // "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_mockup4.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Ona_i_On_w_s%C5%82owach_mockup_ePUB.jpg"
      ]
    },
    {
      id: "ap-02",
      title: isEn ? "Fairy Tales" : "Baśnie",
      category: isEn ? "Books" : "Książki",
      portfolioId: "02",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_1.png",
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_2.jpg",
        // "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_3.png",
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_4.jpg",
        // "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_5.1.jpg",
        // "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_6.png",
        "https://storage.googleapis.com/ekreacje-assets/mockup_basnie_7.png",
        "https://storage.googleapis.com/ekreacje-assets/Kr%C3%B3lowa_%C5%9Aniegu_mockup_ePUB1.jpg"
      ]
    },
    {
      id: "ap-03",
      title: isEn ? "Doctor Dolittle" : "Doktor Dolittle i jego zwierzęta",
      category: isEn ? "Books" : "Książki",
      portfolioId: "03",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_dolittle_2.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_dolittle_1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_dolittle_3.jpg",
        // "https://storage.googleapis.com/ekreacje-assets/mockup_dolittle_4.1.jpg"
      ]
    },
    {
      id: "ap-25",
      title: isEn ? "Sherlock Holmes – The Valley of Fear (white)" : "Sherlock Holmes – Dolina Trwogi (wersja biała)",
      category: isEn ? "Books" : "Książki",
      portfolioId: "06",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_SherlockHolmes_2.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Mockup_SherlockHolmes_2.1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Rozk%C5%82ad%C3%B3wka_v2_1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Rozk%C5%82ad%C3%B3wka_v2_2.jpg"
      ]
    },
    {
      id: "ap-24",
      title: isEn ? "Sherlock Holmes – The Valley of Fear (red & black)" : "Sherlock Holmes – Dolina Trwogi (wersja czerwona i czarna)",
      category: isEn ? "Books" : "Książki",
      portfolioId: "05",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_SherlockHolmes_1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Mockup_SherlockHolmes_1.1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Mockup_SherlockHolmes_3.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Mockup_SherlockHolmes_3.1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Rozk%C5%82ad%C3%B3wka_v1_1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Rozk%C5%82ad%C3%B3wka_v1_2.jpg",
        "https://storage.googleapis.com/ekreacje-assets/Rozk%C5%82ad%C3%B3wka_v1_3.jpg"
      ]
    },
    {
      id: "ap-01",
      title: "Gruba Tańczy",
      category: isEn ? "Books" : "Książki",
      portfolioId: "01",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_1.jpg",
        // "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_2.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_3.jpg",
        // "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_4.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_5.1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_gruba_6.1.jpg"
      ]
    },
    {
      id: "ap-04",
      title: isEn ? "Unfiltered" : "Bez filtra",
      category: isEn ? "Covers" : "Okładki",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_bez_1.png"
      ]
    },
    {
      id: "ap-05",
      title: isEn ? "The Core Elements" : "Kluczowe elementy",
      category: isEn ? "Covers" : "Okładki",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_kluczowe_1.png",
      ]
    },
    {
      id: "ap-06",
      title: isEn ? "The Scent Collector" : "Kolekcjonerka zapachów",
      category: isEn ? "Covers" : "Okładki",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_kolekcjonerka_1.jpg",
        "https://storage.googleapis.com/ekreacje-assets/mockup_kolekcjonerka_2.png",
        "https://storage.googleapis.com/ekreacje-assets/mockup_kolekcjonerka_3.1.jpg"
      ]
    },
    {
      id: "ap-08",
      title: isEn ? "Entangled Thoughts" : "Splątane myśli",
      category: isEn ? "Covers" : "Okładki",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_splatana_1.png"
      ]
    },
    {
      id: "ap-09",
      title: isEn ? "The Art of Sketching" : "Sztuka szkicowania",
      category: isEn ? "Covers" : "Okładki",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_sztuka_1.jpg"
      ]
    },
    {
      id: "ap-10",
      title: isEn ? "Seen on Your Own Terms" : "Widoczna po swojemu",
      category: isEn ? "Covers" : "Okładki",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_widoczna_1.png"
      ]
    },
    {
      id: "ap-11",
      title: isEn ? "Whats Your Brands Visual Identity?" : "Jaki jest wizualny typ twojej marki?",
      category: isEn ? "Covers" : "Okładki",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_wizualny_1.png"
      ]
    },
    {
      id: "ap-12",
      title: isEn ? "From Burnout to Breakthrough" : "Od wypalenia do działania",
      category: isEn ? "Covers" : "Okładki",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_wypalenia_1.png"
      ]
    },
    {
      id: "ap-15",
      title: isEn ? "Understanding GDPR Consents" : "Zrozumieć zgody RODO",
      author: "Aleksandra Adamska",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_ePDF1.jpg"
      ]
    },
    {
      id: "ap-17",
      title: isEn ? "GDPR for Parents" : "RODO dla rodziców",
      author: "Aleksandra Adamska",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_ePDF3.jpg"
      ]
    },
    {
      id: "ap-16",
      title: isEn ? "Company Secrets. Part I" : "Sekrety spółki. Część I",
      author: "Aneta Ruszkowska",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_ePDF2.jpg"
      ]
    },
    {
      id: "ap-19",
      title: isEn ? "Caught in the First Emotion" : "Zatrzymani w pierwszym uczuciu",
      author: "Aneta Treder",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_ePDF5.jpg"
      ]
    },
    {
      id: "ap-21",
      title: isEn ? "On the Verge of Burnout" : "Na skraju wypalenia zawodowego",
      author: "Justyna Federowicz",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_ePDF7.jpg"
      ]
    },
    {
      id: "ap-23",
      title: isEn ? "Stuck in a Dead End. What's Next?" : "Utknęłam w martwym punkcie. Co dalej?",
      author: "Justyna Federowicz",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_ePDF9.jpg"
      ]
    },
    {
      id: "ap-22",
      title: isEn ? "Design a Career on Your Own Terms" : "Zaprojektuj karierę na własnych zasadach",
      author: "Justyna Federowicz",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_ePDF8.jpg"
      ]
    },
    {
      id: "ap-18",
      title: isEn ? "3 Strong Ideas for Success" : "3 mocne pomysły na sukces",
      author: "Kamil Fiszer",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_ePDF4.jpg"
      ]
    },
    {
      id: "ap-13",
      title: isEn ? "Andalusia - A Sensory Journey" : "Andaluzja - podróż dla zmysłów",
      author: isEn ? "Own work" : "Praca własna",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/mockup_zmyslow_1.1.jpg"
      ]
    },
    {
      id: "ap-20",
      title: isEn ? "Developmental Questions" : "Pytajki rozwojowe",
      author: isEn ? "Collective work" : "Praca zbiorowa",
      category: isEn ? "Digital products" : "Produkty cyfrowe",
      images: [
        "https://storage.googleapis.com/ekreacje-assets/Mockup_ePDF6.jpg"
      ]
    }
  ];
};