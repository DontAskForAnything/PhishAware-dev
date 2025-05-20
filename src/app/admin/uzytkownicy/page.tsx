import { Edit, Search } from "lucide-react";

const data = [
  {
    email: "m.jasiński@sci.edu.pl",
    liczba: "210 000",
    punkty: 80,
    poprawnosc: 100,
    ukonczone: 14,
  },
  {
    email: "k.marchewka@sci.edu.pl",
    liczba: "32 102",
    punkty: 76,
    poprawnosc: 88,
    ukonczone: 14,
  },
  {
    email: "j.swierszcz@sci.edu.pl",
    liczba: "45 870",
    punkty: 44,
    poprawnosc: 72,
    ukonczone: 14,
  },
  {
    email: "h.malina@sci.edu.pl",
    liczba: "201 405",
    punkty: 76,
    poprawnosc: 80,
    ukonczone: 14,
  },
  {
    email: "c.krzak@sci.edu.pl",
    liczba: "128 600",
    punkty: 70,
    poprawnosc: 92,
    ukonczone: 14,
  },
  {
    email: "w.wilk@sci.edu.pl",
    liczba: "145 608",
    punkty: 48,
    poprawnosc: 60,
    ukonczone: 14,
  },
  {
    email: "g.sobol@sci.edu.pl",
    liczba: "98 562",
    punkty: 77,
    poprawnosc: 40,
    ukonczone: 14,
  },
  {
    email: "t.slowik@sci.edu.pl",
    liczba: "165 000",
    punkty: 60,
    poprawnosc: 100,
    ukonczone: 14,
  },
  {
    email: "j.wisnia@sci.edu.pl",
    liczba: "57 532",
    punkty: 20,
    poprawnosc: 36,
    ukonczone: 14,
  },
  {
    email: "p.szewc@sci.edu.pl",
    liczba: "199 840",
    punkty: 90,
    poprawnosc: 94,
    ukonczone: 14,
  },
  {
    email: "a.kowalski@sci.edu.pl",
    liczba: "187 430",
    punkty: 84,
    poprawnosc: 96,
    ukonczone: 14,
  },
  {
    email: "m.nowak@sci.edu.pl",
    liczba: "76 290",
    punkty: 52,
    poprawnosc: 75,
    ukonczone: 14,
  },
  {
    email: "k.lipinski@sci.edu.pl",
    liczba: "132 845",
    punkty: 68,
    poprawnosc: 86,
    ukonczone: 14,
  },
  {
    email: "e.drozd@sci.edu.pl",
    liczba: "93 721",
    punkty: 56,
    poprawnosc: 78,
    ukonczone: 14,
  },
  {
    email: "p.wozniak@sci.edu.pl",
    liczba: "205 687",
    punkty: 88,
    poprawnosc: 92,
    ukonczone: 14,
  },
  {
    email: "b.komar@sci.edu.pl",
    liczba: "64 128",
    punkty: 40,
    poprawnosc: 65,
    ukonczone: 14,
  },
  {
    email: "r.zajac@sci.edu.pl",
    liczba: "173 954",
    punkty: 72,
    poprawnosc: 83,
    ukonczone: 14,
  },
  {
    email: "i.sokol@sci.edu.pl",
    liczba: "118 563",
    punkty: 64,
    poprawnosc: 88,
    ukonczone: 14,
  },
  {
    email: "d.lis@sci.edu.pl",
    liczba: "152 790",
    punkty: 80,
    poprawnosc: 90,
    ukonczone: 14,
  },
  {
    email: "z.sroka@sci.edu.pl",
    liczba: "41 375",
    punkty: 36,
    poprawnosc: 58,
    ukonczone: 14,
  },
];

export default function Uzytkownicy() {
  const getBackgroundColor = (value: number) => {
    if (value >= 70) {
      return "#378075"; // Green for high values
    } else if (value >= 45) {
      return "#F6B137"; // Orange for medium values
    } else {
      return "#E2615E"; // Red for low values
    }
  };

  return (
    <div className=" px-6 pb-6  gap-1 flex flex-col">
      <h1 className="text-7xl font-bold mb-8">Użytkownicy</h1>

      {/* Table Header */}
      <div className="flex text-white font-medium rounded-2xl px-7  py-2 text-sm justify-between overflow-hidden bg-[#378075]">
        <div className="py-2 px-4  w-[200px] flex items-center">Email</div>
        <div className="py-2 px-4 w-[100px] flex items-center justify-center">
          Punkty
        </div>
        <div className="py-2 px-4 w-[90px] flex items-center justify-center">
          Udział
        </div>
        <div className="py-2 px-4 w-[90px] flex items-center justify-center">
          Poprawność
        </div>
        <div className="py-2 px-4 w-[170px] flex items-center justify-center">
          Ukonczone wyzwania
        </div>
        <div className=" flex items-center justify-center">
          <Search className="text-white" size={20} />
        </div>
      </div>

      {/* Table Rows */}
      {data.map((row, index) => (
        <div
          key={index}
          className={`flex items-center justify-between bg-[#A5C7BF] px-7  py-2 rounded-2xl `}
        >
          <div className="py-3 px-4  w-[200px]">{row.email}</div>
          <div className="py-3 px-4w w-[100px] text-center">{row.liczba}</div>
          <div className="py-3 px-2 w-[90px]  flex justify-center">
            <div
              className="text-center  rounded-xl text-white px-6 py-2.5"
              style={{ backgroundColor: getBackgroundColor(row.punkty) }}
            >
              {row.punkty}%
            </div>
          </div>
          <div className="py-3 px-2 w-[90px] flex justify-center items-center">
            <div
              className="text-center px-6 py-2.5 rounded-xl text-white"
              style={{ backgroundColor: getBackgroundColor(row.poprawnosc) }}
            >
              {row.poprawnosc}%
            </div>
          </div>
          <div className="py-3 px-4 w-[170px] text-center">{row.ukonczone}</div>
          <div className=" flex justify-center">
            <Edit
              className=" cursor-pointer hover:scale-105 transition"
              size={20}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
