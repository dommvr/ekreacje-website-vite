export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  lastUpdated: string;
  version: string;
  sections: LegalSection[];
}

// --- POLISH DOCUMENTS ---

export const PRIVACY_POLICY_PL: LegalDocument = {
  id: "polityka-prywatnosci",
  title: "Polityka Prywatności",
  lastUpdated: "28.02.2026",
  version: "1.0",
  sections: [
    {
      id: "administrator",
      title: "1) Administrator danych i dane kontaktowe",
      content: `Podstawa prawna: RODO art. 13 ust. 1 lit. a

Administratorem Twoich danych osobowych (data controller) jest:
HYGGE e-Kreacje Sp. z o.o., NIP 732-22-188-14
Adres: 95-070 Rąbień AB, ul. Malwowa 29/1A
E-mail: contact@aleksandramarciniak.com

Przedstawiciel w UE:
Nie dotyczy (administrator ma siedzibę w Polsce).`
    },
    {
      id: "iod",
      title: "2) Inspektor Ochrony Danych (IOD)",
      content: `Podstawa prawna: RODO art. 13 ust. 1 lit. b

Nie wyznaczyliśmy Inspektora Ochrony Danych.`
    },
    {
      id: "dane",
      title: "3) Jakie dane przetwarzamy",
      content: `Podstawa prawna: RODO art. 12 ust. 1 oraz art. 13 ust. 1 lit. c

Poniżej opisujemy dane według konkretnych procesów na stronie:

A) Formularz „Kontakt”
- Dane podawane przez Ciebie: adres e-mail, treść wiadomości.
- Dane techniczne związane z wysłaniem formularza (jeśli są rejestrowane po stronie serwera): np. data i czas wysłania, adres IP, informacje o przeglądarce (User-Agent), adres URL/parametry żądania.
- W celu technicznej realizacji wysyłki wiadomości z formularza kontaktowego możemy korzystać z zewnętrznego dostawcy infrastruktury e-mail, który przetwarza dane zawarte w wiadomości oraz wybrane dane techniczne związane z jej wysyłką, w zakresie niezbędnym do doręczenia i obsługi wiadomości.

B) Standardowe logi serwera (jeśli są prowadzone)
- Dane techniczne: adres IP, data i czas, żądany zasób (URL), kod odpowiedzi, User-Agent, referer (jeśli przeglądarka go wysyła), informacje o błędach.
Uwaga: adres IP może stanowić daną osobową, także gdy jest dynamiczny, jeżeli administrator ma prawnie dostępne środki pozwalające na identyfikację (np. przez dostawcę dostępu do Internetu w określonych sytuacjach).

C) Cookie przechowujące preferencję języka
- Identyfikator cookie i jego zawartość: wyłącznie informacja o wybranym języku (np. „pl”, „en”).
- Nie używamy cookies marketingowych ani analitycznych (wg opisu funkcjonalności przekazanej do tej polityki).

D) GeoIP dla ustawienia domyślnego języka
- Wejście (input): adres IP używany wyłącznie do jednorazowego ustalenia kraju/regionu.
- Wyjście (output): kod kraju/regionu (Po naszej stronie nie utrwalamy surowego IP; dostawca usługi GeoIP może tymczasowo logować zapytania zgodnie z własną dokumentacją.).
- Retencja: tylko w ramach sesji (w pamięci operacyjnej), bez utrwalania w bazie.`
    },
    {
      id: "cele",
      title: "4) Cele i podstawy prawne przetwarzania",
      content: `Podstawa prawna: RODO art. 12 ust. 1 oraz art. 13 ust. 1 lit. c

4.1 Odpowiedź na zapytanie (formularz „Kontakt”)
Podstawa prawna: RODO art. 6 ust. 1 lit. f oraz RODO art. 13 ust. 1 lit. c; obowiązek informacyjny: RODO art. 12–13

- Dane: e-mail, treść wiadomości; ewentualnie techniczne metadane wysyłki (pkt 3A).
- Cel: udzielenie odpowiedzi, prowadzenie korespondencji w sprawie Twojego zapytania.
- Uzasadnienie podstawy prawnej (art. 6 ust. 1 lit. f): naszym prawnie uzasadnionym interesem jest komunikacja z osobami, które same inicjują kontakt, i obsługa zapytań.
- Retencja: do zakończenia korespondencji, a następnie przez okres potrzebny do ochrony przed roszczeniami lub ich dochodzenia (kryterium: przedawnienie roszczeń), o ile dotyczy; szczegóły w pkt 7.
- Odbiorcy: podmioty świadczące usługi hostingu, obsługi poczty elektronicznej oraz infrastruktury wysyłki wiadomości z formularza kontaktowego (pkt 5), w szczególności Vercel, Google / Gmail oraz Mailjet.
- Transfery poza EOG: mogą występować (pkt 6), w zależności od sposobu świadczenia usług przez dostawców i ich podwykonawców.

4.2 Bezpieczeństwo i przeciwdziałanie nadużyciom (logi serwera)
Podstawa prawna: RODO art. 6 ust. 1 lit. f oraz RODO art. 13 ust. 1 lit. c; obowiązek informacyjny: RODO art. 12–13

- Dane: logi serwera opisane w pkt 3B (w tym adres IP).
- Cel: zapewnienie bezpieczeństwa usług, wykrywanie błędów, ochrona przed nadużyciami (np. ataki, próby włamań), analiza incydentów.
- Uzasadnienie podstawy prawnej (art. 6 ust. 1 lit. f): naszym prawnie uzasadnionym interesem jest bezpieczeństwo strony i użytkowników oraz ochrona przed nadużyciami.
- Retencja: 1 godzina od daty zdarzenia, a w przypadku incydentu bezpieczeństwa do czasu jego wyjaśnienia i zamknięcia sprawy.
- Odbiorcy: Vercel Inc., USA (państwo trzecie, poza EOG).
- Transfery poza EOG: tak, do USA (pkt 6).

4.3 Cookie preferencji językowej
Podstawa prawna: RODO art. 6 ust. 1 lit. f oraz RODO art. 13 ust. 1 lit. c; dodatkowo: Prawo komunikacji elektronicznej art. 399–400

- Dane: identyfikator cookie oraz informacja o wybranym języku (pkt 3C).
- Cel: zapamiętanie preferencji językowej i wyświetlenie strony w wybranym języku przy kolejnych odsłonach.
- Uzasadnienie podstawy prawnej (art. 6 ust. 1 lit. f): naszym interesem jest poprawa użyteczności strony przez zapamiętanie wyboru użytkownika.
- Retencja: do czasu wygaśnięcia cookie lub jego usunięcia przez użytkownika: 12 miesięcy.
- Odbiorcy: co do zasady dostawca hostingu (pkt 5); brak innych odbiorców w związku z tym cookie.
- Transfery poza EOG: tak, do USA (pkt 6).

4.4 GeoIP dla ustawienia domyślnego języka
Podstawa prawna: RODO art. 6 ust. 1 lit. f oraz RODO art. 13 ust. 1 lit. c; obowiązek informacyjny: RODO art. 12–13

- Dane:
  • Wejście (input): adres IP wykorzystywany wyłącznie do jednorazowego ustalenia kraju/regionu.
  • Wyjście (output): kod kraju/regionu (Po naszej stronie nie utrwalamy surowego IP; dostawca usługi GeoIP może tymczasowo logować zapytania zgodnie ze swoją dokumentacją.).
- Cel: ustawienie domyślnego języka strony przy pierwszej wizycie, aby ułatwić korzystanie.
- Uzasadnienie podstawy prawnej (art. 6 ust. 1 lit. f): naszym interesem jest dopasowanie języka w sposób minimalnie ingerujący w prywatność (tylko kod kraju/regionu i tylko w sesji).
- Retencja: tylko sesja (w pamięci), brak trwałego zapisu.
- Odbiorcy: ipapi.co (Kloudend, Inc.), USA (państwo trzecie, poza EOG).
- Transfery poza EOG: nie (pkt 6).`
    },
    {
      id: "odbiorcy",
      title: "5) Odbiorcy danych / dostawcy usług",
      content: `Podstawa prawna: RODO art. 13 ust. 1 lit. e

Korzystamy z usług podmiotów, które mogą przetwarzać dane w naszym imieniu (podmioty przetwarzające), w szczególności:
- Hosting/serwer: Vercel Inc., USA (państwo trzecie, poza EOG).
- Poczta e-mail (obsługa korespondencji): Google / Gmail (Google LLC), USA (państwo trzecie, poza EOG).
- Infrastruktura wysyłki wiadomości z formularza kontaktowego: Mailjet (usługa Sinch Email; dokładna spółka z grupy Sinch zgodnie z zawartą umową / kontem usługi) – dostawca technicznej obsługi wysyłki wiadomości e-mail.
- Antyspam / zabezpieczenia formularza: nie dotyczy.
- GeoIP: ipapi.co (Kloudend, Inc.), USA (państwo trzecie, poza EOG).

Nie ujawniamy danych innym odbiorcom, chyba że:
- wymagają tego przepisy prawa, albo
- jest to niezbędne do ustalenia, dochodzenia lub obrony roszczeń.`
    },
    {
      id: "transfery",
      title: "6) Transfery danych poza EOG",
      content: `Podstawa prawna: RODO art. 13 ust. 1 lit. f

W związku z korzystaniem z niektórych dostawców dane mogą być przekazywane poza Europejski Obszar Gospodarczy. Dotyczy to w szczególności dostawców usług hostingu, poczty elektronicznej oraz infrastruktury wysyłki wiadomości. Przekazywanie odbywa się z zastosowaniem mechanizmów zgodnych z RODO, w szczególności na podstawie standardowych klauzul umownych (SCC) lub innych prawnie dopuszczalnych mechanizmów transferu, zależnie od danego dostawcy i jego podwykonawców.`
    },
    {
      id: "retencja",
      title: "7) Okres przechowywania danych",
      content: `Podstawa prawna: RODO art. 13 ust. 2 lit. a

- Formularz „Kontakt”: do zakończenia korespondencji, a następnie przez okres potrzebny do ochrony przed roszczeniami lub ich dochodzenia (kryterium: przedawnienie roszczeń), jeżeli jest to uzasadnione okolicznościami sprawy.
- Logi serwera: 1 godzina, a przy incydencie bezpieczeństwa do czasu wyjaśnienia.
- Cookie preferencji językowej: do czasu wygaśnięcia cookie lub usunięcia go przez użytkownika: 12 miesięcy.
- GeoIP: Po naszej stronie nie utrwalamy surowego IP; dostawca usługi GeoIP może tymczasowo logować zapytania zgodnie ze swoją dokumentacją..`
    },
    {
      id: "prawa",
      title: "8) Prawa osoby, której dane dotyczą, i jak je realizować",
      content: `Podstawa prawna: RODO art. 12 ust. 1–6 oraz art. 13 ust. 2 lit. b–d

Przysługują Ci prawa:
- dostępu do danych (RODO art. 15),
- sprostowania (RODO art. 16),
- usunięcia (RODO art. 17),
- ograniczenia przetwarzania (RODO art. 18),
- przenoszenia danych (RODO art. 20) – gdy przetwarzanie odbywa się na podstawie umowy lub zgody i w sposób zautomatyzowany,
- sprzeciwu (RODO art. 21) – gdy podstawą jest nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. f).

Jak złożyć wniosek:
- Napisz na: contact@aleksandramarciniak.com

Zasady obsługi wniosków:
- Odpowiadamy bez zbędnej zwłoki, nie później niż w terminach z RODO.
- Możemy poprosić o dodatkowe informacje, jeśli musimy potwierdzić tożsamość osoby składającej wniosek (tylko w niezbędnym zakresie).

Cofnięcie zgody:
- W opisanych procesach nie opieramy przetwarzania na zgodzie (art. 6 ust. 1 lit. a), więc cofnięcie zgody co do zasady nie dotyczy. Jeżeli w przyszłości uruchomimy proces oparty na zgodzie, poinformujemy o tym i umożliwimy jej cofnięcie tak łatwo, jak jej udzielenie.`
    },
    {
      id: "skarga",
      title: "9) Skarga do Prezesa UODO",
      content: `Podstawa prawna: RODO art. 13 ust. 2 lit. d

Jeżeli uznasz, że przetwarzanie Twoich danych narusza przepisy, masz prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO).
Aktualne informacje o sposobach złożenia skargi znajdziesz na stronie UODO.`
    },
    {
      id: "obowiazek",
      title: "10) Czy podanie danych jest obowiązkowe i konsekwencje braku",
      content: `Podstawa prawna: RODO art. 13 ust. 2 lit. e

- Formularz „Kontakt”: podanie e-maila i treści wiadomości jest dobrowolne, ale konieczne, abyśmy mogli odpowiedzieć. Bez tych danych nie obsłużymy zapytania.
- Logi serwera: dane techniczne (np. IP) są przekazywane automatycznie przez urządzenie i przeglądarkę w trakcie korzystania ze strony.
- Cookie językowe: możesz korzystać ze strony bez zapamiętywania preferencji językowej; w takim wypadku język może nie być pamiętany między wizytami.
- GeoIP: służy wyłącznie do ustawienia domyślnego języka; jeśli nie zadziała, język można zmienić ręcznie.`
    },
    {
      id: "profilowanie",
      title: "11) Zautomatyzowane podejmowanie decyzji i profilowanie",
      content: `Podstawa prawna: RODO art. 13 ust. 2 lit. f oraz RODO art. 22

Nie stosujemy zautomatyzowanego podejmowania decyzji ani profilowania w rozumieniu RODO.`
    },
    {
      id: "bezpieczenstwo",
      title: "12) Bezpieczeństwo danych oraz zmiany dokumentu",
      content: `Podstawa prawna: RODO art. 32 oraz RODO art. 12 ust. 1

Stosujemy środki organizacyjne i techniczne adekwatne do ryzyk przetwarzania, w szczególności:
- ograniczenia dostępu do danych,
- aktualizacje i zabezpieczenia systemów,
- zasadę minimalizacji (przetwarzamy tylko to, co potrzebne do wskazanych celów),
- rotację i kontrolę dostępu do logów (jeśli są prowadzone).

Zmiany Polityki:
Możemy aktualizować politykę, jeżeli zmieni się sposób działania strony, zakres danych albo przepisy. Aktualna wersja jest opublikowana na stronie.`
    }
  ]
};

