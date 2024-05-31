import SubsurfaceViewer from "@webviz/subsurface-viewer/dist/SubsurfaceViewer";
import pointsDataJson from "@/vtk-grid/Simgrid_points.json";
import polysDataJson from "@/vtk-grid/Simgrid_polys.json";
import propertiesDataJson from "@/vtk-grid/Simgrid_scalar.json";
// import simgrid8xIJonly_pointsJson from "@/vtk-grid/Simgrid8xIJonly_points.json";
// import simgrid8xIJonly_polysJson from "@/vtk-grid/Simgrid8xIJonly_polys.json";
// import simgrid8xIJonly_scalarJson from "@/vtk-grid/Simgrid8xIJonly_scalar.json";

export function VisualizerPro() {
  return (
    <SubsurfaceViewer
      bounds={[456150, 5925800, 467400, 5939500]}
      id="grid-3d"
      layers={[
        {
          "@@type": "AxesLayer",
          ZIncreasingDownwards: false,
          bounds: [453150, 5925800, -2000, 469400, 5939500, 0],
          id: "axes-layer2",
        },
        {
          "@@type": "Grid3DLayer",
          ZIncreasingDownwards: false,
          colorMapName: "Rainbow",
          gridLines: true,
          id: "Grid3DLayer",
          material: true,
          pickable: true,
          pointsData: pointsDataJson,
          polysData: polysDataJson,
          propertiesData: propertiesDataJson,
        },
      ]}
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
