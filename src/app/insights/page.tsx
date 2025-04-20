import PentagonChart from "@/components/insights/chart";
import SecurityRadarChart from "@/components/insights/chart";
import { ArrowDown, ArrowUp } from "lucide-react";
import { map, number } from "zod";

const data = [
  { name: "average_score", title: "80%", change: "10.8%", direction: "up" },
  { name: "average_level", title: "Beginner" },
  {
    name: "monthly_participation_rate",
    title: "72%",
    change: "2%",
    direction: "down",
  },
  { name: "total_challenges_completed", title: "1920", change: "20" },
];
const pentagonData = [
  {
    subject: "Security Awareness",
    A: 72,
    B: 80,
    fullMark: 100,
  },
  {
    subject: "Passwords",
    A: 98,
    B: 80,
    fullMark: 100,
  },
  {
    subject: "Social Engineering",
    A: 86,
    B: 80,
    fullMark: 100,
  },
  {
    subject: "Working Remotely",
    A: 99,
    B: 80,
    fullMark: 100,
  },
  {
    subject: "Device Security",
    A: 85,
    B: 80,
    fullMark: 100,
  },
];
function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="pb-8 text-5xl">Insights</h1>

      {/* <div className="rounded-lg min-h-28  flex items-center   bg-[#E5EEE4] flex-row">
          <div className="flex flex-col items-center justify-center h-full w-1/3 bg-emerald-500 rounded-l-lg">
            <h1 className="text-neutral-200 text-2xl">80%</h1>
          </div>
          <div className="flex flex-col items-center r h-full w-2/3 justify-center">
            <span className="flex text-lg text-gray-500  uppercase font-semibold text-center  ">
              AVERAGE SCORE
            </span>
          </div>
        </div> */}

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <div className="card bg-[#E5EEE4] shadow" key={item.name}>
            <div className="card-body gap-2">
              <div className="flex items-start justify-between flex-col gap-2 text-sm">
                <p className="text-base-content/80 font-medium uppercase">
                  {item.name.split("_").join(" ")}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-2xl font-semibold">{item.title}</p>
                  {item.change && (
                    <div
                      className={`badge badge-soft  ${item.direction === "down" ? "badge-error" : "badge-success"} badge-sm gap-0.5 px-1 font-medium text-base`}
                    >
                      {item.direction === "up" && <ArrowUp size={16} />}
                      {item.direction === "down" && <ArrowDown size={16} />}
                      {item.change}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="card bg-[#E5EEE4] shadow w-full min-h-[500px] col-span-4 max-h-[500px]">
          <PentagonChart data={pentagonData} />
        </div>
      </div>
    </div>
  );
}

export default Page;
