/**
 * Checks if certain fields are missing in the user profile information.
 *
 * @param {Object} info - The user profile information obtained from useSWR.
 * @param {string} info.description - The user's description.
 * @param {string} info.city - The user's city.
 * @param {string} info.state - The user's state.
 * @param {string} info.address - The user's address.
 * @param {string} info.country - The user's country.
 * @param {string} info.pincode - The user's pincode.
 * @param {string} info.usertype - The type of user (e.g., "club").
 * @param {string} info.tagLine - The user's tagline (applicable only if usertype is "club").
 *
 * @returns {boolean} - Returns true if any required field is missing, else returns false.
 */

export function checkMissingFields(info) {
  console.log("🚀 ~ checkMissingFields ~ info:", info);
  if (
    info?.city === undefined ||
    info?.state === undefined ||
    info?.address === undefined ||
    info?.country === undefined ||
    info?.pincode === undefined
  ) {
    console.log("🚀 ~ checkMissingFields ~ info", info);
    return true;
  } else if (
    (info?.usertype === "club" && info?.tagLine === undefined) ||
    (info?.usertype === "club" && info?.description === undefined)
  ) {
    return true;
  } else {
    return false;
  }
}
