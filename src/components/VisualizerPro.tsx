import SubsurfaceViewer from "@webviz/subsurface-viewer/dist/SubsurfaceViewer";

// import grid_points from "@/vtk-grid/rubiales/grid_points.json";
// import grid_polys from "@/vtk-grid/rubiales/grid_polys.json";
// import grid_scalar from "@/vtk-grid/rubiales/grid_scalar.json";

export function VisualizerPro() {
  return (
    <SubsurfaceViewer
      bounds={[
        3095340.0209960938, 2946459.51171875, 3196225.84765625,
        3034221.979003906,
      ]}
      id="grid-3d"
      layers={[
        {
          "@@type": "AxesLayer",
          ZIncreasingDownwards: false,
          bounds: [
            3095340.0209960938, 2946459.51171875, -2615.7132873535156,
            3196225.84765625, 3034221.979003906, -1758.6568603515625,
          ],
          id: "axes-layer2",
        },
        {
          "@@type": "Grid3DLayer",
          ZIncreasingDownwards: false,
          colorMapName: "Rainbow",
          gridLines: true,
          id: "Grid3DLayer",
          material: false,
          // pickable: true,
          // verticalScale: 50,
          pointsData: [],
          polysData: [],
          propertiesData: [],
        },
        // {
        //   "@@type": "WellsLayer",
        //   ZIncreasingDownwards: false,
        //   data: "@@#resources.wellsData",
        //   id: "volve-wells",
        // },
      ]}
      // resources={{
      //   wellsData: volveWells,
      // }}
      // verticalScale={3}
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
