"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FirmaPage() {
  const [formData, setFormData] = useState({
    nazwaFirmy: "Społeczne Centrum Informatyczne sp z o.o.",
    adres: "ul. Dworcowa 13",
    kodPocztowy: "45-348",
    miasto: "Warszawa",
    kraj: "Polska",
    nip: "8912277755",
    krs: "0000745071",
    regon: "380952895",
    email: "kontakt@firmasci.pl",
    telefon: "+48 71 342 65 89",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tu możesz dodać logikę zapisu danych np. do API
    toast.success("Zapisano zmiany w danych firmy.");
  };

  return (
    <main className="px-6 pb-6 gap-1 flex flex-col">
            <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#378075",
              color: "white",
            },
          },
        }}
      />
      <h1 className="text-7xl font-bold mb-8">Firma</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg   max-w-2xl"
      >

        <div className="flex flex-col gap-4">
          {[
            { label: "Nazwa firmy", name: "nazwaFirmy" },
            { label: "Adres", name: "adres" },
            { label: "Kod pocztowy", name: "kodPocztowy" },
            { label: "Miasto", name: "miasto" },
            { label: "Kraj", name: "kraj" },
            { label: "NIP", name: "nip" },
            { label: "KRS", name: "krs" },
            { label: "REGON", name: "regon" },
            { label: "E-mail", name: "email" },
            { label: "Telefon", name: "telefon" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-medium mb-1">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#378075] focus:border-transparent"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-[#378075] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2f6c64] transition"
          >
            Zapisz zmiany
          </button>
        </div>
      </form>
    </main>
  );
}
