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
export default function WeeklyLearningPoints() {
  const [circleValue, setCircleValue] = useState(0)
  setTimeout(() => { setCircleValue(90) }, 100)
  const learning = [
    { name: "Studying", value: 1530 },
    { name: "Challenges", value: 751 },
    { name: "Quizzes", value: 471 },

  ];
  const item = {
    category: "Website",
    stat: "2,752",
    data: learning,
  };

  const valueFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <Card>
      <CardBody>
        <Title>Learning </Title>
        <Flex justifyContent="between" alignItems="center">
          <Text>from last week</Text>
          <BadgeDelta
            deltaType="increase"
            isIncreasePositive={true}
            size="xs"
          >
            +12%
          </BadgeDelta>
              </Flex>
              <br/>
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
          value={circleValue}
          radius={80}
          strokeWidth={10}
          showAnimation
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            
            flexDirection="col"
          >
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
