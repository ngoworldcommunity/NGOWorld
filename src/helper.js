export const sortEventsByPlaces = (data, filterName, filterData, type) => {
  //when there is no filter
  if (filterName.length === 0) {
    return data;
  }

  //when you search based on location eg: lat & lon
  if (filterName === "location") {
    let res = searchEventsByLocation(
      data,
      filterData.data.lat,
      filterData.data.lon,
      type,
    );
    return res;
  }

  //when you search based on places eg: state
  if (filterName === "place") {
    let arr = [];
    try {
      if (
        filterName.length > 0 &&
        filterData.data &&
        filterData.data.length > 0
      ) {
        for (let index = 0; index < data.length; index++) {
          if (
            data[index][type] &&
            JSON.parse(
              data[index][type],
            ).data.properties.state.toLowerCase() ===
              filterData.data.toLowerCase()
          ) {
            arr.push(data[index]);
          }
        }
        return arr;
      } else {
        return data;
      }
    } catch {
      return [];
    }
  }
};

//check which lat and lon value is within the target range
const searchEventsByLocation = (data, curr_lat, curr_lon, type) => {
  let arr = [];
  try {
    for (let index = 0; index < data.length; index++) {
      if (data[index].Eventlocation) {
        let lat = JSON.parse(data[index][type]).data.properties.lat;

        let lon = JSON.parse(data[index][type]).data.properties.lon;

        const thresholdDistance = 100; // Threshold distance in kilometers

        const distance = calculateDistance(curr_lat, curr_lon, lat, lon);

        //check if target location is within threshold distance or not
        if (distance <= thresholdDistance) {
          //target location is within threshold distance
          arr.push(data[index]);
        }
      }
    }
  } catch (error) {
    arr = [];
  }

  return arr;
};

//function to calculate the distance between two lat and lon
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  // Convert latitude and longitude from degrees to radians
  const latRad1 = (lat1 * Math.PI) / 180;
  const lonRad1 = (lon1 * Math.PI) / 180;
  const latRad2 = (lat2 * Math.PI) / 180;
  const lonRad2 = (lon2 * Math.PI) / 180;

  // Calculate the differences between the latitudes and longitudes
  const deltaLat = latRad2 - latRad1;
  const deltaLon = lonRad2 - lonRad1;

  // Use the Haversine formula to calculate the distance
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(deltaLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
};
