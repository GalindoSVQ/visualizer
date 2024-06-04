import SubsurfaceViewer from "@webviz/subsurface-viewer/dist/SubsurfaceViewer";
import { useEffect, useState } from "react";

export function VisualizerPro() {
  const [pointsData, setPointsData] = useState([]);
  const [polysData, setPolysData] = useState([]);
  const [propertiesData, setPropertiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPointData = await fetch("/data/rubiales/grid_points.json");
        const pointData = await resPointData.json();

        const polysData = await fetch("/data/rubiales/grid_polys.json");
        const polys = await polysData.json();

        const resPropertiesData = await fetch(
          "/data/rubiales/grid_scalar.json"
        );
        const propertiesData = await resPropertiesData.json();

        console.log("polys", polys[0]);
        console.log("pointData", pointData[0]);
        console.log("propertiesData", propertiesData[0]);

        setPointsData(pointData);
        setPolysData(polys);
        setPropertiesData(propertiesData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

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
          pointsData,
          polysData,
          propertiesData,
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
            show3D: false,
          },
        ],
      }}
    />
  );
}
