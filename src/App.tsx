import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Visualizer } from "./components/visualizer";
import { Options } from "./components/Options";
import { Charts } from "./components/Charts";

const defaultOptions = [
  {
    title: "Cells",
    Options: [
      { label: "Cell 1" },
      { label: "Cell 2" },
      { label: "Cell 3" },
      { label: "Cell 4" },
      { label: "Cell 5" },
    ],
  },
  {
    title: "Properties",
    Options: [
      { label: "Property 1" },
      { label: "Property 2" },
      { label: "Property 3" },
      { label: "Property 4" },
      { label: "Property 5" },
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
              <Visualizer />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={20}>
              <div className="flex h-full items-center justify-evenly m-4">
                <Charts />
                <Charts />
                <Charts />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
