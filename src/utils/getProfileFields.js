function getMissingElements(info) {
  const missing = [];

  if (info?.usertype === "club") {
    if (!info.name) missing.push("name");
    if (!info.tagLine) missing.push("tagLine");
  } else {
    if (!info.firstname) missing.push("firstname");
    if (!info.lastname) missing.push("lastname");
  }

  if (!info.description) missing.push("description");
  if (!info.city) missing.push("city");
  if (!info.state) missing.push("state");
  if (!info.address) missing.push("address");
  if (!info.country) missing.push("country");
  if (!info.pincode) missing.push("pincode");

  return missing;
}

function getEditableFields(info) {
  return info?.usertype === "club"
    ? [
        "name",
        "tagLine",
        "description",
        "city",
        "state",
        "address",
        "country",
        "pincode",
      ]
    : [
        "firstname",
        "lastname",
        "description",
        "city",
        "state",
        "address",
        "country",
        "pincode",
      ];
}

export default function getProfileFields(info, isEdit) {
  return isEdit ? getEditableFields(info) : getMissingElements(info);
}
