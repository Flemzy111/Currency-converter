const amount = document.querySelector('.amount');
const from = document.querySelector('.from');
const to = document.querySelector('.to');
const result = document.querySelector('.result');
const swap = document.querySelector('.swap');
const rateText = document.querySelector('.rate');


const rates = {
    USD: { EUR: 0.88, NGN: 1381.20, POUNDS: 0.76, YUAN: 6.80, USD: 1 },
    EUR: { USD: 1.14, NGN: 1575.30, POUNDS: 0.86, YUAN: 7.75, EUR: 1 },
    POUNDS: { EUR: 1.16, USD: 1.32, NGN: 1.827, YUAN: 8.99, POUNDS: 1 },
    YUAN: { EUR: 0.13, USD: 0.15, POUNDS: 0.11, NGN: 203.28, YUAN: 1 },
    NGN: { EUR: 0.00063, USD: 0.00072, POUNDS: 0.00055, YUAN: 0.0049, NGN: 1 },
};

function currencyConvert() {
    const amt = parseFloat(amount.value);

    const rate = rates[from.value][to.value]; /// check properly  rates.USD.NGN

console.log(amt);

if (!amt  || amt <= 0){
result.innerText = 'Enter a valid amount';
return
}



    const converted = amt * rate;

    rateText.textContent = `1 ${from.value} = ${rate} ${to.value}`;
    result.textContent = `${converted.toFixed(2)} ${to.value}`;


}

amount.addEventListener('input', function (event) {
    currencyConvert();

});
from.addEventListener('change', function (event) {
    currencyConvert();
});
to.addEventListener('change', function (event) {
    currencyConvert();

});

swap.addEventListener('click', () => {
    let temp = from.value;
    from.value = to.value;
    to.value = temp;
    currencyConvert();


});
currencyConvert();
console.log(currencyConvert);


