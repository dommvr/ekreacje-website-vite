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
E-mail: kontakt@aleksandramarciniak.com

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
- Napisz na: kontakt@aleksandramarciniak.com

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
  lastUpdated: "24.05.2024",
  version: "1.0",
  sections: [
    {
      id: "definicja",
      title: "Czym są pliki cookies?",
      content: `Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. 

Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.`
    },
    {
      id: "rodzaje",
      title: "Rodzaje i cel stosowania",
      content: `W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). 

Ciasteczka sesyjne są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej).`
    }
  ]
};

export const REGULATIONS_PL: LegalDocument = {
  id: "regulamin",
  title: "Regulamin Serwisu",
  lastUpdated: "24.05.2024",
  version: "1.0",
  sections: [
    {
      id: "postanowienia",
      title: "Postanowienia ogólne",
      content: `Regulamin określa zasady korzystania z usług świadczonych drogą elektroniczną przez e-kreacje. Serwis służy prezentacji portfolio oraz umożliwia kontakt w celu uzyskania wyceny usług projektowych. 

Wszystkie treści zamieszczone w serwisie, w tym projekty graficzne i teksty, stanowią własność intelektualną Administratora i podlegają ochronie prawnej.`
    },
    {
      id: "uslugi",
      title: "Zasady świadczenia usług",
      content: `Świadczenie usług odbywa się na podstawie indywidualnych umów zawieranych z Klientami. Kalkulator dostępny w serwisie służy wyłącznie celom orientacyjnym i nie stanowi oferty handlowej w rozumieniu Kodeksu Cywilnego.`
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