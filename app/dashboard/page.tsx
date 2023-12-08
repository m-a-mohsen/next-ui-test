import { button as buttonStyles } from "@nextui-org/theme";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import TremorShell from "./components/charts/TremorMetrics";
import LeftPanel from "./components/ui/leftPanel";
import RightPanel from "./components/ui/rightPanel";

export default function Dashboard() {
  return (
    // <div className="absolute z-20 top-20 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
    <div className="container flex mx-auto max-w-7xl px-6 h-screen">
      <div id="leftPanel" className=" basis-1/5  ">
        <h2 className="text-xl text-center font-medium p-4">Achievements</h2>
        <LeftPanel />
      </div>
      <div id="centerPanel" className=" flex-grow ">
        <TremorShell />
      </div>
      <div id="rightPanel" className="flex-col basis-1/5 ">
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
        <h2 className="text-xl text-center font-medium p-4">Widgets</h2>

        <RightPanel />
      </div>
    </div>
  );
}
