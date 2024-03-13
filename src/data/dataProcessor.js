import { wellData } from "./data";

/**
 * Gets the list of well data, sorted by license number and filtered by licensee name
 * @returns Returns list of data
 */
export function list() {
  //TODO: sort by '01.Licence Number'
  //TODO: filter by '03.Licensee Name' where '03.Licensee Name' starts with 'Imperial Oil'

  let filter = "";
  filter = !filter ? "Imperial Oil" : "";
  return wellData
    .filter((item) => {
      return item.LicenseeName.trim().startsWith(filter);
    })
    .sort((a, b) => {
      return (
        Number(a.LicenceNumber.replace(/\D/g, "")) -
        Number(b.LicenceNumber.replace(/\D/g, ""))
      );
    });
}

/**
 * If key does not exist, insert record into data. If key does exist, update item in the data
 * @param {well data} item - item to be inserted/updated
 * @returns returns saved item
 */
export function save(item) {
  //Treat LicenceNumber as key

  // Invlaid Key
  if (!item.LicenceNumber) return null;

  const index = wellData.findIndex((wellItem) => {
    return wellItem.LicenceNumber === item.LicenceNumber;
  });
  if (index >= 0) {
    wellData[index] = { ...item };
  } else {
    wellData.unshift({ ...item });
    console.log(wellData);
  }
  return item;
}

/**
 * Deletes item from data by key
 * @param {string} key - LicenceNumber is the key value
 * @returns if remove successful, return the key of removed item, otherwise return null
 */
export function deleteOne(key) {
  //TODO: remove item from list
  //Treat LicenceNumber as key
  const index = wellData.findIndex((wellItem) => {
    return wellItem.LicenceNumber == key;
  });
  if (index >= 0) {
    wellData.splice(index, 1);
    return index;
  }

  return null;
}
