import SubsurfaceViewer from "@webviz/subsurface-viewer/dist/SubsurfaceViewer";

import grid_points from "@/vtk-grid/grid_points.json";
import grid_polys from "@/vtk-grid/grid_polys.json";
import grid_scalar from "@/vtk-grid/grid_scalar.json";
import volveWells from "@/vtk-grid/volve_wells-demo.json";

export function VisualizerPro() {
  return (
    <SubsurfaceViewer
      bounds={[
        516041.7200975307, 6178162.917538266, 529933.9489226094,
        6184617.11714477,
      ]}
      id="grid-3d"
      layers={[
        {
          "@@type": "AxesLayer",
          ZIncreasingDownwards: false,
          bounds: [
            516041.7200975307, 6178162.917538266, -2447.356262207031,
            529933.9489226094, 6184617.11714477, -1955.6937561035156,
          ],
          id: "axes-layer2",
        },
        {
          "@@type": "Grid3DLayer",
          ZIncreasingDownwards: false,
          colorMapName: "Rainbow",
          gridLines: true,
          id: "Grid3DLayer",
          material: true,
          // pickable: true,
          pointsData: grid_points,
          polysData: grid_polys,
          // verticalScale: 20,
          propertiesData: grid_scalar,
        },
        {
          "@@type": "WellsLayer",
          ZIncreasingDownwards: false,
          data: "@@#resources.wellsData",
          id: "volve-wells",
        },
      ]}
      resources={{
        wellsData: volveWells,
      }}
      triggerHome={0}
      views={{
        layout: [1, 1],
        viewports: [
          {
            id: "view_1",
            show3D: true,
          },
        ],
      }}
    />
  );
}
