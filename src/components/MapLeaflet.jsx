import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapLeaflet() {
  return (
    <MapContainer center={[27.7536, 85.3616]} zoom={13} style={{ height: "300px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[27.7536, 85.3616]}>
        <Popup>
          Jhigu Newa Chhe,  An Authentic Newa Restaurant
        </Popup>
      </Marker>
    </MapContainer>
  );
}
export default MapLeaflet