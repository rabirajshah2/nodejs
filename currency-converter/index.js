const cc = require("currency-converter-lt");

let currencyConverter = new cc({from:"USD", to:"NPR", amount:1})
currencyConverter.convert().then((response) => {
    console.log(response) //or do something else
})
// console.log(currencyConverter);