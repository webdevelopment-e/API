function doSomething(){
    console.log(3000);
}




console.log(23000);
setTimeout(doSomething, 10000);
setTimeout(function(){
    console.log('lazy and waiting')
}, 4000);
setTimeout(() => {
    console.log('see you later')
}, 3000);
console.log(200);
setInterval(function() {
    console.log('doing it')
}, 1000)