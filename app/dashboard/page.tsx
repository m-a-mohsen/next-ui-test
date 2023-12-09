import { button as buttonStyles } from "@nextui-org/theme";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import TremorShell from "./components/charts/TremorMetrics";
import LeftPanel from "./components/ui/leftPanel";
import RightPanel from "./components/ui/rightPanel";
import LearningPoints from "./components/charts/learningpoints";
import EngagementPoints from "./components/charts/engagementpoints";
import MotivationPoints from "./components/charts/motivationpoints";
import PointsProgress from "./components/charts/pointsprogress";

export default function Dashboard() {
  return (
    // <div className="absolute z-20 top-20 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
    <div className="container mx-auto flex max-w-7xl px-6 border-2">
      <div id="leftPanel" className=" basis-1/5  ">
        <h2 className="p-4 text-center text-xl font-medium">Achievements</h2>
        <LeftPanel />
      </div>
      <div id="centerPanel" className="flex-grow">
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
      <div id="rightPanel" className="basis-1/5 flex-col ">
        <h2 className="p-4 text-center text-xl font-medium">Widgets</h2>
        <RightPanel />
        {/* <LogoutLink
              className={buttonStyles({
                color: "danger",
                radius: "full",
                variant: "ghost",
                size: "sm",
              })}
            >
              Sign out
            </LogoutLink> */}
      </div>
    </div>
  );
}
