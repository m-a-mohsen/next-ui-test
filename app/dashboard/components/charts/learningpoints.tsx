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
export default function LearningPoints() {
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
          value={90}
          radius={80}
          strokeWidth={10}
          tooltip="radius: 50, strokeWidth: 8"
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
