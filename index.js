function driversWithRevenueOver(arrayOfDriverObjects, number) {
  return arrayOfDriverObjects.filter(driver => driver.revenue > number);
}


function driverNamesWithRevenueOver(arrayOfDriverObjects, number) {
  return driversWithRevenueOver(arrayOfDriverObjects, number).map(driver => driver.name);
}


function exactMatch(arrayOfDriverObjects, attributeValueObject) {
  return arrayOfDriverObjects.filter(driver => Object.values(driver).includes(Object.values(attributeValueObject)[0]) && driver[attributeValueObject[0]] === attributeValueObject[attributeValueObject[0]]
)}


function exactMatchToList() {
  
}