import { button as buttonStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import TremorShell from "./components/charts/TremorMetrics";
import LeftPanel from "./components/ui/leftPanel";
import RightPanel from "./components/ui/rightPanel";
import LearningPoints from "./components/charts/learningpoints";
import EngagementPoints from "./components/charts/engagementpoints";
import MotivationPoints from "./components/charts/motivationpoints";
import PointsProgress from "./components/charts/pointsprogress";
import UserNavbar from "./components/ui/usernavbar";
import Tabs from "./components/ui/tabs";
import TabsNav from "./components/ui/tabs";

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
        <div className="flex justify-center mb-4">
          <TabsNav />
        </div>
        {/* <TremorShell /> */}
        <div className="grid gap-2 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <LearningPoints />
          <EngagementPoints />
          <MotivationPoints />
        </div>
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
