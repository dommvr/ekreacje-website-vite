export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

// --- POLISH DOCUMENTS ---

export const PRIVACY_POLICY_PL: LegalDocument = {
  id: "polityka-prywatnosci",
  title: "Polityka Prywatności",
  lastUpdated: "24.05.2024",
  sections: [
    {
      id: "cel",
      title: "Cel i zakres zbierania danych",
      content: `Administrator przetwarza dane osobowe Użytkowników w celu realizacji usług projektowych, komunikacji oraz marketingu bezpośredniego własnych usług. 

Dane są zbierane wyłącznie w zakresie niezbędnym do realizacji określonego celu, na podstawie zgody Użytkownika lub przepisów prawa. W przypadku kontaktu przez formularz, zbierany jest adres e-mail oraz treść wiadomości, co pozwala na przygotowanie indywidualnej wyceny i odpowiedzi na zapytanie.`
    },
    {
      id: "prawa",
      title: "Prawa Użytkownika",
      content: `Każdy Użytkownik ma prawo do wglądu w swoje dane, ich poprawiania, usunięcia („prawo do bycia zapomnianym”) oraz ograniczenia ich przetwarzania. 

Użytkownik może w dowolnym momencie wycofać zgodę na przetwarzanie danych, co nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem. Wszelkie wnioski w tym zakresie prosimy kierować na adres e-mail podany w sekcji Kontakt.`
    },
    {
      id: "bezpieczenstwo",
      title: "Bezpieczeństwo danych",
      content: `Stosujemy zaawansowane środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną. 

W szczególności zabezpieczamy dane przed ich udostępnieniem osobom nieupoważnionym, zabraniem przez osobę nieuprawnioną, przetwarzaniem z naruszeniem ustawy oraz zmianą, utratą, uszkodzeniem lub zniszczeniem.`
    }
  ]
};

export const COOKIES_POLICY_PL: LegalDocument = {
  id: "polityka-cookies",
  title: "Polityka Cookies",
  lastUpdated: "24.05.2024",
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