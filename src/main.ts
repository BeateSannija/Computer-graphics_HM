//oriģinālā funkcija
// function drawCircleFractal(
//   x: number,
//   y: number,
//   radius: number,
//   depth: number,
// ) {
//   if (depth === 0) {
//     return;
//   }

//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, 2 * Math.PI); // (x, y, rādiuss, sākuma leņķis, beigu leņķis)

//   // ctx.strokeStyle = `hsl(${depth * 40+300}, 70%, 50%)`;
//   ctx.lineWidth = depth * 0.5;

//   ctx.stroke();

//   // const offset = radius * 0.8;
//   const offset = radius/1.4;

//   //pa labi
//   drawCircleFractal(x + offset, y, radius / 2, depth - 1);
//   //apakša
//   drawCircleFractal(x, y + offset, radius / 2, depth - 1);
//   // pa kreisi
//   drawCircleFractal(x - offset, y, radius / 2, depth - 1);
//   // augša
//   drawCircleFractal(x, y - offset, radius / 2, depth - 1);
// }
