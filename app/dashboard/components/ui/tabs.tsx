"use client";
import { Tabs, Tab } from "@nextui-org/react";
export default function TabsNav() {
  const variants = ["solid", "underlined", "bordered", "light"];

  return (
    <div className="flex gap-4">
      <Tabs
        size="lg"
        variant="underlined"
        color="primary"
        aria-label="Tabs variants"
        // selectedKey="Weekly"
      >
        <Tab key="Total" title="Total" />
        <Tab key="Weekly" title="Weekly" />
        <Tab key="Monthly" title="Monthly" />
      </Tabs>
    </div>
  );
}
