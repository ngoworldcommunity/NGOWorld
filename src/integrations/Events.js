import { apiConnector } from "./ApiConnector";
import { eventEndpoints } from "./ApiEndpoints";

// get clubs
export const getEvents = async () => {
  const getEventsData = await apiConnector("GET", `${eventEndpoints.all}`);

  if (getEventsData.status !== 200) {
    throw new Error("Could not get Events");
  }

  return getEventsData.data;
};
