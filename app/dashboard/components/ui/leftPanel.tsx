"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function LeftPanel() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem key="1" aria-label="achievements" title="Achievements">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Leader board" title="Leader Board">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
