import LeftPanel from "./components/ui/leftPanel";
import RightPanel from "./components/ui/rightPanel";
import UserNavbar from "./components/ui/usernavbar";
import TabsNav from "./components/ui/tabs";
import Test from "./mdx/Test.mdx";

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
        <div className="mb-4 flex justify-center">
          <TabsNav />
        </div>

        <div className="flex flex-col px-4">
              <div className="prose dark:prose-invert mx-auto  ">
            <Test />
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
