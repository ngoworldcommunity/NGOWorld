export const filter = (data, filterName, filterData, type) => {
  //when there is no filter
  if (filterName.length === 0) {
    return data;
  }

  //when you search based on location eg: lat & lon
  if (filterName === "location") {
    return searchEventsByLocation(
      data,
      filterData.data.lat,
      filterData.data.lon,
      type,
    );
  }

  //when you search based on places eg: state
  if (filterName === "place") {
    try {
      if (filterData.data) {
        const filteredData = data.filter((event) => {
          if (event[type]) {
            const eventLocation = JSON.parse(event[type]).data.properties;
            return (
              eventLocation.state.toLowerCase() ===
              filterData.data.toLowerCase()
            );
          }
          return false;
        });
        return filteredData;
      } else {
        return data;
      }
    } catch {
      return [];
    }
  }
};

//check which lat and lon value is within the target range
const searchEventsByLocation = (data, currLat, currLon, type) => {
  const thresholdDistance = 100; // Threshold distance in kilometers

  const filteredData = data.filter((event) => {
    if (event.Eventlocation) {
      const eventLocation = JSON.parse(event[type]).data.properties;
      const distance = calculateDistance(
        currLat,
        currLon,
        eventLocation.lat,
        eventLocation.lon,
      );
      return distance <= thresholdDistance;
    }
    return false;
  });

  return filteredData;
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  const toRadians = (angle) => (angle * Math.PI) / 180;

  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(deltaLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
};
