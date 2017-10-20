const d3 = require('d3');
const data = require('./data.json')

let result;
result = d3.min(data, (d) => {
    return d.age;
})
console.log(result);
result = d3.max(data, (d) => {
    return d.age;
})
console.log(result);
result = d3.mean(data, (d) => {
    return d.age;
})
console.log(result);
result = d3.extent(data, (d) => {
    return d.age;
})
console.log(result);


// color
result = d3.rgb('red');
console.log(result);
result = d3.rgb('rgb(255,0,0)');
console.log(result);
result = d3.rgb('red').darker();
console.log(result);
result = d3.rgb('red').brighter();
console.log(result);
result = d3.hsl('rgb(255,0,0)');
console.log(result);

