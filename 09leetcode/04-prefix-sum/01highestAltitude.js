/**
 * @param {number[]} gain
 * @return {number}
 *
 * There is a biker going on a road trip. The road trip consists of n + 1
 * points at different altitudes. The biker starts his trip on
 * point 0 with altitude equal 0.
 *
 * You are given an integer array gain of length n where gain[i]
 * is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n).
 * Return the highest altitude of a point.
 */
function largestAltitude(gain) {
  let currentAltitude = 0; // starts at zero
  let maxAltitude = 0; // highest altitude point that is reached

  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    maxAltitude = Math.max(currentAltitude, maxAltitude);
  }

  return maxAltitude;
}
