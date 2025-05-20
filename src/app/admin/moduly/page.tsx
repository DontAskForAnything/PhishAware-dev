const dane = [
  {
    name: "Bezpieczeństwo urządzenia",
    avg_score: 72,
    participation_rate: 54,
    active: true,
  },
  {
    name: "Hasła",
    avg_score: 35,
    participation_rate: 78,
    active: true,
  },
  {
    name: "Złośliwe oprogramowanie",
    avg_score: 48,
    participation_rate: 86,
    active: false,
  },
  {
    name: "Praca zdalna",
    avg_score: 90,
    participation_rate: 72,
    active: true,
  },
  {
    name: "Inżynieria społeczna",
    avg_score: 82,
    participation_rate: 94,
    active: false,
  },
  {
    name: "RODO",
    avg_score: 93,
    participation_rate: 60,
    active: true,
  },
];

export default function Analiza() {
  return (
    <div className=" px-6 pb-6 gap-8 flex flex-col">
      <h1 className="text-7xl font-bold ">Moduły</h1>

      <div className="  grid grid-cols-2 rows-2 gap-8">
        {dane.map((item, index) => (
          <div
            key={index}
            className={`w-full  gap-4  bg-[#D9D9D9]  p-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl ${!item.active && "opacity-70"} `}
          >
            <div className="flex flex-1 justify-between items-center  ">
              <div className="font-bold text-xl ">{item.name}</div>

              {item.active ? (
                <div className="rounded-2xl w-28 h-10 py-[20px] px-1 bg-transparent border border-[#024840] flex justify-center items-center">
                  <p className=" text-[#024840] text-center">AKTYWNY</p>
                </div>
              ) : (
                <div className="rounded-2xl w-28 h-10 py-[20px] px-1 bg-transparent border border-black flex justify-center items-center ">
                  <p className=" text-black text-center">WYŁĄCZONY</p>
                </div>
              )}
            </div>
            <div>
              <div className="h-[70px]  w-full flex flex-col-reverse bg-[url(/lines.png)]   rounded-r-2xl">
                {/* Bar */}
                <div
                  className={` text-white  text-center flex items-end justify-left  h-[70px]
                                
                                      p-2 rounded-r-2xl ${
                                        item.avg_score > 70
                                          ? "bg-[#378075]"
                                          : item.avg_score > 50
                                            ? "bg-[#F6B137]"
                                            : "bg-[#E2615E]"
                                      }`}
                  style={{ width: item.avg_score + "%" }}
                >
                  {item.avg_score}%
                </div>
              </div>
              <p className="  font-bold mt-2">Średni wynik</p>
            </div>

            <div>
              <div className="h-[70px]  w-full flex flex-col-reverse bg-[url(/lines.png)]   rounded-r-2xl">
                {/* Bar */}
                <div
                  className={` text-white  text-center flex items-end justify-left  h-[70px]
                                
                                      p-2 rounded-r-2xl ${
                                        item.participation_rate > 70
                                          ? "bg-[#378075]"
                                          : item.participation_rate > 50
                                            ? "bg-[#F6B137]"
                                            : "bg-[#E2615E]"
                                      }`}
                  style={{ width: item.participation_rate + "%" }}
                >
                  {item.participation_rate}%
                </div>
              </div>
              <p className="  font-bold mt-2">Udział</p>
            </div>

            <div className="  ">Zobacz więcej statystyk</div>
          </div>
        ))}
      </div>
    </div>
  );
}
