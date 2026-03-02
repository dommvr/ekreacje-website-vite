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
  lastUpdated: "28.02.2026",
  version: "1.0",
  sections: [
    {
      id: "administrator",
      title: "1) Data Controller and Contact Details",
      content: `Legal basis: GDPR (RODO) Article 13(1)(a)

The controller of your personal data (data controller) is:
HYGGE e-Kreacje Sp. z o.o., Tax Identification Number (NIP): 732-22-188-14
Address: 95-070 Rąbień AB, ul. Malwowa 29/1A
E-mail: contact@aleksandramarciniak.com

Representative in the EU:
Not applicable (the controller is established in Poland).`
    },
    {
      id: "iod",
      title: "2) Data Protection Officer (DPO)",
      content: `Legal basis: GDPR (RODO) Article 13(1)(b)

We have not appointed a Data Protection Officer.`
    },
    {
      id: "dane",
      title: "3) What data we process",
      content: `Legal basis: GDPR (RODO) Article 12(1) and Article 13(1)(c)

Below, we describe the data by specific processes on the website:

A) “Contact” form
- Data provided by you: e-mail address, message content.
- Technical data related to submission of the form (if logged on the server side): e.g. date and time of submission, IP address, browser information (User-Agent), request URL/parameters.
- For the technical handling of message transmission from the contact form, we may use an external e-mail infrastructure provider, which processes the data contained in the message and selected technical data related to its transmission, to the extent necessary for delivery and handling of the message.

B) Standard server logs (if maintained)
- Technical data: IP address, date and time, requested resource (URL), response code, User-Agent, referrer (if sent by the browser), error information.
- Note: an IP address may constitute personal data, including when it is dynamic, if the controller has legally available means enabling identification (e.g. through the Internet access provider in certain circumstances).

C) Cookie storing language preference
- Cookie identifier and its content: exclusively information about the selected language (e.g. “pl”, “en”).
- We do not use marketing or analytics cookies (according to the functionality description provided for this policy).

D) GeoIP for setting the default language
- Input: IP address used solely for a one-time determination of country/region.
- Output: country/region code (On our side, we do not retain the raw IP; the GeoIP service provider may temporarily log queries in accordance with its own documentation.).
- Retention: only for the duration of the session (in RAM), without storage in a database.`
    },
    {
      id: "cele",
      title: "4) Purposes and legal bases of processing",
      content: `Legal basis: GDPR (RODO) Article 12(1) and Article 13(1)(c)

4.1 Responding to an inquiry (“Contact” form)
Legal basis: GDPR (RODO) Article 6(1)(f) and GDPR (RODO) Article 13(1)(c); information obligation: GDPR (RODO) Articles 12-13

- Data: e-mail, message content; possibly technical transmission metadata (Section 3A).
- Purpose: to provide a response and conduct correspondence concerning your inquiry.
- Justification of the legal basis (Article 6(1)(f)): our legitimate interest is communication with persons who themselves initiate contact and handling inquiries.
- Retention: until the correspondence is concluded, and thereafter for the period necessary to protect against claims or to pursue claims (criterion: limitation period for claims), where applicable; details in Section 7.
- Recipients: entities providing hosting services, e-mail handling services, and infrastructure for sending messages from the contact form (Section 5), in particular Vercel, Google / Gmail, and Mailjet.
- Transfers outside the EEA: may occur (Section 6), depending on the manner in which services are provided by the providers and their subprocessors.

4.2 Security and prevention of abuse (server logs)
Legal basis: GDPR (RODO) Article 6(1)(f) and GDPR (RODO) Article 13(1)(c); information obligation: GDPR (RODO) Articles 12-13

- Data: server logs described in Section 3B (including IP address).
- Purpose: ensuring service security, detecting errors, protection against abuse (e.g. attacks, intrusion attempts), incident analysis.
- Justification of the legal basis (Article 6(1)(f)): our legitimate interest is the security of the website and users, and protection against abuse.
- Retention: 1 hour from the date of the event, and in the event of a security incident, until it is clarified and the matter is closed.
- Recipients: Vercel Inc., USA (third country, outside the EEA).
- Transfers outside the EEA: yes, to the USA (Section 6).

4.3 Language preference cookie
Legal basis: GDPR (RODO) Article 6(1)(f) and GDPR (RODO) Article 13(1)(c); additionally: Electronic Communications Law (Prawo komunikacji elektronicznej) Articles 399-400

- Data: cookie identifier and information about the selected language (Section 3C).
- Purpose: to remember the language preference and display the website in the selected language on subsequent page views.
- Justification of the legal basis (Article 6(1)(f)): our interest is to improve the website’s usability by remembering the user’s choice.
- Retention: until the cookie expires or is deleted by the user: 12 months.
- Recipients: as a rule, the hosting provider (Section 5); no other recipients in connection with this cookie.
- Transfers outside the EEA: yes, to the USA (Section 6).

4.4 GeoIP for setting the default language
Legal basis: GDPR (RODO) Article 6(1)(f) and GDPR (RODO) Article 13(1)(c); information obligation: GDPR (RODO) Articles 12-13

- Data:
  • Input: IP address used solely for a one-time determination of country/region.
  • Output: country/region code (On our side, we do not retain the raw IP; the GeoIP service provider may temporarily log queries in accordance with its documentation.).
- Purpose: to set the website’s default language on the first visit in order to facilitate use.
- Justification of the legal basis (Article 6(1)(f)): our interest is to tailor the language in a manner minimally intrusive to privacy (only the country/region code and only during the session).
- Retention: session only (in memory), no permanent record.
- Recipients: ipapi.co (Kloudend, Inc.), USA (third country, outside the EEA).
- Transfers outside the EEA: no (Section 6).`
    },
    {
      id: "odbiorcy",
      title: "5) Data recipients / service providers",
      content: `Legal basis: GDPR (RODO) Article 13(1)(e)

We use the services of entities that may process data on our behalf (processors), in particular:
- Hosting/server: Vercel Inc., USA (third country, outside the EEA).
- E-mail (handling correspondence): Google / Gmail (Google LLC), USA (third country, outside the EEA).
- Infrastructure for sending messages from the contact form: Mailjet (a Sinch Email service; the exact company within the Sinch group in accordance with the concluded agreement / service account) – provider of the technical handling of e-mail message transmission.
- Anti-spam / form security: not applicable.
- GeoIP: ipapi.co (Kloudend, Inc.), USA (third country, outside the EEA).

We do not disclose data to other recipients, unless:
- this is required by law, or
- it is necessary to establish, pursue, or defend claims.`
    },
    {
      id: "transfery",
      title: "6) Transfers of data outside the EEA",
      content: `Legal basis: GDPR (RODO) Article 13(1)(f)

In connection with the use of certain providers, data may be transferred outside the European Economic Area. This applies in particular to providers of hosting services, e-mail services, and message transmission infrastructure. Transfers are carried out using mechanisms compliant with the GDPR (RODO), in particular on the basis of Standard Contractual Clauses (SCCs) or other legally permissible transfer mechanisms, depending on the given provider and its subprocessors.`
    },
    {
      id: "retencja",
      title: "7) Data retention period",
      content: `Legal basis: GDPR (RODO) Article 13(2)(a)

- “Contact” form: until the correspondence is concluded, and thereafter for the period necessary to protect against claims or to pursue claims (criterion: limitation period for claims), if justified by the circumstances of the matter.
- Server logs: 1 hour, and in the event of a security incident, until clarification.
- Language preference cookie: until the cookie expires or is deleted by the user: 12 months.
- GeoIP: On our side, we do not retain the raw IP; the GeoIP service provider may temporarily log queries in accordance with its documentation..`
    },
    {
      id: "prawa",
      title: "8) Rights of the data subject and how to exercise them",
      content: `Legal basis: GDPR (RODO) Article 12(1)-(6) and Article 13(2)(b)-(d)

You have the following rights:
- access to data (GDPR (RODO) Article 15),
- rectification (GDPR (RODO) Article 16),
- erasure (GDPR (RODO) Article 17),
- restriction of processing (GDPR (RODO) Article 18),
- data portability (GDPR (RODO) Article 20) – where processing is carried out on the basis of a contract or consent and by automated means,
- objection (GDPR (RODO) Article 21) – where the basis is our legitimate interest (Article 6(1)(f)).

How to submit a request:
- Write to: contact@aleksandramarciniak.com

Rules for handling requests:
- We respond without undue delay, no later than within the time limits specified in the GDPR (RODO).
- We may request additional information if we must confirm the identity of the person submitting the request (only to the extent necessary).

Withdrawal of consent:
- In the processes described, we do not base processing on consent (Article 6(1)(a)), so withdrawal of consent, as a rule, does not apply. If, in the future, we introduce a process based on consent, we will inform you of this and enable its withdrawal as easily as it was given.`
    },
    {
      id: "skarga",
      title: "9) Complaint to the President of the Personal Data Protection Office (Prezes UODO)",
      content: `Legal basis: GDPR (RODO) Article 13(2)(d)

If you consider that the processing of your data violates the law, you have the right to lodge a complaint with the President of the Personal Data Protection Office (Urząd Ochrony Danych Osobowych, UODO).
Current information on how to lodge a complaint can be found on the UODO website.`
    },
    {
      id: "obowiazek",
      title: "10) Whether provision of data is mandatory and consequences of failure to provide it",
      content: `Legal basis: GDPR (RODO) Article 13(2)(e)

- “Contact” form: providing your e-mail address and message content is voluntary, but necessary for us to respond. Without these data, we will not process the inquiry.
- Server logs: technical data (e.g. IP) are transmitted automatically by the device and browser while using the website.
- Language cookies: you may use the website without remembering your language preference; in that case, the language may not be remembered between visits.
- GeoIP: serves solely to set the default language; if it does not work, the language can be changed manually.`
    },
    {
      id: "profilowanie",
      title: "11) Automated decision-making and profiling",
      content: `Legal basis: GDPR (RODO) Article 13(2)(f) and GDPR (RODO) Article 22

We do not apply automated decision-making or profiling within the meaning of the GDPR (RODO).`
    },
    {
      id: "bezpieczenstwo",
      title: "12) Data security and amendments to the document",
      content: `Legal basis: GDPR (RODO) Article 32 and GDPR (RODO) Article 12(1)

We apply organizational and technical measures adequate to the risks of processing, in particular:
- restrictions on access to data,
- system updates and safeguards,
- the principle of minimization (we process only what is necessary for the indicated purposes),
- rotation and access control for logs (if maintained).

Changes to the Policy:
We may update the policy if the manner in which the website operates, the scope of data, or the law changes. The current version is published on the website.`
    }
  ]
};

