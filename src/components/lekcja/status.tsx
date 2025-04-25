import { Shrimp } from "lucide-react";
import Link from "next/link";

export const Status = ({
  current,
  size,
}: {
  current: number;
  size: number;
}) => (
  <div className="w-full flex px-8 pt-8 justify-between  gap-8">
    <div className="flex flex-row gap-8 w-3xs">
      <Shrimp size={33} color="#024840" />
      <h1 className="text-2xl  text-[#024840] font-extrabold ">PhishAware</h1>
    </div>

    <div className="relative h-14 flex flex-row justify-between items-center max-w-[400px] w-full">
      {Array.from({ length: size }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full h-6 w-6  border-2 border-[#A5C7BF] z-20
            ${index <= current - 1 ? "bg-[#10524A] outline-[#10524A]" : "bg-[#7EA4A0] outline-[#7EA4A0]"}
            outline-4 `}
        ></div>
      ))}

      <div
        className={`bg-[#10524A] h-3  absolute top-1/2 transform -translate-y-1/2 z-10`}
        style={{
          width: `${((current - 1) / (size - 1)) * 100}%`,
        }}
      ></div>
      <div className="bg-[#7EA4A0] h-3 w-full absolute top-1/2 transform -translate-y-1/2"></div>
    </div>

    <Link
      className={`text-sm w-3xs text-right  text-black  font-extrabold ${current == size ? " opacity-0 cursor-default" : "opacity-30"}`}
      href={"/wyzwania"}
    >
      opuść kurs
    </Link>
  </div>
);
