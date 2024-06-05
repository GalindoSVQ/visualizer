import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { VisualizerPro } from "@/components/VisualizerPro";
import { Options } from "@/components/Options";

const defaultOptions = [
  {
    title: "Wells",
    Options: [{ label: "Prod 1" }, { label: "Prod 2" }, { label: "Prod 3" }],
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
        <ResizablePanel
          defaultSize={20}
          className="p-2 hidden md:inline-flex flex-col bg-gray-50 "
        >
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
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
        <ResizablePanel defaultSize={80} className="relative mx-8">
          <VisualizerPro />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