export const COOKIES_POLICY_EN: LegalDocument = {
  id: "polityka-cookies",
  title: "Cookies Policy",
  lastUpdated: "28.02.2026",
  version: "1.0",
  sections: [
    {
      id: "about",
      title: "1) What this document is about",
      content: `This Policy describes how the website uses cookies and similar technologies (e.g., local storage), that is, how we store information or gain access to information on your terminal device (computer/phone/tablet).

On the website, we use only the necessary and functional technologies described below:
- to remember language preferences
We do not use analytics or advertising cookies.

Legal basis: Electronic Communications Law (Prawo komunikacji elektronicznej, the “PKE”), Article 399(1); GDPR (RODO), Article 12(1)`
    },
    {
      id: "definitions",
      title: "2) Definitions",
      content: `- Cookies (cookie files) – small text files stored in the browser or read by the website.
- Local storage / session storage – browser mechanisms that make it possible to store information in the device memory (respectively: until deletion or until the end of the session).
- “Gaining access to information on a terminal device” – concerns not only storing information, but also reading information already stored (e.g., reading the value of a cookie or local storage).

Practical note: the obligations under the PKE concern the very act of storing/reading in the terminal device, regardless of whether that information constitutes personal data.

Legal basis: PKE, Article 399(1); GDPR, Article 12(1)`
    },
    {
      id: "technologies",
      title: "3) What technologies we use on the website",
      content: `3.1 Functional technology relating to language selection
On the website, we use technology intended to remember the language selected by the user, so that on subsequent page views the service can display the appropriate language version.

- Name: ekreacje_lang
- Type: cookie
- Purpose: to remember the selected website language (PL/EN)
- Scope of information: language code only (e.g., “pl” / “en”)
- Storage period: 12 months

The ekreacje_lang cookie is set only after the user has manually selected the language (e.g., by clicking the language switch on the website). During the first visit, the language may be selected automatically based on the browser settings or other technical parameters; however, that information is not stored in this cookie until the user makes an express selection.

3.2 Other technologies necessary to remember the user’s choice
On the website, we also use a browser local data storage mechanism (localStorage) in order to remember the user’s decision regarding cookies and similar technologies.

- Name: ekreacje_cookie_consent
- Type: localStorage (this is not a cookie)
- Purpose: to remember the user’s decision to accept or reject cookies and similar technologies
- Scope of information: information about the choice made
- Storage period: indefinitely, until deleted by the user or until the browser data are cleared

This technology is technical in nature and serves solely to preserve the user’s choice so that the notice is not displayed again on each visit.

Legal basis: PKE, Article 399(1) and Article 399(3), item 2 (with respect to technologies necessary to provide a function requested by the user)`
    },
    {
      id: "categories",
      title: "4) Categories of cookies and whether consent is required",
      content: `Below, we clearly indicate when we ask for consent and when the exception under the PKE applies.

4.1 Necessary cookies
- Consent: not required if the cookie is necessary to carry out the transmission of an electronic communication or to provide a service requested by the user (e.g., the basic operation of the website).
- How we understand “necessary”: without these cookies, the website or a specific function expressly initiated by the user would not operate properly.

Legal basis: PKE, Article 399(3), items 1-2

4.2 Preference cookies (language)
- Consent: as a rule, preference cookies may require consent unless they meet the exception of being “necessary for a service requested by the user.”
- How this works for us: the language cookie serves solely to remember the language choice.
  • We set it only after the user selects the language: The ekreacje_lang cookie is set only after the user manually selects the language (by clicking the PL/EN switch in the navigation menu). During the first visit, the language is selected automatically (based on GeoIP or the browser language) and stored only in the application state, but it is not then stored as a cookie.
  • If it is set only after selection, we treat it as necessary to provide the service in the selected language (exception under Article 399(3), item 2 of the PKE) and we do not request additional consent solely for this one cookie.

If, in the future, the language cookie (or any other preference cookie) is set automatically without user action and is not “necessary” within the meaning of the PKE, we will implement a consent mechanism in the banner/panel.

Legal basis: PKE, Article 399(3), item 2; Article 400; GDPR, Article 12(1)

4.3 Analytics and marketing cookies
We do not use them.
- Consent: would be required before activation (prior, voluntary, and informed), but this category does not occur on the website.

Legal basis: PKE, Article 399(1), items 1-2; Article 400`
    },
    {
      id: "local-storage",
      title: "5) Cookies and other local data storage technologies",
      content: `On the website, we use only technologies necessary for its proper operation and for remembering the user’s choices. We do not use analytics, marketing, or advertising cookies.

- ekreacje_lang
This is a cookie used to remember the selected website language (PL/EN), so that on subsequent page views the service can display the appropriate language version.
- Purpose: to remember the language choice
- Type: cookie
- Storage period: 12 months
This cookie is functional in nature and serves to ensure convenience in using the website.

- ekreacje_cookie_consent
This is not a cookie, but an entry stored in the browser’s localStorage. It serves to remember the user’s decision regarding the acceptance or rejection of cookies and similar technologies, so that the notice is not displayed again on each visit.
- Purpose: to remember the user’s decision
- Type: localStorage
- Storage period: indefinitely, until deleted by the user or until the browser data are cleared

This mechanism is technical in nature and serves to preserve the user’s choice.
The user may change cookie settings or delete stored local data at any time through the settings of their browser.
Because the technologies used are limited to solutions that are necessary or that serve to remember the user’s choice, we do not use them for profiling or marketing purposes.

Legal basis: PKE, Article 399(1)`
    },
    {
      id: "management",
      title: "6) How to manage cookies",
      content: `6.1 Browser settings
You may:
- block cookies,
- delete stored cookies,
- configure cookies to be deleted when the browser is closed,
- restrict third-party cookies (we do not use them here in any event, but browsers tend to have a life of their own).

Instructions are available in your browser settings (e.g., Chrome/Firefox/Safari/Edge).

6.2 Informational banner concerning cookies and similar technologies
An informational banner concerning cookies and similar local data storage technologies is displayed on the website.
The banner is used to:
- inform the user about the use of cookies and similar technologies,
- enable the user to make a decision regarding their acceptance or rejection,
- store that decision in localStorage so that the notice is not displayed again on each visit.

The banner also contains a link to this Cookie Policy. In addition, links to the Cookie Policy, Privacy Policy, and Terms and Conditions are available on the website.

If optional cookies, in particular analytics or marketing cookies, are implemented on the website in the future, before their activation we will implement an appropriate consent collection mechanism, compliant with the applicable laws.

Legal basis: PKE, Article 399(1) and (2), and Article 400`
    },
    {
      id: "updates",
      title: "7) Updates to the document",
      content: `The Cookie Policy may be updated if the way the website operates changes (e.g., new categories of cookies appear) or if the law changes. The current version is published on the website.

Legal basis: GDPR, Article 12(1); PKE, Article 399(1)`
    }
  ]
};

