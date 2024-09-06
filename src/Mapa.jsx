import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const position = [-25.4217555, -49.2727473]
import { Menu } from './components/Menu';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

function Mapa() {
    return(
        <>
        <Menu />
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: '100%', height: '700px'}}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={position}>
                            <Popup>
                            <a target='_blank' href="https://www.google.com/maps?sca_esv=24731a508b288d28&rlz=1C1GCEA_enBR1065BR1065&output=search&q=senai+celso+charuri+curitiba&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmiw5nSZwNlVfEzuxKLWTKEHXt5IY2W8nQL2YIQAPJugdjnyungMiDacVc1U-cdjtDc-41tMD6P0rkTK_d0IegjWrL-lNSX43UP7CG5vnhSzhsWuiMrPxScbJjMWayTSAS_gZSz77sElJSTy8gdTareUVUcuZsJZgLR3ruCCojxzT6tcSHBXgRqThkI3FjiAJRtJoF53A&entry=mc&ved=1t:200715&ictx=111">Senai Google Maps</a>
                            </Popup>
                    </Marker>
            </MapContainer>
        </>
    )
}

export default Mapa
