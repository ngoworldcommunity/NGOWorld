function getMissingElements(info) {
  const missing = [];

  if (info?.userType === "club") {
    if (!info.name) missing.push("name");
    if (!info.tagLine) missing.push("tagLine");
  } else {
    if (!info.firstName) missing.push("firstName");
    if (!info.lastName) missing.push("lastName");
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
  return info?.userType === "club"
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
        "firstName",
        "lastName",
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
