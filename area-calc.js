function calculateRectangleArea(length, width) {
  const rectangleArea = length * width;
  if (rectangleArea <= 0){
    console.log('undefined')
  } else {
    return rectangleArea
  };
};

function calculateTriangleArea(base, height) {
  const triangleArea = base * height / 2;
  if (base <= 0, height <= 0){
    return 
  };
  return triangleArea;
};

function calculateCircleArea(radius){
  const square = Math.pow(radius, 2);
  const circleArea = Math.PI * square;
  if (radius <= 0) {
    console.log('undefined') 
  } else {
    return circleArea
  };
};

console.log(calculateTriangleArea(10, -5));


