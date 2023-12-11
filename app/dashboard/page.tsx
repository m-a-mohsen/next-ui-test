"use client";
import { button as buttonStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import LeftPanel from "./components/ui/leftPanel";
import RightPanel from "./components/ui/rightPanel";
import LearningPoints from "./components/charts/totallearningpoints";
import EngagementPoints from "./components/charts/totalengagementpoints";
import MotivationPoints from "./components/charts/totalmotivationpoints";
import PointsProgress from "./components/charts/pointsprogress";
import UserNavbar from "./components/ui/usernavbar";
// import Tabs from "./components/ui/tabs";
import TabsNav from "./components/ui/tabs";
import { Tabs, Tab } from "@nextui-org/react";
import TotalLearningPoints from "./components/charts/totallearningpoints";
import TotalEngagementPoints from "./components/charts/totalengagementpoints";
import TotalMotivationPoints from "./components/charts/totalmotivationpoints";
import WeeklyEngagementPoints from "./components/charts/weeklyengagementpoints";
import WeeklyLearningPoints from "./components/charts/weeklylearningpoints";
import WeeklyMotivationPoints from "./components/charts/weeklymotivationpoints";
import MonthlyEngagementPoints from "./components/charts/monthlyengagementpoints";
import MonthlyLearningPoints from "./components/charts/monthlylearningpoints";
import MonthlyMotivationPoints from "./components/charts/monthlymotivationpoints";
export default function Dashboard() {
  return (
    // <div className="absolute z-20 top-20 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
    <div className="container mx-auto flex max-w-7xl px-6 ">
      <div id="leftPanel" className=" basis-1/5 ">
        <h2 className="mt-1 p-4 text-center">Achievements</h2>
        <LeftPanel />
      </div>
      <div id="centerPanel" className="flex-grow">
        <UserNavbar />
        <div className="mb-4 flex flex-col justify-center">
          <Tabs
            fullWidth
            size="md"
            variant="underlined"
            color="primary"
            aria-label="Tabs variants"
            // selectedKey="Weekly"
          >
            <Tab key="Weekly" title="Weekly">
              <div className="grid gap-2 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <WeeklyLearningPoints />
                <WeeklyEngagementPoints />
                <WeeklyMotivationPoints />
              </div>
            </Tab>
            <Tab key="Monthly" title="Monthly">
              <div className="grid gap-2 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <MonthlyLearningPoints />
                <MonthlyEngagementPoints />
                <MonthlyMotivationPoints />
              </div>
            </Tab>
            <Tab key="Total" title="Total">
              <div className="grid gap-2 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <TotalLearningPoints />
                <TotalEngagementPoints />
                <TotalMotivationPoints />
              </div>
            </Tab>
          </Tabs>
        </div>
        {/* <TremorShell /> */}

        <div className="my-10 px-4">
          <PointsProgress />
        </div>
      </div>
      <div id="rightPanel" className="basis-1/5 ">
        <h2 className="p-4 text-center ">Widgets</h2>
        <RightPanel />
      </div>
    </div>
  );
}
