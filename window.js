
var name = "Luxamberg";

function add(num1, num2){
    var result =  num1+num2;
    console.log('name inside', name);
    // return result;
    function double(num){
        return num*2
    }
    var total = double(6);
    console.log(total);
    
}
console.log('name outside', name);
const sum = add(12, 18);
console.log(sum);