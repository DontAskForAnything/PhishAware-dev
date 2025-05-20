import LineChart from "@/components/admin/chart";
import PhishingStatsChart from "@/components/PhishingStatsChart";
import { Edit, Play, Search } from "lucide-react";

const dane = {
  podatne_osoby: [
    {
      email: "t.szewc@sci.edu.pl",
      poodatnosc: 65,
      attack: "Phishing",
    },
    {
      email: "k.poziomka@sci.edu.pl",
      poodatnosc: 53,
      attack: "Phishing",
    },
    {
      email: "g.podgorny@sci.edu.pl",
      poodatnosc: 44,
      attack: "Phishing",
    },
    {
      email: "g.sobol@sci.edu.pl",
      poodatnosc: 38,
      attack: "Phishing",
    },
    {
      email: "p.szewc@sci.edu.pl",
      poodatnosc: 20,
      attack: "Phishing",
    },
  ],
};
const getBackgroundColor = (value: number) => {
  if (value > 50) {
    return "#E2615E"; // Red for low values
  } else {
    return "#F6B137"; // Orange for medium values
  }
};
export default function TestyBezpieczenstwa() {
  return (
    <div className=" px-6 pb-6 gap-8 flex flex-col">
      <h1 className="text-7xl font-bold ">Testy Bezpieczestwa</h1>

      <div className="  gap-8 flex flex-row justify-between ">
        <div
          className={`w-52 h-24  gap-1  bg-[#D9D9D9]   justify-center items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-2xl  `}
        >
          <p className="text-sm font-semibold">Rozpocznij testy</p>
          <Play size={40} />
        </div>

        <div
          className={`w-full  gap-1  bg-[#D9D9D9]   justify-center items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-2xl  `}
        >
          <p className="text-sm font-semibold">Przeprowadzonych testów</p>
          <p className="text-4xl font-bold">14 383</p>
        </div>

        <div
          className={`w-52 h-24  gap-1  bg-[#D9D9D9]   justify-center items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-2xl  `}
        >
          <p className="text-sm font-semibold">Wskaźnik podatności</p>
          <div className="text-center px-6 py-2 rounded-xl text-white bg-[#E2615E]">
            42%
          </div>
        </div>
      </div>

      <div className="  gap-8 flex flex-row justify-between ">
        <div
          className={`w-full justify-center items-center min-h-[390px] gap-1  bg-[#D9D9D9] p-6  drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-2xl  `}
        >
          <p className="text-sm font-semibold text-center">
            Porównanie miesiecznę
          </p>
          <LineChart />

          <div className="flex flex-1 justify-between  px-6 items-center w-full max-w-[700px]">
            <p>Styczeń</p>
            <p>Luty</p>
            <p>Marzec</p>
            <p>Kwiecień</p>
            <p>Maj</p>
          </div>
        </div>

        <div
          className={`w-full gap-1  bg-[#D9D9D9] p-6  drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-2xl  `}
        >
          <p className="text-sm font-semibold text-center">Wykres zagrożeń</p>
          <PhishingStatsChart />
        </div>
      </div>

      <div className="gap-3 flex flex-col ">
        <p className="font-bold px-4">Najbardziej podatne osoby</p>
        <div className="flex text-white font-medium rounded-2xl px-7  py-2 text-sm justify-between overflow-hidden bg-[#378075]">
          <div className="py-2 px-4  w-[200px] flex items-center">Email</div>
          <div className="py-2 px-4 w-[200px] flex items-center justify-center">
            Średnia podatność
          </div>
          <div className="py-2 px-4 w-[200px] flex items-center justify-center">
            Najczęstszy atak
          </div>

          <div className=" flex items-center justify-center">
            <Search className="text-white" size={20} />
          </div>
        </div>

        {dane.podatne_osoby.map((row, index) => (
          <div
            key={index}
            className={`flex items-center justify-between bg-[#A5C7BF] px-7  py-2 rounded-2xl `}
          >
            <div className="py-3 px-4  w-[200px]">{row.email}</div>
            <div className="py-3 px-2 w-[200px]  flex justify-center">
              <div
                className="text-center  rounded-xl text-white w-full px-6 py-2.5"
                style={{ backgroundColor: getBackgroundColor(row.poodatnosc) }}
              >
                {row.poodatnosc}%
              </div>
            </div>
            <div className="py-3 px-4 w-[200px] text-center">{row.attack}</div>
            <div className=" flex justify-center">
              <Edit
                className=" cursor-pointer hover:scale-105 transition"
                size={20}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
