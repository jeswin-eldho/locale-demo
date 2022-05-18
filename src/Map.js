import { useArea } from './context/AreaContext';
import { useUser } from './context/UserContext';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useEffect } from 'react';
var hashMap = {};
const Maps = () => {
  const { areas } = useArea();
  const { users } = useUser();

  useEffect(() => {
    for (var user of users) {
      if (user.area_id in hashMap) {
        if (user.gender === 'F' && user.is_pro_user === true) {
          hashMap[user.area_id].count = hashMap[user.area_id].count + 1;
          hashMap[user.area_id].female = hashMap[user.area_id].female + 1;
          hashMap[user.area_id].pro = hashMap[user.area_id].pro + 1;
        } else if (user.gender === 'F' && user.is_pro_user === false) {
          hashMap[user.area_id].count = hashMap[user.area_id].count + 1;
          hashMap[user.area_id].female = hashMap[user.area_id].female + 1;
        } else if (user.gender === 'M' && user.is_pro_user === true) {
          hashMap[user.area_id].count = hashMap[user.area_id].count + 1;
          hashMap[user.area_id].pro = hashMap[user.area_id].pro + 1;
        } else {
          hashMap[user.area_id].count = hashMap[user.area_id].count + 1;
        }
      } else {
        if (user.gender === 'F' && user.is_pro_user === true) {
          hashMap[user.area_id] = { count: 1, female: 1, pro: 1 };
        } else if (user.gender === 'F' && user.is_pro_user === false)
          hashMap[user.area_id] = { count: 1, female: 1, pro: 0 };
        else if (user.gender === 'M' && user.is_pro_user === true) {
          hashMap[user.area_id] = { count: 1, female: 0, pro: 1 };
        } else {
          hashMap[user.area_id] = { count: 1, female: 0, pro: 0 };
        }
      }
    }
  }, []);

  function getUserColor(i) {
    return i > 500
      ? '#00ff00'
      : i > 400
      ? '#32cd32'
      : i > 300
      ? '#d0f0c0'
      : i > 200
      ? '#e9ffdb'
      : '#ffffff';
  }

  const onEachArea = (area, layer) => {
    var userCount = hashMap[area.properties.area_id].count;
    var femaleCount = hashMap[area.properties.area_id].female;
    var proCount = hashMap[area.properties.area_id].pro;
    var data =
      '<h1>' +
      area.properties.name.toUpperCase() +
      '</h1>' +
      '<p>Number of users in the area: ' +
      userCount +
      '</p>' +
      '<p>Number of female users: ' +
      femaleCount +
      '</p>' +
      '<p>Number of male users: ' +
      (userCount - femaleCount) +
      '</p>' +
      '<p>Number of premium users: ' +
      proCount +
      '</p>';

    layer.options.fillColor = getUserColor(userCount);
    layer.bindTooltip(data);
  };

  return (
    <div>
      {areas && (
        <MapContainer
          style={{ height: '100vh', width: '100vw' }}
          center={[13, 77.6]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <GeoJSON
            data={areas.features}
            onEachFeature={onEachArea}
            style={{ fillOpacity: 0.8, color: 'black' }}
          />
        </MapContainer>
      )}
    </div>
  );
};

export default Maps;
