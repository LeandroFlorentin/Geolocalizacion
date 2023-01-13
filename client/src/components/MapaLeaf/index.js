import React from 'react';
import useSwr from "swr";
import GoogleMapReact from "google-map-react"
import useSupercluster from "use-supercluster"

const MapaLeaf = () => {
    console.log(GoogleMapReact)
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                /*                 bootstrapURLKeys={{ key: "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik" }} */
                defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
                defaultZoom={10}
            >

            </GoogleMapReact>
        </div>
    )
}


export default MapaLeaf;