export const COOKIES_POLICY_PL: LegalDocument = {
  id: "polityka-cookies",
  title: "Polityka Cookies",
  lastUpdated: "28.02.2026",
  version: "1.0",
  sections: [
    {
      id: "o-dokumencie",
      title: "1) O czym jest ten dokument",
      content: `Ta polityka opisuje, jak strona wykorzystuje pliki cookies i podobne technologie (np. local storage), czyli jak przechowujemy informacje lub uzyskujemy do nich dostęp w Twoim urządzeniu końcowym (komputer/telefon/tablet).

Na stronie stosujemy wyłącznie technologie niezbędne i funkcjonalne opisane poniżej:
- zapamiętania preferencji językowej
Nie stosujemy cookies analitycznych ani reklamowych.
Podstawa prawna: Prawo komunikacji elektronicznej art. 399 ust. 1; RODO art. 12 ust. 1`
    },
    {
      id: "definicje",
      title: "2) Definicje",
      content: `- Cookies (pliki cookies) – małe pliki tekstowe zapisywane w przeglądarce lub odczytywane przez stronę.
- Local storage / session storage – mechanizmy przeglądarki pozwalające zapisać informacje w pamięci urządzenia (odpowiednio: do czasu usunięcia lub do końca sesji).
- „Uzyskiwanie dostępu do informacji w urządzeniu końcowym” – dotyczy nie tylko zapisu, ale też odczytu informacji już zapisanej (np. odczyt wartości cookie, local storage).

Uwaga praktyczna: obowiązki z PKE dotyczą samego przechowywania/odczytu w urządzeniu końcowym, niezależnie od tego, czy ta informacja jest daną osobową.
Podstawa prawna: Prawo komunikacji elektronicznej art. 399 ust. 1; RODO art. 12 ust. 1`
    },
    {
      id: "technologie",
      title: "3) Jakie technologie stosujemy na stronie",
      content: `3.1 Technologia funkcjonalna dotycząca wyboru języka
Na stronie stosujemy technologię służącą do zapamiętania wybranego przez użytkownika języka, tak aby przy kolejnych odsłonach serwis mógł wyświetlać właściwą wersję językową.

- Nazwa: ekreacje_lang
- Rodzaj: plik cookie
- Cel: zapamiętanie wybranego języka strony (PL/EN)
- Zakres informacji: wyłącznie kod języka (np. „pl” / „en”)
- Okres przechowywania: 12 miesięcy

Plik cookie ekreacje_lang jest ustawiany dopiero po ręcznym wyborze języka przez użytkownika (np. poprzez kliknięcie przełącznika języka na stronie). Przy pierwszej wizycie język może zostać dobrany automatycznie na podstawie ustawień przeglądarki lub innych parametrów technicznych, jednak bez zapisywania tej informacji w tym pliku cookie do momentu wyraźnego wyboru przez użytkownika.

3.2 Inne technologie niezbędne do zapamiętania wyboru użytkownika
Na stronie stosujemy również mechanizm lokalnego przechowywania danych w przeglądarce (localStorage) w celu zapamiętania decyzji użytkownika dotyczącej cookies i podobnych technologii.

- Nazwa: ekreacje_cookie_consent
- Rodzaj: localStorage (nie jest to plik cookie)
- Cel: zapamiętanie decyzji użytkownika o akceptacji albo odrzuceniu cookies i podobnych technologii
- Zakres informacji: informacja o dokonanym wyborze
- Okres przechowywania: bezterminowo, do czasu usunięcia przez użytkownika lub wyczyszczenia danych przeglądarki

Technologia ta ma charakter techniczny i służy wyłącznie zachowaniu wyboru użytkownika, tak aby komunikat nie był wyświetlany ponownie przy każdej wizycie.

Podstawa prawna: Prawo komunikacji elektronicznej art. 399 ust. 1 oraz ust. 3 pkt 2 (w zakresie technologii niezbędnych do dostarczenia funkcji żądanej przez użytkownika)`
    },
    {
      id: "kategorie",
      title: "4) Kategorie cookies i czy wymagana jest zgoda",
      content: `Poniżej jasno wskazujemy, kiedy prosimy o zgodę, a kiedy działa wyjątek z PKE.

4.1 Cookies niezbędne
- Zgoda: nie jest wymagana, jeżeli cookie jest konieczne do wykonania transmisji komunikatu elektronicznego albo do dostarczenia usługi żądanej przez użytkownika (np. podstawowe działanie strony).
- Jak rozumiemy „konieczne”: bez tych cookies strona albo konkretna funkcja wyraźnie uruchomiona przez użytkownika nie działałaby prawidłowo.
Podstawa prawna: Prawo komunikacji elektronicznej art. 399 ust. 3 pkt 1–2

4.2 Cookies preferencyjne (język)
- Zgoda: co do zasady cookies preferencyjne mogą wymagać zgody, chyba że spełniają wyjątek „konieczne do usługi żądanej przez użytkownika”.
- Jak to działa u nas: cookie językowe służy wyłącznie do zapamiętania wyboru języka.
  • Ustawiamy je dopiero po wyborze języka przez użytkownika: Plik cookie ekreacje_lang jest ustawiany dopiero po ręcznym wyborze języka przez użytkownika (poprzez kliknięcie w przełącznik PL/EN w menu nawigacyjnym). Przy pierwszej wizycie język jest dobierany automatycznie (na podstawie GeoIP lub języka przeglądarki) i zapisywany jedynie w stanie aplikacji, ale nie jest wtedy zapisywany jako plik cookie.
  • Jeśli jest ustawione dopiero po wyborze, traktujemy je jako konieczne do dostarczenia usługi w wybranym języku (wyjątek z art. 399 ust. 3 pkt 2) i nie prosimy o dodatkową zgodę tylko na to jedno cookie.
- Jeżeli w przyszłości cookie językowe (lub inne preferencyjne) będzie ustawiane automatycznie bez działania użytkownika i nie będzie „konieczne” w rozumieniu PKE, wprowadzimy mechanizm zgody w banerze/panelu.
Podstawa prawna: Prawo komunikacji elektronicznej art. 399 ust. 3 pkt 2; art. 400; RODO art. 12 ust. 1

4.3 Cookies analityczne i marketingowe
Nie stosujemy.
- Zgoda: byłaby wymagana przed uruchomieniem (uprzednia, dobrowolna i świadoma), ale ta kategoria nie występuje na stronie.
Podstawa prawna: Prawo komunikacji elektronicznej art. 399 ust. 1 pkt 1–2; art. 400`
    },
    {
      id: "pliki",
      title: "5) Pliki cookies i inne technologie lokalnego przechowywania danych",
      content: `Na stronie wykorzystujemy wyłącznie technologie niezbędne do jej prawidłowego działania oraz zapamiętania wyborów użytkownika. Nie stosujemy cookies analitycznych, marketingowych ani reklamowych.

- ekreacje_lang
Jest to plik cookie służący do zapamiętania wybranego języka strony (PL/EN), tak aby przy kolejnych odsłonach serwis mógł wyświetlać właściwą wersję językową.
- Cel: zapamiętanie wyboru języka
- Rodzaj: cookie
- Okres przechowywania: 12 miesięcy
Cookie to ma charakter funkcjonalny i służy zapewnieniu wygody korzystania ze strony.

- ekreacje_cookie_consent
Nie jest to plik cookie, lecz wpis przechowywany w localStorage przeglądarki. Służy do zapamiętania decyzji użytkownika dotyczącej akceptacji albo odrzucenia cookies i podobnych technologii, aby komunikat nie był wyświetlany ponownie przy każdej wizycie.
- Cel: zapamiętanie decyzji użytkownika
- Rodzaj: localStorage
- Okres przechowywania: bezterminowo, do czasu usunięcia przez użytkownika lub wyczyszczenia danych przeglądarki

Mechanizm ten ma charakter techniczny i służy zachowaniu wyboru użytkownika.
Użytkownik może w każdej chwili zmienić ustawienia dotyczące cookies lub usunąć zapisane dane lokalne za pomocą ustawień swojej przeglądarki.
Ponieważ stosowane technologie są ograniczone do rozwiązań niezbędnych lub służących zapamiętaniu wyboru użytkownika, nie wykorzystujemy ich do profilowania ani celów marketingowych.

Podstawa prawna: Prawo komunikacji elektronicznej art. 399 ust. 1`
    },
    {
      id: "zarzadzanie",
      title: "6) Jak zarządzać cookies",
      content: `6.1 Ustawienia przeglądarki
Możesz:
- zablokować cookies,
- usunąć zapisane cookies,
- ustawić, by cookies usuwały się po zamknięciu przeglądarki,
- ograniczyć cookies stron trzecich (tu i tak ich nie stosujemy, ale przeglądarki lubią mieć swoje życie).

Instrukcje znajdują się w ustawieniach Twojej przeglądarki (np. Chrome/Firefox/Safari/Edge).

6.2 Baner informacyjny dotyczący cookies i podobnych technologii

Na stronie wyświetlany jest baner informacyjny dotyczący cookies i podobnych technologii lokalnego przechowywania danych.
Baner służy do:
- poinformowania użytkownika o stosowaniu cookies i podobnych technologii,
- umożliwienia użytkownikowi podjęcia decyzji dotyczącej ich akceptacji albo odrzucenia,
- zapisania tej decyzji w localStorage, aby komunikat nie był wyświetlany ponownie przy każdej wizycie.
Baner zawiera również odnośnik do niniejszej Polityki Cookies. Dodatkowo linki do Polityki Cookies, Polityki Prywatności oraz regulaminu są dostępne na stronie.

Jeżeli w przyszłości na stronie zostaną wdrożone cookies opcjonalne, w szczególności analityczne lub marketingowe, przed ich uruchomieniem wdrożymy odpowiedni mechanizm zbierania zgody, zgodny z obowiązującymi przepisami.

Podstawa prawna: Prawo komunikacji elektronicznej art. 399 ust. 1 i 2 oraz art. 400`
    },
    {
      id: "aktualizacje",
      title: "7) Aktualizacje dokumentu",
      content: `Polityka cookies może być aktualizowana, jeśli zmieni się sposób działania strony (np. pojawią się nowe kategorie cookies) albo zmienią się przepisy. Aktualna wersja jest opublikowana na stronie.

Podstawa prawna: RODO art. 12 ust. 1; Prawo komunikacji elektronicznej art. 399 ust. 1`
    }
  ]
};

