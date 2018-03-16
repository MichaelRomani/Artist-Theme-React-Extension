export const keyPress = key => {
  const keyStartPoint = {
    's': 1,
    'd': 2,
    'f': 3,
    'g': 4,
    'h': 5,
    'j': 6,
    'k': 7
  }
  return keyStartPoint[key] ? keyStartPoint[key] : null
}
