import { ShieldUser, User } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#378075] gap-32">
      <Link
        href={"/user"}
        className="w-48 h-48 rounded-2xl bg-[#87B4AA]   hover:scale-105 transition cursor-pointer text-white flex-col flex justify-center items-center "
      >
        <User size={64} />
        <h1 className="text-xl font-semibold px-7 pt-7">Użytkownik</h1>
      </Link>

      <Link
        href={"/admin"}
        className="w-48 h-48 rounded-2xl bg-[#87B4AA]   hover:scale-105 transition cursor-pointer text-white flex-col flex justify-center items-center "
      >
        <ShieldUser size={64} />
        <h1 className="text-xl font-semibold px-7 pt-7">Administrator</h1>
      </Link>
    </div>
  );
}
