import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import classes from "./Map.module.scss";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <div className={classes["address-container"]}>
        <p>Malate, Manila</p>
      </div>
      <Gmap />
    </div>
  );
};

export default Map;

function Gmap() {
  // memoize the result. it performs the calculation once every time the dependencies rerender
  // and because we dont have dependecies here [], we will calculate its value once.
  const center = useMemo(
    () => ({ lat: 14.574048807474094, lng: 120.99634712360367 }),
    []
  );

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={classes["map-container"]}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
