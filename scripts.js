const amount = document.querySelector('.amount');
const from = document.querySelector('.from');
const to = document.querySelector('.to');
const result = document.querySelector('.result');
const swap = document.querySelector('.swap');
const rateText = document.querySelector('.rate');


const rates = {
    USD: { EUR: 0.86, NGN: 1600, POUNDS: 0.65, YUAN: 1400, USD: 1 },
    EUR: { USD: 1.16, NGN: 1850, POUNDS: 0.82, YUAN: 1660, EUR: 1 },
    POUNDS: { EUR: 1.85, USD: 2.45, NGN: 2200, YUAN: 1800, POUNDS: 1 },
    YUAN: { EUR: 0.45, USD: 0.56, POUNDS: 0.12, NGN: 0.70, YUAN: 1 },
    NGN: { EUR: 0.40, USD: 0.50, POUNDS: 0.10, YUAN: 0.60, NGN: 1 },
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