export const REGULATIONS_PL: LegalDocument = {
  id: "regulamin",
  title: "Regulamin Serwisu",
  lastUpdated: "28.02.2026",
  version: "1.0",
  sections: [
    {
      id: "informacje-ogolne",
      title: "1) Informacje ogólne",
      content: `1.1. Niniejszy Regulamin określa zasady korzystania z serwisu internetowego prowadzonego przez:

HYGGE e-Kreacje Sp. z o.o.
siedziba i adres: 95-070 Rąbień AB, ul. Malwowa 29/1A
NIP: 7322218814
KRS: 0001105385
sąd rejestrowy: Sąd Rejonowy dla Łodzi-Śródmieścia w Łodzi, XX Wydział Gospodarczy Krajowego Rejestru Sądowego
kapitał zakładowy: 5 000,00 zł
e-mail: kontakt@aleksandramarciniak.com

dalej jako: „Usługodawca”.

1.2. Regulamin jest udostępniany nieodpłatnie w Serwisie w sposób umożliwiający jego pozyskanie, odtwarzanie i utrwalanie.

1.3. Rozpoczęcie korzystania z Serwisu oznacza zapoznanie się z Regulaminem oraz akceptację jego postanowień w zakresie niezbędnym do korzystania z usług świadczonych drogą elektroniczną.`
    },
    {
      id: "definicje",
      title: "2) Definicje",
      content: `Na potrzeby Regulaminu przyjmuje się następujące znaczenie pojęć:

2.1. Usługodawca – HYGGE e-Kreacje Sp. z o.o., wskazana w pkt 1.1.

2.2. Użytkownik / Usługobiorca – osoba fizyczna, osoba prawna lub jednostka organizacyjna korzystająca z Serwisu, w szczególności przeglądająca treści lub wysyłająca wiadomość przez formularz kontaktowy.

2.3. Serwis – strona internetowa prowadzona przez Usługodawcę pod adresem: https://aleksandramarciniak.com wraz z jej podstronami.

2.4. Usługa elektroniczna – usługa świadczona drogą elektroniczną w rozumieniu obowiązujących przepisów, bez jednoczesnej obecności stron, poprzez przekaz danych na indywidualne żądanie Użytkownika, przesyłanych i odbieranych za pomocą urządzeń do elektronicznego przetwarzania i przechowywania danych, w całości za pośrednictwem sieci telekomunikacyjnej.

2.5. Formularz kontaktowy – funkcjonalność Serwisu umożliwiająca wysłanie wiadomości do Usługodawcy, w ramach której Użytkownik może podać adres e-mail oraz treść wiadomości.`
    },
    {
      id: "rodzaje-uslug",
      title: "3) Rodzaje i zakres usług elektronicznych",
      content: `3.1. Usługodawca świadczy drogą elektroniczną następujące usługi:

a) udostępnianie treści informacyjnych w Serwisie poprzez umożliwienie przeglądania zawartości strony, w tym informacji o usługach graficznych i projektowych, prezentacji oferty, przykładowych realizacji, danych kontaktowych oraz informacji dotyczących współpracy,

b) umożliwienie kontaktu z Usługodawcą za pomocą formularza kontaktowego,

c) ustalenie i obsługa preferencji językowej Serwisu, w tym:
- automatyczne dobranie domyślnego języka przy pierwszej wizycie na podstawie ustawień technicznych (np. ustawień przeglądarki lub mechanizmu GeoIP),
- zapamiętanie ręcznie wybranego przez Użytkownika języka przy użyciu pliku cookie służącego wyłącznie temu celowi.

3.2. Usługi świadczone w Serwisie mają charakter nieodpłatny.

3.3. Korzystanie z łącza internetowego może wiązać się z kosztami po stronie Użytkownika, zgodnie z umową zawartą przez niego z dostawcą usług telekomunikacyjnych lub Internetu.`
    },
    {
      id: "warunki-swiadczenia",
      title: "4) Warunki świadczenia usług i wymagania techniczne",
      content: `4.1. Do prawidłowego korzystania z Serwisu wymagane są:

a) urządzenie z dostępem do Internetu,
b) aktualna wersja przeglądarki internetowej (np. Chrome, Firefox, Safari, Edge),
c) włączona obsługa JavaScript, ponieważ niektóre funkcje i elementy interfejsu Serwisu wymagają jej do prawidłowego działania,
d) obsługa plików cookies, jeżeli Użytkownik chce, aby Serwis zapamiętywał wybrany język.

4.2. Użytkownik może ograniczyć lub zablokować pliki cookies w ustawieniach swojej przeglądarki. Może to spowodować brak zapamiętywania preferencji językowej, ale co do zasady nie powinno uniemożliwiać przeglądania treści informacyjnych.

4.3. Usługodawca dokłada należytej staranności, aby Serwis działał poprawnie na typowych konfiguracjach sprzętowych i programowych, jednak nie gwarantuje prawidłowego działania Serwisu na konfiguracjach nietypowych, nieaktualnych lub nieobsługiwanych przez producentów oprogramowania.`
    },
    {
      id: "zagrozenia",
      title: "5) Informacja o szczególnych zagrożeniach i stosowanych technologiach",
      content: `5.1. Korzystanie z usług świadczonych drogą elektroniczną może wiązać się z typowymi zagrożeniami występującymi w środowisku internetowym, w szczególności takimi jak:
- złośliwe oprogramowanie,
- próby phishingu,
- przejęcie sesji,
- działanie oprogramowania osób trzecich,
- uzyskanie dostępu do danych przez osoby nieuprawnione.

5.2. W celu ograniczenia ryzyk, o których mowa powyżej, Użytkownik powinien korzystać z aktualnego systemu operacyjnego, aktualnej przeglądarki internetowej oraz odpowiednich środków bezpieczeństwa, w tym programów ochronnych i aktualizacji.

5.3. W Serwisie mogą być wykorzystywane technologie takie jak:
- pliki cookies,
- localStorage,
- skrypty JavaScript.

5.4. Funkcje i cele wskazanych technologii są związane wyłącznie z prawidłowym działaniem Serwisu, zapamiętaniem wyborów Użytkownika oraz obsługą jego preferencji. Szczegółowe informacje znajdują się w Polityce Cookies oraz Polityce Prywatności.`
    },
    {
      id: "zakaz-tresci",
      title: "6) Zakaz dostarczania treści bezprawnych",
      content: `6.1. Użytkownik jest zobowiązany do korzystania z Serwisu w sposób zgodny z prawem, dobrymi obyczajami oraz z poszanowaniem praw osób trzecich.

6.2. Użytkownik nie może dostarczać treści o charakterze bezprawnym, w szczególności:
a) naruszających prawa autorskie, dobra osobiste lub tajemnice prawnie chronione,
b) zawierających groźby, treści obraźliwe, dyskryminujące lub nawołujące do nienawiści,
c) zawierających złośliwe oprogramowanie, linki do phishingu lub treści służące obchodzeniu zabezpieczeń,
d) mających charakter spamu lub prób nadużycia formularza kontaktowego.`
    },
    {
      id: "formularz",
      title: "7) Zasady korzystania z formularza kontaktowego",
      content: `7.1. Formularz kontaktowy służy do wysyłania zapytań do Usługodawcy, w szczególności dotyczących oferty, współpracy oraz spraw organizacyjnych.

7.2. W ramach formularza kontaktowego Użytkownik może podać:
- adres e-mail,
- treść wiadomości.

7.3. Podanie adresu e-mail jest konieczne, jeżeli Użytkownik oczekuje odpowiedzi.

7.4. Wiadomość przesyłana za pomocą formularza powinna dotyczyć działalności Usługodawcy lub treści prezentowanych w Serwisie oraz nie może naruszać postanowień Regulaminu, w szczególności pkt 6.

7.5. W celu ograniczania nadużyć i ochrony przed spamem Usługodawca stosuje mechanizmy bezpieczeństwa, w tym mechanizm typu honeypot, a także może stosować filtry antyspamowe, ograniczenia liczby wysyłek oraz czasowe blokady techniczne w razie wykrycia ataków lub nadużyć.

7.6. Usługodawca nie gwarantuje odpowiedzi w określonym czasie. Brak odpowiedzi nie oznacza przyjęcia oferty, zawarcia umowy ani zobowiązania do realizacji zlecenia.`
    },
    {
      id: "umowy",
      title: "8) Warunki zawierania i rozwiązywania umów o świadczenie usług drogą elektroniczną",
      content: `8.1. Umowa o świadczenie usługi elektronicznej polegającej na udostępnianiu treści informacyjnych w Serwisie zostaje zawarta z chwilą wejścia przez Użytkownika do Serwisu i rozpoczyna się z momentem wyświetlenia strony.

8.2. Umowa, o której mowa w pkt 8.1, rozwiązuje się z chwilą opuszczenia przez Użytkownika Serwisu.

8.3. Umowa o świadczenie usługi elektronicznej polegającej na umożliwieniu skorzystania z formularza kontaktowego zostaje zawarta z chwilą rozpoczęcia korzystania z tej funkcjonalności przez Użytkownika.

8.4. Umowa dotycząca formularza kontaktowego rozwiązuje się z chwilą:
a) skutecznego wysłania wiadomości przez formularz, albo
b) wcześniejszego zaprzestania korzystania z formularza bez wysłania wiadomości.

8.5. Użytkownik może w każdej chwili zakończyć korzystanie z usług świadczonych drogą elektroniczną poprzez opuszczenie Serwisu albo zaprzestanie korzystania z danej funkcjonalności.

8.6. Korzystanie z usług elektronicznych świadczonych w Serwisie nie wymaga rejestracji konta ani zawierania odrębnej umowy w formie pisemnej.`
    },
    {
      id: "reklamacje",
      title: "9) Reklamacje i zgłoszenia dotyczące usług elektronicznych",
      content: `9.1. Użytkownik może składać reklamacje dotyczące funkcjonowania Serwisu oraz świadczonych usług elektronicznych, w szczególności w przypadku:
- niedostępności Serwisu,
- błędów działania formularza kontaktowego,
- nieprawidłowego działania funkcji Serwisu.

9.2. Reklamacje należy zgłaszać na adres e-mail: contact@aleksandramarciniak.com.

9.3. W zgłoszeniu reklamacyjnym warto podać:
a) datę i przybliżoną godzinę wystąpienia problemu,
b) adres podstrony (URL), jeżeli dotyczy,
c) rodzaj urządzenia i przeglądarki,
d) dane kontaktowe do udzielenia odpowiedzi.

9.4. Usługodawca rozpatrzy reklamację bez zbędnej zwłoki, nie później niż w terminie 14 dni od dnia jej otrzymania.`
    },
    {
      id: "odpowiedzialnosc",
      title: "10) Odpowiedzialność",
      content: `10.1. Usługodawca świadczy usługi drogą elektroniczną z należytą starannością, z uwzględnieniem charakteru i zakresu tych usług.

10.2. W granicach dopuszczalnych przez bezwzględnie obowiązujące przepisy prawa, Usługodawca nie ponosi odpowiedzialności za:
a) przerwy w dostępności Serwisu wynikające z przyczyn niezależnych od Usługodawcy, w tym awarii sieci Internet, awarii po stronie dostawców usług telekomunikacyjnych lub hostingowych,
b) skutki korzystania z Serwisu w sposób sprzeczny z Regulaminem lub przepisami prawa,
c) szkody wynikające z korzystania z Serwisu na urządzeniach lub oprogramowaniu niespełniających wymagań technicznych określonych w Regulaminie.

10.3. Jeżeli w Serwisie znajdują się odnośniki do stron zewnętrznych, Usługodawca nie odpowiada za treści, polityki ani działanie tych stron, chyba że odpowiedzialność taka wynika wprost z przepisów prawa.`
    },
    {
      id: "prawa-autorskie",
      title: "11) Prawa autorskie i własność treści",
      content: `11.1. Treści udostępnione w Serwisie, w szczególności teksty, grafiki, logotypy, układ strony, elementy identyfikacji wizualnej oraz inne materiały, mogą stanowić utwory chronione prawem autorskim lub podlegać ochronie na innych podstawach prawnych.

11.2. Dozwolone jest korzystanie z treści Serwisu wyłącznie w zakresie własnego użytku i w granicach dozwolonych przez przepisy prawa.

11.3. Bez uprzedniej zgody Usługodawcy lub innego uprawnionego podmiotu zabronione jest w szczególności kopiowanie, rozpowszechnianie, modyfikowanie lub wykorzystywanie treści Serwisu w celach komercyjnych, chyba że co innego wynika z bezwzględnie obowiązujących przepisów prawa.`
    },
    {
      id: "ograniczenia",
      title: "12) Ograniczenie lub zawieszenie dostępu w razie nadużyć",
      content: `12.1. Usługodawca może czasowo ograniczyć dostęp do Serwisu lub jego wybranych funkcji, w szczególności formularza kontaktowego, jeżeli jest to konieczne z uwagi na:
a) bezpieczeństwo Serwisu,
b) przeciwdziałanie nadużyciom, spamowi lub atakom,
c) prowadzenie prac serwisowych, technicznych lub konserwacyjnych.

12.2. Jeżeli ograniczenie dotyczy wyłącznie formularza kontaktowego, Użytkownik może skontaktować się z Usługodawcą bezpośrednio poprzez adres e-mail wskazany w Regulaminie.`
    },
    {
      id: "zmiany",
      title: "13) Zmiany Regulaminu",
      content: `13.1. Usługodawca może zmienić Regulamin z ważnych przyczyn, w szczególności w przypadku:
a) zmiany funkcjonalności Serwisu lub zakresu usług elektronicznych,
b) zmiany przepisów prawa,
c) konieczności doprecyzowania postanowień Regulaminu,
d) zmiany danych identyfikacyjnych lub kontaktowych Usługodawcy.

13.2. Zmiany Regulaminu są publikowane w Serwisie wraz z oznaczeniem daty wejścia w życie nowej wersji.

13.3. Zmiany Regulaminu nie naruszają praw nabytych przez Użytkowników przed datą wejścia w życie nowej wersji, o ile takie prawa powstały.`
    },
    {
      id: "prawo-wlasciwe",
      title: "14) Prawo właściwe, właściwość sądu, kontakt",
      content: `14.1. Do Regulaminu stosuje się prawo polskie.

14.2. Spory związane z korzystaniem z Serwisu będą rozstrzygane przez sąd właściwy zgodnie z przepisami powszechnie obowiązującego prawa.

14.3. Kontakt z Usługodawcą:
e-mail: contact@aleksandramarciniak.com
adres: 95-070 Rąbień AB, ul. Malwowa 29/1A`
    }
  ]
};

