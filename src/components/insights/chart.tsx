"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface PentagonChartProps {
  // eslint-disable-next-line
  data: { subject: string; score: number; benchmark: number }[] | any[];
}

const PentagonChart: React.FC<PentagonChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" data={data}>
        <PolarGrid
          polarRadius={[
            10 * 2,
            20 * 2,
            30 * 2,
            40 * 2,
            50 * 2,
            60 * 2,
            70 * 2,
            80 * 2,
            90 * 2,
            100 * 2,
          ]}
        />
        <PolarRadiusAxis angle={90} fontSize={10} tickCount={6} />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
          isAnimationActive={false}
        />
        <Radar
          name="Goal"
          dataKey="B"
          stroke="#8884d8"
          fill="none"
          fillOpacity={0.6}
          isAnimationActive={false}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PentagonChart;