export const REGULATIONS_EN: LegalDocument = {
  id: "regulamin",
  title: "Service Regulations",
  lastUpdated: "28.02.2026",
  version: "1.0",
  sections: [
    {
      id: "informacje-ogolne",
      title: "1) General information",
      content: `1.1. These Terms and Conditions set out the rules for using the website operated by:

HYGGE e-Kreacje Sp. z o.o.
registered office and address: 95-070 Rąbień AB, ul. Malwowa 29/1A
Tax Identification Number (NIP): 7322218814
National Court Register (KRS): 0001105385
registry court: District Court for Łódź-Śródmieście in Łódź, 20th Commercial Division of the National Court Register
share capital: PLN 5,000.00
e-mail: kontakt@aleksandramarciniak.com

hereinafter referred to as the: “Service Provider”.

1.2. The Terms and Conditions are made available free of charge on the Website in a manner enabling their acquisition, reproduction, and recording.

1.3. Commencement of use of the Website shall mean that the User has familiarized themselves with the Terms and Conditions and accepts their provisions to the extent necessary for the use of services provided by electronic means.`
    },
    {
      id: "definicje",
      title: "2) Definitions",
      content: `For the purposes of these Terms and Conditions, the following meanings shall apply:

2.1. Service Provider – HYGGE e-Kreacje Sp. z o.o., indicated in section 1.1.

2.2. User / Service Recipient – a natural person, legal person, or organizational unit using the Website, in particular browsing content or sending a message via the Contact Form.

2.3. Website – the website operated by the Service Provider at: https://aleksandramarciniak.com together with its subpages.

2.4. Electronic Service – a service provided by electronic means within the meaning of the applicable laws, without the simultaneous presence of the parties, through the transmission of data at the individual request of the User, transmitted and received by means of equipment for the electronic processing and storage of data, entirely via a telecommunications network.

2.5. Contact Form – a functionality of the Website enabling the sending of a message to the Service Provider, within which the User may provide an e-mail address and the content of the message.`
    },
    {
      id: "rodzaje-uslug",
      title: "3) Types and scope of Electronic Services",
      content: `3.1. The Service Provider provides the following services by electronic means:

a) making informational content available on the Website by enabling browsing of the website content, including information on graphic and design services, presentation of the offer, sample projects, contact details, and information concerning cooperation,

b) enabling contact with the Service Provider by means of the Contact Form,

c) determining and handling the Website’s language preference, including:
- automatic selection of the default language during the first visit based on technical settings (e.g. browser settings or the GeoIP mechanism),
- remembering the language manually selected by the User by means of a cookie used exclusively for that purpose.

3.2. The services provided on the Website are free of charge.

3.3. Use of an internet connection may involve costs on the part of the User, in accordance with the agreement concluded by the User with their telecommunications or Internet service provider.`
    },
    {
      id: "warunki-swiadczenia",
      title: "4) Conditions for the provision of services and technical requirements",
      content: `4.1. In order to use the Website properly, the following are required:

a) a device with Internet access,
b) a current version of an internet browser (e.g. Chrome, Firefox, Safari, Edge),
c) JavaScript enabled, since certain functions and interface elements of the Website require it for proper operation,
d) cookie support, if the User wants the Website to remember the selected language.

4.2. The User may restrict or block cookies in their browser settings. This may result in the language preference not being remembered, but as a rule should not prevent browsing of informational content.

4.3. The Service Provider shall exercise due diligence to ensure that the Website operates properly on typical hardware and software configurations; however, the Service Provider does not guarantee proper operation of the Website on atypical, outdated, or software manufacturer-unsupported configurations.`
    },
    {
      id: "zagrozenia",
      title: "5) Information on specific risks and technologies used",
      content: `5.1. Use of services provided by electronic means may involve typical risks occurring in the internet environment, in particular such as:
- malicious software,
- phishing attempts,
- session hijacking,
- operation of third-party software,
- access to data by unauthorized persons.

5.2. In order to limit the risks referred to above, the User should use an up-to-date operating system, an up-to-date internet browser, and appropriate security measures, including protective software and updates.

5.3. The following technologies may be used on the Website:
- cookies,
- localStorage,
- JavaScript scripts.

5.4. The functions and purposes of the indicated technologies are connected exclusively with the proper operation of the Website, remembering the User’s choices, and handling the User’s preferences. Detailed information is contained in the Cookies Policy and the Privacy Policy.`
    },
    {
      id: "zakaz-tresci",
      title: "6) Prohibition on the provision of unlawful content",
      content: `6.1. The User is obliged to use the Website in a manner compliant with the law, accepted standards of conduct (dobre obyczaje), and with respect for the rights of third parties.

6.2. The User may not provide content of an unlawful nature, in particular:
a) infringing copyright, personal rights (dobra osobiste), or legally protected secrets,
b) containing threats, offensive, discriminatory, or hate-inciting content,
c) containing malicious software, phishing links, or content intended to circumvent security measures,
d) constituting spam or attempts to abuse the Contact Form.`
    },
    {
      id: "formularz",
      title: "7) Rules for using the Contact Form",
      content: `7.1. The Contact Form is intended for sending inquiries to the Service Provider, in particular concerning the offer, cooperation, and organizational matters.

7.2. Within the Contact Form, the User may provide:
- an e-mail address,
- the content of the message.

7.3. Providing an e-mail address is necessary if the User expects a reply.

7.4. A message sent by means of the form should relate to the Service Provider’s business activity or the content presented on the Website and may not infringe the provisions of these Terms and Conditions, in particular section 6.

7.5. In order to limit abuse and protect against spam, the Service Provider applies security mechanisms, including a honeypot-type mechanism, and may also apply anti-spam filters, limits on the number of submissions, and temporary technical blocks in the event of detected attacks or abuse.

7.6. The Service Provider does not guarantee a response within any specified period. Failure to respond shall not constitute acceptance of an offer, conclusion of an agreement, or an obligation to perform an order.`
    },
    {
      id: "umowy",
      title: "8) Conditions for the conclusion and termination of agreements for the provision of services by electronic means",
      content: `8.1. The agreement for the provision of an Electronic Service consisting in making informational content available on the Website is concluded when the User enters the Website and commences at the moment the page is displayed.

8.2. The agreement referred to in section 8.1 shall terminate when the User leaves the Website.

8.3. The agreement for the provision of an Electronic Service consisting in enabling use of the Contact Form is concluded when the User commences use of that functionality.

8.4. The agreement concerning the Contact Form shall terminate upon:
a) successful sending of a message via the form, or
b) earlier discontinuation of use of the form without sending a message.

8.5. The User may terminate use of services provided by electronic means at any time by leaving the Website or discontinuing use of a given functionality.

8.6. Use of Electronic Services provided on the Website does not require account registration or the conclusion of a separate agreement in writing.`
    },
    {
      id: "reklamacje",
      title: "9) Complaints and notifications concerning Electronic Services",
      content: `9.1. The User may submit complaints concerning the functioning of the Website and the Electronic Services provided, in particular in the event of:
- unavailability of the Website,
- errors in the operation of the Contact Form,
- malfunctioning of Website functions.

9.2. Complaints should be submitted to the following e-mail address: contact@aleksandramarciniak.com.

9.3. In a complaint notification, it is advisable to provide:
a) the date and approximate time of occurrence of the problem,
b) the address of the subpage (URL), if applicable,
c) the type of device and browser,
d) contact details for the purpose of providing a response.

9.4. The Service Provider shall consider the complaint without undue delay, no later than within 14 days from the date of its receipt.`
    },
    {
      id: "odpowiedzialnosc",
      title: "10) Liability",
      content: `10.1. The Service Provider provides services by electronic means with due diligence, taking into account the nature and scope of those services.

10.2. Within the limits permitted by mandatory provisions of law, the Service Provider shall not be liable for:
a) interruptions in the availability of the Website resulting from causes beyond the Service Provider’s control, including Internet network failures, failures on the part of telecommunications service providers or hosting providers,
b) the consequences of using the Website in a manner contrary to these Terms and Conditions or provisions of law,
c) damage resulting from the use of the Website on devices or software that do not meet the technical requirements specified in these Terms and Conditions.

10.3. If the Website contains links to external websites, the Service Provider shall not be responsible for the content, policies, or operation of such websites, unless such liability arises directly from provisions of law.`
    },
    {
      id: "prawa-autorskie",
      title: "11) Copyright and ownership of content",
      content: `11.1. Content made available on the Website, in particular texts, graphics, logos, the website layout, visual identity elements, and other materials, may constitute works protected by copyright or be protected on other legal grounds.

11.2. Use of the Website’s content is permitted solely within the scope of personal use and within the limits permitted by provisions of law.

11.3. Without the prior consent of the Service Provider or another authorized entity, it is prohibited in particular to copy, distribute, modify, or use the Website’s content for commercial purposes, unless otherwise follows from mandatory provisions of law.`
    },
    {
      id: "ograniczenia",
      title: "12) Restriction or suspension of access in the event of abuse",
      content: `12.1. The Service Provider may temporarily restrict access to the Website or its selected functions, in particular the Contact Form, if this is necessary due to:
a) the security of the Website,
b) prevention of abuse, spam, or attacks,
c) the performance of service, technical, or maintenance works.

12.2. If the restriction concerns only the Contact Form, the User may contact the Service Provider directly via the e-mail address indicated in these Terms and Conditions.`
    },
    {
      id: "zmiany",
      title: "13) Amendments to the Terms and Conditions",
      content: `13.1. The Service Provider may amend these Terms and Conditions for important reasons, in particular in the event of:
a) a change in the functionality of the Website or the scope of Electronic Services,
b) a change in provisions of law,
c) the need to clarify the provisions of these Terms and Conditions,
d) a change in the Service Provider’s identification or contact details.

13.2. Amendments to the Terms and Conditions are published on the Website together with an indication of the effective date of the new version.

13.3. Amendments to the Terms and Conditions shall not infringe rights acquired by Users before the effective date of the new version, insofar as such rights have arisen.`
    },
    {
      id: "prawo-wlasciwe",
      title: "14) Governing law, jurisdiction, contact",
      content: `14.1. These Terms and Conditions shall be governed by Polish law.

14.2. Disputes related to the use of the Website shall be resolved by the court having jurisdiction in accordance with the generally applicable provisions of law.

14.3. Contact with the Service Provider:
e-mail: contact@aleksandramarciniak.com
address: 95-070 Rąbień AB, ul. Malwowa 29/1A`
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