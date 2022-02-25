import React from "react";
import GoogleMapReact from "google-map-react";

function GoogleMap({ center, zoom }) {
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOGGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <div className='location-marker'>
          <i
            style={{ color: "red", fontSize: "2rem" }}
            class='fas fa-map-marker-alt'
          ></i>
        </div>
      </GoogleMapReact>
    </div>
  );
}

GoogleMap.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 15,
};

export default GoogleMap;
