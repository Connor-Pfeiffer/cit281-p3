/*
    CIT 281 Project 3
    Name: Connor Pfeiffer
*/

//////////////////////////////////////////////////

function validDenomination(coin){
    return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;
}

////////////////////////////////////////////////////

function valueFromCoinObject(obj){
    const {denom = 0 , count = 0} = obj
    return validDenomination(denom) ? denom * count : 0;
}

////////////////////////////////////////////////////

function valueFromArray(arr){
    return arr.map(valueFromCoinObject).reduce((acc, val) => acc + val, 0);
}

//////////////////////////////////////////////////

function coinCount(...coinage){
    let totalValue1 = valueFromArray(coinage);
    if (totalValue1 == 0) {
        let totalValue2 = valueFromArray(coinage[0]);
        return totalValue2;
    }
    return totalValue1;
}

////////////////////////////////////////////////////

module.exports = {
    validDenomination, valueFromCoinObject, valueFromArray, coinCount
};

//////////////////////////////////////////////////////////////
console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));  // Extra credit