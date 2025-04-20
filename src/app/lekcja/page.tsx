import { Status } from "@/components/lekcja/status";
import { TreesAndDucks } from "@/components/lekcja/treesAndDuck";
import { Shrimp } from "lucide-react";

export default function PAge() {
  return (
    <div className="flex-1  w-full bg-[#A5C7BF] h-full ">
      <div className="flex-1 mx-6 flex-col relative flex  h-full items-center">
<Status current={0} size={5}/>
        <div className=" w-[900px] h-fit justify-center flex flex-col items-center ">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Sezamie, otwórz się! Bezpieczeństwo zaczyna się od Ciebie
          </h2>

          <p className="text-xl  text-center opacity-70">
            W opowieści o Ali Babie hasło „Sezamie, otwórz się!” otworzyło
            skarbiec pełen skarbów. Dziś hasła są kluczami do naszych cyfrowych
            skarbów: e-maili, kont bankowych i systemów AA. <br /> <br />
            Ale wyobraź sobie, że Twoim „kluczem” byłoby coś tak prostego jak
            „password123”. Komputer hakera mógłby zgadnąć to w milisekundy!
            Silne hasła to Twoja najlepsza linia obrony — upewnij się,
            <br /> że Twoje nie jest najsłabszym ogniwem.
          </p>

          <div className="rounded-full w-64 h-10 bg-[#024840] flex justify-center items-center mt-10  hover:scale-105 transition cursor-pointer">
            <p className="text-sm text-white  text-center">zaczynajmy</p>
          </div>
        </div>

<TreesAndDucks duck={true}/>
      </div>
    </div>
  );
}
