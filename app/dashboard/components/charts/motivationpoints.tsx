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
export default function MotivationPoints() {
  const motivation = [
    { name: "Attendance", value: 130 },
    { name: "Research", value: 51 },
    { name: "Vaping", value: 100 },
  ];
  const item = {
    category: "Motivation",
    stat: "281",
    data: motivation,
  };

  const valueFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <Card>
      <CardBody>
        <Title>Motivation</Title>
        <Flex justifyContent="between" alignItems="center">
          <Text>from last week</Text>
          <BadgeDelta
            deltaType="moderateDecrease"
            isIncreasePositive={true}
            size="xs"
          >
            -3%
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

        <ProgressCircle
          value={10}
          radius={80}
          strokeWidth={10}
          tooltip="radius: 50, strokeWidth: 8"
        >
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
