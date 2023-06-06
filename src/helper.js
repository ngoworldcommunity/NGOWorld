export const sortEventsByCity = (data, filterName, type) => {
  // console.log(data);
  // console.log(filterName);
  let arr = [];
  if (filterName.length > 0) {
    for (let index = 0; index < filterName.length; index++) {
      console.log(filterName[index]);
      for (let idx = 0; idx < data.length; idx++) {
        // console.log(data[idx]);
        if (type === "clubs") {
          console.log("clubs: ");
          if (data[idx].address.includes(filterName[index])) {
            // console.log(data[idx]);
            console.log("data inside: ", data[idx]);
            arr.push(data[idx]);
          }
        } else if (type === "events") {
          console.log("events: ");
          if (
            data[idx].Eventlocation.toLowerCase() ===
            filterName[index].toLowerCase()
          ) {
            console.log(data[idx]);
            arr.push(data[idx]);
          }
        }
      }
    }
    data = arr;
  }
  // if (filterName.length > 0) {
  //   if (type === "events") {
  //     console.log(type);
  //     data = data.filter(
  //       (event) =>
  //         event.Eventlocation.toLowerCase() === filterName.toLowerCase(),
  //     );
  //   } else {

  //     console.log(arr);
  //     data = arr;
  //     // data = data.filter((event) => event.address.includes(filterName));
  //   }
  // }

  console.log("data :", data);
  return data;
};
