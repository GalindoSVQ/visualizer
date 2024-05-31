import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { VisualizerPro } from "@/components/VisualizerPro";
import { Options } from "@/components/Options";
import { Charts } from "@/components/Charts";

const defaultOptions = [
  {
    title: "Wells",
    Options: [
      { label: "Prod 1" },
      { label: "Prod 2" },
      { label: "Prod 3" },
      { label: "Prod 4" },
      { label: "Prod 5" },
      { label: "Prod 6" },
      { label: "Prod 7" },
      { label: "Prod 8" },
      { label: "Prod 9" },
      { label: "Prod 10" },
      { label: "Prod 11" },
      { label: "Prod 12" },
      { label: "Prod 13" },
      { label: "Prod 14" },
      { label: "Prod 15" },
      { label: "Prod 16" },
      { label: "Prod 17" },
      { label: "Prod 18" },
      { label: "Prod 19" },
      { label: "Prod 20" },
    ],
  },
  {
    title: "Properties",
    Options: [
      { label: "Poro" },
      { label: "PermX" },
      { label: "PermY" },
      { label: "PermZ" },
      { label: "NTG" },
    ],
  },
  {
    title: "Filters",
    Options: [
      { label: "Filter 1" },
      { label: "Filter 2" },
      { label: "Filter 3" },
      { label: "Filter 4" },
      { label: "Filter 5" },
    ],
  },
];

function App() {
  return (
    <div className="flex flex-col flex-grow">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20} className="p-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Proteus Visualizer
          </h1>

          {defaultOptions.map((option) => (
            <Options
              key={option.title}
              title={option.title}
              options={option.Options}
            />
          ))}
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel className="relative m-2" defaultSize={80}>
              <VisualizerPro />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={20}>
              <div className="flex h-full items-center justify-evenly m-4">
                <Charts title={"FOPR"} />
                <Charts title={"FWPR"} />
                <Charts title={"GPR"} />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
