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

const Map = ({height, width}) => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map("map-container", {
                center: [74.616567, 42.873937],
                zoom: 17,
                key: "7c70a320-711f-4e72-99d6-54bccc526eab",
            });
        });
        return () => map && map.destroy();
    }, []);
    return (
        <div className="map" style={{height: height, width: width}}>
            <MapWrapper/>
        </div>
    );
};

export default Map;