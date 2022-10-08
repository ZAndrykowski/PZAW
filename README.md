# PZAW
Programowanie Zaawansowanych Aplikacji Webowych - Projekt Rezerwacje


Ogólne założenia: 
Stworzyć stronę do rezerwacji miejsc w restauracji.

Elementy:
1.Logowanie użytkownika/Stały Klient;
  Hasło (nie może być = login, wymagane zawieranie 1 duza litera, 1 znak specjalny (bez ?,/), minimalna liczba liter 6);
  Login (nie może się powtarzać w naszej bazie danych);
  Proste przepis z obrazka CAPTCHA;
  LOGUJ (Button);

2. (PO ZALOGOWANIU) PODSUMOWANIE WIZYT

3. Rejestracja użytkownika/*Rezerwacja bez rejestracji (POLA WYMAGANE – WSZYSTKIE POLA W REJESTRACJI);
  *Imię (POLE WYMAGANE);
  *Nr. Tel (? – baza danych z kierunkowymi/ tylko PL ograniczenie do 9)(POLE WYMGANE);
  *E-mail (przykladowy@domena.pl – wymagane @ i .);
  *Klauzula RODO – (checkbox, wysłanie (true)) ;
  *Usuwanie po dacie przybycia (W PRZYPADKU REZERWACJI);
  Login (min.4 maks.10, bez powtórzeń w bazie);
  Hasło (nie może być = login, wymaganie zawieranie 1 duża litera, 1 znak specjalny (bez ?,/), minimalna liczba liter 6);
  Powtórz hasło (sprawdzanie zgodności) (zgadza się / nie zgadza się);
  ZAREJESTRUJ/ZAREZERWUJ - INFORMACJA CO NIE ZOSTAŁO WPISANE;

4. Rezerwacja:
  Mapka stolików;
  Wybór liczby osób (dostępność, ograniczenie maksymalnej);
  Interaktywny wybór(na podstawie liczby osób, daty, dostępnych dań);
  Mapa powinna być oparta o tabele;
  Wybór daty (Wybór wolny-zajęty);

5. Wybór dania 
  Utworzenie własnego;
  Podanie ceny; 
  Wyszukiwanie dań; 
  Pobranie Menu;
  Sortowania(Alfabetycznie, Cena, Tylko Napoje, Tylko dania obiadowe);
  Podsumowanie (Stolik, Data, Dania, Cena, Nr. Rezerwacji);

6. Strona Administracja
  Logowanie/Wyloguj;
  Dodawanie/Usuwanie dań;
  Aktualizacja i Dostępność Dania;
  Potwierdzenie/Usuniecie rezerwacji;
  Dostępności stolików;
  Usuniecie dania;
  UPRAWNIENIA?
    UTWÓRZ UŻYTKOWNIKA ADMIN;
    Utworzenie zwykłych użytkowników;
    Nadawanie roli;
    ROLE (Admin, Manager, Kelner);
  PODGLĄD REZERWACJI = PODSUMOWANIE + Potwierdzenie/Usuniecie rezerwacji;


PROJEKTY NA ZALICZENIE:
1. Aplikacja Wej/Wyj z pracy, powinna zawierać elementy:
a) Logowanie za pomocą karty zawierającej ID / LUB RĘCZNEMU Z PODANIEM HASŁA
b) "Przerwa"
c) Rejestr wejść
d) Nieupoważnione wejście
e) Informacja o spóźnieniu
f)* DODANIE NOWEJ OSOBY / USUNIECIE BYŁEGO PRACOWNIKA

2. Aplikacja rzutu Rpgową kością
a) Możliwość wyboru liczby graczy
b) Dodawanie dodatkowych parametrów (np. jakieś przewagi typu +1 do rzutu)
c) Przypisanie stałych wartości graczom (np. siła, zręczność itd.) - Możliwość wyświetlenia ich podsumowania
d) Przygotowanie makr (np. gotowy rzut na inicjatywe dla wszystkich graczy/ dla wybranych)
e) ZWYKŁY RZUT WYBRANĄ KOŚCIĄ(K2, K4, K6, K8, K10, K20) DLA WYBRANEGO GRACZA

3. Aplikacja z zabytkami z danego województwa
a) Lista zabytków
b) Wyszukiwarka
c) Trasa z pobliskiej miejscowości/ Punkt na mapie
d) Zapamiętanie ULUBIONYCH
e) Krótki opis zabytków wraz z zdjęciem
f)* Wykorzystanie jednego z dostawców map(Google, OpenStreetMap, itd.) aby utworzył trasę do wykorzystania

4.* Prosty Komunikator
a) Logowanie/Wylogowanie
b) Wysyłanie wiadomości
c) Historie wyslanych wiadomości
d) Może możliwość wysłania małych plików (do 10mb)
e) Odczytywanie wiadomości

