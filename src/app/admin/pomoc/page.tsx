"use client";
import { Search, FileText, ChevronRight } from "lucide-react";

export default function PomocAdministratoraPage() {
  const openMaterialInGoogle = (title: string) => {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(title)}`,
      "_blank",
    );
  };

  const openEmailContact = () => {
    window.location.href = "mailto:admin-support@phishaware.com";
  };
  const faqItems = [
    {
      question: "Jak zarządzać kontami użytkowników?",
      answer:
        "W panelu administratora przejdź do sekcji 'Użytkownicy', gdzie możesz dodawać, usuwać i modyfikować uprawnienia poszczególnych kont.",
    },
    {
      question: "Jak stworzyć nowe wyzwanie dla użytkowników?",
      answer:
        "W zakładce 'Wyzwania' kliknij 'Dodaj nowe', wypełnij formularz z pytaniami, odpowiedziami i materiałami, a następnie ustaw punktację i opublikuj.",
    },
    {
      question: "Jak wygenerować raport aktywności?",
      answer:
        "Przejdź do sekcji 'Statystyki', wybierz zakres dat oraz grupy użytkowników, a następnie kliknij 'Generuj raport'. Możesz go pobrać w formacie PDF lub Excel.",
    },
    {
      question: "Jak zresetować hasło użytkownika?",
      answer:
        "Znajdź użytkownika w panelu 'Użytkownicy', kliknij 'Opcje' przy jego koncie, a następnie wybierz 'Resetuj hasło'. System wyśle link do zmiany hasła na adres email użytkownika.",
    },
  ];

  return (
    <main className=" p-6  gap-1 flex flex-col">       
            <h1 className="text-7xl font-bold mb-8">Pomoc</h1>
    
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Szukaj w bazie wiedzy administratora..."
            className="w-full p-3 pl-10 rounded-lg border border-gray-300"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            FAQ dla administratorów
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="font-medium text-lg">{item.question}</h3>
                  
                </div>
                <p className="text-gray-600 mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Dokumentacja techniczna</h2>
          <div className="space-y-3">
            {[
              "Konfiguracja systemu",
              "Zarządzanie bazą użytkowników",
              "Tworzenie i edycja wyzwań",
              "Generowanie raportów analitycznych",
            ].map((title, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 cursor-pointer"
                onClick={() => openMaterialInGoogle(title)}
              >
                <div className="flex items-center">
                  <FileText size={20} className="text-[#378075] mr-3" />
                  <span>{title}</span>
                </div>
                <ChevronRight size={18} className="text-[#378075]" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#378075] text-white rounded-lg shadow p-6">
          <div className="flex items-start">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">
                Potrzebujesz dodatkowego wsparcia technicznego?
              </h2>
              <p className="mb-4">
                Nasz dedykowany zespół wsparcia administratorów jest dostępny 24/7. Skontaktuj się z nami!
              </p>
              <button
                className="cursor-pointer bg-white text-[#378075] px-4 py-2 rounded-lg font-medium"
                onClick={openEmailContact}
              >
                Wsparcie techniczne
              </button>
            </div>
          </div>
        </div>
  
    </main>
  );
}