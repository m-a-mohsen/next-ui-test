"use client";
import { AreaChart, Title } from "@tremor/react";
import { Card, CardBody } from "@nextui-org/react";
const chartdata = [
  {
    date: "week 1",
    Learning: 2890,
    Motivation: 2338,
    Engagement: 3800,
  },
  {
    date: "week 2",
    Learning: 2756,
    Motivation: 2103,
    Engagement: 3567,
  },
  {
    date: "week 3",
    Learning: 3322,
    Motivation: 2194,
    Engagement: 3244,
  },
  {
    date: "week 4",
    Learning: 3470,
    Motivation: 2108,
    Engagement: 4522,
  },
  {
    date: "week 5",
    Learning: 3475,
    Motivation: 1812,
    Engagement: 4322,
  },
  {
    date: "week 6",
    Learning: 3129,
    Motivation: 1726,
    Engagement: 3456,
  },
];

const valueFormatter = function (number: number) {
  return "pt " + new Intl.NumberFormat("us").format(number).toString();
};

export default function PointsProgress() {
  return (
    <Card>
      <CardBody>
        <Title>Preformance over time (Points)</Title>
        <AreaChart
          className="mt-4 h-72"
          data={chartdata}
          index="date"
          categories={["Learning", "Engagement", "Motivation"]}
          colors={["cyan", "indigo", "orange"]}
          valueFormatter={valueFormatter}
        />
      </CardBody>
    </Card>
  );
}
