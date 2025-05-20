
const dane = {
    wyniki: [{ name: "Bezpieczeństwo urządzeń", value: "72%" },
    { name: "Hasła", value: "35%" },
    { name: "Złośliwe oprogramowanie", value: "58%" },
    { name: "Praca zdalna", value: "82%" },
    { name: "Inżynieria społeczna", value: "78%" }]
    ,
    summary: [{ name: "Średni wynik", value: "60%", color: "bg-[#F6B137]" },
    { name: "Miesięczny wskaźnik uczestnictwa", value: "96%", color: "bg-[#378075]" },
    { name: "Łączna liczba ukończonych wyzwań", value: "341" }],
    najbardziej_aktywni: [{ name: "Michał Jasiński", value: "240 000 hektarów" },
    { name: "Liwia Cieślak", value: "180 000 hektarów" },
    { name: "Grzegorz Baranowski", value: "69 000 hektarów" },
    { name: "Franek Trytutka", value: "42 000 hektarów" }]
    ,
    najlepszy_sredni_wynik: [{ name: "Liwia Cieślak", value: "92%" },
    { name: "Jan Tułacz", value: "89%" },
    { name: "Grzegorz Baranowski", value: "88%" },
    { name: "Ola Abrantowicz", value: "80%" }]
}

export default function Analiza() {
    return (
        <div className=" p-6 gap-8 flex flex-col">
            <h1 className="text-7xl font-bold ">Analiza</h1>

            {/* Top stats panel */}
            <div className="w-full   bg-[#D9D9D9]  p-6  gap-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl bg-[url(/bg-sign-3.png)]  bg-cover bg-no-repeat  bg-left"
            >
                {dane.summary.map((item, index) => (
                <div  key={index} className="flex justify-between items-center ">
                    <div className="font-medium ">{item.name}</div>
                    <div className={`${item.color ? `${item.color} text-white` : 'text-black font-semibold'}  text-sm rounded-lg px-4 py-2 w-32 text-center`}>{item.value}</div>
                </div>))}

            </div>

            {/* Middle chart panel */}
            <div className="w-full   bg-[#D9D9D9]  p-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl ">
                <div className="flex justify-between">
                    {/* Device security */}
                    {dane.wyniki.map((item, index) => (
                        <div key={index} className="w-1/5 flex flex-col items-center">
                            <div className="h-80  w-[70px] flex flex-col-reverse bg-[url(/lines.png)]   rounded-t-2xl">
                              
                                {/* Bar */}
                                <div className={` text-white  text-center flex items-end justify-center
                                
                                      py-2 rounded-t-2xl ${parseFloat(item.value) > 70 ? "bg-[#378075]" : parseFloat(item.value) > 50 ? "bg-[#F6B137]" :
                                        "bg-[#E2615E]" }`} style={{ height: item.value }}>{item.value}</div>
                            </div>
                            <div className="text-center mt-2 font-semibold text-sm">
                                <div>{item.name}</div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>

            {/* Bottom stats panels */}
            <div className="flex gap-6">
                {/* Most active people */}
                <div className="bg-[#D9D9D9] w-1/2 p-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col rounded-4xl ">
                    <h3 className="text-center font-bold  mb-4">Najbardziej aktywne osoby</h3>
                    {dane.najbardziej_aktywni.map((item, index) => (
                        <div key={index} className="flex justify-between mb-4">
                            <div>{item.name}</div>
                            <div>{item.value}</div>
                        </div>
                    ))}
                </div>

                {/* Best average results */}
                <div className="  bg-[#D9D9D9] w-1/2  p-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl ">
                    <h3 className="text-center font-bold mb-4">Najlepszy średni wynik</h3>
                   {dane.najlepszy_sredni_wynik.map((item, index) => (
                        <div key={index} className="flex justify-between mb-4">
                            <div>{item.name}</div>
                            <div>{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}