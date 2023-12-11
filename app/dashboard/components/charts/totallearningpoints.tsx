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
export default function TotalLearningPoints() {
  const [circleValue, setCircleValue] = useState(0)
  setTimeout(() => { setCircleValue(55) }, 100)
  const learning = [
    { name: "Studying", value: 15530 },
    { name: "Challenges", value: 3751 },
    { name: "Quizzes", value: 8471 },

  ];
  const item = {
    category: "Website",
    stat: "27,526",
    data: learning,
  };

  const valueFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <Card>
      <CardBody>
        <Title>Learning </Title>
        <Flex justifyContent="between" alignItems="center">
          <Text>vs. target</Text>
          <BadgeDelta
            deltaType="moderateIncrease"
            isIncreasePositive={true}
            size="xs"
          >
            +9%
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
