"use client";
import {
  Metric,
  Text,
  Title,
  BarList,
  Flex,
  ProgressCircle,
  BadgeDelta,
} from "@tremor/react";
import { Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
export default function MonthlyMotivationPoints() {
    const [circleValue, setCircleValue] = useState(0);
    setTimeout(() => {
      setCircleValue(90);
    }, 300);
  const motivation = [
    { name: "Attendance", value: 1130 },
    { name: "Research", value: 2051 },
    { name: "Vaping", value: 404 },
  ];
  const item = {
    category: "Motivation",
    stat: "3,585",
    data: motivation,
  };

  const valueFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <Card>
      <CardBody>
        <Title>Motivation</Title>
        <Flex justifyContent="between" alignItems="center">
          <Text>from last month</Text>
          <BadgeDelta
            deltaType="increase"
            isIncreasePositive={true}
            size="xs"
          >
            13%
          </BadgeDelta>
        </Flex>
        <br />
        {/* <Flex
          justifyContent="start"
          alignItems="baseline"
          className="space-x-2"
          flexDirection="col"
        >
          <Metric>{item.stat}</Metric>
          <Text>Total views</Text>
        </Flex> */}

        <ProgressCircle value={circleValue} radius={80} strokeWidth={10}>
          <Flex justifyContent="center" alignItems="center" flexDirection="col">
            <Metric>{item.stat}</Metric>
            <Text>Total points</Text>
          </Flex>
        </ProgressCircle>
        <Flex className="mt-6">
          <Text>Activities</Text>
          <Text className="text-right">Points</Text>
        </Flex>
        <BarList
          data={item.data}
          valueFormatter={valueFormatter}
          className="mt-2"
        />
      </CardBody>
    </Card>
  );
}
