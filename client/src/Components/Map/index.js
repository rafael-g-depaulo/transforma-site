import React from 'react'
import { Map as LeafMap, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
})

L.Marker.prototype.options.icon = DefaultIcon

export const Map = ({
  ...props
}) => {

  const position = [-15.787294, -47.882285]

  return (
    <LeafMap
      // center={mapCenter}
      center={position}
      zoom={13} 
      {...props}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>Nós estamos aqui!</Popup>
      </Marker>
  
    </LeafMap>
  )
}

export default Map