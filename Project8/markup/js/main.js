var x = 0;
var y = 0;
do {
    alert('Enter the coordinates of the point');
    x = prompt('Input x: ', '');
    x =parseFloat(x);
    if (isNaN(x)) {
        alert('Error. "x" should be number');
    } else {
        y = prompt('Input y: ', '');
        y = parseFloat(y);
        if (isNaN(y)) {
            alert('Error. "y" should be number');
        }
    }
    console.log(isNaN(x));
} while(isNaN(x) || isNaN(y));
if ( x <= 0 && x >= -2 && y >= -(x+2) || x*x + y*y <=1){
    alert('The point is in the shaded region.');
}else {
    alert('The point is not in the shaded region.');
}

console.log(x, y);
