const radius = (min, max, distance) => Math.abs(max - min) >= distance;
console.log(radius(49, 49.5, 0.3));
