function socksForSale() {
    //write your code here
    const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    socks.sort(function(a, b) {
        return a - b;
    });
    var counter = 0;
    for (var i = 0; i < socks.length - 1; i++) {
        if (socks[i] === socks[i + 1]) {
            counter++;
            i++;
        }
    }
    return counter;
}


module.exports = socksForSale;