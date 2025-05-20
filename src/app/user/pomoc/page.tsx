"use client";
import { Search, FileText, ChevronRight } from "lucide-react";

export default function PomocPage() {
  const openMaterialInGoogle = (title: string) => {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(title)}`,
      "_blank",
    );
  };

  const openEmailContact = () => {
    window.location.href = "mailto:support@phishaware.com";
  };
  const faqItems = [
    {
      question: "Jak rozpoznać podejrzany email?",
      answer:
        "Zwróć uwagę na błędy ortograficzne, nietypowy adres nadawcy oraz prośby o pilne działanie lub podanie danych osobowych.",
    },
    {
      question: "Co zrobić gdy kliknąłem w podejrzany link?",
      answer:
        "Natychmiast zmień hasła do swoich kont, uruchom skanowanie antywirusowe i zgłoś incydent do działu IT.",
    },
    {
      question: "Jak działa punktacja w aplikacji?",
      answer:
        "Za każde ukończone wyzwanie otrzymujesz punkty, które przeliczane są na hektary wirtualnego lasu. Im więcej punktów, tym większy las!",
    },
    // {
    //   question: "Czy mogę powtórzyć ukończone wyzwanie?",
    //   answer:
    //     "Tak, możesz w dowolnym momencie wrócić do ukończonych wyzwań, aby odświeżyć swoją wiedzę.",
    // },
  ];

  return (
    <main className=" p-6  gap-1 flex flex-col">
      <h1 className="text-7xl font-bold mb-8">Pomoc</h1>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Wyszukaj w pomocy..."
          className="w-full p-3 pl-10 rounded-lg border border-gray-300"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">
          Najczęściej zadawane pytania
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
        <h2 className="text-2xl font-bold mb-4">Materiały szkoleniowe</h2>
        <div className="space-y-3">
          {[
            "Podstawy bezpieczeństwa",
            "Jak rozpoznać phishing?",
            "Bezpieczne hasła",
            "Ochrona danych osobowych",
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
              Nadal potrzebujesz pomocy?
            </h2>
            <p className="mb-4">
              Nasz zespół jest gotowy, aby Ci pomóc. Skontaktuj się z nami!
            </p>
            <button
              className="cursor-pointer bg-white text-[#378075] px-4 py-2 rounded-lg font-medium"
              onClick={openEmailContact}
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
