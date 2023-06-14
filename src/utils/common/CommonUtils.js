export function manageUndefined(value) {
  if (value === "undefined" || value === undefined || value === null) {
    return "";
  }
  return value;
}
