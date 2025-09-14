export function timeTransformation(timeString: string) {
  // takes a time string (18:44:28 GMT+0530 (India Standard Time)) and transform it to (18:44 IST)
  const timeValues = timeString.split(" ")[0].split(":");

  return `${timeValues[0]}:${timeValues[1]} IST`;
}
