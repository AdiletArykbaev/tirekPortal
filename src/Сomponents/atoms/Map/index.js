import React, {useEffect} from "react";
import {load} from "@2gis/mapgl";

const MapWrapper = React.memo(
    () => {
        return (
            <div
                id="map-container"
                style={{width: "100%", height: "100%", borderRadius: 10}}
            >

            </div>
        );
    },
    () => true
);

const Map = ({height}) => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map("map-container", {
                center: [74.51473, 42.8499343],
                zoom: 14,
                key: "7c70a320-711f-4e72-99d6-54bccc526eab",
            });
        });
        return () => map && map.destroy();
    }, []);
    return (
        <div className="map" style={{height: height}}>
            <MapWrapper/>
        </div>
    );
};

export default Map;