// --- ENGLISH DOCUMENTS ---

export const PRIVACY_POLICY_EN: LegalDocument = {
  id: "polityka-prywatnosci",
  title: "Privacy Policy",
  lastUpdated: "24.05.2024",
  version: "1.0",
  sections: [
    {
      id: "cel",
      title: "Purpose and Scope of Data Collection",
      content: `The Administrator processes Users' personal data for the purpose of providing design services, communication, and direct marketing of own services.

Data is collected exclusively to the extent necessary to achieve the specified purpose, based on User consent or legal provisions. In the case of contact via the form, the email address and message content are collected, allowing for the preparation of an individual quote and response to the inquiry.`
    },
    {
      id: "prawa",
      title: "User Rights",
      content: `Every User has the right to access their data, correct it, delete it ("right to be forgotten"), and restrict its processing.

The User may withdraw consent for data processing at any time, which does not affect the lawfulness of processing based on consent before its withdrawal. Please direct any requests in this regard to the email address provided in the Contact section.`
    },
    {
      id: "bezpieczenstwo",
      title: "Data Security",
      content: `We employ advanced technical and organizational measures to ensure the protection of processed personal data appropriate to the threats and categories of data protected.

In particular, we secure data against unauthorized disclosure, takeover by an unauthorized person, processing in violation of the act, and change, loss, damage, or destruction.`
    }
  ]
};

