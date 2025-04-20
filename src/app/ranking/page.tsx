import { Trophy } from "lucide-react";
import Image from "next/image";

const data = [
  {
    place: 1,
    name: "Michał",
    surname: "Jasiński",
    forest_size: 250524,
  },
  {
    place: 2,
    name: "Liwia",
    surname: "Cieślak",
    forest_size: 140255,
  },
  {
    place: 3,
    name: "Teodor",
    surname: "Brzozowski",
    forest_size: 2137,
  },
  {
    place: 4,
    name: "Jagoda",
    surname: "Zawisza",
    forest_size: 1987,
  },
  {
    place: 5,
    name: "Kazimierz",
    surname: "Wielki",
    forest_size: 1874,
  },
];

export default function Page() {
  return (
    <main className=" p-6">
      <h1 className="text-7xl font-bold">Ranking</h1>

      {data.map((el, index) => (
        <div
          key={index}
          className={`mt-8 flex-1 flex gap-5 flex-col relative ${el.place == 1 && "bg-[#F8F1AD]"} ${el.place == 2 && "bg-[#CFCFCF]"} ${el.place == 3 && "bg-[#D2A375]"} ${el.place > 3 && "bg-[#D1EFFA]"} pt-8 px-3 rounded-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
        >
          <div className="flex-1 justify-center items-center ">
            <div className="flex  absolute  top-4 left-4 gap-2 items-center">
              <div
                className={`aspect-square ${el.place == 1 && "bg-[#FFE700]"} ${el.place == 2 && "bg-[#A5A5A5]"} ${el.place == 3 && "bg-[#BA8550]"} ${el.place > 3 && "hidden"}   drop-shadow-[0_4px_4px_rgba(0,0,0,0.25) p-3 rounded-xl justify-center items-center flex `}
              >
                <Trophy size={25} />
              </div>
              <p className=" text-2xl ">#{el.place}</p>
            </div>
            <h2 className="text-center text-5xl font-semibold">
              {el.name} {el.surname}
            </h2>
          </div>
          <div className="flex-1 flex-row flex items-center justify-between gap-20">
            <Image
              src="/trees.png"
              alt="Trees"
              width={1320}
              height={100}
              className="object-contain w-1/3"
              draggable={false}
            />
            <div className=" flex-1 flex flex-col gap-2.5  w-1/3">
              <h2 className="text-center text-6xl font-semibold">
                {el.forest_size
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
              </h2>
              <h2 className="text-center text-3xl  ">hektarów</h2>
            </div>
            <Image
              src="/trees.png"
              alt="Trees"
              width={1320}
              height={100}
              className="object-contain w-1/3"
              draggable={false}
            />
          </div>
        </div>
      ))}
    </main>
  );
}
