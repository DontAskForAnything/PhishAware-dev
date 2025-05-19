"use client";
import React, { useState, useEffect } from "react";
import { BookOpen, Clock, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import toast, {Toaster} from "react-hot-toast";

// Przykładowa baza danych kursów
const coursesDatabase: {
  [key: string]: {
    id: string;
    title: string;
    pages: string[];
    estimatedTime: string;
    author: string;
  };
} = 
{
  "0": {
    "id": "0",
    "title": "Myślisz, że rozpoznasz oszustwo?",
    "pages": [
      `<h2>Wprowadzenie do świata phishingu</h2>
      <p>Phishing to jedna z najczęstszych i najskuteczniejszych metod cyberataków na świecie. Codziennie miliony osób otrzymują fałszywe wiadomości zaprojektowane, by wyłudzić dane osobowe, hasła czy pieniądze.</p>
      <p>W tym kursie poznasz techniki, które oszuści stosują by omijać zabezpieczenia techniczne i wykorzystywać ludzką psychologię.</p>`,

      `<h2>Anatomia ataku phishingowego</h2>
      <p>Skuteczny atak phishingowy składa się z kilku kluczowych elementów:</p>
      <ul>
        <li><strong>Wiarygodny pretekst</strong> - np. fałszywe powiadomienie z banku, nieodebrana paczka, nagroda do odebrania</li>
        <li><strong>Element presji</strong> - ograniczony czas, groźba konsekwencji prawnych lub finansowych</li>
        <li><strong>Mechanizm wyłudzenia</strong> - fałszywa strona logowania, załącznik z malware, prośba o przelew</li>
      </ul>
      <p>Nowoczesne ataki phishingowe są coraz trudniejsze do wykrycia, ponieważ oszuści dokładnie badają swoje cele i personalizują wiadomości.</p>
      <div class="warning-box">
        <h4>Czy wiesz, że...</h4>
        <p>91% wszystkich cyberataków rozpoczyna się od wiadomości phishingowej!</p>
      </div>`,

      `<h2>Rodzaje ataków phishingowych</h2>
      <h3>1. Phishing masowy</h3>
      <p>Najbardziej podstawowa forma ataku - masowe rozsyłanie milionów generycznych wiadomości.</p>
      
      <h3>2. Spear phishing</h3>
      <p>Ukierunkowany atak na konkretną osobę lub organizację, wykorzystujący spersonalizowane informacje.</p>
      
      <h3>3. Whaling</h3>
      <p>Ataki na "duże ryby" - dyrektorów, prezesów firm i innych VIP-ów z dostępem do cennych zasobów.</p>
      
      <h3>4. Smishing i Vishing</h3>
      <p>Ataki przeprowadzane za pomocą SMS-ów (smishing) lub rozmów telefonicznych (vishing).</p>
      
      <h3>5. Clone phishing</h3>
      <p>Kopiowanie autentycznej wiadomości, która została już dostarczona, ale podmiana linków lub załączników.</p>
      
      <div class="case-study">
        <h4>Studium przypadku: Business Email Compromise (BEC)</h4>
        <p>W 2020 roku firma produkcyjna straciła 10.2 mln zł gdy księgowy otrzymał fałszywego maila od "CEO" z prośbą o pilny przelew do nowego dostawcy. Przestępcy miesiącami monitorowali komunikację firmową, by idealnie podrobić styl komunikacji prezesa.</p>
      </div>`,

      `<h2>Czerwone flagi - jak rozpoznać phishing</h2>
      <h3>Sygnały ostrzegawcze w wiadomościach email:</h3>
      <ul>
        <li><strong>Nieprawidłowy adres nadawcy</strong> - np. amazon-support@gmail.com zamiast @amazon.com</li>
        <li><strong>Błędy językowe</strong> - literówki, niepoprawna gramatyka, dziwne sformułowania</li>
        <li><strong>Nietypowe załączniki</strong> - szczególnie pliki .exe, .js, .vbs lub wielokrotnie spakowane</li>
        <li><strong>Prośby o poufne dane</strong> - żadna poważna instytucja nie prosi o hasła przez email</li>
        <li><strong>Niespodziewane linki</strong> - zawsze sprawdzaj adresy URL przed kliknięciem</li>
        <li><strong>Poczucie pilności</strong> - "Twoje konto zostanie zablokowane w ciągu 24 godzin!"</li>
      </ul>`,

      `<h2>Techniki socjotechniczne używane w phishingu</h2>
      <p>Oszuści wykorzystują podstawowe ludzkie emocje i zachowania:</p>
      
      <h3>1. Strach i poczucie zagrożenia</h3>
      <p>"Twoje konto zostało zhakowane" lub "Wykryliśmy podejrzaną aktywność"</p>
      
      <h3>2. Ciekawość</h3>
      <p>"Zobacz kto odwiedził Twój profil" lub "Sprawdź to niesamowite nagranie"</p>
      
      <h3>3. Chciwość</h3>
      <p>"Wygrałeś iPhone 15!" lub "Zwrot podatku czeka na odbiór"</p>
      
      <h3>4. Pośpiech</h3>
      <p>"Oferta ważna tylko dziś" lub "Musisz działać natychmiast"</p>
      
      <h3>5. Autorytet</h3>
      <p>Podszywanie się pod przełożonych, instytucje publiczne czy znane firmy</p>
      
      <div class="activity">
        <h4>Test: Rozpoznaj manipulację</h4>
        <p>W poniższych scenariuszach zidentyfikuj technikę socjotechniczną:</p>
        <ol>
          <li>"Urząd Skarbowy: Twój zwrot podatku 1247 zł czeka. Kliknij by otrzymać środki w 24h."</li>
          <li>"UWAGA: Wykryliśmy nieautoryzowany dostęp do Twojego konta bankowego. Zweryfikuj swoją tożsamość natychmiast!"</li>
          <li>"Dzień dobry, tu dział IT. Potrzebujemy Twojego hasła do systemu, aby zainstalować krytyczną aktualizację zabezpieczeń."</li>
        </ol>
      </div>`,

      `<h2>Zaawansowane techniki phishingowe</h2>
      <h3>Wykorzystanie aktualnych wydarzeń</h3>
      <p>Oszuści błyskawicznie adaptują swoje kampanie do bieżących wydarzeń - od pandemii COVID-19, przez katastrofy naturalne, po głośne naruszenia bezpieczeństwa.</p>
      
      <h3>Homograficzne domeny</h3>
      <p>Wykorzystanie podobnie wyglądających znaków z różnych alfabetów, np. zastąpienie łacińskiego "a" cyrylicą "а" w adresie URL.</p>
      
      <h3>Ataki przez zaufane kanały</h3>
      <p>Kompromitacja prawdziwych kont w mediach społecznościowych lub przejęcie autentycznej konwersacji email.</p>
      
      <h3>Deepfake phishing</h3>
      <p>Wykorzystanie sztucznej inteligencji do tworzenia przekonujących nagrań audio i wideo, np. fałszywych rozmów telefonicznych z "przełożonym".</p>
      
      <div class="tech-spotlight">
        <h4>Brand Impersonation</h4>
        <p>W 2024 roku najpopularniejszymi podrabianymi markami w atakach phishingowych są:</p>
        <ol>
          <li>Microsoft (Office 365, Teams, etc.)</li>
          <li>PayPal</li>
          <li>Amazon</li>
          <li>Apple</li>
          <li>Google (Gmail, Drive, etc.)</li>
        </ol>
      </div>`,

      `<h2>Strategie ochrony przed phishingiem - dla pracowników</h2>
      <h3>1. Weryfikuj źródło wiadomości</h3>
      <p>Sprawdzaj pełny adres email nadawcy, włącznie z domeną po znaku @.</p>
      
      <h3>2. Analizuj treść pod kątem red flags</h3>
      <p>Poszukuj błędów językowych, nietypowych próśb i elementów wywierania presji.</p>
      
      <h3>3. Nigdy nie klikaj podejrzanych linków</h3>
      <p>Najedź kursorem na link (nie klikając), aby zobaczyć prawdziwy adres URL.</p>
      
      <h3>4. Używaj bezpośrednich źródeł</h3>
      <p>Zamiast klikać w link w emailu, otwórz nową kartę i odwiedź oficjalną stronę.</p>
      
      <h3>5. Dwukrotnie weryfikuj nietypowe prośby</h3>
      <p>Otrzymałeś dziwną prośbę od kolegi? Zadzwoń do niego, aby potwierdzić.</p>
      
      <h3>6. Bądź szczególnie ostrożny z załącznikami</h3>
      <p>Nigdy nie otwieraj dokumentów z makrami czy plików wykonywalnych z nieznanych źródeł.</p>
      
      <div class="best-practice">
        <h4>Złota zasada:</h4>
        <p>Jeśli coś wydaje się zbyt dobre, aby było prawdziwe - prawdopodobnie jest oszustwem.</p>
      </div>`,

      `<h2>Strategie ochrony przed phishingiem - dla organizacji</h2>
      <h3>1. Regularne szkolenia i symulacje</h3>
      <p>Przeprowadzaj szkolenia i testy phishingowe przynajmniej raz na kwartał.</p>
      
      <h3>2. Wdrażaj filtrowanie poczty email</h3>
      <p>Używaj zaawansowanych rozwiązań anty-phishingowych i anty-spamowych.</p>
      
      <h3>3. Uwierzytelnianie wieloskładnikowe (MFA)</h3>
      <p>Wymuszaj MFA dla wszystkich kont firmowych, zwłaszcza dostępów administracyjnych.</p>
      
      <h3>4. DMARC, SPF i DKIM</h3>
      <p>Implementuj protokoły uwierzytelniania email, aby zapobiec podszywaniu się pod domeny firmowe.</p>
      
      <h3>5. Bezpieczna obsługa incydentów</h3>
      <p>Stwórz łatwy sposób zgłaszania podejrzanych wiadomości przez pracowników.</p>
      
      <h3>6. Zasada ograniczonego zaufania (Zero Trust)</h3>
      <p>Wdrażaj podejście zakładające, że żadna aktywność nie jest domyślnie zaufana.</p>
      
      <div class="implementation-tip">
        <h4>Wskazówka wdrożeniowa:</h4>
        <p>Zamiast karać pracowników za błędy, nagradzaj ich za zgłaszanie podejrzanych wiadomości.</p>
      </div>`,

      `<h2>Co zrobić, gdy padłeś ofiarą phishingu?</h2>
      <h3>Natychmiastowe działania:</h3>
      <ol>
        <li><strong>Odłącz urządzenie od sieci</strong> - odłącz kabel Ethernet lub wyłącz Wi-Fi</li>
        <li><strong>Zmień hasła</strong> - z innego, bezpiecznego urządzenia zmień hasła do wszystkich kluczowych kont</li>
        <li><strong>Powiadom odpowiednie osoby</strong> - skontaktuj się z działem IT lub bezpieczeństwa</li>
        <li><strong>Monitoruj aktywność kont</strong> - sprawdzaj wyciągi, logi logowań i podejrzane transakcje</li>
        <li><strong>Zgłoś incydent</strong> - poinformuj CERT Polska (cert.pl) lub policję w przypadku strat finansowych</li>
      </ol>
      
      <h3>Jeśli podałeś dane karty płatniczej:</h3>
      <p>Natychmiast skontaktuj się z bankiem, aby zablokować kartę i monitorować transakcje.</p>
      
      <h3>Jeśli zainstalowałeś złośliwe oprogramowanie:</h3>
      <p>Przeprowadź pełne skanowanie antywirusowe lub, w krytycznych przypadkach, rozważ przywrócenie systemu do ustawień fabrycznych.</p>
      
      <div class="emergency-contacts">
        <h4>Numery alarmowe:</h4>
        <p>CERT Polska: +48 22 380 82 74</p>
        <p>Zgłaszanie incydentów online: incydent.cert.pl</p>
      </div>`,

      `<h2>Trendy i przyszłość phishingu</h2>
      <h3>Obecne trendy:</h3>
      <ul>
        <li><strong>AI-driven phishing</strong> - wykorzystanie sztucznej inteligencji do tworzenia przekonujących wiadomości bez błędów językowych</li>
        <li><strong>Ataki przez komunikatory</strong> - przenoszenie ataków na platformy jak WhatsApp, Signal czy Telegram</li>
        <li><strong>QR phishing</strong> - wykorzystanie kodów QR prowadzących do fałszywych stron</li>
        <li><strong>Multi-channel attacks</strong> - łączenie emaili, SMS-ów i połączeń telefonicznych w jednej kampanii</li>
      </ul>
      
      <h3>Jak będzie wyglądał phishing w przyszłości?</h3>
      <p>Eksperci przewidują, że najbliższe lata przyniosą:</p>
      <ul>
        <li>Powszechne wykorzystanie deepfake'ów w phishingu głosowym i wideo</li>
        <li>Ataki wykorzystujące metadane i dane biometryczne</li>
        <li>Bardziej wyrafinowane kampanie ukierunkowane na konkretne osoby</li>
        <li>Automatyzację ataków z wykorzystaniem sztucznej inteligencji</li>
      </ul>
      
      <div class="quote">
        <p>"Phishing nie zniknie - będzie ewoluował. Naszym zadaniem jest ewoluować szybciej niż atakujący."</p>
        <p class="author">— Dr. Michał Zalewski, ekspert cyberbezpieczeństwa</p>
      </div>`,

      `        <h3>Gratulacje!</h3>
        <p>Ukończyłeś kurs "Myślisz, że rozpoznasz oszustwo?".</p>
  `
    ],
    "estimatedTime": "30 min",
    "author": "Zespół PhishAware"
  },
  "1": {
    "id": "1",
    "title": "Twoje hasło to klucz do cyfrowego życia",
    "pages": [
      `<h2>Dlaczego bezpieczeństwo haseł jest kluczowe</h2>
      <p>Hasła to pierwsza i często jedyna linia obrony chroniąca Twoje dane osobowe, finanse i cyfrową tożsamość. Mimo to, większość z nas traktuje je zbyt lekko.</p>
      <p>W tym kursie nauczysz się tworzyć naprawdę bezpieczne hasła i zarządzać nimi tak, by maksymalnie ograniczyć ryzyko włamania.</p>
      <div class="shocking-facts">
        <h4>Czy wiesz, że...</h4>
        <ul>
          <li>81% wszystkich naruszeń bezpieczeństwa związanych jest z wykorzystaniem słabych lub wykradzionych haseł</li>
          <li>Najpopularniejsze hasło na świecie to wciąż "123456" - używa go ponad 23 miliony osób</li>
          <li>Przeciętny użytkownik ma ponad 100 kont wymagających hasła, ale używa tylko 5 różnych kombinacji</li>
        </ul>
      </div>`,

      `<h2>Anatomia bezpiecznego hasła</h2>
      <h3>Co czyni hasło silnym?</h3>
      <p>Bezpieczne hasło musi być:</p>
      <ul>
        <li><strong>Długie</strong> - minimum 12 znaków, optymalnie 16-20</li>
        <li><strong>Złożone</strong> - zawierające duże i małe litery, cyfry, znaki specjalne</li>
        <li><strong>Nieprzewidywalne</strong> - bez słów ze słownika, dat urodzenia, imion</li>
        <li><strong>Unikalne</strong> - inne dla każdego serwisu i aplikacji</li>
        <li><strong>Łatwe do zapamiętania</strong> - dla Ciebie, ale trudne do odgadnięcia dla innych</li>
      </ul>
      
      <h3>Entropii hasła - co to takiego?</h3>
      <p>Entropia mierzy nieprzewidywalność hasła w bitach. Im wyższa wartość, tym trudniejsze do złamania:</p>
      <ul>
        <li>Hasło 8-znakowe, tylko małe litery: ~38 bitów (bardzo słabe)</li>
        <li>Hasło 12-znakowe, małe + duże litery + cyfry: ~71 bitów (średnie)</li>
        <li>Hasło 16-znakowe, wszystkie typy znaków: ~106 bitów (bardzo silne)</li>
      </ul>
      
      <div class="interactive-example">
        <h4>Porównanie czasu łamania hasła (przy założeniu 1 biliona prób/s):</h4>
        <table>
          <tr>
            <th>Hasło</th>
            <th>Czas złamania</th>
          </tr>
          <tr>
            <td>mirek1982</td>
            <td>&lt; 1 sekunda</td>
          </tr>
          <tr>
            <td>Kotek123!</td>
            <td>~10 minut</td>
          </tr>
          <tr>
            <td>u8Gp*wQ$z9!kLm2R</td>
            <td>~34 miliony lat</td>
          </tr>
        </table>
      </div>`,

      `<h2>Najczęstsze błędy w tworzeniu haseł</h2>
      <h3>7 błędów, których należy unikać:</h3>
      <ol>
        <li><strong>Używanie prostych wzorców klawiaturowych</strong> - np. "qwerty", "1q2w3e"</li>
        <li><strong>Proste modyfikacje popularnych słów</strong> - np. "P@ssw0rd" (te wzorce są znane hakerom)</li>
        <li><strong>Wykorzystywanie danych osobowych</strong> - imion, dat urodzenia, numerów telefonów</li>
        <li><strong>Powtarzanie tych samych haseł</strong> - "jedno hasło do wszystkiego"</li>
        <li><strong>Zapisywanie haseł w niezaszyfrowanych dokumentach</strong> lub na karteczkach</li>
        <li><strong>Zbyt rzadka zmiana haseł</strong> do krytycznych kont</li>
        <li><strong>Ignorowanie powiadomień o wyciekach danych</strong></li>
      </ol>
      
      <div class="case-study">
        <h4>Historia prawdziwa: Wyciek Colonial Pipeline</h4>
        <p>W 2021 r. firma Colonial Pipeline, operator jednego z największych rurociągów w USA, padła ofiarą ataku ransomware. Przestępcy uzyskali dostęp do systemów dzięki jednemu wyciekłemu hasłu do VPN.</p>
        <p>Choć hasło było złożone, zostało wcześniej wykorzystane dla innego konta pracownika, które wyciekło w darkwebie. Atak spowodował niedobory paliwa w całych Stanach Zjednoczonych i kosztował firmę 4,4 mln dolarów okupu.</p>
      </div>`,

      `<h2>Metody tworzenia silnych i łatwych do zapamiętania haseł</h2>
      <h3>Metoda zdania bazowego</h3>
      <p>Wybierz zapamiętywalne zdanie i przekształć je w hasło:</p>
      <p>Zdanie: "Mój czarny kot zawsze budzi mnie o 5:30 rano!"<br>
      Hasło: "Mczk_zbmo5:30r!"</p>
      
      <h3>Metoda Diceware (hasła frazowe)</h3>
      <p>Połącz kilka losowych słów w łatwą do zapamiętania frazę, dodaj znaki specjalne:</p>
      <p>Przykład: "Prawidłowy@Hipopotam42@Skakać@Konfetti"</p>
      
      <h3>Metoda akronimu</h3>
      <p>Stwórz akronim z zapamiętanego zdania lub fragmentu tekstu:</p>
      <p>Zdanie: "W 1410 roku pod Grunwaldem pokonaliśmy Krzyżaków!"<br>
      Hasło: "W1410rpGpK!"</p>
      
      <div class="tip-box">
        <h4>Wskazówka:</h4>
        <p>Używając metod opartych na zdaniach lub frazach, uzyskujesz hasła, które są jednocześnie silne dla komputerów i łatwe do zapamiętania dla ludzi.</p>
      </div>
      
      <div class="exercise">
        <h4>Ćwiczenie praktyczne:</h4>
        <p>Stwórz własne silne hasło używając jednej z powyższych metod. Sprawdź jego siłę w kalkulatorze siły hasła (np. na stronie haveibeenpwned.com).</p>
      </div>`,

      `<h2>Niebezpieczeństwo ponownego używania haseł</h2>
      <h3>Efekt domina</h3>
      <p>Wyobraź sobie, że używasz tego samego hasła do 10 różnych serwisów. Jeśli jeden z nich zostanie zhakowany, atakujący automatycznie zyskuje dostęp do wszystkich pozostałych Twoich kont.</p>
      
      <h3>Credential stuffing</h3>
      <p>To popularna technika ataku, w której hakerzy automatycznie testują wykradzione kombinacje email/hasło na setkach różnych stron.</p>
      
      <h3>Password spraying</h3>
      <p>Atakujący próbują najpopularniejszych haseł na wielu kontach - metoda skuteczna, gdy użytkownicy stosują przewidywalne hasła.</p>
      
      <div class="statistics">
        <h4>Skala problemu:</h4>
        <ul>
          <li>65% użytkowników stosuje to samo lub podobne hasło do większości swoich kont</li>
          <li>W 2023 roku wykryto ponad 15 miliardów skradzionych par login-hasło dostępnych w darkwebie</li>
          <li>Średni koszt naruszenia bezpieczeństwa spowodowanego słabymi hasłami to 7,5 mln zł dla średniej firmy</li>
        </ul>
      </div>
      
      <div class="action-step">
        <h4>Co możesz zrobić już teraz:</h4>
        <p>Odwiedź haveibeenpwned.com, aby sprawdzić, czy Twoje dane wyciekły w znanych naruszeniach bezpieczeństwa.</p>
      </div>`,

      `<h2>Menedżery haseł - Twój cyfrowy sejf</h2>
      <h3>Czym jest menedżer haseł?</h3>
      <p>To specjalistyczne oprogramowanie, które:</p>
      <ul>
        <li>Bezpiecznie przechowuje wszystkie Twoje hasła w zaszyfrowanej bazie danych</li>
        <li>Generuje silne, unikalne hasła dla każdego serwisu</li>
        <li>Automatycznie wypełnia formularze logowania</li>
        <li>Synchronizuje hasła między urządzeniami</li>
        <li>Ostrzega o słabych lub powtarzających się hasłach</li>
      </ul>
      
      <h3>Jak działa menedżer haseł?</h3>
      <p>Cała baza danych jest zaszyfrowana jednym głównym hasłem (master password). To jedyne hasło, które musisz pamiętać - dlatego powinno być wyjątkowo silne i bezpieczne.</p>
      
      <h3>Popularne menedżery haseł:</h3>
      <ul>
        <li><strong>Bitwarden</strong> - open-source, darmowa wersja podstawowa</li>
        <li><strong>1Password</strong> - płatny, przyjazny interfejs, świetne funkcje bezpieczeństwa</li>
        <li><strong>KeePassXC</strong> - w pełni darmowy, lokalny, bez synchronizacji w chmurze</li>
        <li><strong>NordPass</strong> - od twórców NordVPN, intuicyjny interfejs</li>
      </ul>
      
      <div class="comparison-table">
        <h4>Porównanie popularnych menedżerów haseł:</h4>
        <table>
          <tr>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Platformy</th>
            <th>Synchronizacja</th>
          </tr>
          <tr>
            <td>Bitwarden</td>
            <td>Darmowy / Premium 10€ rocznie</td>
            <td>Windows, macOS, Linux, iOS, Android, przeglądarki</td>
            <td>Chmura (własne serwery lub self-hosted)</td>
          </tr>
          <tr>
            <td>1Password</td>
            <td>Od 36€ rocznie</td>
            <td>Windows, macOS, Linux, iOS, Android, przeglądarki</td>
            <td>Chmura (własne serwery)</td>
          </tr>
          <tr>
            <td>KeePassXC</td>
            <td>Za darmo</td>
            <td>Windows, macOS, Linux</td>
            <td>Lokalnie / własna chmura</td>
          </tr>
        </table>
      </div>`,

      `<h2>Uwierzytelnianie dwuskładnikowe (2FA) - dodatkowa warstwa ochrony</h2>
      <h3>Czym jest 2FA?</h3>
      <p>To metoda weryfikacji tożsamości użytkownika przy pomocy dwóch różnych czynników:</p>
      <ol>
        <li><strong>Coś, co znasz</strong> - hasło</li>
        <li><strong>Coś, co masz</strong> - telefon, klucz sprzętowy</li>
        <li><strong>Coś, czym jesteś</strong> - odcisk palca, skan twarzy</li>
      </ol>
      
      <h3>Najpopularniejsze metody 2FA:</h3>
      <ul>
        <li><strong>Aplikacje autoryzujące</strong> - Google Authenticator, Microsoft Authenticator, Authy</li>
        <li><strong>SMS</strong> - kod przesyłany jako wiadomość tekstowa</li>
        <li><strong>Klucze sprzętowe</strong> - YubiKey, Google Titan</li>
        <li><strong>Push notifications</strong> - powiadomienia na urządzeniu mobilnym</li>
        <li><strong>Biometria</strong> - odcisk palca, rozpoznawanie twarzy</li>
      </ul>
      
      <div class="security-comparison">
        <h4>Bezpieczeństwo metod 2FA (od najbezpieczniejszej):</h4>
        <ol>
          <li>Klucze sprzętowe (bardzo wysokie)</li>
          <li>Aplikacje autoryzujące (wysokie)</li>
          <li>Push notifications (średnie-wysokie)</li>
          <li>Biometria (średnie)</li>
          <li>SMS (niskie-średnie)</li>
        </ol>
      </div>
      
      <div class="warning">
        <h4>Uwaga!</h4>
        <p>SMS jest najbardziej podatny na ataki typu SIM swapping, gdzie przestępca przejmuje Twój numer telefonu. Jeśli masz wybór, preferuj aplikacje autoryzujące lub klucze sprzętowe.</p>
      </div>`,

      `<h2>Hasła w środowisku firmowym</h2>
      <h3>Specyficzne wyzwania w organizacjach:</h3>
      <ul>
        <li>Zarządzanie dostępem wielu użytkowników do wspólnych zasobów</li>
        <li>Kontrola dostępu dla pracowników tymczasowych i podwykonawców</li>
        <li>Bezpieczne udostępnianie haseł w zespołach</li>
        <li>Odwoływanie dostępu po odejściu pracownika</li>
      </ul>
      
      <h3>Rekomendowane rozwiązania:</h3>
      <h4>1. Firmowy menedżer haseł</h4>
      <p>Umożliwia bezpieczne współdzielenie haseł, kontrolę dostępu i śledzenie aktywności.</p>
      
      <h4>2. Single Sign-On (SSO)</h4>
      <p>Jedno centralne uwierzytelnienie dające dostęp do wielu aplikacji i systemów.</p>
      
      <h4>3. Privileged Access Management (PAM)</h4>
      <p>Specjalne zabezpieczenia dla kont uprzywilejowanych (administratorów).</p>
      
      <h4>4. Polityka rotacji haseł</h4>
      <p>Automatyczna wymiana haseł do krytycznych systemów.</p>
      
      <div class="implementation-steps">
        <h4>Wdrożenie zarządzania hasłami w organizacji:</h4>
        <ol>
          <li>Opracuj politykę zarządzania hasłami i przedstaw ją pracownikom</li>
          <li>Wybierz i wdróż firmowy menedżer haseł</li>
          <li>Przeprowadź szkolenia dla wszystkich pracowników</li>
          <li>Implementuj 2FA dla wszystkich krytycznych systemów</li>
          <li>Monitoruj zgodność i regularnie audytuj bezpieczeństwo</li>
        </ol>
      </div>`,

      `<h2>Przyszłość uwierzytelniania - życie bez haseł</h2>
      <h3>Trendy w uwierzytelnianiu:</h3>
      <h4>1. Passwordless Authentication</h4>
      <p>Całkowite odejście od haseł na rzecz innych metod weryfikacji tożsamości:</p>
      <ul>
        <li>Klucze kryptograficzne (np. FIDO2, WebAuthn)</li>
        <li>Biometria (odciski palców, twarze, głos)</li>
        <li>Magic links (linki jednorazowe wysyłane na email)</li>
      </ul>
      
      <h4>2. Adaptive Authentication</h4>
      <p>Systemy analizujące kontekst logowania (lokalizacja, urządzenie, czas) i dostosowujące poziom wymaganej weryfikacji.</p>
      
      <h4>3. Continuous Authentication</h4>
      <p>Ciągłe monitorowanie zachowań użytkownika podczas całej sesji, zamiast jednorazowego uwierzytelnienia.</p>
      
      <h3>Zalety świata bez haseł:</h3>
      <ul>
        <li>Wyższy poziom bezpieczeństwa - eliminacja słabych haseł</li>
        <li>Lepsza użyteczność - koniec zapominania haseł</li>
        <li>Niższe koszty wsparcia IT - mniej resetów haseł</li>
      </ul>
      
      <div class="future-insight">
        <h4>Spojrzenie w przyszłość:</h4>
        <p>Eksperci przewidują, że do 2030 roku tradycyjne hasła będą używane jedynie w około 30% systemów uwierzytelniania, ustępując miejsca biometrii i tokenom kryptograficznym.</p>
      </div>`,

      `<h2>10 kluczowych zasad bezpieczeństwa haseł</h2>
      <ol>
        <li><strong>Używaj długich, unikalnych haseł</strong> dla każdego konta (minimum 12-16 znaków)</li>
        <li><strong>Stosuj menedżer haseł</strong> do przechowywania i generowania silnych haseł</li>
        <li><strong>Włącz 2FA</strong> dla wszystkich krytycznych kont (bankowość, email, media społecznościowe)</li>
        <li><strong>Unikaj używania danych osobowych</strong> w hasłach (imiona, daty urodzenia)</li>
        <li><strong>Regularnie sprawdzaj</strong>, czy Twoje dane nie wyciekły (haveibeenpwned.com)</li>
        <li><strong>Zmieniaj hasła</strong> gdy tylko dowiesz się o wycieku danych</li>
        <li><strong>Nie udostępniaj haseł</strong> przez niezaszyfrowane kanały komunikacji</li>
        <li><strong>Używaj frazy-klucza zamiast słowa-klucza</strong> jako głównego hasła do menedżera</li>
        <li><strong>Zabezpiecz swój adres email</strong> szczególnie silnym hasłem i 2FA - to brama do pozostałych kont</li>
        <li><strong>Miej plan awaryjny</strong> - przechowuj kopie zapasowe krytycznych haseł w bezpiecznym miejscu</li>
      </ol>
      
      <div class="reminder">
        <h4>Zapamiętaj:</h4>
        <p>Bezpieczeństwo haseł to nie jednorazowe działanie, ale ciągły proces. Regularnie przeglądaj swoje konta i aktualizuj zabezpieczenia.</p>
      </div>`,

      `
        <h3>Gratulacje!</h3>
        <p>Ukończyłeś kurs "Twoje hasło to klucz do cyfrowego życia".</p>
      `
    ],
    "estimatedTime": "25 min",
    "author": "Zespół PhishAware"
  }}

export default function KursPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params with React.use()
  const { id } = React.use(params);
  const router = useRouter();
  const [course, setCourse] = useState<{
    id: string;
    title: string;
    pages: string[];
    estimatedTime: string;
    author: string;
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  // Pobieranie kursu
  useEffect(() => {
    (async () => {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 300));
      const data = coursesDatabase[id];
      if (data) setCourse(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-black font-bold text-xl">Ładowanie kursu...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="text-xl text-red-500 mb-4">
          Nie znaleziono kursu o ID: {id}
        </div>
        <button
          onClick={() => router.push("/kursy")}
          className="bg-[#378075] text-white px-4 py-2 rounded-lg"
        >
          Wróć do listy kursów
        </button>
      </div>
    );
  }

  const total = course.pages.length;
  const percent = Math.round(((currentPage ) / total) * 100);
  const isLast = currentPage === total - 1;
 if(isLast){
   toast.success("Gratulacje! Kurs został ukończony.");
 }
  const handlePrev = () => {
    const newPage = Math.max(currentPage - 1, 0);
    setCurrentPage(newPage);
    console.log(`Progress: ${Math.round(((newPage ) / total) * 100)}%`);
  };

  const handleNext = () => {
    if (isLast) {
      console.log(`Progress: 100%`);
      router.push("/");

    } else {
      const newPage = Math.min(currentPage + 1, total - 1);
      setCurrentPage(newPage);
      console.log(`Progress: ${Math.round(((newPage ) / total) * 100)}%`);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
            <Toaster
      toastOptions={{
        error: {
          style: {
            background: '#548880', 
            color: 'white',
          },
        },
      }}
    />
      {/* Nagłówek */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center space-x-6">
          <h1 className="text-2xl font-bold flex-1">{course.title}</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-1" /> {course.estimatedTime}
          </div>
          <div className="flex items-center text-sm text-gray-600">{percent}% ukończono</div>
        </div>
      </div>

      {/* Strona kursu */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <BookOpen size={16} className="mr-1" /> Autor: {course.author}
          </div>
<div
  className="
    prose max-w-none 
    [&_h2]:text-lg [&_h2]:font-bold [&_h2]:mt-2 [&_h2]:mb-2 [&_h2]:text-gray-900
    [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-2 [&_h3]:mb-2 [&_h3]:text-gray-800
    [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-gray-700
    [&_.warning-box]:bg-red-50 [&_.warning-box]:p-4 [&_.warning-box]:rounded-lg [&_.warning-box]:border-l-4 [&_.warning-box]:border-red-500 [&_.warning-box]:my-6
    [&_.case-study]:bg-blue-50 [&_.case-study]:p-4 [&_.case-study]:rounded-lg [&_.case-study]:border-l-4 [&_.case-study]:border-blue-500 [&_.case-study]:my-6
    [&_.tech-spotlight]:bg-purple-50 [&_.tech-spotlight]:p-4 [&_.tech-spotlight]:rounded-lg [&_.tech-spotlight]:border-l-4 [&_.tech-spotlight]:border-purple-500 [&_.tech-spotlight]:my-6
    [&_.best-practice]:bg-green-50 [&_.best-practice]:p-4 [&_.best-practice]:rounded-lg [&_.best-practice]:border-l-4 [&_.best-practice]:border-green-500 [&_.best-practice]:my-6
    [&_.implementation-tip]:bg-indigo-50 [&_.implementation-tip]:p-4 [&_.implementation-tip]:rounded-lg [&_.implementation-tip]:border-l-4 [&_.implementation-tip]:border-indigo-500 [&_.implementation-tip]:my-6
    [&_.emergency-contacts]:bg-red-50 [&_.emergency-contacts]:p-4 [&_.emergency-contacts]:rounded-lg [&_.emergency-contacts]:border-l-4 [&_.emergency-contacts]:border-red-500 [&_.emergency-contacts]:my-6
    [&_.quote]:italic [&_.quote]:pl-4 [&_.quote]:border-l-4 [&_.quote]:border-gray-300 [&_.quote]:my-6
    [&_.shocking-facts]:bg-yellow-50 [&_.shocking-facts]:p-4 [&_.shocking-facts]:rounded-lg [&_.shocking-facts]:border-l-4 [&_.shocking-facts]:border-yellow-500 [&_.shocking-facts]:my-6
    [&_.interactive-example]:bg-blue-50 [&_.interactive-example]:p-4 [&_.interactive-example]:rounded-lg [&_.interactive-example]:border [&_.interactive-example]:border-blue-200 [&_.interactive-example]:my-6
    [&_table]:w-full [&_table]:border-collapse [&_table_th]:bg-gray-100 [&_table_th]:p-2 [&_table_td]:border [&_table_td]:p-2
    [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5
    [&_img]:max-w-full [&_img]:rounded-lg [&_img]:my-4
    [&_.quiz]:bg-gray-50 [&_.quiz]:p-6 [&_.quiz]:rounded-lg [&_.quiz]:border [&_.quiz]:border-gray-200 [&_.quiz]:my-6
    [&_.certificate-info]:bg-green-50 [&_.certificate-info]:p-6 [&_.certificate-info]:rounded-lg [&_.certificate-info]:border-l-4 [&_.certificate-info]:border-green-500 [&_.certificate-info]:my-6
  "
  dangerouslySetInnerHTML={{ __html: course.pages[currentPage] }}
/>

          {/* Nawigacja */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 cursor-pointer"
            >
              Poprzednia
            </button>

            <button
              onClick={handleNext}
              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 cursor-pointer ${
                isLast
                  ? "bg-[#378075] text-white"
                  : "bg-[#378075]/80 text-white hover:bg-[#378075]"
              }`}
            >
              <span>{isLast ? "Ukończ kurs" : "Dalej"}</span>
              <Award size={20} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