export const COOKIES_POLICY_EN: LegalDocument = {
  id: "polityka-cookies",
  title: "Cookies Policy",
  lastUpdated: "24.05.2024",
  version: "1.0",
  sections: [
    {
      id: "definicja",
      title: "What are cookies?",
      content: `Cookies are IT data, in particular text files, which are stored on the Service User's end device and are intended for using the Service's websites.

Cookies usually contain the name of the website they come from, the time they are stored on the end device, and a unique number.`
    },
    {
      id: "rodzaje",
      title: "Types and Purpose of Use",
      content: `The Service uses two basic types of cookies: "session" cookies and "persistent" cookies.

Session cookies are temporary files that are stored on the User's end device until logging out, leaving the website, or turning off the software (web browser).`
    }
  ]
};

export const REGULATIONS_EN: LegalDocument = {
  id: "regulamin",
  title: "Service Regulations",
  lastUpdated: "24.05.2024",
  version: "1.0",
  sections: [
    {
      id: "postanowienia",
      title: "General Provisions",
      content: `The Regulations define the rules for using services provided electronically by e-kreacje. The Service is used to present a portfolio and enables contact to obtain a quote for design services.

All content posted on the service, including graphic designs and texts, constitutes the intellectual property of the Administrator and is subject to legal protection.`
    },
    {
      id: "uslugi",
      title: "Service Principles",
      content: `Services are provided on the basis of individual agreements concluded with Clients. The calculator available on the service is for reference purposes only and does not constitute a commercial offer.`
    }
  ]
};

const LEGAL_DOCS_DATA_PL = {
  "polityka-prywatnosci": PRIVACY_POLICY_PL,
  "polityka-cookies": COOKIES_POLICY_PL,
  "regulamin": REGULATIONS_PL
};

const LEGAL_DOCS_DATA_EN = {
  "polityka-prywatnosci": PRIVACY_POLICY_EN,
  "polityka-cookies": COOKIES_POLICY_EN,
  "regulamin": REGULATIONS_EN
};

export const getLegalDocs = (lang: string) => {
  if (lang === 'en') {
    return LEGAL_DOCS_DATA_EN;
  }
  return LEGAL_DOCS_DATA_PL;
};