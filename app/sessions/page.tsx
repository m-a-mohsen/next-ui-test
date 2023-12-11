"use client";
import LeftPanel from "./components/ui/leftPanel";
import RightPanel from "./components/ui/rightPanel";
import UserNavbar from "./components/ui/usernavbar";
import Handout from "./mdx/handout.mdx";
import Challenges from "./mdx/challenges.mdx";
import FAQ from "./mdx/expressfaq.mdx";
import Quiz from "./mdx/quiz.mdx";
import Notes from "./mdx/notes.mdx";
import { Badge, Tab, Tabs } from "@nextui-org/react";

export default function Sessions() {
  return (
    // <div className="absolute z-20 top-20 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
    <div className="container mx-auto flex max-w-7xl px-6 ">
      <div id="leftPanel" className=" basis-1/5 ">
        <h2 className="mt-1 p-4 text-center">My Sessions</h2>
        <LeftPanel />
      </div>
      <div id="centerPanel" className="flex-grow">
        <UserNavbar />
        <div className="mb-4 flex flex-col justify-center">
          <Tabs
            fullWidth
            size="lg"
            variant="underlined"
            color="primary"
            aria-label="Tabs variants"
            // selectedKey="Weekly"
          >
            <Tab key="Handouts" title="Handout">
              <div className="prose mx-auto dark:prose-invert prose-a:text-primary ">
                <Handout />
              </div>
            </Tab>
            <Tab
              key="Challenges"
              title={
                <Badge
                  content="new"
                  color="secondary"
                  size="sm"
                  placement="top-right"
                  isDot
                >
                  <span>Challenges&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </Badge>
              }
            >
              <div className="prose mx-auto dark:prose-invert  ">
                <Challenges />
              </div>
            </Tab>
            <Tab key="Quizzes" title="Quizzes">
              <div className="prose mx-auto dark:prose-invert prose-h3:underline  prose-p:text-secondary prose-a:text-primary">
                <Quiz />
              </div>
            </Tab>
            <Tab key="Notes" title="My Notes">
              <div className="prose mx-auto dark:prose-invert prose-a:text-primary ">
                <Notes />
              </div>
            </Tab>
            <Tab key="FAQ" title="FAQ">
              <div className="prose mx-auto dark:prose-invert  ">
                <FAQ />
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className="flex flex-col px-4">
          <div className="prose mx-auto dark:prose-invert  ">
            {/* <Handout />
            <Challenges /> */}
          </div>
          {/* <Test className="prose prose-img:rounded-xl prose-headings:text-blue-600 prose-headings:font-2xl prose-a:text-blue-600 prose-headings:m-0" /> */}
        </div>
      </div>
      <div id="rightPanel" className="basis-1/5 ">
        <h2 className="p-4 text-center ">Widgets</h2>
        <RightPanel />
      </div>
    </div>
  );
}
