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
        <Tab key="Handouts" title="Handouts" />
        <Tab key="Challenges" title="Challenges" />
        <Tab key="Quizzes" title="Quizzes" />
        <Tab key="Notes" title="My Notes" />
        <Tab key="FAQ" title="FAQ" />
      </Tabs>
    </div>
  );
}
