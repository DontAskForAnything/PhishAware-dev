import Image from "next/image";

const dane = [
  {
    title: "Wyzwania",
    img_url: "arm.png",
    achivements: [
      {
        title: "Ukończ",
        middle_text: "5",
        bottom_text: "wyzwań",
        achived: true,
      },
      {
        title: "Ukończ",
        middle_text: "10",
        bottom_text: "wyzwań",
        achived: true,
      },
      {
        title: "Ukończ",
        middle_text: "20",
        bottom_text: "wyzwań",
        achived: false,
      },
      {
        title: "Ukończ",
        middle_text: "25",
        bottom_text: "wyzwań",
        achived: false,
      },
      // {title:"Ukończ", middle_text:"30", bottom_text:"wyzwań", achived: false}
    ],
  },
  {
    title: "Las",
    img_url: "tree.png",

    achivements: [
      {
        title: "Rozwiń swój las do ",
        middle_text: "2 000",
        bottom_text: "hektarów",
        achived: true,
      },
      {
        title: "Rozwiń swój las do ",
        middle_text: "5 000",
        bottom_text: "hektarów",
        achived: true,
      },
      {
        title: "Rozwiń swój las do ",
        middle_text: "9 000",
        bottom_text: "hektarów",
        achived: true,
      },
      {
        title: "Rozwiń swój las do ",
        middle_text: "20 000",
        bottom_text: "hektarów",
        achived: true,
      },
      {
        title: "Rozwiń swój las do ",
        middle_text: "50 000",
        bottom_text: "hektarów",
        achived: false,
      },
    ],
  },
  {
    title: "Miejsce",
    img_url: "crown.png",

    achivements: [
      {
        title: "Posiadaj największy las przez",
        middle_text: "1",
        bottom_text: "tydzień",
        achived: true,
      },
      {
        title: "Posiadaj największy las przez",
        middle_text: "2",
        bottom_text: "tygodnie",
        achived: false,
      },
      // {title:"Posiadaj największy las przez", middle_text:"3", bottom_text:"tygodnie", achived: false},
      // {title:"Posiadaj największy las przez", middle_text:"4", bottom_text:"tygodnie", achived: false},
      // {title:"Posiadaj największy las przez", middle_text:"5", bottom_text:"tygodni", achived: false}
    ],
  },
  {
    title: "Dodatkowe kursy",
    img_url: "computer.png",

    achivements: [
      {
        title: "Ukończ",
        middle_text: "1",
        bottom_text: "dodatkowy kurs",
        achived: true,
      },
      {
        title: "Ukończ",
        middle_text: "2",
        bottom_text: "dodatkowe kury",
        achived: true,
      },
      {
        title: "Ukończ",
        middle_text: "5",
        bottom_text: "dodatkowych kursów",
        achived: true,
      },
      {
        title: "Ukończ",
        middle_text: "10",
        bottom_text: "dodatkowych kursów",
        achived: false,
      },
      // {title:"Ukończ", middle_text:"25", bottom_text:"dodatkowych kursów", achived: true},
    ],
  },
];
function Page() {
  return (
    <div className=" p-6">
      <h1 className="text-7xl font-bold">Osiągnięcia</h1>
      {dane.map((el_p, index) => (
        <div key={index} className="mt-8">
          <h2 className="text-3xl">{el_p.title}</h2>

          <div className="overflow-x-auto  flex gap-6 py-4 pl-2">
            {el_p.achivements.map((el, idx) => (
              <div
                key={idx}
                className={`hover:scale-105 transition  rounded-3xl ${el.achived == false ? ` border-2  border-dotted opacity-50` : `bg-[#D9D9D9]`} w-72 h-44 flex justify-between flex-col pt-4 px-5 shrink-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
              >
                <p className="font-extrabold">{el.title}</p>
                <div
                  className={`${
                    el_p.img_url === "tree.png" ? "pb-0" : "pb-4"
                  } flex w-full justify-between gap-4`}
                >
                  <Image
                    src={`/${el_p.img_url}`}
                    alt="Achievement Image"
                    className={`${el.achived == false && ` grayscale `}`}
                    width={120}
                    height={100}
                    draggable={false}
                  />
                  <div className="w-full flex justify-center flex-col items-center">
                    <p className="font-extrabold text-2xl">{el.middle_text}</p>
                    <p className="text-xs">{el.bottom_text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
