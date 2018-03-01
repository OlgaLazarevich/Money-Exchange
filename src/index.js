// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {
        "H": 90,
        "Q": 90,
        "D": 90,
        "N": 90,
        "P": 90
    };

    let money = [50, 25, 10, 5, 1];
    let m = [];

    for (let i = 0, len = money.length, coins = currency; i < 5; i++) {

        if ((currency / money[i]) != 0) {

            m[i] = Math.floor(coins / money[i]);

            coins = coins - (money[i] * m[i]);
        } else {
            m[i] = 0;
            coins = coins;
        }


    }

    obj.H = m[0];
    obj.Q = m[1];
    obj.D = m[2];
    obj.N = m[3];
    obj.P = m[4];

    for (var key in obj) {

        if (obj[key] == 0) { delete obj[key]; }
    }

    if (currency >= 10000) {
        obj = { "error": "You are rich, my friend! We don't have so much coins for exchange" };
    } else if (currency < 0) {
        obj = {};
    }


    return obj;
}