import { Lock, Play, PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = {
  current_day: 15,
  forest_info: {
    status: "Twój las rośnie!",
    size: 250524,
  },
  todays_lesson: {
    title: "Twoja tygodniowa lekcja czeka!",
    description:
      "Dziś zagłębimy się w świat vishingu, czyli phishingu przez telefon. Dowiesz się, jak działają oszuści podszywający się pod banki, urzędy czy znajomych, by wyłudzić Twoje dane lub pieniądze. Nauczysz się rozpoznawać podejrzane rozmowy, reagować w odpowiedni sposób i chronić siebie oraz swoich bliskich. Krótko, konkretnie i bardzo życiowo.",
  },
  additional_courses: [
    {
      name: "Phishing",
      description:
        "Myślisz, że rozpoznasz oszustwo? Pomyśl jeszcze raz. Ten kurs zabierze Cię do podstępnego świata phishingu — fałszywych maili, podejrzanych linków i ofert, które brzmią zbyt dobrze, by były prawdziwe. Naucz się unikać pułapek, przechytrzyć cyberoszustów i chronić swoje dane. ",
      current_percent: 28,
    },
    {
      name: "Passwords",
      description:
        "Twoje hasło to klucz do cyfrowego życia — nie ustawiaj „123456”. Ten kurs pokaże Ci, jak tworzyć silne i unikalne hasła, unikać ryzyka ich ponownego używania i korzystać z menedżerów haseł, by wszystko było bezpieczne. Proste kroki, duża ochrona.",
      current_percent: 96,
    },
  ],
};
export default function Page() {
  return (
    <main className="">
      <h1 className="text-7xl font-bold px-7 pt-7">Wyzwania</h1>

      <div className=" mb-14 mt-14 relative">
        <div className="bg-[#378075] h-6 w-full absolute top-1/2 transform -translate-y-1/2"></div>
        <Image
          src="/arrow.png"
          alt="Trees"
          height={200}
          width={200}
          className=" absolute -top-30 right-16"
          draggable={false}
        />

        <div className="bg-[#378075]  absolute w-8 h-8 rounded-full z-10 right-82 -bottom-10" />
        <div className="flex flex-1 justify-between px-6">
          {Array.from(
            { length: 10 },
            (_, index) => data.current_day - 9 + index,
          ).map((num) => (
            <div
              key={num}
              className="bg-[#87B4AA] w-16 h-16 rounded-full z-10 flex justify-center items-center"
            >
              <p className="font-semibold text-xl">{num}</p>{" "}
            </div>
          ))}
          <Link
            href="/lekcja"
            className="bg-[#378075] w-16 h-16 rounded-full hover:scale-105 transition z-10 flex justify-center items-center cursor-pointer"
          >
            <PlayIcon size={30} color="white" />{" "}
          </Link>
          <div className="bg-[#87B4AA] w-16 h-16 rounded-full z-10 flex justify-center items-center">
            <Lock size={30} />{" "}
          </div>
          <div className="bg-[#87B4AA] w-16 h-16 rounded-full z-10 flex justify-center items-center">
            <Lock size={30} />{" "}
          </div>
        </div>
      </div>

      <div className="  px-6 flex flex-1 gap-8 mt-6">
        <div className="w-[600px] bg-[#D9D9D9] cursor-pointer pt-4  drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl ">
          <div className=" gap-4 flex flex-col justify-between flex-1 pt-6">
            <div className="flex-1 flex  justify-center flex-col gap-1 items-center bg-[url(/confetti.png)]   bg-no-repeat  bg-center">
              <p>{data.forest_info.status}</p>
              <p className="text-5xl font-semibold">
                {data.forest_info.size
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
              </p>
              <p>hektarów</p>
            </div>
            <Image
              src="/trees_main.png"
              alt="Trees"
              height={200}
              width={20000}
              className="object-contain max-h-[200px]"
              draggable={false}
            />
          </div>
        </div>

        <Link
            href="/lekcja" className="w-full bg-[#378075] cursor-pointer p-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl bg-[url(/bg-sign-2.png)]  bg-cover bg-no-repeat  bg-left">
          <div className="px-5 gap-4 flex flex-col">
            <div className="h-[100]" />
            <div className="flex-1 flex justify-between  items-center ">
              <h1 className="text-3xl font-bold text-white">
                {data.todays_lesson.title}
              </h1>
              <div className=" aspect-square rounded-full p-3 bg-white cursor-pointer hover:scale-105 transition">
                <Play size={20} />
              </div>
            </div>

            <p className="text-sm line-clamp-4 text-[#99E0D7]">
              {data.todays_lesson.description}
            </p>
          </div>
        </Link>
      </div>

      <h1 className="text-4xl  px-6 mt-12 my-6 font-bold">Dodatkowe kursy</h1>
      <div className="px-6  flex flex-1 gap-8 pb-6">
        {data.additional_courses.map((el, index) => (
          <div
            key={index}
            className="w-full bg-[#D9D9D9] cursor-pointer  drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col pt-4 rounded-4xl bg-[url(/bg-sign.png)]  bg-cover bg-no-repeat  bg-left"
          >
            <div className="px-5 gap-4 flex flex-col">
              <div className="flex-1 flex justify-between  items-center ">
                <h1 className="text-2xl font-bold">{el.name}</h1>
                <div className=" aspect-square rounded-full p-3 bg-white cursor-pointer hover:scale-105 transition">
                  <Play size={20} />
                </div>
              </div>

              <div className="  min-h-20  flex justify-center items-center">
                <p className="text-sm opacity-70 font-semibold line-clamp-4">
                  {el.description}
                </p>
              </div>
              <div className="flex flex-1 justify-between opacity-70">
                <p className="text-sm font-bold">Postęp</p>
                <p className="text-sm font-bold">{el.current_percent}%</p>
              </div>
            </div>

            <div className="flex-1 rounded-b-4xl overflow-hidden  mt-2">
              <div
                className="h-7 bg-black rounded-tr-4xl"
                style={{ width: `${el.current_percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
