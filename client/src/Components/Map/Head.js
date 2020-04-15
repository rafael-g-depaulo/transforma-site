import React from 'react'
import { Helmet } from 'react-helmet'

export const LeafletHead = ({
  ...props
}) => {
  return (<>
    <Helmet>
      {/* import leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
      />
    </Helmet>
  </>)
}
 
export default LeafletHead;