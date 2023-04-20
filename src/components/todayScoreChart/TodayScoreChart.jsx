import React, { useEffect, useState } from 'react';
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';

const TodayScoreChart = ({ score }) => {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const COLORS = ['#ff0000', 'rgba(251, 251, 251, 1)'];

  const CustomLabel = ({ viewBox, title, label1, label2, value }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx - 75}
          y={cy - 100}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontFamily="Roboto"
          fontSize="15px"
          fill="#20253A"
          fontWeight="600"

        >
          {title}
        </text>
        <text
          x={cx}
          y={cy + 5}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontFamily="Roboto"
          fontSize="16px"
          fill="#74798C"
          fontWeight="500"
        >
          {label1}
        </text>
        <text
          x={cx}
          y={cy + 25}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontFamily="Roboto"
          fontSize="16px"
          fill="#74798C"
          fontWeight="500"
        >
          {label2}
        </text>
        <text
          x={cx}
          y={cy - 20}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontFamily="Roboto"
          fill="#282D30"
          fontSize="26px"
          fontWeight="700"
        >
          {value}
        </text>
      </g>
    );
  };

  useEffect(() => {
    console.log(typeof score);
    if (!isNaN(score)) {
      let chartData = [
        { name: 'todayScore', value: score * 100 },
        { name: 'remainingGoal', value: (1 - score) * 100 },
      ];
      setDataArray(chartData);
      setIsLoading(false);
    }
  }, [score]);

  //JSX
  if (isLoading) return <p>En cours de chargement</p>;

  if (!isLoading)
    return (
      <div
        className="todayScoreChart-container"
        style={{
          width: '258px',
          height: '263px',
          backgroundColor: 'rgba(251,251,251)',
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dataArray}
              dataKey="value"
              innerRadius={0}
              outerRadius={85}
              isAnimationActive={false}
              fill="#ffffff"
            ></Pie>
            <Pie
              data={dataArray}
              dataKey="value"
              isAnimationActive={true}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={95}
              startAngle={90}
              endAngle={450}
              cornerRadius={10}
            >
              {dataArray.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="rgba(251,251,251)"
                />
              ))}
              <Label
                content={
                  <CustomLabel
                    title="Score"
                    label1="de votre"
                    label2="objectif"
                    value={`${score * 100}%`}
                  />
                }
                position="center"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
};

export default TodayScoreChart;
