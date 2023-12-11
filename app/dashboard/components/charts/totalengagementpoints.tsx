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
export default function TotalEngagementPoints() {
      const [circleValue, setCircleValue] = useState(0);
      setTimeout(() => {
        setCircleValue(50);
      }, 200);
  const engagement = [
    { name: "Slack", value: 1220 },
    { name: "PR reviews", value: 4057 },
    { name: "Questions", value: 2970 },
  ];
  const item = {
    category: "Website",
    stat: "8,947",
    data: engagement,
  };

  const valueFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <Card>
      <CardBody>
        <Title>Engagement</Title>
        <Flex justifyContent="between" alignItems="center">
          <Text>vs. target</Text>
          <BadgeDelta
            deltaType="unchanged"
            isIncreasePositive={false}
            size="xs"
          >
            0%
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
          value={circleValue}
          radius={80}
          strokeWidth={10}
          showAnimation
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
