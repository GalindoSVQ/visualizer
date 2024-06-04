import SubsurfaceViewer from "@webviz/subsurface-viewer/dist/SubsurfaceViewer";
import { useEffect, useState } from "react";

export function VisualizerPro() {
  const [pointsData, setPointsData] = useState([]);
  const [polysData, setPolysData] = useState([]);
  const [propertiesData, setPropertiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [volveWells, setVolveWells] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPointData = await fetch("/data/grid_points.json");
        const pointData = await resPointData.json();

        const polysData = await fetch("/data/grid_polys.json");
        const polys = await polysData.json();

        const resPropertiesData = await fetch("/data/grid_scalar.json");
        const propertiesData = await resPropertiesData.json();

        const resVolveWells = await fetch("/data/volve_wells-demo.json");
        const volveWells = await resVolveWells.json();

        console.log("polys", polys[0]);
        console.log("pointData", pointData[0]);
        console.log("propertiesData", propertiesData[0]);

        setPointsData(pointData);
        setPolysData(polys);
        setPropertiesData(propertiesData);
        setVolveWells(volveWells);
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
          material: false,
          // pickable: true,
          // verticalScale: 50,
          pointsData,
          polysData,
          propertiesData,
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
