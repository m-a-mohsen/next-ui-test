"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Link,
  Card,
  CardBody,
} from "@nextui-org/react";

export default function LeftPanel() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const myAwards = (
    <ol className="list-disc">
      <li>Top performer week 4 </li>
      <Link href="https://nextui.org"> iam a link</Link>
      <br />
      <Card isHoverable isPressable>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
      <Button> iam a button</Button>
      <li>Top performer week 4 </li>
    </ol>
  );

  return (
    <Accordion variant="splitted" selectionMode="multiple" isCompact>
      <AccordionItem
        key="1"
        aria-label="My Awards"
        title="My Awards"
        classNames={{ content: "list-disc" }}
      >
        {myAwards}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Leader board" title="Leader Board">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
